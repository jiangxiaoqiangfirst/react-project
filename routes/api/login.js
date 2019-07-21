let express = require('express')
let router = express.Router()
let mgdb = require('../../utils/mgdb')
let bcrypt = require('bcrypt');

router.post('/', (req, res, next) => {
  // console.log('login',req.body._page)
  let { username, password } = req.body;
  // username/password 是必传参数 不传不兜库

  if (!username || !password) {
    res.send({ err: 1, msg: '用户名username和密码password未必传参数' })
    return;
  }

  // 兜库校验username/password 
  mgdb({
    collectionName: 'user'
  }, (collection, client) => {
    collection.find({
      username
    }, {
        projection: { username: 0 } //不发送username
      }).toArray((err, result) => {
        // console.log(result)
        if (!err) {
          if (result.length > 0) {

            let userdata = result[0];
            let pass = bcrypt.compareSync(password, userdata.password);//解密和验证密码

            if (pass) {
              //通过  种cookie 留session 返回用户数据
              //这里种下用户的id,方便验证提取id,用id访问mongodb 用户数据
              //session会去读前端cookie里面的数据，然后与后台的session进行匹配
              req.session['newsapp_user_session'] = userdata._id
              res.send({ err: 1, msg: '登录成功', data: userdata })
            } else {
              res.send({ err: 1, msg: '用户名或者密码有误' })
            }
          } else {
            res.send({ err: 2, msg: '用户名不存在' })
          }
          client.close()
        } else {
          res.send({ err: 1, msg: 'user集合操作失败' })
          client.close()
        }
      })
  })




})

module.exports = router;