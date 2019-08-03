let express = require('express');
let router = express.Router();
let mgdb = require('../../utils/mgdb');
let pathLib = require('path')
let fs = require('fs');
let configPath = require('../../config/path')
// 引入路径
let productAll = require('../../config/productAllAdmin').join('|');


//添加 
router.post('/', (req, res, next) => {
  //接收地址变量，为home|follow|column
  let adminname = req.rootParams;
  console.log(productAll,'productAll');
  if (eval('/^(' + productAll + ')$/').test(adminname)) {
    let { content, title, des, auth } = req.body;//拆除body数据
    let time = Date.now();//创建服务器上传时间
    console.log(req.body, 'req.body')
    //multer多图片循环，找到
    let auth_icon;

    req.files && req.files.forEach((file, index) => {
      //抓取到对应图片
      if (file.fieldname === 'auth_icon') {
        auth_icon = configPath.product.uploadUrl + file.filename + pathLib.parse(file.originalname).ext;
      }

      // console.log('a',auth_icon,banner)
      fs.renameSync(//本地图片命名
        file.path,
        file.path + pathLib.parse(file.originalname).ext
      )

    })

    //未传图片处理
    if (!auth_icon) auth_icon = configPath.normal;

    // console.log('b',banner,auth_icon)

    mgdb(
      {
        dbName: 'sole',
        collectionName: adminname
      },
      (collection, client) => {
        collection.insertOne(
          { title, des, time, detail: { auth_icon, auth, content } }
          ,
          (err, result) => {
            if (!err && result.result.ok) {
              // res.send({ error: 0, mess: '成功', data:  result.result.ops[0] })
              res.send({ err: 0, msg: '成功', data: { id: result.insertedId, title, des, time, detail: { auth_icon, auth, content } } })

              //发送socket通知 | 广播
              let io = require('../../bin/www')

              //推送
              // io.emit('mess_type',{data:'服务端的推送数据'})
              io.emit('banner_new', { err: 0, msg: '成功', data: { id: result.insertedId, title, des, time, detail: { auth_icon, auth, content } } })

            } else {
              res.send({ err: 1, msg: '添加失败' })
            }
            client.close();
          }
        )
      }
    );
  } else {
    next()
  }
})

//删 
router.delete('/:id', (req, res, next) => {
  //接收地址变量，为home|follow|column
  let adminname = req.rootParams;

  if (eval('/^(' + productAll + ')$/').test(adminname)) {
    let id = req.params.id;
    if (!id) {
      res.send({ err: 1, msg: 'id为必传参数' });
      return;
    }
    //限制id长度
    if (id.length != 24) {
      res.send({ err: 1, msg: 'id长度不是12byte' })
      return;
    }
    // 判断位置

    mgdb({
      collectionName: adminname
    }, (collection, client, ObjectID) => {
      collection.deleteOne({
        _id: ObjectID(id)
      }, ((err, result) => {
        // console.log(result);// 添加条件 > 0
        if (result.result.n > 0) {
          res.send({ err: 0, msg: '删除成功' })
        } else {
          res.send({ err: 1, msg: '删除失败' })
        }
        client.close();//关闭连接
      }))
    })
  } else {
    next();
  }
})

//改
router.patch('/:id', (req, res, next) => {
  //接收地址变量，为home|follow|column
  let adminname = req.rootParams;
  
  if (eval('/^(' + productAll + ')$/').test(adminname)) {
    let id = req.params.id;
    if (!id) {
      res.send({ err: 1, msg: 'id为必传参数' })
      return;
    }

    mgdb({
      collectionName: adminname
    }, (collection, client, ObjectID) => {
      collection.find({
        _id: ObjectID(id)
      }, {
          projection: { _id: 0 }//显示的key 
        }).toArray((err, result) => {
          console.log(result, 9999)
          // result[0] = 库数据
          if (result.length === 0) {
            res.send({ err: 1, msg: '没有对应的id' })
            return;
          }
          //传过来的数据 和 库数据  合并
          let { title, des, auth, content } = req.body;
          title = title || result[0].title;
          des = des || result[0].des;
          auth = auth || result[0].auth;
          content = content || result[0].content;


          //multer多图片循环，找到
          let auth_icon;
          req.files && req.files.forEach((file, index) => {
            //抓取到对应图片
            if (file.fieldname === 'auth_icon') {
              auth_icon = configPath.product.uploadUrl + file.filename + pathLib.parse(file.originalname).ext;
            }

            fs.renameSync(//本地图片命名
              file.path,
              file.path + pathLib.parse(file.originalname).ext
            )
          })

          auth_icon = auth_icon || result[0].detail.auth_icon;
          let time = Date.now();


          mgdb({
            collectionName: adminname
          }, (collection, client, ObjectId) => {
            collection.updateMany({
              _id: ObjectId(id)
            }, {
                $set: {
                  title, des, time, detail: { auth_icon, auth, content }
                }
              }, {
                upsert: false, //插入
                projection: false //全局替换
              }, ((err, result) => {
                // console.log(result.result.n);//成功条件 > 0
                // console.log(result.modifiedCount);// 修改的条数

                if (result.result.n > 0) {
                  res.send({ err: 0, msg: '修改成功' })// + 返回改后的数据
                } else {
                  res.send({ err: 1, msg: '修改失败' })
                }
                client.close();//关闭连接
              }))
          })

        })
    })
  } else {
    next();
  }
})

module.exports = router;