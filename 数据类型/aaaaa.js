// product: home / follow / column
let a = [{

    "title": "实例+",
    "des": "内容很重要",
    "time": 1564452841107,
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

    "title": "设置rem2",
    "des": "要记住",
    "time": 1564355841107,
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
    "des": "重要",
    "time": 1564455561107,
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
    "des": "内重要，要记住",
    "time": 1564425841007,
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
},{

    "title": "实例+",
    "des": "内容很重要，要记住",
    "time": 1564435840107,
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

    "title": "设置rem2",
    "des": "内容很重要，要记住",
    "time": 1564354841107,
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
    "time": 1564453840107,
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
    "time": 1563455841107,
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
},{

    "title": "实例+",
    "des": "内容很重要，要记住",
    "time": 1564455641107,
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

    "title": "设置rem2",
    "des": "内容很重要，要记住",
    "time": 1563455841107,
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
    "time": 1564455841007,
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
    "time": 1564455841137,
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
},{

    "title": "实例+",
    "des": "内容很重要，要记住",
    "time": 1564355841107,
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

    "title": "设置rem2",
    "des": "内容很重要，要记住",
    "time": 1564455641107,
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
    "time": 1564455831107,
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
    "time": 1564255841107,
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
    "time":1564451841107
}
// super:
let c = {
    "username": "admin",
    "password": "admin123",
    "icon": "/img/avatar-5.jpg"
}

let d=[{

    "title": "圈儿1",
    "des": "是对方",
    "time": 1564451841107,
    "detail": {
        "auth": "jeck",
        "content": `，一天对方改变的方法还是发个半生不熟的过他路径啊`,
        "auth_icon": "/upload/user/xxx.jpg"
    }
},{

    "title": "圈儿2",
    "des": "阿可是对方",
    "time": 1564451341107,
    "detail": {
        "auth": "jeck",
        "content": `离开家很广泛的宣传最新发布法啊是父咖色容忍他路径啊`,
        "auth_icon": "/upload/user/xxx.jpg"
    }
},{

    "title": "圈儿3",
    "des": "阿可阿可是发是对方",
    "time": 1564451341107,
    "detail": {
        "auth": "jeck",
        "content": `拉丝分阿斯顿发啦老师阿萨法阿嘎哥哥色容忍他路径啊`,
        "auth_icon": "/upload/user/xxx.jpg"
    }
},{

    "title": "圈儿4",
    "des": "阿可阿可是发对方",
    "time": 1563351841107,
    "detail": {
        "auth": "jeck",
        "content": `拉丝分阿斯顿发啦老师发舒服阿萨法啊是父咖色容忍他路径啊`,
        "auth_icon": "/upload/user/xxx.jpg"
    }
},{

    "title": "圈儿5",
    "des": "阿可是对即将回归方",
    "time": 1564123841107,
    "detail": {
        "auth": "jeck",
        "content": `拉丝分阿斯顿合法合规能否改变的 v 秩序下忍他路径啊`,
        "auth_icon": "/upload/user/xxx.jpg"
    }
},{

    "title": "圈儿6",
    "des": "哦 i u 一天",
    "time": 1564451231107,
    "detail": {
        "auth": "jeck",
        "content": `司法机关买个放心吧下法啊是父咖色容忍他路径啊`,
        "auth_icon": "/upload/user/xxx.jpg"
    }
},{

    "title": "圈儿7",
    "des": "高考押题软件",
    "time": 1564121841107,
    "detail": {
        "auth": "jeck",
        "content": `库，刚好没发过的你是否能是咖色容忍他路径啊`,
        "auth_icon": "/upload/user/xxx.jpg"
    }
},{

    "title": "圈儿8",
    "des": "有人讨厌",
    "time": 1564434841107,
    "detail": {
        "auth": "jeck",
        "content": `拉丝分发个图你说如果不是人他路径啊`,
        "auth_icon": "/upload/user/xxx.jpg"
    }
},{

    "title": "圈儿9",
    "des": "我去围观",
    "time": 1564451251107,
    "detail": {
        "auth": "jeck",
        "content": `染发与饥饿的太阳花也让他喝的反馈忍他路径啊`,
        "auth_icon": "/upload/user/xxx.jpg"
    }
},{

    "title": "圈儿10",
    "des": "阿可是以 u 有人代购对方",
    "time": 1564451830107,
    "detail": {
        "auth": "jeck",
        "content": `拉担任湖北卫视染色体和人体后他路径啊`,
        "auth_icon": "/upload/user/xxx.jpg"
    }
}]