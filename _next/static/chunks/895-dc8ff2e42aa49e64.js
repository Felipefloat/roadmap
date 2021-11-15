(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[895],{6640:function(e,r,n){"use strict";n.d(r,{z:function(){return C}});var t=n(7294);function a(e,r){if(null!=e)if("function"!==typeof e)try{e.current=r}catch(n){throw new Error("Cannot assign value '"+r+"' to ref '"+e+"'")}else e(r)}function i(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.useMemo((()=>r.every((e=>null==e))?null:e=>{r.forEach((r=>{r&&a(r,e)}))}),r)}var l=n(63),o=n(3793),c=n(5284),s=n(1440),u=n(8554),f=n.n(u),d=n(4461),m=n(3808),p=n(8500);function h(){return(h=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var[v,g]=(0,p.k)({strict:!1,name:"ButtonGroupContext"}),y=(0,l.G)(((e,r)=>{var{size:n,colorScheme:a,variant:i,className:l,spacing:o="0.5rem",isAttached:c,isDisabled:u}=e,f=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["size","colorScheme","variant","className","spacing","isAttached","isDisabled"]),m=(0,d.cx)("chakra-button__group",l),p=t.useMemo((()=>({size:n,colorScheme:a,variant:i,isDisabled:u})),[n,a,i,u]),g={display:"inline-flex"};return g=h({},g,c?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:o}}),t.createElement(v,{value:p},t.createElement(s.m$.div,h({ref:r,role:"group",__css:g,className:m},f)))}));m.Ts&&(y.displayName="ButtonGroup");var b=n(917),x=n(5415);function O(){return(O=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var k=(0,b.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),E=(0,l.G)(((e,r)=>{var n=(0,o.m)("Spinner",e),a=(0,c.Lr)(e),{label:i="Loading...",thickness:l="2px",speed:u="0.45s",emptyColor:f="transparent",className:m}=a,p=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(a,["label","thickness","speed","emptyColor","className"]),h=(0,d.cx)("chakra-spinner",m),v=O({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:l,borderBottomColor:f,borderLeftColor:f,animation:k+" "+u+" linear infinite"},n);return t.createElement(s.m$.div,O({ref:r,__css:v,className:h},p),i&&t.createElement(x.TX,null,i))}));function _(){return(_=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}m.Ts&&(E.displayName="Spinner");var N=e=>{var{label:r,placement:n,children:a=t.createElement(E,{color:"currentColor",width:"1em",height:"1em"}),className:i,__css:l}=e,o=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["label","placement","spacing","children","className","__css"]),c=(0,d.cx)("chakra-button__spinner",i),u="start"===n?"marginEnd":"marginStart",f=t.useMemo((()=>_({display:"flex",alignItems:"center",position:r?"relative":"absolute",[u]:r?"0.5rem":0,fontSize:"1em",lineHeight:"normal"},l)),[l,r,u]);return t.createElement(s.m$.div,_({className:c},o,{__css:f}),a)};function j(){return(j=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}m.Ts&&(N.displayName="ButtonSpinner");var w=e=>{var{children:r,className:n}=e,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","className"]),i=t.isValidElement(r)?t.cloneElement(r,{"aria-hidden":!0,focusable:!1}):r,l=(0,d.cx)("chakra-button__icon",n);return t.createElement(s.m$.span,j({display:"inline-flex",alignSelf:"center",flexShrink:0},a,{className:l}),i)};function S(){return(S=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}m.Ts&&(w.displayName="ButtonIcon");var C=(0,l.G)(((e,r)=>{var n=g(),a=(0,o.m)("Button",S({},n,e)),l=(0,c.Lr)(e),{isDisabled:u=(null==n?void 0:n.isDisabled),isLoading:m,isActive:p,isFullWidth:h,children:v,leftIcon:y,rightIcon:b,loadingText:x,iconSpacing:O="0.5rem",type:k,spinner:E,spinnerPlacement:_="start",className:j,as:w}=l,C=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(l,["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"]),T=t.useMemo((()=>{var e,r=f()({},null!=(e=null==a?void 0:a._focus)?e:{},{zIndex:1});return S({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:h?"100%":"auto"},a,!!n&&{_focus:r})}),[a,n,h]),{ref:L,type:I}=function(e){var[r,n]=t.useState(!e);return{ref:t.useCallback((e=>{e&&n("BUTTON"===e.tagName)}),[]),type:r?"button":void 0}}(w),W={rightIcon:b,leftIcon:y,iconSpacing:O,children:v};return t.createElement(s.m$.button,S({disabled:u||m,ref:i(r,L),as:w,type:null!=k?k:I,"data-active":(0,d.PB)(p),"data-loading":(0,d.PB)(m),__css:T,className:(0,d.cx)("chakra-button",j)},C),m&&"start"===_&&t.createElement(N,{className:"chakra-button__spinner--start",label:x,placement:"start"},E),m?x||t.createElement(s.m$.span,{opacity:0},t.createElement(B,W)):t.createElement(B,W),m&&"end"===_&&t.createElement(N,{className:"chakra-button__spinner--end",label:x,placement:"end"},E))}));function B(e){var{leftIcon:r,rightIcon:n,children:a,iconSpacing:i}=e;return t.createElement(t.Fragment,null,r&&t.createElement(w,{marginEnd:i},r),a,n&&t.createElement(w,{marginStart:i},n))}m.Ts&&(C.displayName="Button")},8420:function(e,r,n){"use strict";n.d(r,{h:function(){return c}});var t=n(63),a=n(3808),i=n(7294),l=n(6640);function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var c=(0,t.G)(((e,r)=>{var{icon:n,children:t,isRound:a,"aria-label":c}=e,s=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["icon","children","isRound","aria-label"]),u=n||t,f=i.isValidElement(u)?i.cloneElement(u,{"aria-hidden":!0,focusable:!1}):null;return i.createElement(l.z,o({padding:"0",borderRadius:a?"full":void 0,ref:r,"aria-label":c},s),f)}));a.Ts&&(c.displayName="IconButton")},1033:function(e,r,n){"use strict";n.d(r,{P:function(){return d}});var t=n(58),a=n(63),i=n(3793),l=n(5284),o=n(1440),c=n(3808),s=n(7294);function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var f=e=>s.createElement(t.J,u({focusable:"false","aria-hidden":!0},e),s.createElement("path",{fill:"currentColor",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"})),d=(0,a.G)(((e,r)=>{var n=(0,i.m)("CloseButton",e),t=(0,l.Lr)(e),{children:a,isDisabled:c,__css:d}=t,m=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(t,["children","isDisabled","__css"]);return s.createElement(o.m$.button,u({type:"button","aria-label":"Close",ref:r,disabled:c,__css:u({},{outline:0,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},n,d)},m),a||s.createElement(f,{width:"1em",height:"1em"}))}));c.Ts&&(d.displayName="CloseButton")},8327:function(e,r,n){"use strict";n.d(r,{G:function(){return a}});var t=n(7294),a=n(4461).jU?t.useLayoutEffect:t.useEffect},9867:function(e,r,n){"use strict";n.d(r,{I:function(){return c}});var t=n(63),a=n(3808),i=n(7294),l=n(58);function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function c(e){var{viewBox:r="0 0 24 24",d:n,path:c,displayName:s,defaultProps:u={}}=e,f=(0,t.G)(((e,t)=>i.createElement(l.J,o({ref:t,viewBox:r},u,e),null!=c?c:i.createElement("path",{fill:"currentColor",d:n}))));return a.Ts&&(f.displayName=s),f}},58:function(e,r,n){"use strict";n.d(r,{J:function(){return u}});var t=n(63),a=n(1440),i=n(4461),l=n(3808),o=n(7294);function c(){return(c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var s={path:o.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},o.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),o.createElement("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),o.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})),viewBox:"0 0 24 24"},u=(0,t.G)(((e,r)=>{var{as:n,viewBox:t,color:l="currentColor",focusable:u=!1,children:f,className:d,__css:m}=e,p=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["as","viewBox","color","focusable","children","className","__css"]),h={ref:r,focusable:u,className:(0,i.cx)("chakra-icon",d),__css:c({w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:l},m)},v=null!=t?t:s.viewBox;if(n&&"string"!==typeof n)return o.createElement(a.m$.svg,c({as:n},h,p));var g=null!=f?f:s.path;return o.createElement(a.m$.svg,c({verticalAlign:"middle",viewBox:v},h,p),g)}));l.Ts&&(u.displayName="Icon")},1475:function(e,r,n){"use strict";n.d(r,{U:function(){return t}});var t=(0,n(9867).I)({displayName:"HamburgerIcon",viewBox:"0 0 24 24",d:"M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"})},8322:function(e,r,n){"use strict";n.d(r,{E:function(){return d}});var t=n(63),a=n(1440),i=n(4651),l=n(3808),o=n(7294),c=n(8327);function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function u(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}var f=o.forwardRef(((e,r)=>{var{htmlWidth:n,htmlHeight:t,alt:a}=e,i=u(e,["htmlWidth","htmlHeight","alt"]);return o.createElement("img",s({width:n,height:t,ref:r,alt:a},i))})),d=(0,t.G)(((e,r)=>{var{fallbackSrc:n,fallback:t,src:l,srcSet:d,align:m,fit:p,loading:h,ignoreFallback:v,crossOrigin:g}=e,y=u(e,["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"]),b=null!=h||v||void 0===n&&void 0===t,x=function(e){var{loading:r,src:n,srcSet:t,onLoad:a,onError:i,crossOrigin:l,sizes:s,ignoreFallback:u}=e,[f,d]=(0,o.useState)("pending");(0,o.useEffect)((()=>{d(n?"loading":"pending")}),[n]);var m=(0,o.useRef)(),p=(0,o.useCallback)((()=>{if(n){h();var e=new Image;e.src=n,l&&(e.crossOrigin=l),t&&(e.srcset=t),s&&(e.sizes=s),r&&(e.loading=r),e.onload=e=>{h(),d("loaded"),null==a||a(e)},e.onerror=e=>{h(),d("failed"),null==i||i(e)},m.current=e}}),[n,l,t,s,a,i,r]),h=()=>{m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,c.G)((()=>{if(!u)return"loading"===f&&p(),()=>{h()}}),[f,p,u]),u?"loaded":f}(s({},e,{ignoreFallback:b})),O=s({ref:r,objectFit:p,objectPosition:m},b?y:(0,i.CE)(y,["onError","onLoad"]));return"loaded"!==x?t||o.createElement(a.m$.img,s({as:f,className:"chakra-image__placeholder",src:n},O)):o.createElement(a.m$.img,s({as:f,src:l,srcSet:d,crossOrigin:g,loading:h,className:"chakra-image"},O))}));l.Ts&&(d.displayName="Image")},8017:function(e,r,n){"use strict";n.d(r,{xu:function(){return s}});var t=n(1440),a=n(63),i=n(3808),l=n(7294);function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function c(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}var s=(0,t.m$)("div");i.Ts&&(s.displayName="Box");var u=(0,a.G)(((e,r)=>{var{size:n,centerContent:t=!0}=e,a=c(e,["size","centerContent"]),i=t?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return l.createElement(s,o({ref:r,boxSize:n,__css:o({},i,{flexShrink:0,flexGrow:0})},a))}));i.Ts&&(u.displayName="Square");var f=(0,a.G)(((e,r)=>{var{size:n}=e,t=c(e,["size"]);return l.createElement(u,o({size:n,ref:r,borderRadius:"9999px"},t))}));i.Ts&&(f.displayName="Circle")},3850:function(e,r,n){"use strict";n.d(r,{W:function(){return f}});var t=n(63),a=n(5284),i=n(3793),l=n(1440),o=n(4461),c=n(3808),s=n(7294);function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var f=(0,t.G)(((e,r)=>{var n=(0,a.Lr)(e),{className:t,centerContent:c}=n,f=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(n,["className","centerContent"]),d=(0,i.m)("Container",e);return s.createElement(l.m$.div,u({ref:r,className:(0,o.cx)("chakra-container",t)},f,{__css:u({},d,c&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));c.Ts&&(f.displayName="Container")},336:function(e,r,n){"use strict";n.d(r,{X:function(){return f}});var t=n(63),a=n(3793),i=n(5284),l=n(1440),o=n(4461),c=n(3808),s=n(7294);function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var f=(0,t.G)(((e,r)=>{var n=(0,a.m)("Heading",e),t=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}((0,i.Lr)(e),["className"]);return s.createElement(l.m$.h2,u({ref:r,className:(0,o.cx)("chakra-heading",e.className)},t,{__css:n}))}));c.Ts&&(f.displayName="Heading")},5079:function(e,r,n){"use strict";n.d(r,{Kq:function(){return p},cX:function(){return d},gC:function(){return v}});var t=n(1440),a=n(63),i=n(4461),l=n(3808),o=n(4255),c=n(7294),s=n(6678),u="& > *:not(style) ~ *:not(style)";function f(){return(f=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var d=e=>c.createElement(t.m$.div,f({className:"chakra-stack__divider"},e,{__css:f({},e.__css,{borderWidth:0,alignSelf:"stretch",borderColor:"inherit",width:"auto",height:"auto"})})),m=e=>c.createElement(t.m$.div,f({className:"chakra-stack__item"},e,{__css:f({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)})),p=(0,a.G)(((e,r)=>{var{isInline:n,direction:a,align:l,justify:d,spacing:p="0.5rem",wrap:h,children:v,divider:g,className:y,shouldWrapChildren:b}=e,x=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"]),O=n?"row":null!=a?a:"column",k=c.useMemo((()=>function(e){var{spacing:r,direction:n}=e,t={column:{marginTop:r,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:r},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:r,marginStart:0},"row-reverse":{marginTop:0,marginEnd:r,marginBottom:0,marginStart:0}};return{flexDirection:n,[u]:(0,s.XQ)(n,(e=>t[e]))}}({direction:O,spacing:p})),[O,p]),E=c.useMemo((()=>function(e){var{spacing:r,direction:n}=e,t={column:{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,s.XQ)(n,(e=>t[e]))}}({spacing:p,direction:O})),[p,O]),_=!!g,N=!b&&!_,j=(0,o.W)(v),w=N?j:j.map(((e,r)=>{var n="undefined"!==typeof e.key?e.key:r,t=r+1===j.length,a=b?c.createElement(m,{key:n},e):e;if(!_)return a;var i=t?null:c.cloneElement(g,{__css:E});return c.createElement(c.Fragment,{key:n},a,i)})),S=(0,i.cx)("chakra-stack",y);return c.createElement(t.m$.div,f({ref:r,display:"flex",alignItems:l,justifyContent:d,flexDirection:k.flexDirection,flexWrap:h,className:S,__css:_?{}:{[u]:k[u]}},x),w)}));l.Ts&&(p.displayName="Stack");var h=(0,a.G)(((e,r)=>c.createElement(p,f({align:"center"},e,{direction:"row",ref:r}))));l.Ts&&(h.displayName="HStack");var v=(0,a.G)(((e,r)=>c.createElement(p,f({align:"center"},e,{direction:"column",ref:r}))));l.Ts&&(v.displayName="VStack")},4255:function(e,r,n){"use strict";n.d(r,{W:function(){return a}});var t=n(7294);function a(e){return t.Children.toArray(e).filter((e=>t.isValidElement(e)))}},6678:function(e,r,n){"use strict";n.d(r,{XQ:function(){return i}});var t=n(3808),a=n(4651);Object.freeze(["base","sm","md","lg","xl","2xl"]);function i(e,r){return(0,t.kJ)(e)?e.map((e=>null===e?null:r(e))):(0,t.Kn)(e)?(0,a.Yd)(e).reduce(((n,t)=>(n[t]=r(e[t]),n)),{}):null!=e?r(e):null}},5415:function(e,r,n){"use strict";n.d(r,{TX:function(){return l}});var t=n(1440),a=n(3808),i={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},l=(0,t.m$)("span",{baseStyle:i});a.Ts&&(l.displayName="VisuallyHidden");var o=(0,t.m$)("input",{baseStyle:i});a.Ts&&(o.displayName="VisuallyHiddenInput")},9008:function(e,r,n){e.exports=n(5443)}}]);