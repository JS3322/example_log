(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[782],{2495:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/2018_NoncognitiveDiagnosisModule",function(){return c(2133)}])},603:function(a,b,c){"use strict";c.d(b,{P4:function(){return i},Et:function(){return j},JY:function(){return k},Pg:function(){return l}});var d=c(5893),e=c(1664),f=c(5675),g=c(5115),h=c(917),i=function(a){var b=a.children,c=a.href,e=a.title,h=a.thumbnail;return(0,d.jsx)(g.xu,{w:"100%",textAlign:"center",children:(0,d.jsxs)(g.fG,{cursor:"pointer",children:[(0,d.jsx)(f.default,{src:h,alt:e,className:"grid-item-thumbnail",placeholder:"blur",loading:"lazy",unoptimized:!0}),(0,d.jsx)(g.AB,{href:c,target:"_blank",children:(0,d.jsx)(g.xv,{mt:2,children:e})}),(0,d.jsx)(g.xv,{fontSize:14,children:b})]})})},j=function(a){var b=a.children,c=a.id,h=a.title,i=a.thumbnail;return(0,d.jsx)(g.xu,{w:"100%",textAlign:"center",children:(0,d.jsx)(e.default,{href:"/works/".concat(c),children:(0,d.jsxs)(g.fG,{cursor:"pointer",children:[(0,d.jsx)(f.default,{src:i,alt:h,className:"grid-item-thumbnail",placeholder:"blur",unoptimized:!0}),(0,d.jsx)(g.AB,{href:"/works/".concat(c),children:(0,d.jsx)(g.xv,{mt:2,fontSize:20,children:h})}),(0,d.jsx)(g.xv,{fontSize:14,children:b})]})})})},k=function(a){var b=a.children,c=a.id,h=a.title,i=a.thumbnail;return(0,d.jsx)(g.xu,{w:"100%",textAlign:"center",children:(0,d.jsx)(e.default,{href:"/5tudy/".concat(c),children:(0,d.jsxs)(g.fG,{cursor:"pointer",children:[(0,d.jsx)(f.default,{unoptimized:!0,src:i,alt:h,className:"grid-item-thumbnail",placeholder:"blur"}),(0,d.jsx)(g.AB,{href:"/5tudy/".concat(c),children:(0,d.jsx)(g.xv,{mt:2,fontSize:20,children:h})}),(0,d.jsx)(g.xv,{fontSize:14,children:b})]})})})},l=function(){return(0,d.jsx)(h.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})}},2857:function(a,b,c){"use strict";var d=c(5893),e=c(3319),f=c(9008),g=c(603),h={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};b.Z=function(a){var b=a.children,c=a.title;return(0,d.jsx)(e.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:h,transition:{duration:0.4,type:"easeInOut"},style:{position:"relative"},children:(0,d.jsxs)(d.Fragment,{children:[c&&(0,d.jsxs)(f.default,{children:[(0,d.jsxs)("title",{children:[c," - Clean Code"]}),(0,d.jsx)("meta",{property:"og:title",content:c})]}),b,(0,d.jsx)(g.Pg,{})]})})}},117:function(a,b,c){"use strict";c.d(b,{h_:function(){return u},Dx:function(){return r},zc:function(){return s},WZ:function(){return t}});var d=c(5893),e=c(1664),f=c(6052),g=c(5031),h=c(7294),i=c(7375);function j(){return(j=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function k(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}var l=["htmlWidth","htmlHeight","alt"],m=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],n=h.forwardRef(function(a,b){var c=a.htmlWidth,d=a.htmlHeight,e=a.alt,f=k(a,l);return h.createElement("img",j({width:c,height:d,ref:b,alt:e},f))}),o=(0,f.Gp)(function(a,b){var c,d,e,l,o,p,q,r,s,t,u,v,w,x,y,z=a.fallbackSrc,A=a.fallback,B=a.src,C=a.srcSet,D=a.align,E=a.fit,F=a.loading,G=a.ignoreFallback,H=a.crossOrigin,I=k(a,m),J=null!=F||G|| void 0===z&& void 0===A,K=(d=(c=j({},a,{ignoreFallback:J})).loading,e=c.src,l=c.srcSet,o=c.onLoad,p=c.onError,q=c.crossOrigin,r=c.sizes,s=c.ignoreFallback,t=(0,h.useState)("pending"),u=t[0],v=t[1],(0,h.useEffect)(function(){v(e?"loading":"pending")},[e]),w=(0,h.useRef)(),x=(0,h.useCallback)(function(){if(e){y();var a=new Image();a.src=e,q&&(a.crossOrigin=q),l&&(a.srcset=l),r&&(a.sizes=r),d&&(a.loading=d),a.onload=function(a){y(),v("loaded"),null==o||o(a)},a.onerror=function(a){y(),v("failed"),null==p||p(a)},w.current=a}},[e,q,l,r,o,p,d]),y=function(){w.current&&(w.current.onload=null,w.current.onerror=null,w.current=null)},(0,i.Gw)(function(){if(!s)return"loading"===u&&x(),function(){y()}},[u,x,s]),s?"loaded":u),L=j({ref:b,objectFit:E,objectPosition:D},J?I:(0,g.CE)(I,["onError","onLoad"]));return"loaded"!==K?A||h.createElement(f.m$.img,j({as:n,className:"chakra-image__placeholder",src:z},L)):h.createElement(f.m$.img,j({as:n,src:B,srcSet:C,crossOrigin:H,loading:F,className:"chakra-image"},L))});g.Ts&&(o.displayName="Image");var p=c(5115),q=c(1277),r=function(a){var b=a.children;return(0,d.jsxs)(p.xu,{children:[(0,d.jsx)(e.default,{href:"/works",children:(0,d.jsx)(p.rU,{children:"Works"})}),(0,d.jsxs)("span",{children:[" ",(0,d.jsx)(q.XC,{})," "]}),(0,d.jsx)(p.X6,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:b})]})},s=function(a){var b=a.children;return(0,d.jsxs)(p.xu,{children:[(0,d.jsx)(e.default,{href:"/5tudy",children:(0,d.jsx)(p.rU,{children:"5tudy"})}),(0,d.jsxs)("span",{children:[" ",(0,d.jsx)(q.XC,{})," "]}),(0,d.jsx)(p.X6,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:b})]})},t=function(a){var b=a.src,c=a.alt;return(0,d.jsx)(o,{borderRadius:"lg",w:"full",src:b,alt:c,mb:4})},u=function(a){var b=a.children;return(0,d.jsx)(p.Ct,{colorScheme:"green",mr:2,children:b})}},2133:function(a,b,c){"use strict";c.r(b);var d=c(5893),e=c(5115),f=c(5193),g=c(1664),h=c(1277),i=c(2857),j=c(117);b.default=function(){return(0,d.jsx)(i.Z,{title:"2018 비인지 진단 웹서비스 모듈",children:(0,d.jsxs)(e.W2,{children:[(0,d.jsxs)(j.Dx,{children:["비인지 진단 웹서비스 모듈 개발",(0,d.jsx)(e.Ct,{children:"2018"})]}),(0,d.jsx)(e.X6,{as:"h4",fontSize:16,my:6,children:(0,d.jsx)(e.M5,{children:"개요"})}),(0,d.jsx)(e.QI,{my:4,children:(0,d.jsx)(e.HC,{children:"진단 웹서비스 홈페이지 운영 및 결제, 쿠폰 등 모듈 개발"})}),(0,d.jsxs)(e.aV,{ml:4,my:4,children:[(0,d.jsxs)(e.HC,{children:[(0,d.jsx)(e.Ct,{mr:2,children:"Stack"}),(0,d.jsx)("span",{children:"Java6 | JavaScriptES5  "})]}),(0,d.jsxs)(e.HC,{children:[(0,d.jsx)(j.h_,{children:"ENV"}),(0,d.jsx)("span",{children:"Oracle DB 11g | Ojdbc6 | ajax3 | Tomcat7.5 | centOS7 | JSP | Junit4 | SVN | VScode"})]})]}),(0,d.jsx)(e.xu,{flexShrink:0,mt:{base:4,md:0},ml:{md:6},textAlign:"center",children:(0,d.jsx)(g.default,{href:"http://www.gritt.co.kr/",children:(0,d.jsx)(f.zx,{rightIcon:(0,d.jsx)(h.XC,{}),colorScheme:"teal",children:"Service Link"})})}),(0,d.jsx)(e.X6,{as:"h4",fontSize:16,my:6,children:(0,d.jsx)(e.M5,{children:"주요 업무"})}),(0,d.jsxs)(e.QI,{my:4,children:[(0,d.jsx)(e.HC,{children:"리포팅 PDF 출력 모듈 개발. DB View로 연산에 필요한 데이터 출력관리 및 계산에 필요한 데이터를 문자열 교체방식으로 변경하여 최적화하고 비동기, chart.js 튜닝하여 그래프 출력."}),(0,d.jsx)(e.HC,{children:"결제, 쿠폰, SMS, EMAIL 안내 모듈 개발 및 기존 솔루션을 유지하도록 인터페이스 다수 작업하여 코드 개선."}),(0,d.jsx)(e.HC,{children:"트래픽 분산. 동시 접속에 대해 모니터링 개발 및 tomcat worker에 로드밸런싱 튜닝으로 서버 죽는 현상, 데이터 트레픽 이슈 대응."})]}),(0,d.jsx)(j.WZ,{src:"/images/works/2018_NoncognitiveDiagnosisModule_contents_0001.png",alt:"2018_NoncognitiveDiagnosisModule"}),(0,d.jsx)(j.WZ,{src:"/images/works/2018_NoncognitiveDiagnosisModule_contents_0002.png",alt:"2018_NoncognitiveDiagnosisModule"})]})})}}},function(a){a.O(0,[774,888,179],function(){return a(a.s=2495)}),_N_E=a.O()}])