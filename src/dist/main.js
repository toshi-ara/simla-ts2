(()=>{"use strict";var t={14:(t,e,a)=>{a.d(e,{Z:()=>d});var i=a(537),n=a.n(i),g=a(645),l=a.n(g),s=a(667),I=a.n(s),o=new URL(a(916),a.b),c=l()(n()),r=I()(o);c.push([t.id,"html {\n    text-align: center;\n    font-family: sans-serif;\n    background: mintcream;\n    margin-left: auto;\n    margin-right: auto;\n}\n#buttons {\n    padding: 10px;\n    padding-bottom: 30px;\n}\n#slider {\n    width: 300px;\n}\n#timer {\n    font-family: monospace;\n    font-size: 60px;\n    padding: 20px;\n}\n#canvas {\n    background-image: url("+r+");\n    background-repeat: no-repeat;\n    background-size:contain;\n    width: 481px;\n    height: 268px;\n}\n#response {\n    font-size: 48px;\n    padding: 20px;\n}\n\n\nbutton {\n    width: 120px;\n    height: 40px;\n    font-size: 20px;\n    border-radius: 10px;\n    border: 2px #808080 solid;\n    padding: 5px;\n    cursor: pointer;\n}\n#start {\n    width: 200px;\n    background-color: cyan;\n}\n\n","",{version:3,sources:["webpack://./css/style.css"],names:[],mappings:"AAAA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,qBAAqB;IACrB,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,oBAAoB;AACxB;AACA;IACI,YAAY;AAChB;AACA;IACI,sBAAsB;IACtB,eAAe;IACf,aAAa;AACjB;AACA;IACI,yDAA0C;IAC1C,4BAA4B;IAC5B,uBAAuB;IACvB,YAAY;IACZ,aAAa;AACjB;AACA;IACI,eAAe;IACf,aAAa;AACjB;;;AAGA;IACI,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,yBAAyB;IACzB,YAAY;IACZ,eAAe;AACnB;AACA;IACI,YAAY;IACZ,sBAAsB;AAC1B",sourcesContent:["html {\n    text-align: center;\n    font-family: sans-serif;\n    background: mintcream;\n    margin-left: auto;\n    margin-right: auto;\n}\n#buttons {\n    padding: 10px;\n    padding-bottom: 30px;\n}\n#slider {\n    width: 300px;\n}\n#timer {\n    font-family: monospace;\n    font-size: 60px;\n    padding: 20px;\n}\n#canvas {\n    background-image: url(../fig/fig_back.svg);\n    background-repeat: no-repeat;\n    background-size:contain;\n    width: 481px;\n    height: 268px;\n}\n#response {\n    font-size: 48px;\n    padding: 20px;\n}\n\n\nbutton {\n    width: 120px;\n    height: 40px;\n    font-size: 20px;\n    border-radius: 10px;\n    border: 2px #808080 solid;\n    padding: 5px;\n    cursor: pointer;\n}\n#start {\n    width: 200px;\n    background-color: cyan;\n}\n\n"],sourceRoot:""}]);const d=c},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var a="",i=void 0!==e[5];return e[4]&&(a+="@supports (".concat(e[4],") {")),e[2]&&(a+="@media ".concat(e[2]," {")),i&&(a+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),a+=t(e),i&&(a+="}"),e[2]&&(a+="}"),e[4]&&(a+="}"),a})).join("")},e.i=function(t,a,i,n,g){"string"==typeof t&&(t=[[null,t,void 0]]);var l={};if(i)for(var s=0;s<this.length;s++){var I=this[s][0];null!=I&&(l[I]=!0)}for(var o=0;o<t.length;o++){var c=[].concat(t[o]);i&&l[c[0]]||(void 0!==g&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=g),a&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=a):c[2]=a),n&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=n):c[4]="".concat(n)),e.push(c))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},537:t=>{t.exports=function(t){var e=t[1],a=t[3];if(!a)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),g="/*# ".concat(n," */"),l=a.sources.map((function(t){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(t," */")}));return[e].concat(l).concat([g]).join("\n")}return[e].join("\n")}},370:(t,e,a)=>{a.r(e),a.d(e,{default:()=>p});var i=a(379),n=a.n(i),g=a(795),l=a.n(g),s=a(569),I=a.n(s),o=a(565),c=a.n(o),r=a(216),d=a.n(r),C=a(589),m=a.n(C),u=a(14),A={};A.styleTagTransform=m(),A.setAttributes=c(),A.insert=I().bind(null,"head"),A.domAPI=l(),A.insertStyleElement=d(),n()(u.Z,A);const p=u.Z&&u.Z.locals?u.Z.locals:void 0},379:t=>{var e=[];function a(t){for(var a=-1,i=0;i<e.length;i++)if(e[i].identifier===t){a=i;break}return a}function i(t,i){for(var g={},l=[],s=0;s<t.length;s++){var I=t[s],o=i.base?I[0]+i.base:I[0],c=g[o]||0,r="".concat(o," ").concat(c);g[o]=c+1;var d=a(r),C={css:I[1],media:I[2],sourceMap:I[3],supports:I[4],layer:I[5]};if(-1!==d)e[d].references++,e[d].updater(C);else{var m=n(C,i);i.byIndex=s,e.splice(s,0,{identifier:r,updater:m,references:1})}l.push(r)}return l}function n(t,e){var a=e.domAPI(e);return a.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;a.update(t=e)}else a.remove()}}t.exports=function(t,n){var g=i(t=t||[],n=n||{});return function(t){t=t||[];for(var l=0;l<g.length;l++){var s=a(g[l]);e[s].references--}for(var I=i(t,n),o=0;o<g.length;o++){var c=a(g[o]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}g=I}}},569:t=>{var e={};t.exports=function(t,a){var i=function(t){if(void 0===e[t]){var a=document.querySelector(t);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(t){a=null}e[t]=a}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(a)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,a)=>{t.exports=function(t){var e=a.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(a){!function(t,e,a){var i="";a.supports&&(i+="@supports (".concat(a.supports,") {")),a.media&&(i+="@media ".concat(a.media," {"));var n=void 0!==a.layer;n&&(i+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),i+=a.css,n&&(i+="}"),a.media&&(i+="}"),a.supports&&(i+="}");var g=a.sourceMap;g&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(g))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,a)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},12:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});class a{}e.default=a,a.MU0=[[75,8],[67,5],[43,6],[30,10]],a.LOG_SIGMA0=[[2.2,.4],[2.4,.4],[2.4,.4],[2.5,.5]],a.ADR=.7,a.MU0_adj=0,a.D_MU0=[0,4],a.CENTERS=[[218,100],[289,100],[360,100],[218,150],[289,150],[360,150]],a.Rnormal=20,a.RnormalCenter=3,a.Rrespond=18,a.RrespondCenter=2,a.ProbThreshold=.05,a.storageNameSpeed="SimLaSpeed",a.storageNameLang="SimLaLang"},347:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{static drawCircle(t,e,a,i,n){t.beginPath(),t.arc(e[0],e[1],a,0,2*Math.PI,!0),t.strokeStyle=n,t.lineWidth=2,t.stroke(),t.closePath(),t.beginPath(),t.arc(e[0],e[1],i,0,2*Math.PI,!1),t.fillStyle=n,t.fill(),t.closePath()}static fillRect(t,e,a){const i=1.3*a;t.fillStyle="#f4d7d7",t.fillRect(e[0]-i,e[1]-i,2*i,2*i)}}},419:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});class a{}e.default=a,a.start=["開始","Start"],a.restart=["再開","Restart"],a.pause=["一時停止","Pause"],a.newexp=["新規実験","New Exp."],a.quit=["終了","Quit"],a.with_response=["反応あり","Respond"],a.without_response=["反応なし","Not Respond"],a.speed=["倍速","x speed"],a.msg_newexp=["新規実験を行いますか?","Do you want to start a new experiment?"],a.msg_quit=["終了しますか?","Do you want to quit?"],a.msg_close=["ブラウザあるいはこのタブを閉じて下さい","Please close the browser or this tab"]},331:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{static inv_logit(t){return 1/(1+Math.exp(-t))}static inv_logit_upper(t){return 1/(1+Math.exp(t))}static phi_approx(t){return this.inv_logit(.07056*Math.pow(t,3)+1.5976*t)}static phi_approx_upper(t){return this.inv_logit_upper(.07056*Math.pow(t,3)+1.5976*t)}static random_norm(t=0,e=1){let a=Math.random(),i=Math.random();return t+Math.sqrt(-2*Math.log(a))*Math.cos(2*Math.PI*i)*e}}},314:function(t,e,a){var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const n=i(a(12)),g=i(a(331));e.default=class{constructor(){this.param=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],this.storageName="SimLaParam";const t=this.getStorage();Object.keys(t).length>0?this.param=t.param:this.setInitParameter()}setInitParameter(){const t=n.default.MU0_adj+g.default.random_norm(n.default.D_MU0[0],n.default.D_MU0[1]);for(let e=1;e<5;e++)this.param[e][0]=g.default.random_norm(n.default.MU0[e-1][0]+t,n.default.MU0[e-1][1]),this.param[e][1]=Math.exp(g.default.random_norm(n.default.LOG_SIGMA0[e-1][0],n.default.LOG_SIGMA0[e-1][1]));this.param[5][0]=this.param[2][0],this.param[5][1]=this.param[2][1],this.param[5][2]=n.default.ADR,this.setStorage()}get getParameter(){return this.param}setStorage(){localStorage.setItem(this.storageName,JSON.stringify({param:this.param}))}getStorage(){const t=localStorage.getItem(this.storageName);return t?JSON.parse(t):{}}clearStorage(){localStorage.removeItem(this.storageName)}}},158:function(t,e,a){var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const n=i(a(12)),g=i(a(419)),l=i(a(314)),s=i(a(347)),I=i(a(250)),o=i(a(331));e.default=class{constructor(){this.time=new I.default,this.param=new l.default,this.elem_newexp=document.getElementById("newexp"),this.elem_start=document.getElementById("start"),this.elem_quit=document.getElementById("quit"),this.elem_speed_msg=document.getElementById("speed_msg"),this.elem_timer=document.getElementById("timer"),this.elem_response=document.getElementById("response"),this.elem_lang=document.getElementById("lang"),this.elem_slider=document.getElementById("slider"),this.elem_canvas=document.getElementById("canvas");const t=this.elem_canvas.getContext("2d"),e=new Image;t.drawImage(e,0,0,481,268),n.default.CENTERS.forEach((function(e){s.default.drawCircle(t,e,n.default.Rnormal,n.default.RnormalCenter,"black")}));const a=void 0===window.ontouchstart?"mousedown":"touchstart";this.elem_newexp.addEventListener(a,(()=>{this.clickNewExp()}),!1),this.elem_start.addEventListener(a,(()=>{this.clickStart()}),!1),this.elem_quit.addEventListener(a,(()=>{this.clickQuit()}),!1),this.elem_lang.addEventListener("change",(()=>{this.toggleLang()}),!1),this.elem_slider.addEventListener("input",(()=>{this.sliderChanged()}),!1),this.elem_canvas.addEventListener(a,(e=>{this.clickCanvas(this.elem_canvas,t,e)}),!1),this.elem_slider.value=this.getStorageSpeed(),this.lang=this.getStorageLang(),this.elem_lang.la[this.lang].checked=!0,this.setLang(),this.toggleButton(),this.elem_timer.textContent="0:00:00"}start(){this.displayTimer()}clickCanvas(t,e,a){if(!this.time.isRunning)return;const i=this.getClickedPosition(t,a),l=this.getCircleNumber(i,n.default.CENTERS,n.default.Rnormal);l<0||(this.getResponse(l,this.time.getMinute,this.param.getParameter)?(s.default.fillRect(e,n.default.CENTERS[l],n.default.Rrespond),s.default.drawCircle(e,n.default.CENTERS[l],n.default.Rrespond,n.default.RrespondCenter,"red"),this.elem_response.textContent=g.default.with_response[this.lang],this.elem_response.style.color="red",setTimeout((()=>{s.default.fillRect(e,n.default.CENTERS[l],n.default.Rrespond),s.default.drawCircle(e,n.default.CENTERS[l],n.default.Rnormal,n.default.RnormalCenter,"black"),this.elem_response.textContent=""}),300)):(this.elem_response.textContent=g.default.without_response[this.lang],this.elem_response.style.color="black",setTimeout((()=>{this.elem_response.textContent=""}),300)))}toggleLang(){this.lang=this.elem_lang.la.value,this.setLang(),this.setStorageLang()}setLang(){let t;t=this.time.isRunning?g.default.pause:0==this.time.getTotalTime?g.default.start:g.default.restart,this.elem_start.textContent=t[this.lang],this.elem_newexp.textContent=g.default.newexp[this.lang],this.elem_quit.textContent=g.default.quit[this.lang],this.toggleButton(),this.printSpeed(this.elem_slider.value)}clickNewExp(){this.time.isRunning||window.confirm(g.default.msg_newexp[this.lang])&&(this.time.clickNewExp(),this.param.setInitParameter(),this.elem_slider.value="1",this.setStorageSpeed(),this.setLang())}clickStart(){this.param=new l.default,this.time.clickStart(),this.setLang(),this.toggleButton(),this.setStorageSpeed()}clickQuit(){this.time.isRunning||window.confirm(g.default.msg_quit[this.lang])&&(window.alert(g.default.msg_close[this.lang]),this.elem_start.textContent=g.default.start[this.lang],this.time.clickQuit(),this.param.clearStorage(),this.clearStorage())}toggleButton(){this.time.isRunning?(this.elem_newexp.style.color="gray",this.elem_quit.style.color="gray"):(this.elem_newexp.style.color="black",this.elem_quit.style.color="black")}sliderChanged(){this.printSpeed(this.elem_slider.value),this.time.sliderChanged(),this.setStorageSpeed()}printSpeed(t){this.elem_speed_msg.textContent=t+g.default.speed[this.lang]}getClickedPosition(t,e){let a;a=(t=>"touchstart"===t.type)(e)?e.touches[0]||e.changedTouches[0]:e;const i=e.target.getBoundingClientRect(),n=a.clientX-i.left-0,g=a.clientY-i.top-0,l=t.clientWidth/t.width,s=t.clientHeight/t.height;return[Math.floor(n/l),Math.floor(g/s)]}isInCircle(t,e,a){return Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2)<=Math.pow(a,2)}getCircleNumber(t,e,a){let i=-1;for(let n=0;n<e.length;n++)this.isInCircle(t,e[n],a)&&(i=n);return i}getProbability(t,e){let a=100-(1-e[2])*t;return o.default.phi_approx_upper((a-e[0])/e[1])}getResponse(t,e,a){let i;if(0==t)i=.99;else if(i=this.getProbability(e,a[t]),i<n.default.ProbThreshold)return!1;return Math.random()<=i}displayTimer(){this.elem_timer.textContent=this.time.getTimeStr(Number(this.elem_slider.value)),requestAnimationFrame((()=>{this.displayTimer()}))}setStorageSpeed(){localStorage.setItem(n.default.storageNameSpeed,String(this.elem_slider.value))}getStorageSpeed(){return localStorage.getItem(n.default.storageNameSpeed)||"1"}setStorageLang(){localStorage.setItem(n.default.storageNameLang,String(this.lang))}getStorageLang(){const t=localStorage.getItem(n.default.storageNameLang);return t?Number(t):0}clearStorage(){localStorage.removeItem(n.default.storageNameSpeed),localStorage.removeItem(n.default.storageNameLang)}}},250:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{constructor(){this._isRunning=!1,this._start=Date.now(),this._elapsed=0,this._total=0,this.storageName="SimLaTime";const t=this.getStorage();Object.keys(t).length>0&&(this._isRunning=t.isRunning,this._start=t.start,this._elapsed=t.elapsed,this._total=t.total)}get isRunning(){return this._isRunning}get getMinute(){return(this._total+this._elapsed)/6e4}get getTotalTime(){return this._total}getTimeStr(t){return this.timeFormat(this.getTime(t))}getTime(t){let e;return this.isRunning?(this._elapsed=(Date.now()-this._start)*t,e=this._total+this._elapsed):e=this._total,e}timeFormat(t){return Math.floor(t/36e5)+new Date(t).toISOString().slice(13,19)}clickNewExp(){this.isRunning||(this._isRunning=!1,this._start=Date.now(),this._elapsed=0,this._total=0,this.setStorage())}clickStart(){this.isRunning?(this._isRunning=!1,this._total+=this._elapsed):(this._isRunning=!0,this._start=Date.now(),this._elapsed=0),this.setStorage()}clickQuit(){this.isRunning||(this._isRunning=!1,this._start=Date.now(),this._elapsed=0,this._total=0,this.clearStorage())}sliderChanged(){this.isRunning&&(this._total+=this._elapsed,this._start=Date.now(),this._elapsed=0,this.setStorage())}setStorage(){localStorage.setItem(this.storageName,JSON.stringify({isRunning:this._isRunning,start:this._start,elapsed:this._elapsed,total:this._total}))}getStorage(){const t=localStorage.getItem(this.storageName);return t?JSON.parse(t):{}}clearStorage(){localStorage.removeItem(this.storageName)}}},180:function(t,e,a){var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const n=i(a(158));a(370),window.onload=()=>{(new n.default).start()}},916:t=>{t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iNjcuMTk1NzkzbW0iCiAgIGhlaWdodD0iMzcuNDUyNzYzbW0iCiAgIGlkPSJzdmc0MDY4IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMS4yICgwYTAwY2Y1MzM5LCAyMDIyLTAyLTA0KSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iZmlnX2JhY2suc3ZnIgogICBpbmtzY2FwZTpleHBvcnQtZmlsZW5hbWU9Ii9ob21lL2FyYS9naHEvZ2l0aHViLmNvbS90b3NoaS1hcmEvc2ltbGEtdHMvc3JjL2ZpZy9maWdfYmFjay5wbmciCiAgIGlua3NjYXBlOmV4cG9ydC14ZHBpPSIxODEuNzU0MjkiCiAgIGlua3NjYXBlOmV4cG9ydC15ZHBpPSIxODEuNzU0MjkiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM0MDcwIiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSIzLjk1OTc5OCIKICAgICBpbmtzY2FwZTpjeD0iODkuMzk4NSIKICAgICBpbmtzY2FwZTpjeT0iMjguNzg5MzQ3IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9InRydWUiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSI5NDYiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTA0MCIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iNCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMzAiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIKICAgICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIgogICAgIGZpdC1tYXJnaW4tdG9wPSIwIgogICAgIGZpdC1tYXJnaW4tbGVmdD0iMCIKICAgICBmaXQtbWFyZ2luLXJpZ2h0PSIwIgogICAgIGZpdC1tYXJnaW4tYm90dG9tPSIwIj4KICAgIDxpbmtzY2FwZTpncmlkCiAgICAgICB0eXBlPSJ4eWdyaWQiCiAgICAgICBpZD0iZ3JpZDMwMTgiCiAgICAgICBvcmlnaW54PSItMjA1LjUzNDA5IgogICAgICAgb3JpZ2lueT0iLTI5Ny45NzAxNyIgLz4KICA8L3NvZGlwb2RpOm5hbWVkdmlldz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE0MDczIj4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSLjg6zjgqTjg6Tjg7wgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwNS41MzQwOSwtMjk3Ljk3MDE3KSI+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSAyNzkuNTYxMDcsNDEzLjY0NzY4IGMgLTEuNDQ5OTYsLTYuMjM0OTggLTE2Ljg3NTk2LC00LjA2ODQ4IC0zOC40NzM1OCwtMTAuNTkwOTQgLTIxLjU5NzYzLC02LjUyMjQ3IC0zNC40NDYwOCwtMTYuMTIxNDYgLTM0LjU1MywtMzEuNDg2OTkgLTAuMTA2OTIsLTE1LjM2NTU0IDIxLjU3MTksLTI5LjA3MDkxIDM1LjM3NTk0LC0zNy42MjM5NiAxMy44MDQwMywtOC41NTMwMyAyMy4wMzExNiwtOS42NDI4NSAzMC4wNjc5NiwtMTIuOTQzNTkgNy4wMzY4LC0zLjMwMDczIDEzLjAyMTYxLC0xLjAwMjIgMTIuMzg3ODEsLTYuMzAzMzggLTAuNjMzOCwtNS4zMDExOCAtMjEuOTQ5NTUsLTIuNjUzMiAtMjEuNTY2NjEsLTguMTI5NTYgMC4zODI5NSwtNS40NzYzNyAxNS43NTExLC02LjgyMjMyIDI3LjY0MjQ1LC02LjMyMzIyIDExLjg5MTM1LDAuNDk5MSAxMC44MTIyLDQuMDM5NiAyMC4xODUwOCwxMS44OTY3OCA5LjM3Mjg4LDcuODU3MTggMjIuODA3OTgsMy4xNDE5NiA0Mi43NTkyNiw0LjUzNzA5IDE5Ljk1MTI5LDEuMzk1MTMgMzcuODc3NDYsMS41MzQxNSA0Ny4yNDU1NCwyLjQyNzEyIEMgNDEwLDMyMCA0MjAsMzIwIDQxNi41Njg4MSwzMTUuMTkzODcgNDEzLjEzNzYyLDMxMC4zODc3NCAzOTAsMzE1IDM5MS43MzY3MSwzMDUuMDI0MjYgYyAxLjczNjcxLC05Ljk3NTc0IDM5Ljk1MDE3LC01LjI3NjIgNDcuODM3NzUsLTIuMzY2MzQgNy44ODc1NywyLjkwOTg4IDEzLjQwNTM3LDIzLjMyODEyIDE3LjE2MTAyLDQxLjI5NzY5IDMuNzU1NjYsMTcuOTY5NTggMS41LDUwLjIyNjk5IC03LjIyODkxLDY5LjY2NTQ0IC04LjcyODkzLDE5LjQzODQ2IC0yMi45NzAyMSwyMy42Nzc2OCAtMzUuNDU3MDEsMjQuNjkwNDYgLTEyLjQ4Njc5LDEuMDEyNzkgLTI1LjExNjYsLTEuNjIxNDYgLTI0LjU4MzA4LC04LjA5NzgzIDAuNTMzNTIsLTYuNDc2MzcgMjkuNTUwMSwtMi4yODg3NSAzMC4wNjA3OSwtOS41OTE5OCAwLjUxMDY5LC03LjMwMzIzIC0xMC4yMjk3NCwtNC4yNzc4NiAtMjMuMDA5ODUsLTQuMTk3MjQgLTEyLjc4MDExLDAuMDgwNiAtMjIuODMxOTEsMS45MTkwOSAtNDUuMTE4ODYsMC4zNjA2MyAtMjIuMjg2OTYsLTEuNTU4NDYgLTQ2Ljg3ODMxLC01LjkzMjgxIC00OC4yNzgxMywtMS42NDcxNCAtMS4zOTk4Miw0LjI4NTY3IC0yLjM3NjQ3LDcuMzQ1NzcgLTEwLjI5MDMyLDEwLjU0NTE1IC03LjkxMzg1LDMuMTk5MzkgLTMyLjYwNzQ1LDQuNzc1MiAtMzIuMDI5LC0zLjQ5Njk4IDAuNTc4NDQsLTguMjcyMTggMjAuMjA5OTIsLTIuMzAzNDcgMTguNzU5OTYsLTguNTM4NDQgeiIKICAgICAgIGlkPSJwYXRoMjk4OSIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9Inp6enp6enp6enp6enp6enp6enp6enp6enoiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSAyMTkuOTM2MTQsMzYxLjc0OTg5IGMgMTAuMTA2NzYsLTEuNzc1MjUgMTAuMzY4NDQsLTYuNzY4NCAxMi44ODk5NCwtMTEuNjQzMTEiCiAgICAgICBpZD0icGF0aDM3ODEiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDozO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDIyMC45MDI0NywzODEuNTI1OCBjIDkuMDkyMzQsLTEuNTI2MjMgMTMuNTA4OTEsNC43MTM0NiAxNS41MDcwNSw5LjgyNTA0IgogICAgICAgaWQ9InBhdGgzNzgxLTkiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDI0OS4xNjk2MiwzMzguOTQ2ODQgYyAwLDAgLTguNTY0NzMsMTAuNTY2MjMgMS4zNjkyMywxMi4wODgyMiA5LjkzMzk2LDEuNTIxOTkgMTAuNTA5NjUsLTkuNDYyOTMgMTAuNTA5NjUsLTkuNDYyOTMgMCwwIDAuNDc1MjcsMTAuMDM4NjMgOS42MTk5NSw3LjUxMzc2IDkuMTQ0NjcsLTIuNTI0ODYgNS44ODI4NiwtMTYuNzE1MDIgNS44ODI4NiwtMTYuNzE1MDIiCiAgICAgICBpZD0icGF0aDM4MDEiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjemN6YyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDI1MC4xODA5OSwzOTYuMDc4MDYgYyAwLDAgLTMuNTIzNSwtOS4xOTcwMSA0LjUxNzg4LC05Ljc3Njk1IDguMDQxMzcsLTAuNTc5OTQgNy42MjI2OCw3LjQwOTEgNy42MjI2OCw3LjQwOTEgMCwwIDMuNTE5MjUsLTkuODI5MjkgMTAuMjQ3OTgsLTQuNDY5NzkgNi43Mjg3Miw1LjM1OTUgLTAuNjgwMzcsMTIuOTgyMTggLTAuNjgwMzcsMTIuOTgyMTgiCiAgICAgICBpZD0icGF0aDM4MDEtNCIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImN6Y3pjIiAvPgogICAgPHJlY3QKICAgICAgIHN0eWxlPSJmb250LXZhcmlhdGlvbi1zZXR0aW5nczpub3JtYWw7b3BhY2l0eToxO2ZpbGw6I2Y0ZDdkNztmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4zMzMzMzMzMztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjE7c3RvcC1jb2xvcjojMDAwMDAwO3N0b3Atb3BhY2l0eToxIgogICAgICAgaWQ9InJlY3Q2Njg5IgogICAgICAgd2lkdGg9IjE0NSIKICAgICAgIGhlaWdodD0iODAiCiAgICAgICB4PSIyODUiCiAgICAgICB5PSIzMjUiCiAgICAgICByeT0iMTAiIC8+CiAgICA8dGV4dAogICAgICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgICAgIHN0eWxlPSJmb250LXNpemU6MTJweDtsaW5lLWhlaWdodDoxMDAlO2ZvbnQtZmFtaWx5OidOb3RvIFNhbnMgQ0pLIEpQJzstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidOb3RvIFNhbnMgQ0pLIEpQLCBOb3JtYWwnO3RleHQtYWxpZ246Y2VudGVyO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O3dyaXRpbmctbW9kZTpsci10Yjt0ZXh0LWFuY2hvcjptaWRkbGU7ZmlsbDojNGQ0ZDRkO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxcHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIHg9IjMyMS41MTU5NiIKICAgICAgIHk9IjMzNy4yNTE0IgogICAgICAgaWQ9InRleHQyMjYxIj48dHNwYW4KICAgICAgICAgc29kaXBvZGk6cm9sZT0ibGluZSIKICAgICAgICAgaWQ9InRzcGFuMjI1OSIKICAgICAgICAgeD0iMzIxLjUxNTk2IgogICAgICAgICB5PSIzMzcuMjUxNCIKICAgICAgICAgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6J1RlWCBHeXJlIEhlcm9zJzstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidUZVggR3lyZSBIZXJvcyc7ZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIj5TYWxpbmU8L3RzcGFuPjwvdGV4dD4KICAgIDx0ZXh0CiAgICAgICB4bWw6c3BhY2U9InByZXNlcnZlIgogICAgICAgc3R5bGU9ImZvbnQtc2l6ZToxMnB4O2xpbmUtaGVpZ2h0OjEwMCU7Zm9udC1mYW1pbHk6J05vdG8gU2FucyBDSksgSlAnOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J05vdG8gU2FucyBDSksgSlAsIE5vcm1hbCc7dGV4dC1hbGlnbjpjZW50ZXI7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7d3JpdGluZy1tb2RlOmxyLXRiO3RleHQtYW5jaG9yOm1pZGRsZTtmaWxsOiM0ZDRkNGQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjFweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgeD0iMzU4LjkyNTQyIgogICAgICAgeT0iMzM3LjI4NzQxIgogICAgICAgaWQ9InRleHQyMjYxLTMiPjx0c3BhbgogICAgICAgICBzb2RpcG9kaTpyb2xlPSJsaW5lIgogICAgICAgICBpZD0idHNwYW4yMjU5LTYiCiAgICAgICAgIHg9IjM1OC45MjU0MiIKICAgICAgICAgeT0iMzM3LjI4NzQxIgogICAgICAgICBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6MTJweDtmb250LWZhbWlseTonVGVYIEd5cmUgSGVyb3MnOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J1RlWCBHeXJlIEhlcm9zJztmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiPlBybzwvdHNwYW4+PC90ZXh0PgogICAgPHRleHQKICAgICAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgICAgICBzdHlsZT0iZm9udC1zaXplOjEycHg7bGluZS1oZWlnaHQ6MTAwJTtmb250LWZhbWlseTonTm90byBTYW5zIENKSyBKUCc7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonTm90byBTYW5zIENKSyBKUCwgTm9ybWFsJzt0ZXh0LWFsaWduOmNlbnRlcjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDt3cml0aW5nLW1vZGU6bHItdGI7dGV4dC1hbmNob3I6bWlkZGxlO2ZpbGw6IzRkNGQ0ZDtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICB4PSIzOTYuMjc1MzYiCiAgICAgICB5PSIzMzcuMjg3NDEiCiAgICAgICBpZD0idGV4dDIyNjEtMy03Ij48dHNwYW4KICAgICAgICAgc29kaXBvZGk6cm9sZT0ibGluZSIKICAgICAgICAgaWQ9InRzcGFuMjI1OS02LTUiCiAgICAgICAgIHg9IjM5Ni4yNzUzNiIKICAgICAgICAgeT0iMzM3LjI4NzQxIgogICAgICAgICBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6MTJweDtmb250LWZhbWlseTonVGVYIEd5cmUgSGVyb3MnOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J1RlWCBHeXJlIEhlcm9zJztmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiPkxpZDwvdHNwYW4+PC90ZXh0PgogICAgPHRleHQKICAgICAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgICAgICBzdHlsZT0iZm9udC1zaXplOjEycHg7bGluZS1oZWlnaHQ6MTAwJTtmb250LWZhbWlseTonTm90byBTYW5zIENKSyBKUCc7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonTm90byBTYW5zIENKSyBKUCwgTm9ybWFsJzt0ZXh0LWFsaWduOmNlbnRlcjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDt3cml0aW5nLW1vZGU6bHItdGI7dGV4dC1hbmNob3I6bWlkZGxlO2ZpbGw6IzRkNGQ0ZDtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICB4PSIzMjEuMjkzOTgiCiAgICAgICB5PSIzOTkuODk3MTMiCiAgICAgICBpZD0idGV4dDIyNjEtMzUiPjx0c3BhbgogICAgICAgICBzb2RpcG9kaTpyb2xlPSJsaW5lIgogICAgICAgICBpZD0idHNwYW4yMjU5LTYyIgogICAgICAgICB4PSIzMjEuMjkzOTgiCiAgICAgICAgIHk9IjM5OS44OTcxMyIKICAgICAgICAgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6J1RlWCBHeXJlIEhlcm9zJzstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidUZVggR3lyZSBIZXJvcyc7ZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIj5NZXA8L3RzcGFuPjwvdGV4dD4KICAgIDx0ZXh0CiAgICAgICB4bWw6c3BhY2U9InByZXNlcnZlIgogICAgICAgc3R5bGU9ImZvbnQtc2l6ZToxMnB4O2xpbmUtaGVpZ2h0OjEwMCU7Zm9udC1mYW1pbHk6J05vdG8gU2FucyBDSksgSlAnOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J05vdG8gU2FucyBDSksgSlAsIE5vcm1hbCc7dGV4dC1hbGlnbjpjZW50ZXI7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7d3JpdGluZy1tb2RlOmxyLXRiO3RleHQtYW5jaG9yOm1pZGRsZTtmaWxsOiM0ZDRkNGQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjFweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgeD0iMzU4LjkxOTQiCiAgICAgICB5PSIzOTkuODk3MTMiCiAgICAgICBpZD0idGV4dDIyNjEtMy05Ij48dHNwYW4KICAgICAgICAgc29kaXBvZGk6cm9sZT0ibGluZSIKICAgICAgICAgaWQ9InRzcGFuMjI1OS02LTEiCiAgICAgICAgIHg9IjM1OC45MTk0IgogICAgICAgICB5PSIzOTkuODk3MTMiCiAgICAgICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtZmFtaWx5OidUZVggR3lyZSBIZXJvcyc7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonVGVYIEd5cmUgSGVyb3MnO2ZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSI+QnVwPC90c3Bhbj48L3RleHQ+CiAgICA8dGV4dAogICAgICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgICAgIHN0eWxlPSJmb250LXNpemU6MTJweDtsaW5lLWhlaWdodDoxMDAlO2ZvbnQtZmFtaWx5OidOb3RvIFNhbnMgQ0pLIEpQJzstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidOb3RvIFNhbnMgQ0pLIEpQLCBOb3JtYWwnO3RleHQtYWxpZ246Y2VudGVyO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O3dyaXRpbmctbW9kZTpsci10Yjt0ZXh0LWFuY2hvcjptaWRkbGU7ZmlsbDojNGQ0ZDRkO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxcHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIHg9IjM5OS45ODEzNSIKICAgICAgIHk9IjM5OS44OTcxMyIKICAgICAgIGlkPSJ0ZXh0MjI2MS0zLTctMiI+PHRzcGFuCiAgICAgICAgIHNvZGlwb2RpOnJvbGU9ImxpbmUiCiAgICAgICAgIGlkPSJ0c3BhbjIyNTktNi01LTciCiAgICAgICAgIHg9IjM5OS45ODEzNSIKICAgICAgICAgeT0iMzk5Ljg5NzEzIgogICAgICAgICBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6MTJweDtmb250LWZhbWlseTonVGVYIEd5cmUgSGVyb3MnOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J1RlWCBHeXJlIEhlcm9zJztmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiPkxpZCtBZHI8L3RzcGFuPjwvdGV4dD4KICA8L2c+Cjwvc3ZnPgo="}},e={};function a(i){var n=e[i];if(void 0!==n)return n.exports;var g=e[i]={id:i,exports:{}};return t[i].call(g.exports,g,g.exports,a),g.exports}a.m=t,a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.b=document.baseURI||self.location.href,a.nc=void 0,a(180)})();