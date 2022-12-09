"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[29],{85165:function(e,t,r){r.d(t,{cU:function(){return U},i5:function(){return g},A0:function(){return d}});var n=r(1413),i=r(17592),a=r(57829),o=r(46417),s=(0,i.ZP)(a.Z,{shouldForwardProp:function(e){return"rounded"!==e}})((function(e){var t=e.rounded;return{display:"flex",listStyle:"none",alignItems:"center",justifyContent:"center","& li":{width:18,height:18,opacity:.32,cursor:"pointer"},"& li.slick-active":(0,n.Z)({opacity:1},t&&{"& .dotActive":{width:16,borderRadius:6}})}})),l=(0,i.ZP)("div")((function(){return{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}})),c=(0,i.ZP)("span")((function(e){var t=e.theme;return{width:8,height:8,borderRadius:"50%",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.short})}}));function d(e){var t=null===e||void 0===e?void 0:e.color,r=(null===e||void 0===e?void 0:e.rounded)||!1;return{appendDots:function(t){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(s,(0,n.Z)((0,n.Z)({rounded:r,component:"ul"},e),{},{children:t}))})},customPaging:function(){return(0,o.jsx)(l,{children:(0,o.jsx)(c,{className:"dotActive",sx:{bgcolor:t||"primary.main"}})})}}}var u=r(45987),m=r(19860),h=r(35898),x=r(24185),p=r(32913),v=["filled","customIcon","onNext","onPrevious","children"],f=(0,i.ZP)(p.w_,{shouldForwardProp:function(e){return"filled"!==e}})((function(e){var t=e.filled,r=e.theme;return(0,n.Z)({width:40,height:40,cursor:"pointer",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:r.palette.text.primary}},t&&{opacity:.48,borderRadius:1.5*Number(r.shape.borderRadius),color:r.palette.common.white,backgroundColor:r.palette.grey[900],"&:hover":{opacity:1,color:r.palette.common.white,backgroundColor:r.palette.grey[900]}})}));function g(e){var t=e.filled,r=void 0!==t&&t,i=e.customIcon,s=e.onNext,l=e.onPrevious,c=e.children,d=(0,u.Z)(e,v),x="rtl"===(0,m.Z)().direction,p={position:"absolute",mt:-2.5,top:"50%",zIndex:9};return c?(0,o.jsxs)(a.Z,(0,n.Z)((0,n.Z)({},d),{},{children:[(0,o.jsx)(a.Z,{className:"arrow left",sx:(0,n.Z)((0,n.Z)({},p),{},{left:0}),children:(0,o.jsx)(f,{filled:r,onClick:l,children:b(i,x)})}),c,(0,o.jsx)(a.Z,{className:"arrow right",sx:(0,n.Z)((0,n.Z)({},p),{},{right:0}),children:(0,o.jsx)(f,{filled:r,onClick:s,children:Z(i,x)})})]})):(0,o.jsxs)(h.Z,(0,n.Z)((0,n.Z)({direction:"row",spacing:1},d),{},{children:[(0,o.jsx)(f,{className:"arrow left",filled:r,onClick:l,children:b(i,x)}),(0,o.jsx)(f,{className:"arrow right",filled:r,onClick:s,children:Z(i,x)})]}))}var b=function(e,t){return(0,o.jsx)(x.Z,{icon:e||"eva:arrow-right-fill",sx:(0,n.Z)({width:20,height:20,transform:" scaleX(-1)"},t&&{transform:" scaleX(1)"})})},Z=function(e,t){return(0,o.jsx)(x.Z,{icon:e||"eva:arrow-right-fill",sx:(0,n.Z)({width:20,height:20},t&&{transform:" scaleX(-1)"})})},j=r(17551),y=r(47131),w=r(61113),k=["index","total","onNext","onPrevious","customIcon"],P=(0,i.ZP)(a.Z)((function(e){var t=e.theme;return{zIndex:9,display:"flex",alignItems:"center",position:"absolute",bottom:t.spacing(2),right:t.spacing(2),color:t.palette.common.white,borderRadius:t.shape.borderRadius,backgroundColor:(0,j.Fq)(t.palette.grey[900],.48)}})),C=(0,i.ZP)(y.Z)((function(e){return{padding:6,opacity:.48,color:e.theme.palette.common.white,"&:hover":{opacity:1}}}));function U(e){var t=e.index,r=e.total,i=e.onNext,a=e.onPrevious,s=e.customIcon,l=(0,u.Z)(e,k),c="rtl"===(0,m.Z)().direction;return(0,o.jsxs)(P,(0,n.Z)((0,n.Z)({},l),{},{children:[(0,o.jsx)(C,{size:"small",onClick:a,children:I(s,c)}),(0,o.jsxs)(w.Z,{variant:"subtitle2",children:[t+1,"/",r]}),(0,o.jsx)(C,{size:"small",onClick:i,children:S(s,c)})]}))}var I=function(e,t){return(0,o.jsx)(x.Z,{icon:e||"eva:arrow-right-fill",sx:(0,n.Z)({width:20,height:20,transform:" scaleX(-1)"},t&&{transform:" scaleX(1)"})})},S=function(e,t){return(0,o.jsx)(x.Z,{icon:e||"eva:arrow-right-fill",sx:(0,n.Z)({width:20,height:20},t&&{transform:" scaleX(-1)"})})}},60029:function(e,t,r){r.r(t),r.d(t,{default:function(){return V}});var n=r(4942),i=r(17592),a=r(19536),o=r(22227),s=r(80206),l=r(70178),c=r(57829),d=r(61113),u=r(32913),m=r(46417),h=(0,i.ZP)("div")((function(e){var t=e.theme;return(0,n.Z)({backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(/assets/overlay.svg), url(https://minimal-assets-api-dev.vercel.app/assets/images/about/hero.jpg)",padding:t.spacing(10,0)},t.breakpoints.up("md"),{height:560,padding:0})})),x=(0,i.ZP)("div")((function(e){var t=e.theme;return(0,n.Z)({textAlign:"center"},t.breakpoints.up("md"),{textAlign:"left",position:"absolute",bottom:t.spacing(10)})}));function p(){return(0,m.jsx)(h,{children:(0,m.jsx)(l.Z,{component:u.NM,sx:{position:"relative",height:"100%"},children:(0,m.jsxs)(x,{children:[(0,m.jsx)(u.gH,{text:"Who",sx:{color:"primary.main"},variants:(0,u.EU)().inRight}),(0,m.jsx)("br",{}),(0,m.jsxs)(c.Z,{sx:{display:"inline-flex",color:"common.white"},children:[(0,m.jsx)(u.gH,{text:"we",sx:{mr:2}}),(0,m.jsx)(u.gH,{text:"are?"})]}),(0,m.jsx)(s.m.div,{variants:(0,u.EU)().inRight,children:(0,m.jsxs)(d.Z,{variant:"h4",sx:{mt:5,color:"common.white",fontWeight:"fontWeightMedium"},children:["Let's work together and",(0,m.jsx)("br",{})," make awesome site easily"]})})]})})})}var v=r(19860),f=r(17551),g=r(9019),b=r(69099),Z=r(79176),j=r(22868),y=r(48148),w=r(8289),k=r(25937),P=r(24185),C=(0,i.ZP)("div")((function(e){var t=e.theme;return(0,n.Z)({textAlign:"center",paddingTop:t.spacing(20),paddingBottom:t.spacing(10)},t.breakpoints.up("md"),{textAlign:"left"})}));function U(){var e=(0,v.Z)(),t=(0,j.Z)("up","md"),r="light"===e.palette.mode,n="-40px 40px 80px ".concat((0,f.Fq)(r?e.palette.grey[500]:e.palette.common.black,.48));return(0,m.jsx)(C,{children:(0,m.jsx)(l.Z,{component:u.DG,children:(0,m.jsxs)(g.ZP,{container:!0,spacing:3,children:[t&&(0,m.jsx)(g.ZP,{item:!0,xs:12,md:6,lg:7,sx:{pr:{md:7}},children:(0,m.jsxs)(g.ZP,{container:!0,spacing:3,alignItems:"flex-end",children:[(0,m.jsx)(g.ZP,{item:!0,xs:6,children:(0,m.jsx)(s.m.div,{variants:(0,u.EU)().inUp,children:(0,m.jsx)(k.Z,{alt:"our office 1",src:"https://minimal-assets-api-dev.vercel.app/assets/images/about/what-1.jpg",ratio:"3/4",sx:{borderRadius:2,boxShadow:n}})})}),(0,m.jsx)(g.ZP,{item:!0,xs:6,children:(0,m.jsx)(s.m.div,{variants:(0,u.EU)().inUp,children:(0,m.jsx)(k.Z,{alt:"our office 2",src:"https://minimal-assets-api-dev.vercel.app/assets/images/about/what-2.jpg",ratio:"1/1",sx:{borderRadius:2}})})})]})}),(0,m.jsxs)(g.ZP,{item:!0,xs:12,md:6,lg:5,children:[(0,m.jsx)(s.m.div,{variants:(0,u.EU)().inRight,children:(0,m.jsx)(d.Z,{variant:"h2",sx:{mb:3},children:"What is minimal?"})}),(0,m.jsx)(s.m.div,{variants:(0,u.EU)().inRight,children:(0,m.jsx)(d.Z,{sx:{color:function(e){return"light"===e.palette.mode?"text.secondary":"common.white"}},children:"Our theme is the most advanced and user-friendly theme you will find on the market, we have documentation and video to help set your site really easily, pre-installed demos you can import in one click and everything from the theme options to page content can be edited from the front-end. This is the theme you are looking for."})}),(0,m.jsx)(c.Z,{sx:{my:5},children:w.u4.map((function(e){return(0,m.jsx)(s.m.div,{variants:(0,u.EU)().inRight,children:(0,m.jsx)(I,{progress:e})},e.label)}))}),(0,m.jsx)(s.m.div,{variants:(0,u.EU)().inRight,children:(0,m.jsx)(b.Z,{variant:"outlined",color:"inherit",size:"large",endIcon:(0,m.jsx)(P.Z,{icon:"ic:round-arrow-right-alt",width:24,height:24}),children:"Check out our work"})})]})]})})})}function I(e){var t=e.progress,r=t.label,n=t.value;return(0,m.jsxs)(c.Z,{sx:{mt:3},children:[(0,m.jsxs)(c.Z,{sx:{mb:1.5,display:"flex",alignItems:"center"},children:[(0,m.jsxs)(d.Z,{variant:"subtitle2",children:[r,"\xa0-\xa0"]}),(0,m.jsx)(d.Z,{variant:"body2",sx:{color:"text.secondary"},children:(0,y.f2)(n)})]}),(0,m.jsx)(Z.Z,{variant:"determinate",value:n,sx:{"& .MuiLinearProgress-bar":{bgcolor:"grey.700"},"&.MuiLinearProgress-determinate":{bgcolor:"divider"}}})]})}var S=r(1413),R=r(47313),E=r(44021),N=r(73428),B=r(35898),D=r(85165),z=r(17240);function M(){var e=(0,R.useRef)(null),t=(0,v.Z)(),r={arrows:!1,slidesToShow:4,centerMode:!0,centerPadding:"0px",rtl:Boolean("rtl"===t.direction),responsive:[{breakpoint:1279,settings:{slidesToShow:3}},{breakpoint:959,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]};return(0,m.jsxs)(l.Z,{component:u.DG,sx:{pb:10,textAlign:"center"},children:[(0,m.jsx)(s.m.div,{variants:(0,u.EU)().inDown,children:(0,m.jsx)(d.Z,{component:"p",variant:"overline",sx:{mb:2,color:"text.secondary"},children:"Dream team"})}),(0,m.jsx)(s.m.div,{variants:(0,u.EU)().inUp,children:(0,m.jsx)(d.Z,{variant:"h2",sx:{mb:3},children:"Great team is the key"})}),(0,m.jsx)(s.m.div,{variants:(0,u.EU)().inUp,children:(0,m.jsx)(d.Z,{sx:{mx:"auto",maxWidth:630,color:function(e){return"light"===e.palette.mode?"text.secondary":"common.white"}},children:"Minimal will provide you support if you have any problems, our support team will reply within a day and we also have detailed documentation."})}),(0,m.jsx)(c.Z,{sx:{position:"relative"},children:(0,m.jsx)(D.i5,{filled:!0,onNext:function(){var t;null===(t=e.current)||void 0===t||t.slickNext()},onPrevious:function(){var t;null===(t=e.current)||void 0===t||t.slickPrev()},children:(0,m.jsx)(E.Z,(0,S.Z)((0,S.Z)({ref:e},r),{},{children:w.Zd.map((function(e){return(0,m.jsx)(c.Z,{component:s.m.div,variants:(0,u.EU)().in,sx:{px:1.5,py:10},children:(0,m.jsx)(T,{member:e})},e.id)}))}))})}),(0,m.jsx)(b.Z,{variant:"outlined",color:"inherit",size:"large",endIcon:(0,m.jsx)(P.Z,{icon:"ic:round-arrow-right-alt",width:24,height:24}),sx:{mx:"auto"},children:"View all team members"})]})}function T(e){var t=e.member,r=t.name,n=t.role,i=t.avatar;return(0,m.jsxs)(N.Z,{sx:{p:1},children:[(0,m.jsx)(d.Z,{variant:"subtitle1",sx:{mt:2,mb:.5},children:r}),(0,m.jsx)(d.Z,{variant:"body2",sx:{mb:2,color:"text.secondary"},children:n}),(0,m.jsx)(k.Z,{alt:r,src:i,ratio:"1/1",sx:{borderRadius:1.5}}),(0,m.jsx)(B.Z,{alignItems:"center",sx:{mt:2,mb:1},children:(0,m.jsx)(z.Z,{sx:{color:"action.active"}})})]},r)}function _(){return(0,m.jsxs)(l.Z,{component:u.DG,sx:{mt:10},children:[(0,m.jsxs)(c.Z,{sx:{mb:10,position:"relative",borderRadius:2,overflow:"hidden"},children:[(0,m.jsx)(k.Z,{src:"https://minimal-assets-api-dev.vercel.app/assets/images/about/vision.jpg",alt:"about-vision",effect:"black-and-white"}),(0,m.jsx)(c.Z,{sx:{bottom:{xs:24,md:80},width:"100%",display:"flex",flexWrap:"wrap",alignItems:"center",position:"absolute",justifyContent:"center"},children:["logo_amazon","logo_hbo","logo_ibm","logo_lya","logo_spotify","logo_netflix"].map((function(e){return(0,m.jsx)(s.m.div,{variants:(0,u.EU)().in,children:(0,m.jsx)(k.Z,{alt:e,src:"https://minimal-assets-api-dev.vercel.app/assets/images/logos/".concat(e,".svg"),sx:{m:{xs:1.5,md:3},height:{xs:24,md:32}}})},e)}))})]}),(0,m.jsx)(g.ZP,{container:!0,justifyContent:"center",children:(0,m.jsx)(g.ZP,{item:!0,xs:12,sm:8,children:(0,m.jsx)(s.m.div,{variants:(0,u.EU)().inUp,children:(0,m.jsx)(d.Z,{variant:"h3",sx:{textAlign:"center"},children:"Our vision offering the best product nulla vehicula tortor scelerisque ultrices malesuada."})})})})]})}var q=r(82295),A=r(55942),W=r(90891),L=r(18551),F=r(57843),O=[{name:"Jenny Wilson",rating:5,dateCreate:new Date,content:"Excellent Work! Thanks a lot!"},{name:"Cody Fisher",rating:5,dateCreate:new Date,content:"It's a very good dashboard and we are really liking the product . We've done some things, like migrate to TS and implementing a react useContext api, to fit our job methodology but the product is one of the best in terms of design and application architecture. The team did a really good job."},{name:"Marvin McKinney",rating:5,dateCreate:new Date,content:"Customer support is realy fast and helpful the desgin of this theme is looks amazing also the code is very clean and readble realy good job !"},{name:"Darrell Steward",rating:5,dateCreate:new Date,content:"Amazing, really good code quality and gives you a lot of examples for implementations."},{name:"Jacob Jones",rating:5,dateCreate:new Date,content:"Got a few questions after purchasing the product. The owner responded very fast and very helpfull. Overall the code is excellent and works very good. 5/5 stars!"},{name:"Bessie Cooper",rating:5,dateCreate:new Date,content:"CEO of Codealy.io here. We\u2019ve built a developer assessment platform that makes sense - tasks are based on git repositories and run in virtual machines. We automate the pain points - storing candidates code, running it and sharing test results with the whole team, remotely. Bought this template as we need to provide an awesome dashboard for our early customers. I am super happy with purchase. The code is just as good as the design. Thanks!"}],X=(0,i.ZP)("div")((function(e){var t=e.theme;return(0,n.Z)({textAlign:"center",padding:t.spacing(10,0),backgroundSize:"cover",backgroundImage:"linear-gradient(to right, ".concat((0,f.Fq)(t.palette.grey[900],.8)," , ").concat((0,f.Fq)(t.palette.grey[900],.8),"), url(https://minimal-assets-api-dev.vercel.app/assets/images/about/testimonials.jpg)")},t.breakpoints.up("md"),{textAlign:"left",padding:0,height:840,overflow:"hidden"})}));function G(){var e=(0,j.Z)("up","md");return(0,m.jsx)(X,{children:(0,m.jsxs)(l.Z,{component:u.DG,sx:{position:"relative",height:1},children:[(0,m.jsxs)(g.ZP,{container:!0,spacing:3,alignItems:"center",justifyContent:{xs:"center",md:"space-between"},sx:{height:1},children:[(0,m.jsx)(g.ZP,{item:!0,xs:10,md:4,children:(0,m.jsxs)(c.Z,{sx:{maxWidth:{md:360}},children:[(0,m.jsx)(s.m.div,{variants:(0,u.EU)().inUp,children:(0,m.jsx)(d.Z,{component:"p",variant:"overline",sx:{mb:2,color:"text.secondary"},children:"Testimonials"})}),(0,m.jsx)(s.m.div,{variants:(0,u.EU)().inUp,children:(0,m.jsxs)(d.Z,{variant:"h2",sx:{mb:3,color:"common.white"},children:["Who love ",(0,m.jsx)("br",{}),"my work"]})}),(0,m.jsx)(s.m.div,{variants:(0,u.EU)().inUp,children:(0,m.jsx)(d.Z,{sx:{color:"common.white"},children:"Our goal is to create a product and service that you\u2019re satisfied with and use it every day. This is why we\u2019re constantly working on our services to make it better every day and really listen to what our users has to say."})}),!e&&(0,m.jsx)(c.Z,{sx:{mt:3,display:"flex",justifyContent:"center"},children:(0,m.jsx)(s.m.div,{variants:(0,u.EU)().inUp,children:(0,m.jsx)(J,{})})})]})}),(0,m.jsx)(g.ZP,{item:!0,xs:12,md:7,lg:6,sx:{right:{md:24},position:{md:"absolute"}},children:(0,m.jsxs)(g.ZP,{container:!0,spacing:e?3:0,alignItems:"center",children:[(0,m.jsx)(g.ZP,{item:!0,xs:12,md:6,children:O.slice(0,3).map((function(e){return(0,m.jsx)(s.m.div,{variants:(0,u.EU)().inUp,children:(0,m.jsx)(H,{testimonial:e})},e.name)}))}),(0,m.jsx)(g.ZP,{item:!0,xs:12,md:6,children:O.slice(3,6).map((function(e){return(0,m.jsx)(s.m.div,{variants:(0,u.EU)().inUp,children:(0,m.jsx)(H,{testimonial:e})},e.name)}))})]})})]}),e&&(0,m.jsx)(c.Z,{sx:{bottom:60,position:"absolute"},children:(0,m.jsx)(s.m.div,{variants:(0,u.EU)().inLeft,children:(0,m.jsx)(J,{})})})]})})}function H(e){var t=e.testimonial,r=(0,v.Z)(),n=t.name,i=t.rating,a=t.dateCreate,o=t.content;return(0,m.jsxs)(q.Z,{sx:(0,S.Z)({mt:3,p:3,color:"common.white"},(0,L.Z)().bgBlur({color:r.palette.common.white,opacity:.04})),children:[(0,m.jsx)(d.Z,{variant:"subtitle1",gutterBottom:!0,children:n}),(0,m.jsx)(d.Z,{gutterBottom:!0,component:"div",variant:"caption",sx:{color:"grey.500"},children:(0,F.Mu)(a)}),(0,m.jsx)(A.Z,{value:i,readOnly:!0,size:"small"}),(0,m.jsx)(d.Z,{variant:"body2",sx:{mt:1.5},children:o})]})}function J(){return(0,m.jsxs)(W.Z,{href:"#",variant:"subtitle2",sx:{display:"flex",alignItems:"center"},children:["Read more testimonials",(0,m.jsx)(P.Z,{icon:"ic:round-arrow-right-alt",sx:{ml:1,width:20,height:20}})]})}var K=(0,i.ZP)("div")((function(e){var t=e.theme;return(0,n.Z)({paddingTop:t.spacing(8)},t.breakpoints.up("md"),{paddingTop:t.spacing(11)})}));function V(){return(0,m.jsx)(o.Z,{title:"About us",children:(0,m.jsxs)(K,{children:[(0,m.jsx)(p,{}),(0,m.jsx)(U,{}),(0,m.jsx)(_,{}),(0,m.jsx)(a.Z,{orientation:"vertical",sx:{my:10,mx:"auto",width:2,height:40}}),(0,m.jsx)(M,{}),(0,m.jsx)(G,{})]})})}},79176:function(e,t,r){r.d(t,{Z:function(){return q}});var n=r(30168),i=r(63366),a=r(87462),o=r(47313),s=r(83061),l=r(21921),c=r(30686),d=r(17551),u=r(91615),m=r(19860),h=r(17592),x=r(77342),p=r(32298);function v(e){return(0,p.Z)("MuiLinearProgress",e)}(0,r(77430).Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var f,g,b,Z,j,y,w,k,P,C,U,I,S=r(46417),R=["className","color","value","valueBuffer","variant"],E=(0,c.F4)(w||(w=f||(f=(0,n.Z)(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])))),N=(0,c.F4)(k||(k=g||(g=(0,n.Z)(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])))),B=(0,c.F4)(P||(P=b||(b=(0,n.Z)(["\n  0% {\n    opacity: 1;\n    background-position: 0 -23px;\n  }\n\n  60% {\n    opacity: 0;\n    background-position: 0 -23px;\n  }\n\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n"])))),D=function(e,t){return"inherit"===t?"currentColor":e.vars?e.vars.palette.LinearProgress["".concat(t,"Bg")]:"light"===e.palette.mode?(0,d.$n)(e.palette[t].main,.62):(0,d._j)(e.palette[t].main,.5)},z=(0,h.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["color".concat((0,u.Z)(r.color))],t[r.variant]]}})((function(e){var t=e.ownerState,r=e.theme;return(0,a.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:D(r,t.color)},"inherit"===t.color&&"buffer"!==t.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===t.variant&&{backgroundColor:"transparent"},"query"===t.variant&&{transform:"rotate(180deg)"})})),M=(0,h.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:function(e,t){var r=e.ownerState;return[t.dashed,t["dashedColor".concat((0,u.Z)(r.color))]]}})((function(e){var t=e.ownerState,r=e.theme,n=D(r,t.color);return(0,a.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===t.color&&{opacity:.3},{backgroundImage:"radial-gradient(".concat(n," 0%, ").concat(n," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,c.iv)(C||(C=Z||(Z=(0,n.Z)(["\n    animation: "," 3s infinite linear;\n  "]))),B)),T=(0,h.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:function(e,t){var r=e.ownerState;return[t.bar,t["barColor".concat((0,u.Z)(r.color))],("indeterminate"===r.variant||"query"===r.variant)&&t.bar1Indeterminate,"determinate"===r.variant&&t.bar1Determinate,"buffer"===r.variant&&t.bar1Buffer]}})((function(e){var t=e.ownerState,r=e.theme;return(0,a.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===t.color?"currentColor":(r.vars||r).palette[t.color].main},"determinate"===t.variant&&{transition:"transform .".concat(4,"s linear")},"buffer"===t.variant&&{zIndex:1,transition:"transform .".concat(4,"s linear")})}),(function(e){var t=e.ownerState;return("indeterminate"===t.variant||"query"===t.variant)&&(0,c.iv)(U||(U=j||(j=(0,n.Z)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    "]))),E)})),_=(0,h.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:function(e,t){var r=e.ownerState;return[t.bar,t["barColor".concat((0,u.Z)(r.color))],("indeterminate"===r.variant||"query"===r.variant)&&t.bar2Indeterminate,"buffer"===r.variant&&t.bar2Buffer]}})((function(e){var t=e.ownerState,r=e.theme;return(0,a.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==t.variant&&{backgroundColor:"inherit"===t.color?"currentColor":(r.vars||r).palette[t.color].main},"inherit"===t.color&&{opacity:.3},"buffer"===t.variant&&{backgroundColor:D(r,t.color),transition:"transform .".concat(4,"s linear")})}),(function(e){var t=e.ownerState;return("indeterminate"===t.variant||"query"===t.variant)&&(0,c.iv)(I||(I=y||(y=(0,n.Z)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n    "]))),N)})),q=o.forwardRef((function(e,t){var r=(0,x.Z)({props:e,name:"MuiLinearProgress"}),n=r.className,o=r.color,c=void 0===o?"primary":o,d=r.value,h=r.valueBuffer,p=r.variant,f=void 0===p?"indeterminate":p,g=(0,i.Z)(r,R),b=(0,a.Z)({},r,{color:c,variant:f}),Z=function(e){var t=e.classes,r=e.variant,n=e.color,i={root:["root","color".concat((0,u.Z)(n)),r],dashed:["dashed","dashedColor".concat((0,u.Z)(n))],bar1:["bar","barColor".concat((0,u.Z)(n)),("indeterminate"===r||"query"===r)&&"bar1Indeterminate","determinate"===r&&"bar1Determinate","buffer"===r&&"bar1Buffer"],bar2:["bar","buffer"!==r&&"barColor".concat((0,u.Z)(n)),"buffer"===r&&"color".concat((0,u.Z)(n)),("indeterminate"===r||"query"===r)&&"bar2Indeterminate","buffer"===r&&"bar2Buffer"]};return(0,l.Z)(i,v,t)}(b),j=(0,m.Z)(),y={},w={bar1:{},bar2:{}};if("determinate"===f||"buffer"===f)if(void 0!==d){y["aria-valuenow"]=Math.round(d),y["aria-valuemin"]=0,y["aria-valuemax"]=100;var k=d-100;"rtl"===j.direction&&(k=-k),w.bar1.transform="translateX(".concat(k,"%)")}else 0;if("buffer"===f)if(void 0!==h){var P=(h||0)-100;"rtl"===j.direction&&(P=-P),w.bar2.transform="translateX(".concat(P,"%)")}else 0;return(0,S.jsxs)(z,(0,a.Z)({className:(0,s.Z)(Z.root,n),ownerState:b,role:"progressbar"},y,{ref:t},g,{children:["buffer"===f?(0,S.jsx)(M,{className:Z.dashed,ownerState:b}):null,(0,S.jsx)(T,{className:Z.bar1,ownerState:b,style:w.bar1}),"determinate"===f?null:(0,S.jsx)(_,{className:Z.bar2,ownerState:b,style:w.bar2})]}))}))}}]);