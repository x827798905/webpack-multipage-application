webpackJsonp([0],{"1pjc":function(n,e,t){n.exports=t.p+"images/user_icon-c452d.png"},"4n9V":function(n,e,t){n.exports=t.p+"images/main_bg_06-5e316.png"},"6p+E":function(n,e,t){n.exports=t.p+"images/main_bg_05-dc14b.png"},CaOM:function(n,e,t){"use strict";(function(n){var i=t("PJh5"),a=t.n(i);e.a={reg:{phoneReg:/^1[0-9]{10}$/,numberReg:/^\d+$/,pwdReg:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,15}$/,chineseNameReg:/^[\u4e00-\u9fa5]{2,}$/,tradeReg:/^\d{6}$/,idCardReg:/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/},mskPhone:function(n){return n.slice(0,3)+"****"+n.slice(-4)},getUrlParams:function(){if(location.search){var n=location.href.split("?")[1],e={};return(n=n.split("&")).forEach(function(n,t){var i=n.split("=");e[i[0]]=i[1]}),e}return!1},getUrlParam:function(n,e){if("string"!=typeof n)return!1;var t=location.href;if(t.indexOf("?")<0)return!1;if(t.indexOf(n)<0)return!1;var i=t.indexOf(n)-0+n.length+1;if(i<0)return!1;var a=t.slice(i).split("&")[0];return 1==e&&(a=decodeURIComponent(a)),a},milliFormat:function(n){if(/[^0-9\.]/.test(n))return"invalid value";-1!=(n+"").indexOf(".")==0&&(n+=".00"),n=(n=((n=n.replace(/^(\d*)$/,"$1."))+"00").replace(/(\d*\.\d\d)\d*/,"$1")).replace(".",",");for(var e=/(\d)(\d{3},)/;e.test(n);)n=n.replace(e,"$1,$2");return(n=n.replace(/,(\d\d)$/,".$1")).replace(/^\./,"0.")},search:function(n,e){var t=new RegExp("(^|&)"+n+"=([^&]*)(&|$)"),i=window.location.search.substr(1).match(t);return null!=i?decodeURI(i[2]):null},checkIdCardNo:function(n){return 15==n.length||18==n.length},checkBtnChange:function(e){e=e||"button";var t=!0;n("input").each(function(e,i){if(""==n(this).val())return t=!1,!1;e==n("input").length-1&&(t=!0)}),t?n(e).css({color:"#ffffff",backgroundColor:"#F43B45"}).attr("disabled",!1):n(e).css({color:"#828282",backgroundColor:"#ededed"}).attr("disabled","disabled")},TimeDown:function(n,e){const t=this;var i=a()().valueOf(),s=parseInt((e-i)/1e3);if(0!=s)if(s<0)n.html("已结束");else{var o=s%3600,r=Math.floor(s/3600)+"";r.length<2&&(r="0"+r),o%=3600;var c=Math.floor(o/60)+"";c.length<2&&(c="0"+c);var l=o%60+"";l.length<2&&(l="0"+l);var d=Math.floor(parseInt(e-i)%1e3/100);n.html(r+":"+c+":"+l+"."+d),setTimeout(function(){t.TimeDown(n,e)},100)}else n.html("00:00:00后结束")},isIOS:function(){return!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)},isAndroid:function(){var n=navigator.userAgent;return n.indexOf("Android")>-1||n.indexOf("Adr")>-1}}}).call(e,t("7t+N"))},NDJ3:function(n,e,t){"use strict";(function(n){e.a=new function(e,t){this.host=e,this.code202=t,this.PostApi=function(t,i,a,s){if(i instanceof String)try{i=JSON.parse(i)}catch(n){}n.ajax({url:e+t,type:"POST",dataType:"json",beforeSend:function(n){n.setRequestHeader("Content-Type","application/json; charset=UTF-8")},data:JSON.stringify(i),success:function(n,e,t){n.success?a(n,e,t):s&&s(n)},error:function(n,e,t){}})},this.Get=function(e,t){n.get(e,t)}}(location.origin+"/v1",{1:function(n){layer.msg(n.Message)}})}).call(e,t("7t+N"))},XlbR:function(n,e){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAqFBMVEUAAADFxcXIyMjIyMjIyMjIyMjIyMjFxcXIyMjIyMjAwMDIyMjHx8fIyMjIyMjJycnIyMjIyMjJycnJycnIyMjIyMjJycnIyMjIyMjIyMjIyMjJycnJycnIyMjIyMjMzMzKysrIyMjIyMjJycnHx8fJycnIyMjIyMjIyMjIyMjIyMj////y8vL7+/vMzMzX19f19fXm5ubT09Pr6+vh4eHe3t7a2trPz8+oG848AAAAKnRSTlMAA83z794jFW0yB4YQ/MVR9nJDC56Bp4zjt7Hrkda9HRmb23ZnXT54O08dhW3mAAAGbUlEQVR42tTa2ZaaQBAG4GIXBRXcdczobEl+wX30/d8s60mrTBDH6qb5buWCX6q6inMgOQK/FQ264+bUmdgWYNkTZ9ocdwdRyw+oGrw46po2cthmN4o90pjh1/pDFDTs13yDNOTWRhZuZI1qLunEiB+e8ElPD7EmD8Z4m09wl8n8rfwss54DBk5vRiUyvo9DMAnH3w0qR6fmgJVT65B6s4YNdnZDdYV5gzakaA88UidoWJDGagSkRj2yIZUd1UmBlgPpnBbJ5o6gxMglmYznNhRpPxskjW9CIdMnOeq9EEqFPSlN75pQznSJ3auFEliv3GU1R0nmrOX1aKI05iOxiSco0SQmJi8hShW+EIsGStfgaPM+NNC/u+U7X6CFLx26S2BCE82A7uBpkwMwvTtyTKGRqVf9uvrDDD7Z501opvmpjq9rcl6d+lKn22kxPy71KznPWWb8CzT1QjeJQ2gqjOkGjxNoa/JIhdU1GyDnzDoVNYfW5lTQKzT3SoW4FjRnuVSAod1mktU06LoeKqBHV/naTpBToU9XGFqfvIJpUL6vqIivlMttoyLaLuUZoTJGlKOFCmnl7FgOKsSp0/88o1Ke6T8CG5ViBdV6u735vdfTflm8ZHn0kQEqZ0AfmFVmFgrtWVW33gJd0qnYkfWH3aFLNciw2m+SJFks1kmy2xyOYFejC4YDbst9sriQbrbg5Riyt6zjbvGh9TtYteSuvUsRIyPZgtGIzrghOB3SRZ4NGLkSz97N4ordEmx6dMoBo93iqjVfEodOfAMXkSNfAjbfSHgAn/35DW8OKwDb1X6XSuqTB/rHGILN6mxsHHHicDZXtmAyFKPkDWyW6cnTyDTCIZVRXG+slZU9sN6RdVyL3w9gImrrCVyWqchx7YIETJ7oLxdsNjnNnOmhI5i4/Itv+q/PM/2RPZ33YCFW4DG4vGcKK+vIX1tj+s2wwCX590CKXcTEMugXH2zSIlUjJuYSTHzmFtkW6mPR7iswqfF+PSP+6zXy8Afp0y9DMBGH7w4ZUoMM6ScPbJKcFpEaBB4RxWCT5Nyh3CAxEUVgk5YWJCKiLtgUWz62EoJ0icgEFxEEecQcARuTiGwothaTnY1NFEAxMQ934BOQD8WSzGLJwacW1DosMps+hxZFUOqYSqksRDSASss16wuiMKAulMjm2IFTl8ZQQuQQHcJpTE3IJ3IIB7Bq0hQKZHO8g9eUHCiylZkDjrINZZvKzIEJWZBPfg7YBAXOc6Qr8LMI8l3k2EKGH+3dj26aUBgF8A/5HxCkYkWGa2MTa4/aqmu793+z1XUGaJZl3Xpu4Wt/b3ADV4Qv9xwBXfv3ancAhcCAXWt4SGGLDbpvrdkPhyMO2B6b/69YvkgBrvZoh8aVOcj2xP1Rm0sCptYFOYAnkRJM7WEcUSk5mNrDOKJcpqA6NCaGTFPJQLVvjKeYMklBtal/eqlSCUG1q7c6VSgxiFojBKqY+xHb2EKceqxAYuRp+DxWyMG0PgFVLiIZeIwtJKuHoSSbE1CdiYgPBXx5UqD3iu4GoLzOuRwF6L1AjkL0XihHVu9Ou71kW/JTiZ4rRfib5GGzW283D2AK5JkHmtsN/wtK4wjJAiw7E9+CFnJSgWTfOp7AUsnJEiTbdQNYls1jFxSHddMdOApL2PfWnZGFVFJbgcDUQlbS4ILhdt30HRSuZeDo9GZd24JjIk0eCNq7/REcnpFklwf6Y2RmKNrlbvt8Xz2CJCUfA68d7vf3B5C0t3qf3xMDvVEJ/Yt3OYo0x4moCXjRE7nTv10Sye/FPbskdqw9KExPdJuaMD098YZ6AifVRIDqCWVVE5Pbkwi3yUeKklYT7q0nbr3zAfj5x6skUFMSoae2Q0+RSmffe6OPWzakp/5JTSGXnoo0PaV1emoEu7SSJP6s2tRVftqNZ3z0WRCss7JZT4m2nlpzPUXzT7wExiWeEFiTIYwaTizhCAcwaBAKjXU9giGja0uYvK8w4qsnbKkLOjcVA8ZXDqicq7GYEUc2aOzIF3P86QgUo6kvZl1GhBvMiS7FvHHg4k25wVjeh3UzG+KNDMsbS97RxcTFG3AnF/LerFVV4L8U1cqSTrCW1QL/aFEtO7KKX7xgZuOV7FngSQdZYXBe4C8V50HYrUvxgn+W5QMHf+AM8uzMl36IwzSb5mUydx1nBIwcx50nZT7N0jAWih8aQxuMVoaVHwAAAABJRU5ErkJggg=="},Ygme:function(n,e,t){n.exports=t.p+"images/main_bg_03-ce742.png"},Z1di:function(n,e,t){n.exports=t.p+"images/main_bg_02-9272e.png"},bYep:function(n,e){},r8Ni:function(n,e,t){n.exports=t.p+"images/main_bg_04-59266.png"},ral9:function(n,e,t){n.exports='<!doctype view>\n<view lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport"\n          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>方便袋商城</title>\n</head>\n<body>\n<div class="head">\n    <div class="header">\n        <a href="javascript:void(0)" onclick="history.go(-1)"></a>\n        全民拼团 直接免单\n    </div>\n</div>\n<div class="goods_info">\n    <p>茅台不老养生酒尊享礼盒（2瓶）原价3960元 现在购买享受至尊优惠！<span>0元</span> 快来一起免单吧！</p>\n</div>\n<div class="main">\n    <div class="list_box">\n        <div class="title">\n            <p><span class="all_person"></span>人正在拼单，可直接参与</p>\n            <a href="javascript:void(0)" class="look_more">查看更多</a>\n        </div>\n        <div class="list1">\n            <div class="wrapper">\n\n            </div>\n        </div>\n    </div>\n</div>\n<a href="javascript:void(0)" class="free_charge">我要免单</a>\n<img src="'+t("x6UN")+'" alt="">\n<img src="'+t("Z1di")+'" alt="">\n<img src="'+t("Ygme")+'" alt="">\n<img src="'+t("r8Ni")+'" alt="">\n<img src="'+t("6p+E")+'" alt="">\n<img src="'+t("4n9V")+'" alt="">\n\n<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"><\/script>\n<script src="https://cdn.bootcss.com/layer/2.3/layer.js"><\/script>\n</body>\n</view>\n'},vGYV:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(n){var e=t("y5uh"),i=(t.n(e),t("tb/R")),a=(t.n(i),t("bYep")),s=(t.n(a),t("ral9")),o=(t.n(s),t("CaOM")),r=t("NDJ3");const c=t("XlbR"),l=t("1pjc"),d=o.a.getUrlParams();function p(e){r.a.PostApi("/activityOrder/spellGroupShare",{regimentRecordNo:e},e=>{let t=[];const i=e.regimentRecordDTO;let a=`<div class="body">\n    <div class="title">参与<span>${i.leaderMobileNo}</span>的拼团</div>\n    <div class="num">\n        仅剩<span class="remain">${i.remainMember}</span>个名额，剩余<span class="time_down"></span>\n    </div>\n    <div class="icon">`;for(let n=0;n<i.moblieNoList.length;n++)t.push({url:l,phone:i.moblieNoList[n]});!function n(e){e.length<5&&(e.push({url:c}),n(e));return e}(t),t.forEach(function(n,e){a+=`<div class="item">\n        <img src="${n.url}" alt="icon">\n        <span>${n.phone?n.phone:""}</span>\n    </div>`}),a+='</div>\n      <a href="javascript:void(0)" class="join_team">参与拼团</a>\n    </div>',layer.open({type:1,title:!1,closeBtn:1,shadeClose:!0,scrollbar:!1,skin:"go_team_pop",area:["6rem"],content:a,success:function(){o.a.TimeDown(n(".go_team_pop .time_down"),i.deadLine),n(".join_team").on("click",function(){o.a.isIOS()&&window.webkit.messageHandlers.buyWithOther.postMessage({regimentRecordNo:i.regimentRecordNo,regimentId:1,productNo:"pr181115170105000003"}),o.a.isAndroid()&&window.control.buyActiveGoods("pr181115170105000003",i.regimentRecordNo,1)})}})})}n(".free_charge").on("click",function(){d?r.a.PostApi("/activityOrder/share",{productOrderNo:d.productOrderNo},n=>{o.a.isIOS()&&window.webkit.messageHandlers.buyWithOther.postMessage({regimentRecordNo:"",regimentId:1,productNo:"pr181115170105000003"}),o.a.isAndroid()&&window.control.toEntityBuyResultAcivity(JSON.stringify(n))}):(o.a.isIOS()&&window.webkit.messageHandlers.buyWithOther.postMessage({regimentRecordNo:"",regimentId:1,productNo:"pr181115170105000003"}),o.a.isAndroid()&&window.control.buyActiveGoods("pr181115170105000003","",1))}),r.a.PostApi("/activityOrder/queryRegimentRecordList",{regimentId:1},e=>{const t=e.data.list,i=t.length;let a="";if(n(".all_person").html(e.data.total),i>2){const n=t[0],e=t[i-1];t.push(n),t.unshift(e)}if(i>0&&n(".list1").css("height","2.4rem"),t.forEach(function(n,e){a+=`<div class="slide">\n      <div class="left">${n.mobileNo}</div>\n      <div class="right">\n          <div class="time">\n              <p>还差<span class="reamin">${n.remainMember}</span>人拼成</p>\n              <p>剩余<span class="time_down"></span></p>\n          </div>\n          <a href="javascript:void(0)" data-id="${n.regimentRecordNo}" class="go_team_btn">参与拼团</a>\n      </div>\n    </div>`}),n(".list1 .wrapper").html(a),n(".go_team_btn").on("click",function(){const e=n(this).attr("data-id");p(e)}),i>2){const e=n(".wrapper .slide").length;let t=1;setInterval(function(){t++,n(".list1 .wrapper").animate({top:"-"+1.2*t+"rem"},function(){t==e-2&&(t=0,n(".list1 .wrapper").css("top","0"))})},3e3)}else n(".wrapper").css("top","0"),n(".look_more").css("display","none");n(".list1 .time_down").each(function(e,i){o.a.TimeDown(n(i),t[e].deadLine)}),i>2&&(t.pop(),t.shift()),n(".look_more").on("click",function(){let e='<div class="title"></div><div class="wrapper">';t.forEach(function(n,t){e+=`<div class="slide">\n        <div class="left">\n          <img src="${l}" alt="">\n          <div>\n            <div class="mess">\n                <span class="phone">${"*"+n.mobileNo.slice(-4)}</span>\n                <span >还差<span class="reamin">${n.remainMember}</span>人</span>\n            </div>\n            <p class="time">剩余<span class="time_down"></span></p>\n          </div>         \n        </div>\n        <div class="right">\n            <a href="javascript:void(0)" data-id="${n.regimentRecordNo}" class="go_team_btn2">参与拼团</a>\n        </div>\n      </div>`,9==t&&(e+='<div class="tips">仅显示10个正在拼单的人</div>')}),e+="</div>";const i=layer.open({type:1,title:!1,closeBtn:1,shadeClose:!0,scrollbar:!1,skin:"more_team",area:["5.9rem"],content:e,success:function(){n(".more_team .time_down").each(function(e,i){o.a.TimeDown(n(i),t[e].deadLine)}),n(".go_team_btn2").on("click",function(){const e=n(this).attr("data-id");layer.close(i),p(e)})}})})})}.call(e,t("7t+N"))},x6UN:function(n,e,t){n.exports=t.p+"images/main_bg_01-6e48b.png"}},["vGYV"]);