(function(e){function t(t){for(var s,c,i=t[0],d=t[1],o=t[2],b=0,j=[];b<i.length;b++)c=i[b],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&j.push(n[c][0]),n[c]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(e[s]=d[s]);l&&l(t);while(j.length)j.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,i=1;i<a.length;i++){var d=a[i];0!==n[d]&&(s=!1)}s&&(r.splice(t--,1),e=c(c.s=a[0]))}return e}var s={},n={app:0},r=[];function c(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=s,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(a,s,function(t){return e[t]}.bind(null,s));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var l=d;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("7a23"),n={id:"app"},r={class:"row mx-0 px-0"},c=Object(s["d"])("h1",{class:"text-center mt-5"},"Weather in",-1),i={class:"mb-3"},d={key:0},o={class:"col-lg-8"},l={key:0},b={class:"row"},j={class:"row"},h={class:"col-lg-4"},u={class:"col-lg-4"},f={class:"col-lg-4"};function p(e,t,a,p,m,g){var y=Object(s["k"])("NavBar"),O=Object(s["k"])("SideBar"),v=Object(s["k"])("LineChart"),w=Object(s["k"])("Highlights"),k=Object(s["k"])("Wind");return Object(s["i"])(),Object(s["c"])("div",n,[Object(s["e"])(y,{name:m.navTitle,design:m.isDay},null,8,["name","design"]),Object(s["d"])("div",r,[Object(s["d"])("div",{class:Object(s["h"])(["col-lg-4",m.isDay?"day1":"night"])},[c,Object(s["d"])("form",{onSubmit:t[1]||(t[1]=Object(s["o"])((function(){return g.getWeather&&g.getWeather.apply(g,arguments)}),["prevent"]))},[Object(s["d"])("div",i,[Object(s["n"])(Object(s["d"])("input",{type:"text",class:"form-control",placeholder:"Enter City...","onUpdate:modelValue":t[0]||(t[0]=function(e){return m.citySearch=e})},null,512),[[s["m"],m.citySearch]])])],32),""!=m.weather.location?(Object(s["i"])(),Object(s["c"])("div",d,[Object(s["e"])(O,{design:m.isDay,day:e.day,night:e.night,location:m.weather.location,country:m.weather.country,longitude:m.weather.longitude,latitude:m.weather.latitude,datefun:g.dateBuilder,tempe:m.weather.temp,feels_like:m.weather.feels,possible:m.weather.possibility,description:m.weather.desc,icons:m.weather.image,high:m.weather.high,low:m.weather.low},null,8,["design","day","night","location","country","longitude","latitude","datefun","tempe","feels_like","possible","description","icons","high","low"])])):Object(s["b"])("",!0)],2),Object(s["d"])("div",o,[""!=m.weather.location?(Object(s["i"])(),Object(s["c"])("div",l,[Object(s["d"])("div",b,[Object(s["e"])(v)]),Object(s["d"])("div",j,[Object(s["d"])("div",h,[Object(s["e"])(w,{design:m.isDay,property:m.weather.uvi,name:"UV Index"},null,8,["design","property"])]),Object(s["d"])("div",u,[Object(s["e"])(w,{design:m.isDay,property:m.weather.visible,name:"Visibility"},null,8,["design","property"])]),Object(s["d"])("div",f,[Object(s["e"])(k,{design:m.isDay,property:m.weather.speed,property1:m.weather.degree,name:"Wind Speed",name1:"Wind Degree"},null,8,["design","property","property1"])])])])):Object(s["b"])("",!0)])])])}var m=a("1da1"),g=(a("96cf"),a("99af"),a("d3b7"),a("b0c0"),a("a4d3"),a("e01a"),a("caad"),a("2532"),{class:"container-fluid"}),y={class:"navbar-brand"};function O(e,t,a,n,r,c){return Object(s["i"])(),Object(s["c"])("nav",{class:Object(s["h"])(["navbar navbar-expand-lg design",a.design?"navbar-dark bg-dark ":"navbar-light bg-light"])},[Object(s["d"])("div",g,[Object(s["d"])("h1",y,Object(s["l"])(a.name),1)])],2)}var v={name:"NavBar",props:["name","design"]},w=a("6b0d"),k=a.n(w);const x=k()(v,[["render",O]]);var z=x,S={class:"card-body text-center mt-4 mb-3"},_={class:"card-text"};function D(e,t,a,n,r,c){return Object(s["i"])(),Object(s["c"])("div",{class:Object(s["h"])(["card mt-3",a.design?"text-dark border-info":"text-dark border-dark"])},[Object(s["d"])("div",{class:Object(s["h"])(["card-header text-center",a.design?"text-white bg-info border-info":"text-white bg-dark border-dark"])},Object(s["l"])(a.name),3),Object(s["d"])("div",S,[Object(s["d"])("p",_,Object(s["l"])(a.name)+": "+Object(s["l"])(a.property),1)])],2)}var M={name:"Highlights",props:["design","name","property"]};const C=k()(M,[["render",D]]);var W=C,B={class:"card-body text-center mb-1"},L={class:"card-text"},T={class:"card-text"};function A(e,t,a,n,r,c){return Object(s["i"])(),Object(s["c"])("div",{class:Object(s["h"])(["card mt-3",a.design?"text-dark border-info":"text-dark border-dark"])},[Object(s["d"])("div",{class:Object(s["h"])(["card-header text-center",a.design?"text-white bg-info border-info":"text-white bg-dark border-dark"])}," Wind Status ",2),Object(s["d"])("div",B,[Object(s["d"])("p",L,Object(s["l"])(a.name)+": "+Object(s["l"])(a.property),1),Object(s["d"])("p",T,Object(s["l"])(a.name1)+": "+Object(s["l"])(a.property1),1)])],2)}var P={name:"Wind",props:["name","name1","property","property1","design"]};const N=k()(P,[["render",A]]);var F=N,J={class:"card-header text-center"},q={class:"card-title text-center location"},U={class:"row mb-1 text-center"},V={class:"col"},E={class:"col"},H={class:"card-text text-center"},R={class:"temp pt-2"},I={class:"text-center"},Y={class:"text-center"},Z={class:"text-center my-1"},G=["src"],K={class:"row text-center my-1"},Q={class:"col"},X={class:"col"};function $(e,t,a,n,r,c){return Object(s["i"])(),Object(s["c"])("div",{class:Object(s["h"])(["card",a.design?"text-white bg-info":"text-white bg-dark"])},[Object(s["d"])("div",J,Object(s["l"])(a.datefun()),1),Object(s["d"])("div",{class:Object(s["h"])(["card-body my-1",a.design?a.day:a.night])},[Object(s["d"])("p",q,Object(s["l"])(a.location)+", "+Object(s["l"])(a.country),1),Object(s["d"])("div",U,[Object(s["d"])("div",V," Longitude: "+Object(s["l"])(a.longitude),1),Object(s["d"])("div",E," Latitude "+Object(s["l"])(a.latitude),1)]),Object(s["d"])("div",H,[Object(s["d"])("p",R,Object(s["l"])(a.tempe)+"°C",1)]),Object(s["d"])("p",I,"Feels like "+Object(s["l"])(a.feels_like)+"°C",1),Object(s["d"])("p",Y,Object(s["l"])(e.possibile)+": "+Object(s["l"])(a.description),1),Object(s["d"])("div",Z,[Object(s["d"])("img",{src:a.icons,alt:"weather-img"},null,8,G)]),Object(s["d"])("div",K,[Object(s["d"])("div",Q," Max: "+Object(s["l"])(a.high)+"°C ",1),Object(s["d"])("div",X," Min: "+Object(s["l"])(a.low)+"°C ",1)])],2)],2)}var ee={name:"SideBar",props:["design","day","night","location","country","longitude","latitude","datefun","tempe","feels_like","possible","description","icons","high","low"]};const te=k()(ee,[["render",$]]);var ae=te,se=a("3c10"),ne={extends:se["a"],data:function(){return{chartData:{labels:["12:00 am","4:00 am","8:00 am","12:00 pm","4:00 pm","8:00 pm"],datasets:[{label:"Line",data:[20,24,28,30,35,16],fill:!1,tension:.1,borderColor:"blue",backgroundColor:"blue",borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"Temperature Variation",fontColor:"black",fontSize:24,position:"left",padding:16},legend:{align:"end",labels:{fontColor:"black",fontSize:14}},layout:{padding:16},scales:{yAxes:[{ticks:{beginAtZero:!0},gridLines:{display:!0}}],xAxes:[{gridLines:{display:!1}}]}}}},mounted:function(){this.renderChart(this.chartData,this.options)}};const re=ne;var ce=re,ie={name:"App",components:{NavBar:z,Highlights:W,Wind:F,SideBar:ae,LineChart:ce},data:function(){return{navTitle:"Weather Dashboard",url_base:"http://api.openweathermap.org/data/2.5/",api_key:"91eb954317c8e810793e9844b6415822",citySearch:"",isDay:!0,weather:{location:"",country:"",longitude:"",latitude:"",temp:"",feels:"",possibility:"",desc:"",image:"",high:"",low:"",icon:"",speed:"",degree:"",visible:"",uvi:"",dates:[],temperature:[]}}},methods:{getWeather:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t,a,s,n,r,c,i,d,o,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(this.citySearch),t="".concat(this.url_base,"weather?q=").concat(this.citySearch,"&appid=").concat(this.api_key,"&units=metric"),e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:return s=e.sent,console.log(s),n="".concat(this.url_base,"forecast?q=").concat(this.citySearch,"&appid=").concat(this.api_key,"&units=metric"),e.next=12,fetch(n);case 12:return r=e.sent,e.next=15,r.json();case 15:return c=e.sent,console.log(c),this.dates=c.list,this.citySearch="",this.weather.location=s.name,this.weather.country=s.sys.country,this.weather.longitude=s.coord.lon,this.weather.latitude=s.coord.lat,this.weather.temp=Math.round(s.main.temp),this.weather.feels=Math.round(s.main.feels_like),this.weather.possibility=s.weather[0].main,this.weather.desc=s.weather[0].description,this.weather.high=Math.round(s.main.temp_max),this.weather.low=Math.round(s.main.temp_min),i=s.weather[0].icon,this.weather.speed=s.wind.speed,this.weather.degree=s.wind.deg,this.weather.visible=s.visibility,this.weather.image="http://openweathermap.org/img/wn/"+s.weather[0].icon+"@2x.png",i.includes("n")?this.isDay=!1:this.isDay=!0,d="https://api.openweathermap.org/data/2.5/onecall?lat=".concat(this.weather.latitude,"&lon=").concat(this.weather.longitude,"&exclude=minutely,daily,alerts&units=metric&appid=").concat(this.api_key),e.next=38,fetch(d);case 38:return o=e.sent,e.next=41,o.json();case 41:l=e.sent,console.log(l),this.weather.uvi=l.current.uvi;case 44:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),dateBuilder:function(){var e=new Date,t=["January","February","March","April","May","June","July","August","September","October","November","December"],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],s=a[e.getDay()],n=e.getDate(),r=t[e.getMonth()],c=e.getFullYear();return"".concat(s,", ").concat(n," ").concat(r,", ").concat(c)}}};a("9509");const de=k()(ie,[["render",p]]);var oe=de;a("f9e3");Object(s["a"])(oe).mount("#app")},6604:function(e,t,a){},9509:function(e,t,a){"use strict";a("6604")}});
//# sourceMappingURL=app.c6999129.js.map