let express = require('express')
let router = express.Router()

let mgdb = require('../../utils/mgdb');
let productAll = require('../../config/productAll').join('|');
// console.log(productAll, 999)
let findList = ({ apiname, req, res }) => {

  // console.log('findList',apiname,req.query,req.body)

  let { _page, _limit, q, _sort } = req.query;
  //let qq = q ? {new RegExp('\\'+p+'\\','g')}:{} //传些参数

  let qq = q ? { title: eval('/' + q + '/') } : {}

  // let qq = q ? {[title|_ip]:eval('/'+q+'/')} :{}
  //apiname为输入的内容/home|follow|column
  mgdb({
    url: 'mongodb://127.0.0.1:27017',      //可以不传，可以传
    dbName: 'newsapp',                     //可以不传默认访问newsapp，也可以传，传了，访问传的数据库
    collectionName: apiname
  }, (collection, client) => {
    collection.find(qq, {
      skip: _page * _limit,
      limit: _limit,
      sort: { [_sort]: 1 }
    }).toArray((err, result) => {
      if (!err) {
        res.send({ err: 0, msg: '成功', data: result })
      } else {
        res.send({ err: 1, msg: '集合操作失败' })
      }
      client.close()
    })
  })
}

let findDetail = ({ apiname, req, res, _id }) => {
  // console.log('findDetail',_id)
  mgdb({
    collectionName: apiname
  }, (collection, client, ObjectID) => {
    collection.find({
      _id: ObjectID(_id)
    }, {

      }).toArray((err, result) => {
        // console.log('id',result)
        if (!err) {
          result.length > 0 ?
            res.send({ err: 0, msg: '成功', data: result[0]}) :
            res.send({ err: 1, msg: '查无数据' })

        } else {
          res.send({ err: 1, msg: '集合操作失败' })
        }
        client.close()
      })
  })
}
///home|follow|column/查询
router.get('/', (req, res, next) => {
  // console.log('product',req.rootParams)
  let apiname = req.rootParams;//home|follow|column|banner|bulala
  console.log(productAll)
  let _id = req.query._id;;//asdfadsfaf||undefined
  if (eval('/^(' + productAll + ')$/').test(apiname)) {
    // console.log('productAll',eval('/'+productAll+'/'))
    if (_id) findDetail({ req, res, _id, apiname })
    else findList({ req, res, apiname })
  } else {
    next();
  }
})
//响应id查询
router.get('/:_id', (req, res, next) => {
  // console.log('product',req.rootParams)
  let apiname = req.rootParams;
  let _id = req.params._id;
  if (_id.length != 24) {
    res.send({ err: 1, msg: '_id长度不是12byte' })
    return;
  }
  if (eval('/^(' + productAll + ')$/').test(apiname)) {
    findDetail({ req, res, _id, apiname })
  } else {
    next();
  }
})
module.exports = router;

