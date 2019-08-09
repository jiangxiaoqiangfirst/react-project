var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let multer = require('multer')
let cookieSession = require('cookie-session')
let cors = require('cors');
//服务器搭建
var app = express();

//资源托管
app.use(express.static(path.join(__dirname, 'public', 'template')));
app.use('/admin', express.static(path.join(__dirname, 'public', 'admin')));
app.use(express.static(path.join(__dirname, 'public')));

//中间件配置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//跨域中间件的配置,允许端口http://127.0.0.1:5000，访问
app.use(cors({
  "origin": ["http://127.0.0.1:5500"],
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  'allowedHeaders':['Content-Type','Authorization']
}))

app.use(cookieSession({
  name: 'mochangba_session',
  keys: ['aa', 'bb'],//sha1加密一种轮询方式
  maxAge: 1000 * 60 * 60 * 24 * 15  //登陆时间限制15天
}))

//配置图片保存路径，全局保存图片有风险，不要的图片要删除，可以将这个放到要使用的地方
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (req.url.indexOf('user') !== -1 || req.url.indexOf('reg') !== -1) {
      cb(null, path.join(__dirname, 'public', require('./config/path').user.uploadUrl))
    } else if (req.url.indexOf('banner') !== -1) {
      cb(null, path.join(__dirname, 'public', require('./config/path').banner.uploadUrl))
    } else if (req.url.indexOf('product') !== -1 ||req.url.indexOf('home') !== -1 || req.url.indexOf('follow') !== -1 || req.url.indexOf('column') !== -1) {
      cb(null, path.join(__dirname, 'public', require('./config/path').product.uploadUrl))
    } else {
      cb(null, path.join(__dirname, 'public', require('./config/path').normal))
    }
  }
})
let multerObj = multer({ storage });
// let multerObj = multer({dest:'字符路径'}); //存储方式dest指定死了，storage分目录
app.use(multerObj.any())

app.all('/admin/*', require('./routes/admin/params'))
//响应
//ADMIN
app.use('/admin/banner', require('./routes/admin/banner')); //交给前端渲染
app.use('/admin/:product', require('./routes/admin/product')); //交给前端渲染


//API  拦截，后面跟函数，函数内要使用管道函数next();
//配置全局变量，
app.all('/api/*', require('./routes/api/params'))

//路由路径
app.use('/api/login', require('./routes/api/login'));
app.use('/api/reg', require('./routes/api/reg'));
app.use('/api/user', require('./routes/api/user'));
app.use('/api/logout', require('./routes/api/logout'));
app.use('/api/:product', require('./routes/api/product'));
// app.use('/api/banner', require('./routes/api/banner'));
// 购物车的接口
app.use('/api/shopcar', require('./routes/api/shopcar'));

//PROXY
app.use('/proxy/douban', require('./routes/proxy/douban'))


// catch 404 and forward to error handler
app.use(function (req, res, next) {


  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  //能执行到这里，说明上面的所有接口都没有响应，也就接口没有写对，可以发送接口不对了

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.send({ err: 1, msg: '错误的接口' })
});

module.exports = app;
