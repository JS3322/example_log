(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[228],{9672:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/5tudy/20220121",function(){return c(2217)}])},603:function(a,b,c){"use strict";c.d(b,{P4:function(){return i},Et:function(){return j},JY:function(){return k},Pg:function(){return l}});var d=c(5893),e=c(1664),f=c(5675),g=c(5115),h=c(917),i=function(a){var b=a.children,c=a.href,e=a.title,h=a.thumbnail;return(0,d.jsx)(g.xu,{w:"100%",textAlign:"center",children:(0,d.jsxs)(g.fG,{cursor:"pointer",children:[(0,d.jsx)(f.default,{src:h,alt:e,className:"grid-item-thumbnail",placeholder:"blur",loading:"lazy",unoptimized:!0}),(0,d.jsx)(g.AB,{href:c,target:"_blank",children:(0,d.jsx)(g.xv,{mt:2,children:e})}),(0,d.jsx)(g.xv,{fontSize:14,children:b})]})})},j=function(a){var b=a.children,c=a.id,h=a.title,i=a.thumbnail;return(0,d.jsx)(g.xu,{w:"100%",textAlign:"center",children:(0,d.jsx)(e.default,{href:"/works/".concat(c),children:(0,d.jsxs)(g.fG,{cursor:"pointer",children:[(0,d.jsx)(f.default,{src:i,alt:h,className:"grid-item-thumbnail",placeholder:"blur",unoptimized:!0}),(0,d.jsx)(g.AB,{href:"/works/".concat(c),children:(0,d.jsx)(g.xv,{mt:2,fontSize:20,children:h})}),(0,d.jsx)(g.xv,{fontSize:14,children:b})]})})})},k=function(a){var b=a.children,c=a.id,h=a.title,i=a.thumbnail;return(0,d.jsx)(g.xu,{w:"100%",textAlign:"center",children:(0,d.jsx)(e.default,{href:"/5tudy/".concat(c),children:(0,d.jsxs)(g.fG,{cursor:"pointer",children:[(0,d.jsx)(f.default,{unoptimized:!0,src:i,alt:h,className:"grid-item-thumbnail",placeholder:"blur"}),(0,d.jsx)(g.AB,{href:"/5tudy/".concat(c),children:(0,d.jsx)(g.xv,{mt:2,fontSize:20,children:h})}),(0,d.jsx)(g.xv,{fontSize:14,children:b})]})})})},l=function(){return(0,d.jsx)(h.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})}},2857:function(a,b,c){"use strict";var d=c(5893),e=c(3319),f=c(9008),g=c(603),h={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};b.Z=function(a){var b=a.children,c=a.title;return(0,d.jsx)(e.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:h,transition:{duration:0.4,type:"easeInOut"},style:{position:"relative"},children:(0,d.jsxs)(d.Fragment,{children:[c&&(0,d.jsxs)(f.default,{children:[(0,d.jsxs)("title",{children:[c," - Clean Code"]}),(0,d.jsx)("meta",{property:"og:title",content:c})]}),b,(0,d.jsx)(g.Pg,{})]})})}},117:function(a,b,c){"use strict";c.d(b,{h_:function(){return u},Dx:function(){return r},zc:function(){return s},WZ:function(){return t}});var d=c(5893),e=c(1664),f=c(6052),g=c(5031),h=c(7294),i=c(7375);function j(){return(j=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function k(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}var l=["htmlWidth","htmlHeight","alt"],m=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],n=h.forwardRef(function(a,b){var c=a.htmlWidth,d=a.htmlHeight,e=a.alt,f=k(a,l);return h.createElement("img",j({width:c,height:d,ref:b,alt:e},f))}),o=(0,f.Gp)(function(a,b){var c,d,e,l,o,p,q,r,s,t,u,v,w,x,y,z=a.fallbackSrc,A=a.fallback,B=a.src,C=a.srcSet,D=a.align,E=a.fit,F=a.loading,G=a.ignoreFallback,H=a.crossOrigin,I=k(a,m),J=null!=F||G|| void 0===z&& void 0===A,K=(d=(c=j({},a,{ignoreFallback:J})).loading,e=c.src,l=c.srcSet,o=c.onLoad,p=c.onError,q=c.crossOrigin,r=c.sizes,s=c.ignoreFallback,t=(0,h.useState)("pending"),u=t[0],v=t[1],(0,h.useEffect)(function(){v(e?"loading":"pending")},[e]),w=(0,h.useRef)(),x=(0,h.useCallback)(function(){if(e){y();var a=new Image();a.src=e,q&&(a.crossOrigin=q),l&&(a.srcset=l),r&&(a.sizes=r),d&&(a.loading=d),a.onload=function(a){y(),v("loaded"),null==o||o(a)},a.onerror=function(a){y(),v("failed"),null==p||p(a)},w.current=a}},[e,q,l,r,o,p,d]),y=function(){w.current&&(w.current.onload=null,w.current.onerror=null,w.current=null)},(0,i.Gw)(function(){if(!s)return"loading"===u&&x(),function(){y()}},[u,x,s]),s?"loaded":u),L=j({ref:b,objectFit:E,objectPosition:D},J?I:(0,g.CE)(I,["onError","onLoad"]));return"loaded"!==K?A||h.createElement(f.m$.img,j({as:n,className:"chakra-image__placeholder",src:z},L)):h.createElement(f.m$.img,j({as:n,src:B,srcSet:C,crossOrigin:H,loading:F,className:"chakra-image"},L))});g.Ts&&(o.displayName="Image");var p=c(5115),q=c(1277),r=function(a){var b=a.children;return(0,d.jsxs)(p.xu,{children:[(0,d.jsx)(e.default,{href:"/works",children:(0,d.jsx)(p.rU,{children:"Works"})}),(0,d.jsxs)("span",{children:[" ",(0,d.jsx)(q.XC,{})," "]}),(0,d.jsx)(p.X6,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:b})]})},s=function(a){var b=a.children;return(0,d.jsxs)(p.xu,{children:[(0,d.jsx)(e.default,{href:"/5tudy",children:(0,d.jsx)(p.rU,{children:"5tudy"})}),(0,d.jsxs)("span",{children:[" ",(0,d.jsx)(q.XC,{})," "]}),(0,d.jsx)(p.X6,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:b})]})},t=function(a){var b=a.src,c=a.alt;return(0,d.jsx)(o,{borderRadius:"lg",w:"full",src:b,alt:c,mb:4})},u=function(a){var b=a.children;return(0,d.jsx)(p.Ct,{colorScheme:"green",mr:2,children:b})}},2217:function(a,b,c){"use strict";c.r(b);var d=c(5893),e=c(5115),f=c(2857),g=c(117);b.default=function(){return(0,d.jsx)(f.Z,{title:"20220121",children:(0,d.jsxs)(e.W2,{children:[(0,d.jsx)(g.zc,{children:"트랜잭션"}),(0,d.jsx)(g.WZ,{src:"/images/5tudy/20220121.png",alt:"5tudy"}),(0,d.jsxs)(e.QI,{my:4,children:[(0,d.jsx)(e.HC,{children:"데이터베이스 시스템에서 하나의 논리적 기능을 정상적으로 수행하기 위한 작업의 기본단위."}),(0,d.jsx)(e.HC,{children:"Atomicity 원자성 : 부분 완료가 아닌 모두 성공적으로 완료되거나 롤백."}),(0,d.jsx)(e.HC,{children:"Consistency 일관성 : 트랜잭션 시작과 완료 시점 모두가 일관성 있고 손상이 없어야 함."}),(0,d.jsx)(e.HC,{children:"Isolaction 격리성 : 개별 트랜잭션 결과는 트랜잭션이 성공, commit하기 전까지 열려있는 다른 트랜잭션에서 볼 수 없어야 함."}),(0,d.jsx)(e.HC,{children:"Durability 지속성 : 트랜잭션 commit은 영구적."}),(0,d.jsx)(e.HC,{children:"트랜잭션 동시성 기법으로는 모든 트랜잭션을 Lock과 Unlock로 나누어 직렬성을 보장하는 2 Phase Locking, 데이터베이스에서 부여되는 식별자인 Timestamp를 이용하여 시간대 별로 직렬화를 시켜 동시성을 제어하는 Timestamp Ordering, 트랜잭션을 수행하는 동안 어떠한 검증도 수행하지 않고 트랜잭션 종료 시 동시성 검증을 수행하는 낙관적 검증기법이 있음."})]})]})})}}},function(a){a.O(0,[774,888,179],function(){return a(a.s=9672)}),_N_E=a.O()}])