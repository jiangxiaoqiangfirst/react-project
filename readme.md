nodejs接口
    1.1 接口文档说明在下方

    1.2 配置文件在package.json中
    1.3 使用npm,没有node_modules,
    1.4 下载本地git clone git@github.com:jiangxiaoqiangfirst/nodejs.git
        a. 使用 npm install 或者 npm i 安装
        b. 安装了全局的 本人电脑安装了全局的 nodemon和supervisor和express-generator,其它机器视情况安装
            安装指令：
                npm i nodemon -g
                npm i supervisor -g
                npm i express-generator -g
                -g 等价与 --global
                i  等价与 install
        也可以将 -g 换成 项目依赖 -S
                       开发依赖 -D


mo接口文档
1、通用的接口
1.1 )登陆
调用地址：http://localhost:3000/api/login
请求方式：POST

请求参数：

参数名称	参数类型	参数说明	是否必填	默认值	示例值
username	string	登陆名	是	username ='hehe'	
password	string	登陆密码	是	password = 'hehe123'	
nikename	string	昵称	否	nikename = '高山'	
icon	File	上传图片	否		
返回参数：

参数名称	参数类型	参数说明	示例值
msg	String	msg	登录成功
err	Integer	错误信息	1

返回示例：
{
	"msg":"登录成功",
	"err":1,
	"data":{
		"password":"$2b$10$4l9Hlmi9lKzcZxlGA5sGnudVw5aa8hsmfyvTwUSp7RHAnIuGt0v6C",
		"nikename":"系统给的",
		"icon":"/upload/noimage.png",
		"_id":"5d31f147b4f0a58661a60739",
		"time":1563554119408,
		"follow":0,
		"fans":0
	}
}

异常示例：
{

描述：
登陆的接口，请求数据类型为 content-type为form-data

注意事项：
请方式为post,发送数据为form-data?
可以上传图片，返回的值为登陆的数据?
登陆种下的cookie为用户的_id，其它页面的，可以访问这里的id和数据库配对

1.2 )注册
调用地址：http://localhost:3000/api/reg
请求方式：POST

请求参数：

参数名称	参数类型	参数说明	是否必填	默认值	示例值
password	string	密码	是	password = 'hehe123'	
username	string	用户名	是	username ='hehe'	
nikename	string	昵称	否	nickname='s'	
icon	File	文件	否		
	string		否		
返回参数：

参数名称	参数类型	参数说明	示例值

返回示例：
{
	"msg":"注册成功",
	"err":1,
	"data":{
		"password":"$2b$10$UGadVjNFkjB9Hc92ydYtye71FETjabjL33Qq3vivjaIx/04rQ3Mf2",
		"nikename":"昵称，系统给的，要借用第三库",
		"icon":"/upload/noimage.png",
		"time":1563621669479,
		"_id":"5d32f92554647d9761e19e47",
		"follow":0,
		"username":"alex12",
		"fans":0
	}
}

异常示例：
{

描述：
数据类型content-type,form-data

注意事项：


1.3 )登出
调用地址：http://localhost:3000/api/logout
请求方式：DELETE

请求参数：
返回参数：

返回示例：
{
	"msg":"注销成功",
	"err":0
}

异常示例：
{
	    "err": 1,
	    "msg": "错误的接口"
}

描述：
注销登陆，没有参数

注意事项：


1.4 )查询接口
调用地址：http://localhost:3000/api/:product
请求方式：GET

请求参数：

参数名称	参数类型	参数说明	是否必填	默认值	示例值
_page	int	页码	否	_page = 2	0
_limit	int	条数	否	_limit = 12	10
q	string	搜索内容,只搜索title里面内容	否	q='手机'	
_sort	string	排序	否	_sort = 'title'	time
返回参数：

参数名称	参数类型	参数说明	示例值
msg	String	msg	成功
err	Integer	err	0

返回示例：
{
	"msg":"成功",
	"err":0,
	"data":[
		{
			"des":"内容很重要，要记住",
			"_id":"5d326b5ab543792a540943bc",
			"time":323,
			"detail":{
				"auth":"lili",
				"content":"window.onscroll = function () {
					\n            // 兼容性处理\n            var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;\n        
				}",
				"auth_icon":"/upload/user/xxx.jpg"
			},
			"title":"获取页面滚动的高度"
		}
	]
}

异常示例：
{

描述：
    'home','follow','column','banner'，配置文件为productAll.js,位置在config文件内，可以添加，有默认的数据库?
url='mongodb://127.0.0.1:27017', //要连接的mongodb数据库?
  dbName = 'newsapp',    //要连接的数据库?
  collectionName         //要连接的数据表?
可以在后台修改

注意事项：
_page:0, _limit:10,q:null, _sort:'time' 数据的表的配置参数，配置文件在config文件件内的params

1.5 )添加banner图数据库
调用地址：http://localhost:3000/admin/banner
请求方式：POST

请求参数：

参数名称	参数类型	参数说明	是否必填	默认值	示例值
content	string	内容	否	content='文章写的好，为人善量'	
 title	string	标题	否	title ='有舍才有得'	
sub_title	string	副标题	否	sub_title='舍'	
auth	string	作者	否	auth='老舍'	
icon	File	图片文件	否		/upload/noimage.png
banner	File	图片	否		/upload/noimage.png
返回参数：

参数名称	参数类型	参数说明	示例值

返回示例：
{
	"msg":"成功",
	"err":0,
	"data":{
		"banner":"/upload/noimage.png",
		"id":"5d3325da3f4c12a49616d080",
		"time":1563633114740,
		"detail":{
			"icon":"/upload/noimage.png"
		}
	}
}

异常示例：


描述：
没有传参数，添加默认图片，content-type为form-data

注意事项：


1.6 )删除banner 
调用地址：http://localhost:3000/admin/banner/:id
请求方式：DELETE

请求参数：

参数名称	参数类型	参数说明	是否必填	默认值	示例值
id	string	banner图片id	是	id ='5d3325da3f4c12a49616d080'	
返回参数：

参数名称	参数类型	参数说明	示例值
msg	String	msg	删除成功
err	Integer	err	0

返回示例：
{
	"msg":"删除成功",
	"err":0
}

异常示例：
{
	    "err": 1,
	    "msg": "错误的接口"
}

描述：
id为必传参数,一定要传

注意事项：


1.7 )修改banner
调用地址：http://localhost:3000/admin/banner/:id
请求方式：PUT

请求参数：

参数名称	参数类型	参数说明	是否必填	默认值	示例值
id 		 	string	banner图片id 	是	 id ='5d3325da3f4c12a49616d080' 	
返回参数：

参数名称	参数类型	参数说明	示例值
msg	String	msg	修改成功
err	Integer	err	0

返回示例：
{
	"msg":"修改成功",
	"err":0
}

异常示例：


描述：
传送方式为patch，不是put

注意事项：
传送方式为patch，不是put
