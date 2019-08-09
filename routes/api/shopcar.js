//没有使用的模块
let express = require('express')
let router = express.Router()

let mgdb = require('../../utils/mgdb')

router.post('/', (req, res, next) => {
    // console.log('shopcar', req.body)
    // console.log(req.body, 999999999999)
    let { _id, num, detail } = req.body;

    mgdb({
        url: 'mongodb://127.0.0.1:27017',
        dbName: 'user',
        collectionName: 'shopcar'
    }, (collection, client, ObjectID) => {
        collection.find({
            _id
        }, {}).toArray((err, result) => {
            //   console.log('err',err)
            if (!err) {
                if (result.length > 0) {
                    // somedata = result[0];
                    // ----------------------------------------------
                    collection.updateOne({
                        _id
                    }, {
                            $set: {
                                num
                            }
                        }, {
                            upsert: false, //插入
                            projection: false //全局替换
                        }, ((err, result) => {
                            // console.log(result.result.n);//成功条件 > 0
                            // console.log(result.modifiedCount);// 修改的条数

                            if (result.result.n > 0) {
                                // console.log(detail,999999)
                                res.send({ err: 0, msg: '修改成功', data: { _id, num, detail: detail } })// + 返回改后的数据
                            } else {
                                res.send({ err: 1, msg: '修改失败' })
                            }
                            client.close();//关闭连接
                        }))
                    // ----------------------------------------------
                } else {
                    collection.insertOne(
                        { _id, num ,detail}
                        ,
                        (err1, result1) => {
                            if (!err1) {
                                // res.send({ error: 0, mess: '成功', data:  result.result.ops[0] })
                                console.log(result1,'result')
                                // res.send({ err: 0, msg: '成功', detail:detail })

                            } else {
                                res.send({ err: 1, msg: '添加失败' })
                            }
                            client.close();
                        }
                    )
                    res.send({ err: 0, msg: '新添加数据' })
                    client.close();
                }
            } else {
                res.send({ err: 1, msg: '服务器发生错误' })
                client.close();
            }
        })
    })

})

router.get('/', (req, res, next) => {
    // console.log('banner')
    mgdb({
        url: 'mongodb://127.0.0.1:27017',
        dbName: 'user',
        collectionName: 'shopcar'
    }, (collection) => {
        collection.find({

        }, {
                // limit: req.query._limit,
                // skip:req.query._page * req.query._limit,
                // sort: { [req.query._sort]: -1 }
            }).toArray((err, result) => {
                // console.log('err',err)
                if (!err) {
                    res.send({ err: 0, msg: '成功', data: result })
                }
            })
    })
})
module.exports = router;