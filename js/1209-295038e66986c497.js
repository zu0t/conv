"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1209],{90976:function(e,t,n){n.d(t,{B:function(){return a}});var r=n(2265),i=n(98324),o=n(1584),l=n(71538);function a(e){let t=e+"CollectionProvider",[n,a]=(0,i.b)(t),[f,c]=n(t,{collectionRef:{current:null},itemMap:new Map}),u=e+"CollectionSlot",s=r.forwardRef((e,t)=>{let{scope:n,children:i}=e,a=c(u,n),f=(0,o.e)(t,a.collectionRef);return r.createElement(l.g7,{ref:f},i)}),d=e+"CollectionItemSlot",p="data-radix-collection-item";return[{Provider:e=>{let{scope:t,children:n}=e,i=r.useRef(null),o=r.useRef(new Map).current;return r.createElement(f,{scope:t,itemMap:o,collectionRef:i},n)},Slot:s,ItemSlot:r.forwardRef((e,t)=>{let{scope:n,children:i,...a}=e,f=r.useRef(null),u=(0,o.e)(t,f),s=c(d,n);return r.useEffect(()=>(s.itemMap.set(f,{ref:f,...a}),()=>void s.itemMap.delete(f))),r.createElement(l.g7,{[p]:"",ref:u},i)})},function(t){let n=c(e+"CollectionConsumer",t);return r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${p}]`));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},a]}},87513:function(e,t,n){n.d(t,{gm:function(){return o}});var r=n(2265);let i=(0,r.createContext)(void 0);function o(e){let t=(0,r.useContext)(i);return e||t||"ltr"}},25510:function(e,t,n){n.d(t,{ee:function(){return e$},Eh:function(){return eV},VY:function(){return e_},fC:function(){return eF},D7:function(){return eA}});var r=n(22988),i=n(2265);let o=["top","right","bottom","left"],l=Math.min,a=Math.max,f=Math.round,c=Math.floor,u=e=>({x:e,y:e}),s={left:"right",right:"left",bottom:"top",top:"bottom"},d={start:"end",end:"start"};function p(e,t){return"function"==typeof e?e(t):e}function h(e){return e.split("-")[0]}function m(e){return e.split("-")[1]}function g(e){return"x"===e?"y":"x"}function y(e){return"y"===e?"height":"width"}function w(e){return["top","bottom"].includes(h(e))?"y":"x"}function v(e){return e.replace(/start|end/g,e=>d[e])}function x(e){return e.replace(/left|right|bottom|top/g,e=>s[e])}function b(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function R(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function A(e,t,n){let r,{reference:i,floating:o}=e,l=w(t),a=g(w(t)),f=y(a),c=h(t),u="y"===l,s=i.x+i.width/2-o.width/2,d=i.y+i.height/2-o.height/2,p=i[f]/2-o[f]/2;switch(c){case"top":r={x:s,y:i.y-o.height};break;case"bottom":r={x:s,y:i.y+i.height};break;case"right":r={x:i.x+i.width,y:d};break;case"left":r={x:i.x-o.width,y:d};break;default:r={x:i.x,y:i.y}}switch(m(t)){case"start":r[a]-=p*(n&&u?-1:1);break;case"end":r[a]+=p*(n&&u?-1:1)}return r}let E=async(e,t,n)=>{let{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:l}=n,a=o.filter(Boolean),f=await (null==l.isRTL?void 0:l.isRTL(t)),c=await l.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:s}=A(c,r,f),d=r,p={},h=0;for(let n=0;n<a.length;n++){let{name:o,fn:m}=a[n],{x:g,y:y,data:w,reset:v}=await m({x:u,y:s,initialPlacement:r,placement:d,strategy:i,middlewareData:p,rects:c,platform:l,elements:{reference:e,floating:t}});u=null!=g?g:u,s=null!=y?y:s,p={...p,[o]:{...p[o],...w}},v&&h<=50&&(h++,"object"==typeof v&&(v.placement&&(d=v.placement),v.rects&&(c=!0===v.rects?await l.getElementRects({reference:e,floating:t,strategy:i}):v.rects),{x:u,y:s}=A(c,d,f)),n=-1)}return{x:u,y:s,placement:d,strategy:i,middlewareData:p}};async function S(e,t){var n;void 0===t&&(t={});let{x:r,y:i,platform:o,rects:l,elements:a,strategy:f}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:s="floating",altBoundary:d=!1,padding:h=0}=p(t,e),m=b(h),g=a[d?"floating"===s?"reference":"floating":s],y=R(await o.getClippingRect({element:null==(n=await (null==o.isElement?void 0:o.isElement(g)))||n?g:g.contextElement||await (null==o.getDocumentElement?void 0:o.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:f})),w="floating"===s?{...l.floating,x:r,y:i}:l.reference,v=await (null==o.getOffsetParent?void 0:o.getOffsetParent(a.floating)),x=await (null==o.isElement?void 0:o.isElement(v))&&await (null==o.getScale?void 0:o.getScale(v))||{x:1,y:1},A=R(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:v,strategy:f}):w);return{top:(y.top-A.top+m.top)/x.y,bottom:(A.bottom-y.bottom+m.bottom)/x.y,left:(y.left-A.left+m.left)/x.x,right:(A.right-y.right+m.right)/x.x}}function C(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function P(e){return o.some(t=>e[t]>=0)}async function O(e,t){let{placement:n,platform:r,elements:i}=e,o=await (null==r.isRTL?void 0:r.isRTL(i.floating)),l=h(n),a=m(n),f="y"===w(n),c=["left","top"].includes(l)?-1:1,u=o&&f?-1:1,s=p(t,e),{mainAxis:d,crossAxis:g,alignmentAxis:y}="number"==typeof s?{mainAxis:s,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...s};return a&&"number"==typeof y&&(g="end"===a?-1*y:y),f?{x:g*u,y:d*c}:{x:d*c,y:g*u}}function L(e){return H(e)?(e.nodeName||"").toLowerCase():"#document"}function T(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function k(e){var t;return null==(t=(H(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function H(e){return e instanceof Node||e instanceof T(e).Node}function M(e){return e instanceof Element||e instanceof T(e).Element}function W(e){return e instanceof HTMLElement||e instanceof T(e).HTMLElement}function D(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof T(e).ShadowRoot)}function F(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=B(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function $(e){let t=V(),n=B(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(e=>(n.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(n.contain||"").includes(e))}function _(e){let t=N(e);for(;W(t)&&!z(t);){if($(t))return t;t=N(t)}return null}function V(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function z(e){return["html","body","#document"].includes(L(e))}function B(e){return T(e).getComputedStyle(e)}function j(e){return M(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function N(e){if("html"===L(e))return e;let t=e.assignedSlot||e.parentNode||D(e)&&e.host||k(e);return D(t)?t.host:t}function I(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);let i=function e(t){let n=N(t);return z(n)?t.ownerDocument?t.ownerDocument.body:t.body:W(n)&&F(n)?n:e(n)}(e),o=i===(null==(r=e.ownerDocument)?void 0:r.body),l=T(i);return o?t.concat(l,l.visualViewport||[],F(i)?i:[],l.frameElement&&n?I(l.frameElement):[]):t.concat(i,I(i,[],n))}function Y(e){let t=B(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=W(e),o=i?e.offsetWidth:n,l=i?e.offsetHeight:r,a=f(n)!==o||f(r)!==l;return a&&(n=o,r=l),{width:n,height:r,$:a}}function Z(e){return M(e)?e:e.contextElement}function X(e){let t=Z(e);if(!W(t))return u(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:o}=Y(t),l=(o?f(n.width):n.width)/r,a=(o?f(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),a&&Number.isFinite(a)||(a=1),{x:l,y:a}}let q=u(0);function G(e){let t=T(e);return V()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:q}function J(e,t,n,r){var i;void 0===t&&(t=!1),void 0===n&&(n=!1);let o=e.getBoundingClientRect(),l=Z(e),a=u(1);t&&(r?M(r)&&(a=X(r)):a=X(e));let f=(void 0===(i=n)&&(i=!1),r&&(!i||r===T(l))&&i)?G(l):u(0),c=(o.left+f.x)/a.x,s=(o.top+f.y)/a.y,d=o.width/a.x,p=o.height/a.y;if(l){let e=T(l),t=r&&M(r)?T(r):r,n=e.frameElement;for(;n&&r&&t!==e;){let e=X(n),t=n.getBoundingClientRect(),r=B(n),i=t.left+(n.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(n.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,s*=e.y,d*=e.x,p*=e.y,c+=i,s+=o,n=T(n).frameElement}}return R({width:d,height:p,x:c,y:s})}let K=[":popover-open",":modal"];function Q(e){let t=!1,n=0,r=0;if(K.forEach(n=>{!function(n){try{t=t||e.matches(n)}catch(e){}}(n)}),t){let t=_(e);if(t){let e=t.getBoundingClientRect();n=e.x,r=e.y}}return[t,n,r]}function U(e){return J(k(e)).left+j(e).scrollLeft}function ee(e,t,n){let r;if("viewport"===t)r=function(e,t){let n=T(e),r=k(e),i=n.visualViewport,o=r.clientWidth,l=r.clientHeight,a=0,f=0;if(i){o=i.width,l=i.height;let e=V();(!e||e&&"fixed"===t)&&(a=i.offsetLeft,f=i.offsetTop)}return{width:o,height:l,x:a,y:f}}(e,n);else if("document"===t)r=function(e){let t=k(e),n=j(e),r=e.ownerDocument.body,i=a(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=a(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),l=-n.scrollLeft+U(e),f=-n.scrollTop;return"rtl"===B(r).direction&&(l+=a(t.clientWidth,r.clientWidth)-i),{width:i,height:o,x:l,y:f}}(k(e));else if(M(t))r=function(e,t){let n=J(e,!0,"fixed"===t),r=n.top+e.clientTop,i=n.left+e.clientLeft,o=W(e)?X(e):u(1),l=e.clientWidth*o.x;return{width:l,height:e.clientHeight*o.y,x:i*o.x,y:r*o.y}}(t,n);else{let n=G(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return R(r)}function et(e,t){return W(e)&&"fixed"!==B(e).position?t?t(e):e.offsetParent:null}function en(e,t){let n=T(e);if(!W(e))return n;let r=et(e,t);for(;r&&["table","td","th"].includes(L(r))&&"static"===B(r).position;)r=et(r,t);return r&&("html"===L(r)||"body"===L(r)&&"static"===B(r).position&&!$(r))?n:r||_(e)||n}let er=async function(e){let t=this.getOffsetParent||en,n=this.getDimensions;return{reference:function(e,t,n,r){let i=W(t),o=k(t),l="fixed"===n,a=J(e,!0,l,t),f={scrollLeft:0,scrollTop:0},c=u(0);if(i||!i&&!l){if(("body"!==L(t)||F(o))&&(f=j(t)),i){let e=J(t,!0,l,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else o&&(c.x=U(o))}let s=a.left+f.scrollLeft-c.x,d=a.top+f.scrollTop-c.y,[p,h,m]=Q(r);return p&&(s+=h,d+=m,i&&(s+=t.clientLeft,d+=t.clientTop)),{x:s,y:d,width:a.width,height:a.height}}(e.reference,await t(e.floating),e.strategy,e.floating),floating:{x:0,y:0,...await n(e.floating)}}},ei={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,o=k(r),[l]=t?Q(t.floating):[!1];if(r===o||l)return n;let a={scrollLeft:0,scrollTop:0},f=u(1),c=u(0),s=W(r);if((s||!s&&"fixed"!==i)&&(("body"!==L(r)||F(o))&&(a=j(r)),W(r))){let e=J(r);f=X(r),c.x=e.x+r.clientLeft,c.y=e.y+r.clientTop}return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-a.scrollLeft*f.x+c.x,y:n.y*f.y-a.scrollTop*f.y+c.y}},getDocumentElement:k,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,o=[..."clippingAncestors"===n?function(e,t){let n=t.get(e);if(n)return n;let r=I(e,[],!1).filter(e=>M(e)&&"body"!==L(e)),i=null,o="fixed"===B(e).position,l=o?N(e):e;for(;M(l)&&!z(l);){let t=B(l),n=$(l);n||"fixed"!==t.position||(i=null),(o?!n&&!i:!n&&"static"===t.position&&!!i&&["absolute","fixed"].includes(i.position)||F(l)&&!n&&function e(t,n){let r=N(t);return!(r===n||!M(r)||z(r))&&("fixed"===B(r).position||e(r,n))}(e,l))?r=r.filter(e=>e!==l):i=t,l=N(l)}return t.set(e,r),r}(t,this._c):[].concat(n),r],f=o[0],c=o.reduce((e,n)=>{let r=ee(t,n,i);return e.top=a(r.top,e.top),e.right=l(r.right,e.right),e.bottom=l(r.bottom,e.bottom),e.left=a(r.left,e.left),e},ee(t,f,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:en,getElementRects:er,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:n}=Y(e);return{width:t,height:n}},getScale:X,isElement:M,isRTL:function(e){return"rtl"===B(e).direction}},eo=e=>({name:"arrow",options:e,async fn(t){let{x:n,y:r,placement:i,rects:o,platform:f,elements:c,middlewareData:u}=t,{element:s,padding:d=0}=p(e,t)||{};if(null==s)return{};let h=b(d),v={x:n,y:r},x=g(w(i)),R=y(x),A=await f.getDimensions(s),E="y"===x,S=E?"clientHeight":"clientWidth",C=o.reference[R]+o.reference[x]-v[x]-o.floating[R],P=v[x]-o.reference[x],O=await (null==f.getOffsetParent?void 0:f.getOffsetParent(s)),L=O?O[S]:0;L&&await (null==f.isElement?void 0:f.isElement(O))||(L=c.floating[S]||o.floating[R]);let T=L/2-A[R]/2-1,k=l(h[E?"top":"left"],T),H=l(h[E?"bottom":"right"],T),M=L-A[R]-H,W=L/2-A[R]/2+(C/2-P/2),D=a(k,l(W,M)),F=!u.arrow&&null!=m(i)&&W!==D&&o.reference[R]/2-(W<k?k:H)-A[R]/2<0,$=F?W<k?W-k:W-M:0;return{[x]:v[x]+$,data:{[x]:D,centerOffset:W-D-$,...F&&{alignmentOffset:$}},reset:F}}}),el=(e,t,n)=>{let r=new Map,i={platform:ei,...n},o={...i.platform,_c:r};return E(e,t,{...i,platform:o})};var ea=n(54887);let ef=e=>({name:"arrow",options:e,fn(t){let{element:n,padding:r}="function"==typeof e?e(t):e;return n&&({}).hasOwnProperty.call(n,"current")?null!=n.current?eo({element:n.current,padding:r}).fn(t):{}:n?eo({element:n,padding:r}).fn(t):{}}});var ec="undefined"!=typeof document?i.useLayoutEffect:i.useEffect;function eu(e,t){let n,r,i;if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if((n=e.length)!==t.length)return!1;for(r=n;0!=r--;)if(!eu(e[r],t[r]))return!1;return!0}if((n=(i=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!({}).hasOwnProperty.call(t,i[r]))return!1;for(r=n;0!=r--;){let n=i[r];if(("_owner"!==n||!e.$$typeof)&&!eu(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function es(e){return"undefined"==typeof window?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function ed(e,t){let n=es(e);return Math.round(t*n)/n}function ep(e){let t=i.useRef(e);return ec(()=>{t.current=e}),t}var eh=n(25171);let em=(0,i.forwardRef)((e,t)=>{let{children:n,width:o=10,height:l=5,...a}=e;return(0,i.createElement)(eh.WV.svg,(0,r.Z)({},a,{ref:t,width:o,height:l,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),e.asChild?n:(0,i.createElement)("polygon",{points:"0,0 30,0 15,10"}))});var eg=n(1584),ey=n(98324),ew=n(75137),ev=n(1336),ex=n(75238);let eb="Popper",[eR,eA]=(0,ey.b)(eb),[eE,eS]=eR(eb),eC=(0,i.forwardRef)((e,t)=>{let{__scopePopper:n,virtualRef:o,...l}=e,a=eS("PopperAnchor",n),f=(0,i.useRef)(null),c=(0,eg.e)(t,f);return(0,i.useEffect)(()=>{a.onAnchorChange((null==o?void 0:o.current)||f.current)}),o?null:(0,i.createElement)(eh.WV.div,(0,r.Z)({},l,{ref:c}))}),eP="PopperContent",[eO,eL]=eR(eP),eT=(0,i.forwardRef)((e,t)=>{var n,o,f,u,s,d,b,R,A,E,L,T,H,M;let{__scopePopper:W,side:D="bottom",sideOffset:F=0,align:$="center",alignOffset:_=0,arrowPadding:V=0,avoidCollisions:z=!0,collisionBoundary:B=[],collisionPadding:j=0,sticky:N="partial",hideWhenDetached:Y=!1,updatePositionStrategy:X="optimized",onPlaced:q,...G}=e,K=eS(eP,W),[Q,U]=(0,i.useState)(null),ee=(0,eg.e)(t,e=>U(e)),[et,en]=(0,i.useState)(null),er=(0,ex.t)(et),ei=null!==(n=null==er?void 0:er.width)&&void 0!==n?n:0,eo=null!==(o=null==er?void 0:er.height)&&void 0!==o?o:0,em="number"==typeof j?j:{top:0,right:0,bottom:0,left:0,...j},ey=Array.isArray(B)?B:[B],eb=ey.length>0,eR={padding:em,boundary:ey.filter(eM),altBoundary:eb},{refs:eA,floatingStyles:eE,placement:eC,isPositioned:eL,middlewareData:eT}=function(e){void 0===e&&(e={});let{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:l,floating:a}={},transform:f=!0,whileElementsMounted:c,open:u}=e,[s,d]=i.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,h]=i.useState(r);eu(p,r)||h(r);let[m,g]=i.useState(null),[y,w]=i.useState(null),v=i.useCallback(e=>{e!==A.current&&(A.current=e,g(e))},[]),x=i.useCallback(e=>{e!==E.current&&(E.current=e,w(e))},[]),b=l||m,R=a||y,A=i.useRef(null),E=i.useRef(null),S=i.useRef(s),C=null!=c,P=ep(c),O=ep(o),L=i.useCallback(()=>{if(!A.current||!E.current)return;let e={placement:t,strategy:n,middleware:p};O.current&&(e.platform=O.current),el(A.current,E.current,e).then(e=>{let t={...e,isPositioned:!0};T.current&&!eu(S.current,t)&&(S.current=t,ea.flushSync(()=>{d(t)}))})},[p,t,n,O]);ec(()=>{!1===u&&S.current.isPositioned&&(S.current.isPositioned=!1,d(e=>({...e,isPositioned:!1})))},[u]);let T=i.useRef(!1);ec(()=>(T.current=!0,()=>{T.current=!1}),[]),ec(()=>{if(b&&(A.current=b),R&&(E.current=R),b&&R){if(P.current)return P.current(b,R,L);L()}},[b,R,L,P,C]);let k=i.useMemo(()=>({reference:A,floating:E,setReference:v,setFloating:x}),[v,x]),H=i.useMemo(()=>({reference:b,floating:R}),[b,R]),M=i.useMemo(()=>{let e={position:n,left:0,top:0};if(!H.floating)return e;let t=ed(H.floating,s.x),r=ed(H.floating,s.y);return f?{...e,transform:"translate("+t+"px, "+r+"px)",...es(H.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}},[n,f,H.floating,s.x,s.y]);return i.useMemo(()=>({...s,update:L,refs:k,elements:H,floatingStyles:M}),[s,L,k,H,M])}({strategy:"fixed",placement:D+("center"!==$?"-"+$:""),whileElementsMounted:(...e)=>(function(e,t,n,r){let i;void 0===r&&(r={});let{ancestorScroll:o=!0,ancestorResize:f=!0,elementResize:u="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:d=!1}=r,p=Z(e),h=o||f?[...p?I(p):[],...I(t)]:[];h.forEach(e=>{o&&e.addEventListener("scroll",n,{passive:!0}),f&&e.addEventListener("resize",n)});let m=p&&s?function(e,t){let n,r=null,i=k(e);function o(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return!function f(u,s){void 0===u&&(u=!1),void 0===s&&(s=1),o();let{left:d,top:p,width:h,height:m}=e.getBoundingClientRect();if(u||t(),!h||!m)return;let g=c(p),y=c(i.clientWidth-(d+h)),w={rootMargin:-g+"px "+-y+"px "+-c(i.clientHeight-(p+m))+"px "+-c(d)+"px",threshold:a(0,l(1,s))||1},v=!0;function x(e){let t=e[0].intersectionRatio;if(t!==s){if(!v)return f();t?f(!1,t):n=setTimeout(()=>{f(!1,1e-7)},100)}v=!1}try{r=new IntersectionObserver(x,{...w,root:i.ownerDocument})}catch(e){r=new IntersectionObserver(x,w)}r.observe(e)}(!0),o}(p,n):null,g=-1,y=null;u&&(y=new ResizeObserver(e=>{let[r]=e;r&&r.target===p&&y&&(y.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var e;null==(e=y)||e.observe(t)})),n()}),p&&!d&&y.observe(p),y.observe(t));let w=d?J(e):null;return d&&function t(){let r=J(e);w&&(r.x!==w.x||r.y!==w.y||r.width!==w.width||r.height!==w.height)&&n(),w=r,i=requestAnimationFrame(t)}(),n(),()=>{var e;h.forEach(e=>{o&&e.removeEventListener("scroll",n),f&&e.removeEventListener("resize",n)}),null==m||m(),null==(e=y)||e.disconnect(),y=null,d&&cancelAnimationFrame(i)}})(...e,{animationFrame:"always"===X}),elements:{reference:K.anchor},middleware:[{name:"offset",options:A={mainAxis:F+eo,alignmentAxis:_},async fn(e){var t,n;let{x:r,y:i,placement:o,middlewareData:l}=e,a=await O(e,A);return o===(null==(t=l.offset)?void 0:t.placement)&&null!=(n=l.arrow)&&n.alignmentOffset?{}:{x:r+a.x,y:i+a.y,data:{...a,placement:o}}}},z&&{name:"shift",options:L={mainAxis:!0,crossAxis:!1,limiter:"partial"===N?(void 0===E&&(E={}),{options:E,fn(e){let{x:t,y:n,placement:r,rects:i,middlewareData:o}=e,{offset:l=0,mainAxis:a=!0,crossAxis:f=!0}=p(E,e),c={x:t,y:n},u=w(r),s=g(u),d=c[s],m=c[u],y=p(l,e),v="number"==typeof y?{mainAxis:y,crossAxis:0}:{mainAxis:0,crossAxis:0,...y};if(a){let e="y"===s?"height":"width",t=i.reference[s]-i.floating[e]+v.mainAxis,n=i.reference[s]+i.reference[e]-v.mainAxis;d<t?d=t:d>n&&(d=n)}if(f){var x,b;let e="y"===s?"width":"height",t=["top","left"].includes(h(r)),n=i.reference[u]-i.floating[e]+(t&&(null==(x=o.offset)?void 0:x[u])||0)+(t?0:v.crossAxis),l=i.reference[u]+i.reference[e]+(t?0:(null==(b=o.offset)?void 0:b[u])||0)-(t?v.crossAxis:0);m<n?m=n:m>l&&(m=l)}return{[s]:d,[u]:m}}}):void 0,...eR},async fn(e){let{x:t,y:n,placement:r}=e,{mainAxis:i=!0,crossAxis:o=!1,limiter:f={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...c}=p(L,e),u={x:t,y:n},s=await S(e,c),d=w(h(r)),m=g(d),y=u[m],v=u[d];if(i){let e="y"===m?"top":"left",t="y"===m?"bottom":"right",n=y+s[e],r=y-s[t];y=a(n,l(y,r))}if(o){let e="y"===d?"top":"left",t="y"===d?"bottom":"right",n=v+s[e],r=v-s[t];v=a(n,l(v,r))}let x=f.fn({...e,[m]:y,[d]:v});return{...x,data:{x:x.x-t,y:x.y-n}}}},z&&{name:"flip",options:T={...eR},async fn(e){var t,n,r,i,o;let{placement:l,middlewareData:a,rects:f,initialPlacement:c,platform:u,elements:s}=e,{mainAxis:d=!0,crossAxis:b=!0,fallbackPlacements:R,fallbackStrategy:A="bestFit",fallbackAxisSideDirection:E="none",flipAlignment:C=!0,...P}=p(T,e);if(null!=(t=a.arrow)&&t.alignmentOffset)return{};let O=h(l),L=h(c)===c,k=await (null==u.isRTL?void 0:u.isRTL(s.floating)),H=R||(L||!C?[x(c)]:function(e){let t=x(e);return[v(e),t,v(t)]}(c));R||"none"===E||H.push(...function(e,t,n,r){let i=m(e),o=function(e,t,n){let r=["left","right"],i=["right","left"];switch(e){case"top":case"bottom":if(n)return t?i:r;return t?r:i;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(h(e),"start"===n,r);return i&&(o=o.map(e=>e+"-"+i),t&&(o=o.concat(o.map(v)))),o}(c,C,E,k));let M=[c,...H],W=await S(e,P),D=[],F=(null==(n=a.flip)?void 0:n.overflows)||[];if(d&&D.push(W[O]),b){let e=function(e,t,n){void 0===n&&(n=!1);let r=m(e),i=g(w(e)),o=y(i),l="x"===i?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[o]>t.floating[o]&&(l=x(l)),[l,x(l)]}(l,f,k);D.push(W[e[0]],W[e[1]])}if(F=[...F,{placement:l,overflows:D}],!D.every(e=>e<=0)){let e=((null==(r=a.flip)?void 0:r.index)||0)+1,t=M[e];if(t)return{data:{index:e,overflows:F},reset:{placement:t}};let n=null==(i=F.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:i.placement;if(!n)switch(A){case"bestFit":{let e=null==(o=F.map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:o[0];e&&(n=e);break}case"initialPlacement":n=c}if(l!==n)return{reset:{placement:n}}}return{}}},{name:"size",options:H={...eR,apply:({elements:e,rects:t,availableWidth:n,availableHeight:r})=>{let{width:i,height:o}=t.reference,l=e.floating.style;l.setProperty("--radix-popper-available-width",`${n}px`),l.setProperty("--radix-popper-available-height",`${r}px`),l.setProperty("--radix-popper-anchor-width",`${i}px`),l.setProperty("--radix-popper-anchor-height",`${o}px`)}},async fn(e){let t,n;let{placement:r,rects:i,platform:o,elements:f}=e,{apply:c=()=>{},...u}=p(H,e),s=await S(e,u),d=h(r),g=m(r),y="y"===w(r),{width:v,height:x}=i.floating;"top"===d||"bottom"===d?(t=d,n=g===(await (null==o.isRTL?void 0:o.isRTL(f.floating))?"start":"end")?"left":"right"):(n=d,t="end"===g?"top":"bottom");let b=x-s[t],R=v-s[n],A=!e.middlewareData.shift,E=b,C=R;if(y){let e=v-s.left-s.right;C=g||A?l(R,e):e}else{let e=x-s.top-s.bottom;E=g||A?l(b,e):e}if(A&&!g){let e=a(s.left,0),t=a(s.right,0),n=a(s.top,0),r=a(s.bottom,0);y?C=v-2*(0!==e||0!==t?e+t:a(s.left,s.right)):E=x-2*(0!==n||0!==r?n+r:a(s.top,s.bottom))}await c({...e,availableWidth:C,availableHeight:E});let P=await o.getDimensions(f.floating);return v!==P.width||x!==P.height?{reset:{rects:!0}}:{}}},et&&ef({element:et,padding:V}),eW({arrowWidth:ei,arrowHeight:eo}),Y&&{name:"hide",options:M={strategy:"referenceHidden",...eR},async fn(e){let{rects:t}=e,{strategy:n="referenceHidden",...r}=p(M,e);switch(n){case"referenceHidden":{let n=C(await S(e,{...r,elementContext:"reference"}),t.reference);return{data:{referenceHiddenOffsets:n,referenceHidden:P(n)}}}case"escaped":{let n=C(await S(e,{...r,altBoundary:!0}),t.floating);return{data:{escapedOffsets:n,escaped:P(n)}}}default:return{}}}}]}),[ek,eH]=eD(eC),eF=(0,ew.W)(q);(0,ev.b)(()=>{eL&&(null==eF||eF())},[eL,eF]);let e$=null===(f=eT.arrow)||void 0===f?void 0:f.x,e_=null===(u=eT.arrow)||void 0===u?void 0:u.y,eV=(null===(s=eT.arrow)||void 0===s?void 0:s.centerOffset)!==0,[ez,eB]=(0,i.useState)();return(0,ev.b)(()=>{Q&&eB(window.getComputedStyle(Q).zIndex)},[Q]),(0,i.createElement)("div",{ref:eA.setFloating,"data-radix-popper-content-wrapper":"",style:{...eE,transform:eL?eE.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ez,"--radix-popper-transform-origin":[null===(d=eT.transformOrigin)||void 0===d?void 0:d.x,null===(b=eT.transformOrigin)||void 0===b?void 0:b.y].join(" ")},dir:e.dir},(0,i.createElement)(eO,{scope:W,placedSide:ek,onArrowChange:en,arrowX:e$,arrowY:e_,shouldHideArrow:eV},(0,i.createElement)(eh.WV.div,(0,r.Z)({"data-side":ek,"data-align":eH},G,{ref:ee,style:{...G.style,animation:eL?void 0:"none",opacity:null!==(R=eT.hide)&&void 0!==R&&R.referenceHidden?0:void 0}}))))}),ek={top:"bottom",right:"left",bottom:"top",left:"right"},eH=(0,i.forwardRef)(function(e,t){let{__scopePopper:n,...o}=e,l=eL("PopperArrow",n),a=ek[l.placedSide];return(0,i.createElement)("span",{ref:l.onArrowChange,style:{position:"absolute",left:l.arrowX,top:l.arrowY,[a]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[l.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[l.placedSide],visibility:l.shouldHideArrow?"hidden":void 0}},(0,i.createElement)(em,(0,r.Z)({},o,{ref:t,style:{...o.style,display:"block"}})))});function eM(e){return null!==e}let eW=e=>({name:"transformOrigin",options:e,fn(t){var n,r,i,o,l;let{placement:a,rects:f,middlewareData:c}=t,u=(null===(n=c.arrow)||void 0===n?void 0:n.centerOffset)!==0,s=u?0:e.arrowWidth,d=u?0:e.arrowHeight,[p,h]=eD(a),m={start:"0%",center:"50%",end:"100%"}[h],g=(null!==(r=null===(i=c.arrow)||void 0===i?void 0:i.x)&&void 0!==r?r:0)+s/2,y=(null!==(o=null===(l=c.arrow)||void 0===l?void 0:l.y)&&void 0!==o?o:0)+d/2,w="",v="";return"bottom"===p?(w=u?m:`${g}px`,v=`${-d}px`):"top"===p?(w=u?m:`${g}px`,v=`${f.floating.height+d}px`):"right"===p?(w=`${-d}px`,v=u?m:`${y}px`):"left"===p&&(w=`${f.floating.width+d}px`,v=u?m:`${y}px`),{data:{x:w,y:v}}}});function eD(e){let[t,n="center"]=e.split("-");return[t,n]}let eF=e=>{let{__scopePopper:t,children:n}=e,[r,o]=(0,i.useState)(null);return(0,i.createElement)(eE,{scope:t,anchor:r,onAnchorChange:o},n)},e$=eC,e_=eT,eV=eH},75238:function(e,t,n){n.d(t,{t:function(){return o}});var r=n(2265),i=n(1336);function o(e){let[t,n]=(0,r.useState)(void 0);return(0,i.b)(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,i;if(!Array.isArray(t)||!t.length)return;let o=t[0];if("borderBoxSize"in o){let e=o.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,i=t.blockSize}else r=e.offsetWidth,i=e.offsetHeight;n({width:r,height:i})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}},64374:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(17934).Z)("Check",[["polyline",{points:"20 6 9 17 4 12",key:"10jjfj"}]])}}]);