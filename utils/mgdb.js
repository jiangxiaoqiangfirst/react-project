let mongodb = require('mongodb');
let mongoCt = mongodb.MongoClient;//创建客户端	
let ObjectID = mongodb.ObjectID; //mongodb数据库配置的id对象

//箭头函数参数写的有点长，可以行
module.exports = ({
  url='mongodb://127.0.0.1:27017', //要连接的mongodb数据库
  dbName = 'sole',    //要连接的数据库
  collectionName         //要连接的数据表
},callback) => {    //回调函数的简写
  //创建链接
  mongoCt.connect(url,{ useNewUrlParser: true },(err,client)=>{
    if(!err){
      //链库
      let db = client.db(dbName);
      //链接表
      let collection = db.collection(collectionName);
      //查询
      callback(collection,client,ObjectID)
    }else{
      console.log('链接mongodb服务端失败')
    }

  })
}


// url dbName collectionName 
/* module.exports = (opts,callback) => {
  opts = opts || {};
  opts.url = opts.url || 'mongodb://127.0.0.1:27017';
  opts.dbName = opts.dbName || '1905';
  opts.collectionName = opts.collectionName || 'user';

  //创建链接	
  mongoCt.connect(opts.url,{ useNewUrlParser: true },(err,client)=>{

    if(!err){
      //链库
      let db = client.db(opts.dbName);

      //链接表
      let collection = db.collection(opts.collectionName);

      //查询
      callback(collection,client)

    }else{
      console.log('链接mongodb服务端失败')
    }

  })
} */

