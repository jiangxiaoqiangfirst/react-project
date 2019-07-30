let express = require('express')
let router = express.Router()
let mgdb = require('../../utils/mgdb')
let fs = require('fs');
let pathLib = require('path');
let bcrypt = require('bcrypt');

router.post('/', (req, res, next) => {
  //请求方式为post,由路由来定
  let { username, password, nikename, icon } = req.body;

  // username/password 是必传参数 不传不兜库
  if (!username || !password) {
    res.send({ err: 1, msg: 'username,password为必传参数' });
    return;
  }
  let follow = 0;
  let fans = 0;
  let time = Date.now();//生成注册时间
  password = bcrypt.hashSync(password, 10); //给密码加密🔐
  nikename = nikename || '大师兄'; //借助第三方昵称生成库

  // console.log('reg',req.file);// multer === dest  req.files   multer ===storage req.file
  //引入路径
  let configPath = require('../../config/path')
  // req.files使用时需要格式form-data
  if (req.files) {
    if (!req.file && req.files.length > 0) {
      if (req.files.length == 1) {
        //改名 整合路径 存到 icon
        fs.renameSync(
          req.files[0].path,
          req.files[0].path + pathLib.parse(req.files[0].originalname).ext
        )
        icon = configPath.user.uploadUrl + req.files[0].filename + pathLib.parse(req.files[0].originalname).ext;
      } else if (req.files.length > 1) {
        icon = []
        req.files.forEach((v, i, s) => {
          //改名 整合路径 存到 icon,
          fs.renameSync(
            v.path,
            v.path + pathLib.parse(v.originalname).ext
          )
          icon.push(configPath.user.uploadUrl + v.filename + pathLib.parse(v.originalname).ext)
        })
      }

      // icon = '/upload/user/' + req.files[0].filename + pathLib.parse(req.files[0].originalname).ext;

    } else {
      icon = configPath.normal;
    }
  } else {
    icon = configPath.normal;
  }
  // 兜库校验username/password 
  mgdb({
    collectionName: 'user'      //连接表user
  }, (collection, client) => {      //回调函数，可以在连接后对表进行增删改查操作
    collection.find({
      username
    }, {

      }).toArray((err, result) => {
        if (!err) {
          //代表数据库中已有该用户名数据
          if (result.length > 0) {
            //不通过 返回错误信息
            res.send({ err: 2, msg: '用户名已存在' })
            if (Array.isArray(icon)) {
              icon.forEach((v, i, s) => {
                //删除multer存进来的图片，记事本等文件
                fs.unlinkSync('./public' + v)
              })
            } else if (icon !== configPath.normal) {
              //删除multer存进来的图片，记事本等文件
              fs.unlinkSync('./public' + icon)
            }
            client.close()
          } else {
            //通过   返回用户数据  插入库 返回插入后的数据
            collection.insertOne({
              username, password, nikename, follow, fans, time, icon
            }, (err, result) => {
              if (!err) {
                // req.session[key]=result.insertedId
                console.log(result.ops)
                delete result.ops[0].password;
                res.send({ err: 0, msg: '注册成功', data: result.ops[0] })
              } else {
                res.send({ err: 1, msg: 'user集合操作失败' })
                client.close()
              }
            })
          }
        } else {
          res.send({ err: 1, msg: 'user集合操作失败' })
          client.close()
        }
      })
  })
})
//一个报错的接口，是无效的接口，不能被运用
module.exports = router;