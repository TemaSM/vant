import{I as s}from"./index.a980483d.js";import{a as f,T as z}from"./index.d9b67108.js";import{R as u,C as c}from"./index.243958ce.js";import{c as x}from"./index.60d6b68c.js";import{N as B}from"./function-call.82cb2f7a.js";import{a as E}from"./use-translate.5c5bc340.js";import{z as q,C as A,r as I,o as m,c as g,w as l,e as t,B as e,a as b,b as v,d as k,t as y,F as h}from"./vue-libs.baee7c1f.js";import"./with-install.fb16276a.js";import"./use-id.22c16a33.js";import"./use-expose.ee9c0d2a.js";import"./use-route.e11a8d0e.js";import"./index.a81f7737.js";import"./use-touch.ef0aabdc.js";import"./on-popup-reopen.db5e5853.js";import"./constant.80c6de18.js";import"./interceptor.c431140c.js";import"./use-refs.ca732648.js";import"./index.0ec3bc30.js";import"./mount-component.d554f092.js";import"./index.cdbdcd62.js";import"./use-lazy-render.56018189.js";import"./index.f1edd6f0.js";var C={name:"vant-icon",basic:["arrow","arrow-left","arrow-up","arrow-down","success","cross","plus","minus","fail","circle"],outline:["location-o","like-o","star-o","phone-o","setting-o","fire-o","coupon-o","cart-o","shopping-cart-o","cart-circle-o","friends-o","comment-o","gem-o","gift-o","point-gift-o","send-gift-o","service-o","bag-o","todo-list-o","balance-list-o","close","clock-o","question-o","passed","add-o","gold-coin-o","info-o","play-circle-o","pause-circle-o","stop-circle-o","warning-o","phone-circle-o","music-o","smile-o","thumb-circle-o","comment-circle-o","browsing-history-o","underway-o","more-o","video-o","shop-o","shop-collect-o","share-o","chat-o","smile-comment-o","vip-card-o","award-o","diamond-o","volume-o","cluster-o","wap-home-o","photo-o","gift-card-o","expand-o","medal-o","good-job-o","manager-o","label-o","bookmark-o","bill-o","hot-o","hot-sale-o","new-o","new-arrival-o","goods-collect-o","eye-o","delete-o","font-o","balance-o","refund-o","birthday-cake-o","user-o","orders-o","tv-o","envelop-o","flag-o","flower-o","filter-o","bar-chart-o","chart-trending-o","brush-o","bullhorn-o","hotel-o","cashier-o","newspaper-o","warn-o","notes-o","calendar-o","bulb-o","user-circle-o","desktop-o","apps-o","home-o","back-top","search","points","edit","qr","qr-invalid","closed-eye","down","scan","revoke","free-postage","certificate","logistics","contact","cash-back-record","after-sale","exchange","upgrade","ellipsis","description","records","sign","completed","failure","ecard-pay","peer-pay","balance-pay","credit-pay","debit-pay","cash-on-deliver","other-pay","tosend","pending-payment","paid","aim","discount","idcard","replay","shrink","shield-o","guide-o","cash-o","link-o","miniprogram-o"],filled:["location","like","star","phone","setting","fire","coupon","cart","shopping-cart","cart-circle","friends","comment","gem","gift","point-gift","send-gift","service","bag","todo-list","balance-list","clear","clock","question","checked","add","gold-coin","info","play-circle","pause-circle","stop-circle","warning","phone-circle","music","smile","thumb-circle","comment-circle","browsing-history","underway","more","video","shop","shop-collect","share","chat","smile-comment","vip-card","award","diamond","volume","cluster","wap-home","photo","gift-card","expand","medal","good-job","manager","label","bookmark","bill","hot","hot-sale","new","new-arrival","goods-collect","eye","delete","font","wechat","wechat-pay","wechat-moments","qq","alipay","weibo","photograph","youzan-shield","umbrella-circle","bell","printer","map-marked","card","add-square","live","lock","audio","graphic","column","invitation","play","pause","stop","weapp-nav","ascending","descending","bars","wap-nav","enlarge","photo-fail","sort"]};const te=q({name:"index",setup(D){function F(p){const o=document.createElement("textarea");o.value=p,o.setAttribute("readonly",""),o.style.position="absolute",o.style.left="-9999px",document.body.appendChild(o);const n=document.getSelection();if(!n)return;const a=n.rangeCount>0?n.getRangeAt(0):!1;o.select(),document.execCommand("copy"),document.body.removeChild(o),a&&(n.removeAllRanges(),n.addRange(a))}const d=E({"zh-CN":{title:"\u56FE\u6807\u5217\u8868",badge:"\u5FBD\u6807\u63D0\u793A",basic:"\u57FA\u7840\u56FE\u6807",copied:"\u590D\u5236\u6210\u529F",outline:"\u7EBF\u6846\u98CE\u683C",filled:"\u5B9E\u5E95\u98CE\u683C",demo:"\u7528\u6CD5\u793A\u4F8B",color:"\u56FE\u6807\u989C\u8272",size:"\u56FE\u6807\u5927\u5C0F"},"en-US":{title:"Icon List",badge:"Show Badge",basic:"Basic",copied:"Copied",outline:"Outline",filled:"Filled",demo:"Demo",color:"Icon Color",size:"Icon Size"}}),w=A(0),i="chat-o",_=x("icon-demo.png"),r=(p,o={})=>{let n=`<van-icon name="${p}"`;"dot"in o&&(n=`${n} ${o.dot?"dot":""}`),"badge"in o&&(n=`${n} badge="${o.badge}"`),"color"in o&&(n=`${n} color="${o.color}"`),"size"in o&&(n=`${n} size="${o.size}"`),n=`${n} />`,F(n),B({type:"success",duration:1500,className:"demo-icon-notify",message:`${d("copied")}\uFF1A${n}`})};return(p,o)=>{const n=I("demo-block");return m(),g(e(z),{active:w.value,"onUpdate:active":o[9]||(o[9]=a=>w.value=a),sticky:""},{default:l(()=>[t(e(f),{class:"demo-icon-tab-panel",title:e(d)("demo")},{default:l(()=>[t(n,{title:e(d)("basicUsage")},{default:l(()=>[t(e(u),null,{default:l(()=>[t(e(c),{span:"6",onClick:o[0]||(o[0]=a=>r(i))},{default:l(()=>[t(e(s),{name:i})]),_:1}),t(e(c),{span:"6",onClick:o[1]||(o[1]=a=>r(e(_)))},{default:l(()=>[t(e(s),{name:e(_)},null,8,["name"])]),_:1})]),_:1})]),_:1},8,["title"]),t(n,{title:e(d)("badge")},{default:l(()=>[t(e(u),null,{default:l(()=>[t(e(c),{span:"6",onClick:o[2]||(o[2]=a=>r(i,{dot:!0}))},{default:l(()=>[t(e(s),{name:i,dot:""})]),_:1}),t(e(c),{span:"6",onClick:o[3]||(o[3]=a=>r(i,{badge:"9"}))},{default:l(()=>[t(e(s),{name:i,badge:"9"})]),_:1}),t(e(c),{span:"6",onClick:o[4]||(o[4]=a=>r(i,{badge:"99+"}))},{default:l(()=>[t(e(s),{name:i,badge:"99+"})]),_:1})]),_:1})]),_:1},8,["title"]),t(n,{title:e(d)("color")},{default:l(()=>[t(e(u),null,{default:l(()=>[t(e(c),{span:"6",onClick:o[5]||(o[5]=a=>r(i,{color:"#1989fa"}))},{default:l(()=>[t(e(s),{name:"cart-o",color:"#1989fa"})]),_:1}),t(e(c),{span:"6",onClick:o[6]||(o[6]=a=>r(i,{color:"#ee0a24"}))},{default:l(()=>[t(e(s),{name:"fire-o",color:"#ee0a24"})]),_:1})]),_:1})]),_:1},8,["title"]),t(n,{title:e(d)("size")},{default:l(()=>[t(e(u),null,{default:l(()=>[t(e(c),{span:"6",onClick:o[7]||(o[7]=a=>r(i,{size:"40"}))},{default:l(()=>[t(e(s),{name:i,size:"40"})]),_:1}),t(e(c),{span:"6",onClick:o[8]||(o[8]=a=>r(i,{size:"3rem"}))},{default:l(()=>[t(e(s),{name:i,size:"3rem"})]),_:1})]),_:1})]),_:1},8,["title"])]),_:1},8,["title"]),t(e(f),{class:"demo-icon-tab-panel",title:e(d)("basic")},{default:l(()=>[t(e(u),null,{default:l(()=>[(m(!0),b(h,null,v(e(C).basic,a=>(m(),g(e(c),{key:a,span:"6",onClick:$=>r(a)},{default:l(()=>[t(e(s),{name:a},null,8,["name"]),k("span",null,y(a),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["title"]),t(e(f),{class:"demo-icon-tab-panel",title:e(d)("outline")},{default:l(()=>[t(e(u),null,{default:l(()=>[(m(!0),b(h,null,v(e(C).outline,a=>(m(),g(e(c),{key:a,span:"6",onClick:$=>r(a)},{default:l(()=>[t(e(s),{name:a},null,8,["name"]),k("span",null,y(a),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["title"]),t(e(f),{class:"demo-icon-tab-panel",title:e(d)("filled")},{default:l(()=>[t(e(u),null,{default:l(()=>[(m(!0),b(h,null,v(e(C).filled,a=>(m(),g(e(c),{key:a,span:"6",onClick:$=>r(a)},{default:l(()=>[t(e(s),{name:a},null,8,["name"]),k("span",null,y(a),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["title"])]),_:1},8,["active"])}}});export{te as default};
