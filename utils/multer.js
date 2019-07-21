let express = require('express')
let app = express();
let fs = require('fs')
let path = require('path')
app.listen(3000)
app.use(express.static('./public'))

let multer = require('multer');//中间件是一个类
let objMulter = multer({ dest: './public/upload' });//实例化 dest 存储的目标位置  对象
app.use(objMulter.any());//安装中间件 ， 配置 any 任意类型文件  

app.post('/reg',(req,res,next)=>{
  
  console.log('files',req.files)
  let filename = req.files[0].filename
  let originalname = req.files[0].originalname;
  // let oldfile = './public/upload/'+filename;
  let oldfile = req.files[0].path;
  let newfile = req.files[0].path+path.parse(originalname).ext
  fs.rename(oldfile,newfile,(err)=>{
    console.log(err)
    if(!err){
       //存库
      let url = "http://localhost:3000/upload/"+filename+path.parse(originalname).ext
      //返回
      res.send({err:0,msg:'注册成功',data:{username:'hehe',icon:url}})
    }
  })
})