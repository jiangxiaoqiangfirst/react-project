// product: home / follow / column
let a = [{

    "title": "获取页面滚动的高度",
    "des": "内容很重要，要记住",
    "time": 323,
    "detail": {
        "auth": "lili",
        "content": `window.onscroll = function () {
            // 兼容性处理
            var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        }`,
        "auth_icon": "/upload/user/xxx.jpg"
    }
},
{

    "title": "设置rem",
    "des": "内容很重要，要记住",
    "time": 1233,
    "detail": {
        "auth": "lili",
        "content": `function setHTML() {
            // 基础值
            var baseVal = 100;
            // 设计稿的宽度
            var pageWidth = 375;
            // 要适配的屏幕的宽度?
            var screenWidth = document.querySelector("html").offsetWidth;
            // 要设置的fontsize
            var fontsize = screenWidth * baseVal / pageWidth;
            // 设置到html标签的中
            document.querySelector("html").style.fontSize = fontsize + "px";
          }`,
        "auth_icon": "/upload/user/xxx.jpg"
    }
},
{

    "title": "常用正则表达式",
    "des": "内容很重要，要记住",
    "time": 1232223,
    "detail": {
        "auth": "lili",
        "content": `//验证邮箱 
        /^\w+@([0-9a-zA-Z]+[.])+[a-z]{2,4}$/ 
         
        //验证手机号 
        /^1[3|5|8|7]\d{9}$/ 
         
        //验证URL 
        /^http:\/\/.+\./
         
        //验证身份证号码 
        /(^\d{15}$)|(^\d{17}([0-9]|X|x)$)/ 
         
        //匹配字母、数字、中文字符 
        /^([A-Za-z0-9]|[\u4e00-\u9fa5])*$/ 
         
        //匹配中文字符
        /[\u4e00-\u9fa5]/ 
         
        //匹配双字节字符(包括汉字) 
        /[^\x00-\xff]/`,
        "auth_icon": "/upload/user/xxx.jpg"
    }
},
{

    "title": "正则获取url中的参数",
    "des": "内容很重要，要记住",
    "time": 1232883,
    "detail": {
        "auth": "lili",
        "content": `// 正则获取地址栏id
        //function getUrl(name) {    与下方定义函数的方式相同
        getUrl: function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return decodeURI(r[2]);
            return null;
        }`,
        "auth_icon": "/upload/user/xxx.jpg"
    }
}]
// user:
let b = {

    "username": "alex",
    "password": "alex123",
    "follow": "100",
    "fans": "200",
    "nikename": "酱香桥",
    "icon": "/upload/968a3b7218ee744931276a64c9b7ea01.png",
    "time": 1551620
}
// super:
let c = {
    "username": "admin",
    "password": "admin123",
    "icon": "/img/avatar-5.jpg"
}
