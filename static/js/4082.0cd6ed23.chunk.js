"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[4082],{72341:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(1413),i=n(45987),a=n(17592),s=n(57829),o=n(61113),l=n(25937),c=n(46417),u=["title","description","img"],d=(0,a.ZP)(s.Z)((function(e){return{height:"100%",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:e.theme.spacing(8,2)}}));function h(e){var t=e.title,n=e.description,a=e.img,s=(0,i.Z)(e,u);return(0,c.jsxs)(d,(0,r.Z)((0,r.Z)({},s),{},{children:[(0,c.jsx)(l.Z,{disabledEffect:!0,visibleByDefault:!0,alt:"empty content",src:a||"/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,c.jsx)(o.Z,{variant:"h5",gutterBottom:!0,children:t}),n&&(0,c.jsx)(o.Z,{variant:"body2",sx:{color:"text.secondary"},children:n})]}))}},50103:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(1413),i=n(45987),a=n(57829),s=n(61113),o=n(90891),l=n(29466),c=n(3404),u=n(46417),d=["links","activeLast"];function h(e){var t=e.links,n=e.activeLast,o=void 0!==n&&n,l=(0,i.Z)(e,d),h=t[t.length-1].name,x=t.map((function(e){return(0,u.jsx)(p,{link:e},e.name)})),m=t.map((function(e){return(0,u.jsx)("div",{children:e.name!==h?(0,u.jsx)(p,{link:e}):(0,u.jsx)(s.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:h})},e.name)}));return(0,u.jsx)(c.Z,(0,r.Z)((0,r.Z)({separator:(0,u.jsx)(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},l),{},{children:o?x:m}))}function p(e){var t=e.link,n=t.href,r=t.name,i=t.icon;return(0,u.jsxs)(o.Z,{variant:"body2",component:l.rU,to:n||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[i&&(0,u.jsx)(a.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:i}),r]},r)}var x=["links","action","heading","moreLink","sx"];function m(e){var t=e.links,n=e.action,l=e.heading,c=e.moreLink,d=void 0===c?[]:c,p=e.sx,m=(0,i.Z)(e,x);return(0,u.jsxs)(a.Z,{sx:(0,r.Z)({mb:5},p),children:[(0,u.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,u.jsxs)(a.Z,{sx:{flexGrow:1},children:[(0,u.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:l}),(0,u.jsx)(h,(0,r.Z)({links:t},m))]}),n&&(0,u.jsx)(a.Z,{sx:{flexShrink:0},children:n})]}),(0,u.jsx)(a.Z,{sx:{mt:2},children:"string"===typeof d?(0,u.jsx)(o.Z,{href:d,target:"_blank",rel:"noopener",variant:"body2",children:d}):d.map((function(e){return(0,u.jsx)(o.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},36693:function(e,t,n){var r=n(4942),i=n(1413),a=n(17592),s=n(15082),o=(0,a.ZP)(s.Z,{shouldForwardProp:function(e){return"stretchStart"!==e}})((function(e){var t=e.stretchStart,n=e.theme;return{"& .MuiOutlinedInput-root":(0,i.Z)({transition:n.transitions.create(["box-shadow","width"],{easing:n.transitions.easing.easeInOut,duration:n.transitions.duration.shorter}),"&.Mui-focused":{boxShadow:n.customShadows.z12}},t&&{width:t,"&.Mui-focused":(0,r.Z)({boxShadow:n.customShadows.z12},n.breakpoints.up("sm"),{width:t+60})}),"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(n.palette.grey[50032]," !important")}}}));t.Z=o},30742:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(4942),i=n(1413),a=n(49505),s=n(77758),o=n(17592),l=n(61113),c=n(19536),u=n(90891),d=n(25937),h=n(46417),p=(0,o.ZP)("div")((function(e){var t,n=e.theme,a="light"===n.palette.mode;return{"& ul, & ol":(0,i.Z)((0,i.Z)({},n.typography.body1),{},{paddingLeft:n.spacing(5),"& li":{lineHeight:2}}),"& blockquote":(t={lineHeight:1.5,fontSize:"1.5em",margin:"40px auto",position:"relative",fontFamily:"Georgia, serif",padding:n.spacing(3,3,3,8),borderRadius:2*Number(n.shape.borderRadius),backgroundColor:n.palette.background.neutral,color:"".concat(n.palette.text.secondary," !important")},(0,r.Z)(t,n.breakpoints.up("md"),{width:"80%"}),(0,r.Z)(t,"& p, & span",{marginBottom:"0 !important",fontSize:"inherit !important",fontFamily:"Georgia, serif !important",color:"".concat(n.palette.text.secondary," !important")}),(0,r.Z)(t,"&:before",{left:16,top:-8,display:"block",fontSize:"3em",content:'"\\201C"',position:"absolute",color:n.palette.text.disabled}),t),"& pre, & pre > code":{fontSize:16,overflowX:"auto",whiteSpace:"pre",padding:n.spacing(2),color:n.palette.common.white,borderRadius:n.shape.borderRadius,backgroundColor:a?n.palette.grey[900]:n.palette.grey[50016]},"& code":{fontSize:14,borderRadius:4,whiteSpace:"pre",padding:n.spacing(.2,.5),color:n.palette.warning[a?"darker":"lighter"],backgroundColor:n.palette.warning[a?"lighter":"darker"],"&.hljs":{padding:0,backgroundColor:"transparent"}}}}));function x(e){var t=Object.assign({},e);return(0,h.jsx)(p,{children:(0,h.jsx)(a.D,(0,i.Z)({rehypePlugins:[s.Z],components:m},t))})}var m={h1:function(e){var t=Object.assign({},e);return(0,h.jsx)(l.Z,(0,i.Z)({variant:"h1"},t))},h2:function(e){var t=Object.assign({},e);return(0,h.jsx)(l.Z,(0,i.Z)({variant:"h2"},t))},h3:function(e){var t=Object.assign({},e);return(0,h.jsx)(l.Z,(0,i.Z)({variant:"h3"},t))},h4:function(e){var t=Object.assign({},e);return(0,h.jsx)(l.Z,(0,i.Z)({variant:"h4"},t))},h5:function(e){var t=Object.assign({},e);return(0,h.jsx)(l.Z,(0,i.Z)({variant:"h5"},t))},h6:function(e){var t=Object.assign({},e);return(0,h.jsx)(l.Z,(0,i.Z)({variant:"h6"},t))},hr:function(e){var t=Object.assign({},e);return(0,h.jsx)(c.Z,(0,i.Z)({sx:{my:3}},t))},img:function(e){var t=Object.assign({},e);return(0,h.jsx)(d.Z,(0,i.Z)({alt:t.alt,ratio:"16/9",sx:{borderRadius:2,my:5}},t))},a:function(e){var t=Object.assign({},e);return t.href.includes("http")?(0,h.jsx)(u.Z,(0,i.Z)({target:"_blank",rel:"noopener"},t)):(0,h.jsx)(u.Z,(0,i.Z)({},t))}}},21450:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(1413),i=n(45987),a=n(35898),s=n(46417),o=["icon","value","endIcon","sx"];function l(e){var t=e.icon,n=e.value,l=e.endIcon,c=void 0!==l&&l,u=e.sx,d=(0,i.Z)(e,o);return(0,s.jsxs)(a.Z,(0,r.Z)((0,r.Z)({direction:"row",alignItems:"center",sx:(0,r.Z)({typography:"body2"},u)},d),{},{children:[!c&&t,n,c&&t]}))}},72191:function(e,t,n){n.d(t,{Ge:function(){return ge},Gg:function(){return O},fV:function(){return _e},bt:function(){return Me},pi:function(){return F},_Y:function(){return Q},j6:function(){return W},x5:function(){return Re},cO:function(){return H}});var r=n(1413),i=n(12488),a=n(29466),s=n(17592),o=n(17551),l=n(73428),c=n(63585),u=n(57829),d=n(93405),h=n(61113),p=n(90891),x=n(35898),m=n(76025),Z=n(22868),v=n(57843),f=n(48148),g=n(25937),j=n(24185),b=n(45987),y=n(47313),w=n(69084),k=n(46417),S=["asLink","variant","line","persistent","children","sx"],C=(0,y.forwardRef)((function(e,t){var n=e.asLink,i=e.variant,a=void 0===i?"body1":i,s=e.line,o=void 0===s?2:s,l=e.persistent,c=void 0!==l&&l,u=e.children,d=e.sx,x=(0,b.Z)(e,S),m=(0,w.ZP)(a).lineHeight,Z=(0,r.Z)((0,r.Z)({overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:o,WebkitBoxOrient:"vertical"},c&&{height:m*o}),d);return n?(0,k.jsx)(p.Z,(0,r.Z)((0,r.Z)({color:"inherit",ref:t,variant:a,sx:(0,r.Z)({},Z)},x),{},{children:u})):(0,k.jsx)(h.Z,(0,r.Z)((0,r.Z)({ref:t,variant:a,sx:(0,r.Z)({},Z)},x),{},{children:u}))})),P=n(21450),I=n(70668),z=(0,s.ZP)("div")((function(e){var t=e.theme;return{top:0,zIndex:1,width:"100%",height:"100%",position:"absolute",backgroundColor:(0,o.Fq)(t.palette.grey[900],.8)}}));function O(e){var t=e.post,n=e.index,r=(0,Z.Z)("up","md"),i=t.cover,a=t.title,s=t.view,o=t.comment,d=t.share,h=t.author,p=t.createdAt;return r&&(0===n||1===n||2===n)?(0,k.jsxs)(l.Z,{children:[(0,k.jsx)(c.Z,{alt:h.name,src:h.avatarUrl,sx:{zIndex:9,top:24,left:24,width:40,height:40,position:"absolute"}}),(0,k.jsx)(R,{title:a,view:s,comment:o,share:d,createdAt:p,index:n}),(0,k.jsx)(z,{}),(0,k.jsx)(g.Z,{alt:"cover",src:i,sx:{height:360}})]}):(0,k.jsxs)(l.Z,{children:[(0,k.jsxs)(u.Z,{sx:{position:"relative"},children:[(0,k.jsx)(I.Z,{src:"https://minimal-assets-api-dev.vercel.app/assets/icons/shape-avatar.svg",sx:{width:80,height:36,zIndex:9,bottom:-15,position:"absolute",color:"background.paper"}}),(0,k.jsx)(c.Z,{alt:h.name,src:h.avatarUrl,sx:{left:24,zIndex:9,width:32,height:32,bottom:-16,position:"absolute"}}),(0,k.jsx)(g.Z,{alt:"cover",src:i,ratio:"4/3"})]}),(0,k.jsx)(R,{title:a,view:s,comment:o,share:d,createdAt:p})]})}function R(e){var t=e.title,n=e.view,s=e.comment,o=e.share,l=e.createdAt,c=e.index,u=(0,Z.Z)("up","md"),g=m.vB.blog.view((0,i.o)(t)),b=0===c,y=1===c||2===c,w=[{number:s,icon:"eva:message-circle-fill"},{number:n,icon:"eva:eye-fill"},{number:o,icon:"eva:share-fill"}];return(0,k.jsxs)(d.Z,{sx:(0,r.Z)({pt:4.5,width:1},(b||y)&&{pt:0,zIndex:9,bottom:0,position:"absolute",color:"common.white"}),children:[(0,k.jsx)(h.Z,{gutterBottom:!0,variant:"caption",component:"div",sx:(0,r.Z)({color:"text.disabled"},(b||y)&&{opacity:.64,color:"common.white"}),children:(0,v.Mu)(l)}),(0,k.jsx)(p.Z,{to:g,color:"inherit",component:a.rU,children:(0,k.jsx)(C,{variant:u&&b?"h5":"subtitle2",line:2,persistent:!0,children:t})}),(0,k.jsx)(x.Z,{flexWrap:"wrap",direction:"row",justifyContent:"flex-end",sx:(0,r.Z)({mt:3,color:"text.disabled"},(b||y)&&{opacity:.64,color:"common.white"}),children:w.map((function(e,t){return(0,k.jsx)(P.Z,{icon:(0,k.jsx)(j.Z,{icon:e.icon,sx:{width:16,height:16,mr:.5}}),value:(0,f.v1)(e.number),sx:{typography:"caption",ml:0===t?0:1.5}},t)}))})]})}var q=n(4942),_=n(29210),T=n(11686),L=[{name:"Facebook",icon:(0,k.jsx)(j.Z,{icon:"eva:facebook-fill",width:20,height:20,color:"#1877F2"})},{name:"Instagram",icon:(0,k.jsx)(j.Z,{icon:"ant-design:instagram-filled",width:20,height:20,color:"#D7336D"})},{name:"Linkedin",icon:(0,k.jsx)(j.Z,{icon:"eva:linkedin-fill",width:20,height:20,color:"#006097"})},{name:"Twitter",icon:(0,k.jsx)(j.Z,{icon:"eva:twitter-fill",width:20,height:20,color:"#1C9CEA"})}],U=(0,s.ZP)("h1")((function(e){var t=e.theme;return{top:0,right:0,bottom:0,left:0,zIndex:9,position:"absolute",backgroundColor:(0,o.Fq)(t.palette.grey[900],.72)}})),A=(0,s.ZP)("h1")((function(e){var t=e.theme;return(0,r.Z)((0,r.Z)({},t.typography.h2),{},(0,q.Z)({top:0,zIndex:10,width:"100%",position:"absolute",padding:t.spacing(3),color:t.palette.common.white},t.breakpoints.up("lg"),{padding:t.spacing(10)}))})),B=(0,s.ZP)("div")((function(e){var t,n=e.theme;return t={bottom:0,zIndex:10,width:"100%",display:"flex",position:"absolute",alignItems:"flex-end",paddingLeft:n.spacing(3),paddingRight:n.spacing(2),paddingBottom:n.spacing(3),justifyContent:"space-between"},(0,q.Z)(t,n.breakpoints.up("sm"),{alignItems:"center",paddingRight:n.spacing(3)}),(0,q.Z)(t,n.breakpoints.up("lg"),{padding:n.spacing(10)}),t}));function F(e){var t=e.post,n=t.cover,r=t.title,i=t.author,a=t.createdAt,s=(0,Z.Z)("up","sm");return(0,k.jsxs)(u.Z,{sx:{position:"relative"},children:[(0,k.jsx)(A,{children:r}),(0,k.jsxs)(B,{children:[(0,k.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,k.jsx)(c.Z,{alt:i.name,src:i.avatarUrl,sx:{width:48,height:48}}),(0,k.jsxs)(u.Z,{sx:{ml:2},children:[(0,k.jsx)(h.Z,{variant:"subtitle1",sx:{color:"common.white"},children:i.name}),(0,k.jsx)(h.Z,{variant:"body2",sx:{color:"grey.500"},children:(0,v.Mu)(a)})]})]}),(0,k.jsx)(_.Z,{direction:s?"left":"up",ariaLabel:"Share post",icon:(0,k.jsx)(j.Z,{icon:"eva:share-fill",sx:{width:20,height:20}}),sx:{"& .MuiSpeedDial-fab":{width:48,height:48}},children:L.map((function(e){return(0,k.jsx)(T.Z,{icon:e.icon,tooltipTitle:e.name,tooltipPlacement:"top",FabProps:{color:"default"}},e.name)}))})]}),(0,k.jsx)(U,{}),(0,k.jsx)(g.Z,{alt:"post cover",src:n,ratio:"16/9"})]})}var M=n(66212),D=n(83929),E=n(44758),V=n(76017);function W(e){var t=e.post,n=t.favorite,r=t.tags,i=t.favoritePerson;return(0,k.jsxs)(u.Z,{sx:{py:3},children:[r.map((function(e){return(0,k.jsx)(M.Z,{label:e,sx:{m:.5}},e)})),(0,k.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center",mt:3},children:[(0,k.jsx)(D.Z,{control:(0,k.jsx)(E.Z,{defaultChecked:!0,size:"small",color:"error",icon:(0,k.jsx)(j.Z,{icon:"eva:heart-fill"}),checkedIcon:(0,k.jsx)(j.Z,{icon:"eva:heart-fill"})}),label:(0,f.v1)(n)}),(0,k.jsx)(V.Z,{max:4,sx:{"& .MuiAvatar-root":{width:32,height:32}},children:i.map((function(e){return(0,k.jsx)(c.Z,{alt:e.name,src:e.avatarUrl},e.name)}))})]})]})}var G=n(15082),K=n(51405);function H(e){var t=e.query,n=e.options,r=e.onSort;return(0,k.jsx)(G.Z,{select:!0,size:"small",value:t,onChange:function(e){return r(e.target.value)},sx:{"& .MuiSelect-select":{typography:"body2"}},children:n.map((function(e){return(0,k.jsx)(K.Z,{value:e.value,sx:{typography:"body2",mx:1,my:.5,borderRadius:.75},children:e.label},e.value)}))})}var N=n(9019);function Q(e){var t=e.posts;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(h.Z,{variant:"h4",sx:{mt:10,mb:5},children:"Recent posts"}),(0,k.jsx)(N.ZP,{container:!0,spacing:3,children:t.map((function(e){return(0,k.jsx)(N.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,k.jsx)(O,{post:e})},e.id)}))})]})}var X=n(15861),J=n(29439),Y=n(64687),$=n.n(Y),ee=n(28089),te=n(58908),ne=n(97890),re=n(1432),ie=n(75627),ae=n(32703),se=n(19065),oe=n(69099),le=n(7652),ce=n(4117),ue=n(70178),de=n(30742),he=n(95463),pe=n(72341),xe=n(32913);function me(e){var t,n=e.values,r=e.isValid,i=e.isSubmitting,a=e.isOpen,s=e.onClose,o=e.onSubmit,l=n.title,c=n.content,d=n.description,p="string"===typeof n.cover?n.cover:null===(t=n.cover)||void 0===t?void 0:t.preview,x=l||d||c||p,m=l||p;return(0,k.jsxs)(xe.Kl,{fullScreen:!0,open:a,onClose:s,children:[(0,k.jsxs)(ce.Z,{sx:{py:2,px:3},children:[(0,k.jsx)(h.Z,{variant:"subtitle1",sx:{flexGrow:1},children:"Preview Post"}),(0,k.jsx)(oe.Z,{onClick:s,children:"Cancel"}),(0,k.jsx)(ae.Z,{type:"submit",variant:"contained",disabled:!r,loading:i,onClick:o,children:"Post"})]}),x?(0,k.jsxs)(he.Z,{children:[m&&(0,k.jsx)(Ze,{title:l||"",cover:p}),(0,k.jsx)(ue.Z,{children:(0,k.jsxs)(u.Z,{sx:{mt:5,mb:10},children:[(0,k.jsx)(h.Z,{variant:"h6",sx:{mb:5},children:d}),(0,k.jsx)(de.Z,{children:c||""})]})})]}):(0,k.jsx)(pe.Z,{title:"Empty content"})]})}function Ze(e){var t=e.title,n=e.cover;return(0,k.jsxs)(u.Z,{sx:{position:"relative"},children:[(0,k.jsx)(ue.Z,{sx:{top:0,left:0,right:0,zIndex:9,position:"absolute",color:"common.white",pt:{xs:3,lg:10}},children:(0,k.jsx)(h.Z,{variant:"h2",component:"h1",children:t})}),(0,k.jsx)(u.Z,{sx:{top:0,left:0,right:0,bottom:0,zIndex:8,position:"absolute",bgcolor:function(e){return(0,o.Fq)(e.palette.grey[900],.8)}}}),(0,k.jsx)(g.Z,{alt:"cover",src:n,ratio:"16/9"})]})}var ve=["Toy Story 3","Logan","Full Metal Jacket","Dangal","The Sting","2001: A Space Odyssey","Singin' in the Rain","Toy Story","Bicycle Thieves","The Kid","Inglourious Basterds","Snatch","3 Idiots"],fe=(0,s.ZP)(h.Z)((function(e){var t=e.theme;return(0,r.Z)((0,r.Z)({},t.typography.subtitle2),{},{color:t.palette.text.secondary,marginBottom:t.spacing(1)})}));function ge(){var e=(0,ne.s0)(),t=(0,y.useState)(!1),n=(0,J.Z)(t,2),i=n[0],a=n[1],s=(0,te.Ds)().enqueueSnackbar,o=function(){a(!1)},c=ee.Ry().shape({title:ee.Z_().required("Title is required"),description:ee.Z_().required("Description is required"),content:ee.Z_().min(1e3).required("Content is required"),cover:ee.nK().required("Cover is required")}),u=(0,ie.cI)({resolver:(0,re.X)(c),defaultValues:{title:"",description:"",content:"",cover:null,tags:["Logan"],publish:!0,comments:!0,metaTitle:"",metaDescription:"",metaKeywords:["Logan"]}}),d=u.reset,h=u.watch,p=u.control,Z=u.setValue,v=u.handleSubmit,f=u.formState,g=f.isSubmitting,j=f.isValid,b=h(),w=function(){var t=(0,X.Z)($().mark((function t(n){return $().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:d(),o(),s("Post success!"),e(m.vB.blog.posts),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}(),S=(0,y.useCallback)((function(e){var t=e[0];t&&Z("cover",Object.assign(t,{preview:URL.createObjectURL(t)}))}),[Z]);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(le.RV,{methods:u,onSubmit:v(w),children:(0,k.jsxs)(N.ZP,{container:!0,spacing:3,children:[(0,k.jsx)(N.ZP,{item:!0,xs:12,md:8,children:(0,k.jsx)(l.Z,{sx:{p:3},children:(0,k.jsxs)(x.Z,{spacing:3,children:[(0,k.jsx)(le.au,{name:"title",label:"Post Title"}),(0,k.jsx)(le.au,{name:"description",label:"Description",multiline:!0,rows:3}),(0,k.jsxs)("div",{children:[(0,k.jsx)(fe,{children:"Content"}),(0,k.jsx)(le.LM,{simple:!0,name:"content"})]}),(0,k.jsxs)("div",{children:[(0,k.jsx)(fe,{children:"Cover"}),(0,k.jsx)(le.Uo,{name:"cover",maxSize:3145728,onDrop:S})]})]})})}),(0,k.jsxs)(N.ZP,{item:!0,xs:12,md:4,children:[(0,k.jsx)(l.Z,{sx:{p:3},children:(0,k.jsxs)(x.Z,{spacing:3,children:[(0,k.jsxs)("div",{children:[(0,k.jsx)(le._e,{name:"publish",label:"Publish",labelPlacement:"start",sx:{mb:1,mx:0,width:1,justifyContent:"space-between"}}),(0,k.jsx)(le._e,{name:"comments",label:"Enable comments",labelPlacement:"start",sx:{mx:0,width:1,justifyContent:"space-between"}})]}),(0,k.jsx)(ie.Qr,{name:"tags",control:p,render:function(e){var t=e.field;return(0,k.jsx)(se.Z,{multiple:!0,freeSolo:!0,onChange:function(e,n){return t.onChange(n)},options:ve.map((function(e){return e})),renderTags:function(e,t){return e.map((function(e,n){return(0,y.createElement)(M.Z,(0,r.Z)((0,r.Z)({},t({index:n})),{},{key:e,size:"small",label:e}))}))},renderInput:function(e){return(0,k.jsx)(G.Z,(0,r.Z)({label:"Tags"},e))}})}}),(0,k.jsx)(le.au,{name:"metaTitle",label:"Meta title"}),(0,k.jsx)(le.au,{name:"metaDescription",label:"Meta description",fullWidth:!0,multiline:!0,rows:3}),(0,k.jsx)(ie.Qr,{name:"metaKeywords",control:p,render:function(e){var t=e.field;return(0,k.jsx)(se.Z,{multiple:!0,freeSolo:!0,onChange:function(e,n){return t.onChange(n)},options:ve.map((function(e){return e})),renderTags:function(e,t){return e.map((function(e,n){return(0,y.createElement)(M.Z,(0,r.Z)((0,r.Z)({},t({index:n})),{},{key:e,size:"small",label:e}))}))},renderInput:function(e){return(0,k.jsx)(G.Z,(0,r.Z)({label:"Meta keywords"},e))}})}})]})}),(0,k.jsxs)(x.Z,{direction:"row",spacing:1.5,sx:{mt:3},children:[(0,k.jsx)(oe.Z,{fullWidth:!0,color:"inherit",variant:"outlined",size:"large",onClick:function(){a(!0)},children:"Preview"}),(0,k.jsx)(ae.Z,{fullWidth:!0,type:"submit",variant:"contained",size:"large",loading:g,children:"Post"})]})]})]})}),(0,k.jsx)(me,{values:b,isOpen:i,isValid:j,isSubmitting:g,onClose:o,onSubmit:v(w)})]})}var je=n(83870),be=n.n(je),ye=n(46642),we=n.n(ye),ke=n(74146),Se=n(41727),Ce=n(75667),Pe=n(59864),Ie=n(36693),ze=n(52404),Oe=(0,s.ZP)((function(e){return(0,k.jsx)(ke.Z,(0,r.Z)({placement:"bottom-start"},e))}))({width:"280px !important"});function Re(){var e=(0,ne.s0)(),t=(0,Ce.Z)(),n=(0,y.useState)(""),a=(0,J.Z)(n,2),s=a[0],o=a[1],l=(0,y.useState)([]),c=(0,J.Z)(l,2),u=c[0],d=c[1],x=function(){var e=(0,X.Z)($().mark((function e(n){var r;return $().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,o(n),!n){e.next=7;break}return e.next=5,Pe.Z.get("/api/blog/posts/search",{params:{query:n}});case 5:r=e.sent,t.current&&d(r.data.results);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),Z=function(t){e(m.vB.blog.view((0,i.o)(t)))},v=function(e){"Enter"===e.key&&Z(s)};return(0,k.jsx)(se.Z,{size:"small",autoHighlight:!0,popupIcon:null,PopperComponent:Oe,options:u,onInputChange:function(e,t){return x(t)},getOptionLabel:function(e){return e.title},noOptionsText:(0,k.jsx)(ze.Z,{searchQuery:s}),isOptionEqualToValue:function(e,t){return e.id===t.id},renderInput:function(e){return(0,k.jsx)(Ie.Z,(0,r.Z)((0,r.Z)({},e),{},{stretchStart:200,placeholder:"Search post...",onKeyUp:v,InputProps:(0,r.Z)((0,r.Z)({},e.InputProps),{},{startAdornment:(0,k.jsx)(Se.Z,{position:"start",children:(0,k.jsx)(j.Z,{icon:"eva:search-fill",sx:{ml:1,width:20,height:20,color:"text.disabled"}})})})}))},renderOption:function(e,t,n){var i=n.inputValue,a=t.title,s=t.cover,o=we()(a,i),l=be()(a,o);return(0,k.jsxs)("li",(0,r.Z)((0,r.Z)({},e),{},{children:[(0,k.jsx)(g.Z,{alt:s,src:s,sx:{width:48,height:48,borderRadius:1,flexShrink:0,mr:1.5}}),(0,k.jsx)(p.Z,{underline:"none",onClick:function(){return Z(a)},children:l.map((function(e,t){return(0,k.jsx)(h.Z,{component:"span",variant:"subtitle2",color:e.highlight?"primary":"textPrimary",children:e.text},t)}))})]}))}})}var qe=(0,s.ZP)("div")((function(e){var t=e.theme;return{padding:t.spacing(3),borderRadius:2*Number(t.shape.borderRadius),backgroundColor:t.palette.background.neutral}}));function _e(){var e=ee.Ry().shape({comment:ee.Z_().required("Comment is required"),name:ee.Z_().required("Name is required"),email:ee.Z_().email("Email must be a valid email address").required("Email is required")}),t=(0,ie.cI)({resolver:(0,re.X)(e),defaultValues:{comment:"",name:"",email:""}}),n=t.reset,r=t.handleSubmit,i=t.formState.isSubmitting,a=function(){var e=(0,X.Z)($().mark((function e(t){return $().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:n(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return(0,k.jsxs)(qe,{children:[(0,k.jsx)(h.Z,{variant:"subtitle1",sx:{mb:3},children:"Add Comment"}),(0,k.jsx)(le.RV,{methods:t,onSubmit:r(a),children:(0,k.jsxs)(x.Z,{spacing:3,alignItems:"flex-end",children:[(0,k.jsx)(le.au,{name:"comment",label:"Comment *",multiline:!0,rows:3}),(0,k.jsx)(le.au,{name:"name",label:"Name *"}),(0,k.jsx)(le.au,{name:"email",label:"Email *"}),(0,k.jsx)(ae.Z,{type:"submit",variant:"contained",loading:i,children:"Post comment"})]})})]})}var Te=n(67216),Le=n(32600),Ue=n(83213),Ae=n(19536);function Be(e){var t=e.name,n=e.avatarUrl,i=e.message,a=e.tagUser,s=e.postedAt,o=e.hasReply,l=(0,y.useState)(!1),d=(0,J.Z)(l,2),p=d[0],x=d[1];return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(Te.ZP,{disableGutters:!0,sx:(0,r.Z)({alignItems:"flex-start",py:3},o&&{ml:"auto",width:function(e){return"calc(100% - ".concat(e.spacing(7),")")}}),children:[(0,k.jsx)(Le.Z,{children:(0,k.jsx)(c.Z,{alt:t,src:n,sx:{width:48,height:48}})}),(0,k.jsx)(Ue.Z,{primary:t,primaryTypographyProps:{variant:"subtitle1"},secondary:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(h.Z,{gutterBottom:!0,variant:"caption",sx:{display:"block",color:"text.disabled"},children:(0,v.Mu)(s)}),(0,k.jsxs)(h.Z,{component:"span",variant:"body2",children:[(0,k.jsx)("strong",{children:a})," ",i]})]})}),!o&&(0,k.jsx)(oe.Z,{size:"small",onClick:function(){x(!0)},sx:{position:"absolute",right:0},children:"Reply"})]}),!o&&p&&(0,k.jsx)(u.Z,{sx:{mb:3,ml:"auto",width:function(e){return"calc(100% - ".concat(e.spacing(7),")")}},children:(0,k.jsx)(G.Z,{fullWidth:!0,size:"small",placeholder:"Write comment",InputProps:{sx:{border:function(e){return"solid 1px ".concat(e.palette.grey[50032]," !important")}}}})}),(0,k.jsx)(Ae.Z,{sx:{ml:"auto",width:function(e){return"calc(100% - ".concat(e.spacing(7),")")}}})]})}var Fe=n(48310);function Me(e){var t=e.post.comments;return(0,k.jsx)(Fe.Z,{disablePadding:!0,children:t.map((function(e){var t=e.id,n=e.replyComment,r=e.users,i=n.length>0;return(0,k.jsxs)(u.Z,{sx:{},children:[(0,k.jsx)(Be,{name:e.name,avatarUrl:e.avatarUrl,postedAt:e.postedAt,message:e.message}),i&&n.map((function(e){var t=r.find((function(t){return t.id===e.userId}));return(0,k.jsx)(Be,{tagUser:e.tagUser,postedAt:e.postedAt,message:e.message,name:(null===t||void 0===t?void 0:t.name)||"",avatarUrl:null===t||void 0===t?void 0:t.avatarUrl,hasReply:!0},e.id)}))]},t)}))})}}}]);