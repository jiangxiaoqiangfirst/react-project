(window["webpackJsonpgoods-react"]=window["webpackJsonpgoods-react"]||[]).push([[0],{103:function(e,t,a){},173:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"filedate",function(){return J});var c=a(0),r=a.n(c),o=a(84),l=a.n(o),i=a(1),s=a(2),u=a(4),m=a(3),b=a(5),p=a(20),d=(a(97),a(8)),h=(a(98),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Header"},r.a.createElement(d.c,{to:"/home"},"\u9996\u9875"),r.a.createElement(d.c,{to:"/goods"},"\u5546\u54c1"),r.a.createElement(d.c,{to:"/user"},"\u7528\u6237"),r.a.createElement(d.c,{to:"/business"},"\u5546\u5bb6"),r.a.createElement(d.c,{to:"/detail/:id"},"\u5546\u54c1\u8be6\u60c5"),r.a.createElement(d.c,{to:"/reviews"},"\u641c\u7d22"))}}]),t}(c.Component)),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={tabs:[{title:"First Tab",key:"t1"},{title:"Second Tab",key:"t2"},{title:"Third Tab",key:"t3"}]},a.state={selectedTab:"redTab",hidden:!1,fullScreen:!1},a}return Object(b.a)(t,e),Object(s.a)(t,[{key:"renderContent",value:function(e){var t=this;return r.a.createElement("div",{style:{backgroundColor:"white",height:"100%",textAlign:"center"}},r.a.createElement("div",{style:{paddingTop:60}},"Clicked \u201c",e,"\u201d tab\uff0c show \u201c",e,"\u201d information"),r.a.createElement("a",{style:{display:"block",marginTop:40,marginBottom:20,color:"#108ee9"},onClick:function(e){e.preventDefault(),t.setState({hidden:!t.state.hidden})}},"Click to show/hide tab-bar"),r.a.createElement("a",{style:{display:"block",marginBottom:600,color:"#108ee9"},onClick:function(e){e.preventDefault(),t.setState({fullScreen:!t.state.fullScreen})}},"Click to switch fullscreen"))}},{key:"render",value:function(){return r.a.createElement("div",{style:this.state.fullScreen?{position:"fixed",height:"100%",width:"100%",top:0}:{}})}}]),t}(c.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Shopcar"},r.a.createElement("div",null,"Shopcar\u7ec4\u4ef6"))}}]),t}(c.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Notice"},r.a.createElement("div",null,"notice\u7ec4\u4ef6"))}}]),t}(c.Component),O=(a(103),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"rect1"}),r.a.createElement("div",{className:"rect2"}),r.a.createElement("div",{className:"rect3"}),r.a.createElement("div",{className:"rect4"}),r.a.createElement("div",{className:"rect5"}))}}]),t}(r.a.Component)),j=(a(104),a(87)),y=a.n(j),g=(a(147),a(58)),N=a.n(g),k=(c.Component,a(150),a(88)),w=a.n(k),C=(a(152),a(89)),S=a.n(C),H=a(30),D=a.n(H),I=a(29),L=a.n(I);D.a.interceptors.request.use(function(e){return L.a.publish("VIEW_LOADING",!0),e},function(e){return Promise.reject(e)}),D.a.interceptors.response.use(function(e){return L.a.publish("VIEW_LOADING",!1),e},function(e){return Promise.reject(e)}),r.a.Component.axios=D.a,window.axios=D.a;var T=D.a,W=(a(173),a(90)),x=a.n(W),A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={cell:[]},T({url:"/api/gift"}).then(function(e){return a.setState({cell:e.data.data})}),a}return Object(b.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.cell;console.log(this.props),console.log(e,"cell");var t=this.props.dataName;return r.a.createElement("div",{className:"Cell"},r.a.createElement("div",{className:"am-card"},r.a.createElement("div",{className:"am-card-body"},e&&e.map(function(e){return r.a.createElement(d.b,{key:e._id,className:"am-card-item",to:{pathname:"/detail/".concat(e._id),search:x.a.stringify({dataName:t})}},r.a.createElement("div",{className:"am-card-minfo"},r.a.createElement("div",{className:"am-card-thumb"},r.a.createElement("img",{src:e.src})),r.a.createElement("div",{className:"am-card-content"},r.a.createElement("div",{className:"am-card-title"},e.price),r.a.createElement("div",{className:"am-card-subtitle"},e.title)),r.a.createElement("div",{className:"am-list-arrow","aria-hidden":"true"},r.a.createElement("span",{className:"am-icon arrow horizontal"}))),r.a.createElement("div",{className:"am-card-footnote"},r.a.createElement("img",{src:e.src}),e.produce))}))))}}]),t}(r.a.Component);A.defaultProps={};var _=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={banner:["1","2","3"],imgHeight:176},t.axios({url:"/api/banner"}).then(function(e){a.setState({banner:e.data.data})}),a}return Object(b.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Home"},r.a.createElement(w.a,null,r.a.createElement(S.a,{infinite:!0,autoplay:!0},this.state.banner.map(function(a){return r.a.createElement("a",{key:a,href:"http://www.mochangba.top:3000",style:{display:"inline-block",width:"100%",height:e.state.imgHeight,position:"relative "}},r.a.createElement("img",{src:t.url+a.banner,alt:"",style:{width:"100%",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}),r.a.createElement("p",{className:"title",style:{position:"absolute",bottom:"20px",color:"#fff"}},a.title),r.a.createElement("p",{className:"title_2",style:{position:"absolute",bottom:"0"}},a.sub_title))}))),r.a.createElement(A,Object.assign({},this.props,{dataName:"gift"})))}}]),t}(c.Component),P=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,"Goods\u7ec4\u4ef6"))}}]),t}(c.Component),F=(a(185),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Detail"},r.a.createElement("div",{className:"am-article"},r.a.createElement("h2",null,"\u6807\u9898\u6587\u5b57\u53ef\u6298\u884c\u4f46\u4e0d\u8d85\u8fc7\u4e24\u884c\u4e0d\u8d85\u8fc7\u4e24\u884c"),r.a.createElement("time",null,r.a.createElement("span",{className:"am-ft-black"},"\u6bd2\u820c\u7535\u5f71")," 01-13"),r.a.createElement("p",null,r.a.createElement("img",{src:"http://localhost:3000/upload/banner/c533e969dc8bac673ddbe8996a5f2546.png",width:"100%"})),r.a.createElement("p",null,"\u8be5\u7247\u660e\u663e\u5c06\u6218\u4e89\u7684\u6b63\u4e49\u4e0e\u975e\u6b63\u4e49\u4e4b\u5206\u6a21\u7cca\u5316\u4e86\u3002\u4f5c\u4e3a\u4ee5\u7b2c\u4e8c\u6b21\u4e16\u754c\u5927\u6218\u51b2\u7ef3\u5c9b\u4e4b\u6218\u4e3a\u80cc\u666f\u7684\u7535\u5f71\uff0c\u5982\u679c\u907f\u800c\u4e0d\u8c08\u5f53\u65f6\u7684\u56fd\u9645\u5f62\u52bf\u3001\u6218\u4e89\u8d77\u56e0\uff0c\u4ec5\u8ba8\u8bba\u4eba\u6027\u3001\u4fe1\u4ef0\u3001\u6076\u9b54\u7b49\u6cdb\u5316\u5143\u7d20\uff0c\u4ec5\u4ee5\u4e00\u4e2a\u5927\u5175\u7684\u4e2a\u4eba\u4fe1\u4ef0\u548c\u597d\u6076\u5224\u65ad\u6218\u4e89\u96be\u514d\u6709\u4e3a\u4e86\u53cd\u6218\u800c\u4e0d\u987e\u4e00\u5207\u5730\u60f3\u63a9\u9970\u4ec0\u4e48\u4e4b\u5acc\u3002"),r.a.createElement("p",null,"\u6700\u8fd130\u591a\u5e74\u6765\uff0c\u7f8e\u519b\u51e0\u4e4e4-5\u5e74\u5c31\u8981\u6253\u4e00\u573a\u5c40\u90e8\u6218\u4e89\uff0c\u4e3a\u4e86\u5e08\u51fa\u6709\u540d\uff0c\u4ed6\u4eec\u6253\u51fa\u7684\u65d7\u53f7\u5f80\u5f80\u662f\u63a8\u7ffb\u72ec\u88c1\u7edf\u6cbb\u3001\u89e3\u653e\u53d7\u82e6\u96be\u4eba\u6c11\u7b49\uff0c\u4ed6\u4eec\u4e0d\u662f\u603b\u628a\u6740\u622e\u522b\u56fd\u4eba\u6c11\u3001\u727a\u7272\u7f8e\u519b\u58eb\u5175\u7684\u6218\u4e89\uff0c\u6807\u699c\u4e3a\u6b63\u4e49\u6218\u4e89\u5417\uff1f"),r.a.createElement("h4",null,"1.2\u8282\u6807\u9898"),r.a.createElement("p",null,"\u652f\u4ed8\u5b9d\u65b9\u9762\u4ecb\u7ecd\uff0c\u201c\u5168\u7403\u672a\u6765\u673a\u573a\u8ba1\u5212\u201d\u662f\u6307\u672a\u6765\u6e38\u5ba2\u5728\u6d77\u5916\u673a\u573a\uff0c\u9664\u4e86\u53ef\u7528\u652f\u4ed8\u5b9d\u6d88\u8d39\u4e4b\u5916\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7\u652f\u4ed8\u5b9d\u4f7f\u7528\u822a\u73ed\u63d0\u9192\u3001\u5ba4\u5185\u5bfc\u822a\u3001\u4e00\u952e\u53eb\u7535\u74f6\u8f66\u7b49\u670d\u52a1\u3002\u652f\u4ed8\u5b9d\u8868\u793a\uff0c\u5e0c\u671b\u672a\u6765\u53ef\u4ee5\u8986\u76d630\u5bb6\u63a5\u5f85\u4e2d\u56fd\u51fa\u5883\u6e38\u5ba2\u6700\u591a\u7684\u6d77\u5916\u673a\u573a\u3002"),r.a.createElement("blockquote",null,"\u672c\u5185\u5bb9\u7531\u201c\u7b2c\u4e00\u8d22\u7ecf\u201d\u6388\u6743\uff0c\u5982\u679c\u6709\u4efb\u4f55\u7591\u95ee\u8bf7\u4e0e\u201c\u7b2c\u4e00\u8d22\u7ecf\u201d\u8054\u7cfb\u3002"),r.a.createElement("div",{className:"am-article-tags"},r.a.createElement("span",{className:"am-tag-item"},"\u7535\u5f71"),r.a.createElement("span",{className:"am-tag-item"},"\u6218\u4e89"),r.a.createElement("span",{className:"am-tag-item"},"\u4e8c\u6218"))))}}]),t}(c.Component)),G=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,"Business\u9875\u9762"))}}]),t}(c.Component),M=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,"Reviews\u9875\u9762"))}}]),t}(c.Component),B=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,"User\u7ec4\u4ef6\u9875\u9762"))}}]),t}(c.Component),V=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Errorpage"},r.a.createElement("div",null,"\u9519\u8bef\u9875\u9762404"))}}]),t}(c.Component),R=a(91),q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={hasAuth:!1,data:{}},a}return Object(b.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.components,Object(R.a)(e,["components"]));return r.a.createElement(p.b,Object.assign({},t,{render:function(e){return r.a.createElement(p.a,Object.assign({},e,{to:"/user"}))}}))}}]),t}(c.Component),z=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={bHead:!1,bFoot:!1,bShopcar:!1,bNotice:!1,bLoading:!1,bNavHead:!1},e.checkPath=function(t){/^(\/goods|\/detail)/.test(t)&&e.setState({bHead:!0,bFoot:!0,bShopcar:!1,bNotice:!1}),/^(\/home)/.test(t)&&e.setState({bHead:!0,bFoot:!1,bShopcar:!1,bNotice:!1}),/^(\/user|\/business)/.test(t)&&e.setState({bHead:!1,bFoot:!0,bShopcar:!1,bNotice:!1})},e.token=L.a.subscribe("VIEW_LODING",function(t,a){console.log("VIEW_LOADING",t,a),e.setState({bLoding:a})}),e}return Object(b.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.location.pathname;console.log("app componentWillReceiverops path:",t),this.checkPath(t)}},{key:"componentWillMount",value:function(){console.log("componentWillMount App")}},{key:"componentDidMount",value:function(){var e=this.props.location.pathname;console.log("app componentDidMount path:",e),this.checkPath(e)}},{key:"render",value:function(){var e=this.state,t=e.bHead,a=e.bFoot,n=e.bNotice,c=e.bShopcar,o=e.bLoading;e.bNavHead;return r.a.createElement("div",{className:"App"},t&&r.a.createElement(h,null),o&&r.a.createElement(O,null),r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/home",component:_}),r.a.createElement(p.b,{path:"/goods",component:P}),r.a.createElement(q,{path:"/user",component:B}),r.a.createElement(p.b,{path:"/business",component:G}),r.a.createElement(p.b,{path:"/detail/:id",component:F}),r.a.createElement(p.b,{path:"/reviews",component:M}),r.a.createElement(p.a,{exact:!0,from:"/",to:"/goods"}),r.a.createElement(p.b,{component:V})),n?r.a.createElement(v,null):null,c&&r.a.createElement(E,null),a&&r.a.createElement(f,null))}},{key:"componentWillUnmount",value:function(){L.a.unsubscribe(this.token)}}]),t}(c.Component),J=(a(186),function(e){var t=new Date;return t.setTime(e),t.toLocaleString()});Object.keys(n).forEach(function(e){return r.a.Component[e]=n[e]}),r.a.Component.url="http://www.mochangba.top:80",l.a.render(r.a.createElement(d.a,null,r.a.createElement(p.b,{component:z})),document.getElementById("root"))},92:function(e,t,a){e.exports=a(187)},97:function(e,t,a){},98:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.11296fe4.chunk.js.map