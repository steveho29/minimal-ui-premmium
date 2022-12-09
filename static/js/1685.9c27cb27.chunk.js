"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[1685],{36693:function(e,t,n){var r=n(4942),i=n(1413),a=n(17592),s=n(15082),o=(0,a.ZP)(s.Z,{shouldForwardProp:function(e){return"stretchStart"!==e}})((function(e){var t=e.stretchStart,n=e.theme;return{"& .MuiOutlinedInput-root":(0,i.Z)({transition:n.transitions.create(["box-shadow","width"],{easing:n.transitions.easing.easeInOut,duration:n.transitions.duration.shorter}),"&.Mui-focused":{boxShadow:n.customShadows.z12}},t&&{width:t,"&.Mui-focused":(0,r.Z)({boxShadow:n.customShadows.z12},n.breakpoints.up("sm"),{width:t+60})}),"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(n.palette.grey[50032]," !important")}}}));t.Z=o},43429:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(29439),i=n(47313);function a(e){var t=(0,i.useState)(e||!1),n=(0,r.Z)(t,2),a=n[0],s=n[1];return{toggle:a,onToggle:function(){return s(!a)},onOpen:function(){return s(!0)},onClose:function(){return s(!1)},setToggle:s}}},81685:function(e,t,n){n.r(t),n.d(t,{default:function(){return me}});var r=n(4942),i=n(17592),a=n(70178),s=n(61113),o=n(9019),d=n(22227),c=n(80206),l=n(35898),u=n(57829),p=n(41727),h=n(24185),m=n(36693),x=n(32913),f=n(46417),v=(0,i.ZP)("div")((function(e){var t=e.theme;return(0,r.Z)({backgroundSize:"cover",backgroundImage:"url(/assets/overlay.svg), url(https://minimal-assets-api-dev.vercel.app/assets/images/faqs/hero.jpg)",padding:t.spacing(10,0)},t.breakpoints.up("md"),{height:560,padding:0})})),g=(0,i.ZP)(l.Z)((function(e){var t=e.theme;return(0,r.Z)({textAlign:"center"},t.breakpoints.up("md"),{textAlign:"left",position:"absolute",bottom:t.spacing(10)})}));function b(){return(0,f.jsx)(v,{children:(0,f.jsx)(a.Z,{component:x.NM,sx:{position:"relative",height:"100%"},children:(0,f.jsxs)(g,{spacing:5,children:[(0,f.jsxs)("div",{children:[(0,f.jsx)(x.gH,{text:"How",sx:{color:"primary.main"},variants:(0,x.EU)().inRight}),(0,f.jsx)("br",{}),(0,f.jsxs)(u.Z,{sx:{display:"inline-flex",color:"common.white"},children:[(0,f.jsx)(x.gH,{text:"can",sx:{mr:2}}),(0,f.jsx)(x.gH,{text:"we",sx:{mr:2}}),(0,f.jsx)(x.gH,{text:"help",sx:{mr:2}}),(0,f.jsx)(x.gH,{text:"you?"})]})]}),(0,f.jsx)(c.m.div,{variants:(0,x.EU)().inUp,children:(0,f.jsx)(m.Z,{stretchStart:280,placeholder:"Search support",InputProps:{startAdornment:(0,f.jsx)(p.Z,{position:"start",children:(0,f.jsx)(h.Z,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})},sx:{"& .MuiOutlinedInput-root":{color:"common.white"}}})})]})})})}var Z=n(84506),j=n(29439),y=n(63366),w=n(87462),R=n(47313),C=(n(96214),n(83061)),S=n(21921),k=n(77342),A=n(65033),M=n(82295);var P=R.createContext({}),G=n(53800),N=n(32298),q=n(77430);function I(e){return(0,N.Z)("MuiAccordion",e)}var U=(0,q.Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),E=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],_=(0,i.ZP)(M.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,r.Z)({},"& .".concat(U.region),t.region),t.root,!n.square&&t.rounded,!n.disableGutters&&t.gutters]}})((function(e){var t,n=e.theme,i={duration:n.transitions.duration.shortest};return t={position:"relative",transition:n.transitions.create(["margin"],i),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(n.vars||n).palette.divider,transition:n.transitions.create(["opacity","background-color"],i)},"&:first-of-type":{"&:before":{display:"none"}}},(0,r.Z)(t,"&.".concat(U.expanded),{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}}),(0,r.Z)(t,"&.".concat(U.disabled),{backgroundColor:(n.vars||n).palette.action.disabledBackground}),t}),(function(e){var t=e.theme,n=e.ownerState;return(0,w.Z)({},!n.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(t.vars||t).shape.borderRadius,borderTopRightRadius:(t.vars||t).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(t.vars||t).shape.borderRadius,borderBottomRightRadius:(t.vars||t).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!n.disableGutters&&(0,r.Z)({},"&.".concat(U.expanded),{margin:"16px 0"}))})),T=R.forwardRef((function(e,t){var n=(0,k.Z)({props:e,name:"MuiAccordion"}),r=n.children,i=n.className,a=n.defaultExpanded,s=void 0!==a&&a,o=n.disabled,d=void 0!==o&&o,c=n.disableGutters,l=void 0!==c&&c,u=n.expanded,p=n.onChange,h=n.square,m=void 0!==h&&h,x=n.TransitionComponent,v=void 0===x?A.Z:x,g=n.TransitionProps,b=(0,y.Z)(n,E),M=(0,G.Z)({controlled:u,default:s,name:"Accordion",state:"expanded"}),N=(0,j.Z)(M,2),q=N[0],U=N[1],T=R.useCallback((function(e){U(!q),p&&p(e,!q)}),[q,p,U]),W=R.Children.toArray(r),D=(0,Z.Z)(W),H=D[0],V=D.slice(1),B=R.useMemo((function(){return{expanded:q,disabled:d,disableGutters:l,toggle:T}}),[q,d,l,T]),O=(0,w.Z)({},n,{square:m,disabled:d,disableGutters:l,expanded:q}),z=function(e){var t=e.classes,n={root:["root",!e.square&&"rounded",e.expanded&&"expanded",e.disabled&&"disabled",!e.disableGutters&&"gutters"],region:["region"]};return(0,S.Z)(n,I,t)}(O);return(0,f.jsxs)(_,(0,w.Z)({className:(0,C.Z)(z.root,i),ref:t,ownerState:O,square:m},b,{children:[(0,f.jsx)(P.Provider,{value:B,children:H}),(0,f.jsx)(v,(0,w.Z)({in:q,timeout:"auto"},g,{children:(0,f.jsx)("div",{"aria-labelledby":H.props.id,id:H.props["aria-controls"],role:"region",className:z.region,children:V})}))]}))})),W=n(38743);function D(e){return(0,N.Z)("MuiAccordionSummary",e)}var H=(0,q.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),V=["children","className","expandIcon","focusVisibleClassName","onClick"],B=(0,i.ZP)(W.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,n=e.theme,i=e.ownerState,a={duration:n.transitions.duration.shortest};return(0,w.Z)((t={display:"flex",minHeight:48,padding:n.spacing(0,2),transition:n.transitions.create(["min-height","background-color"],a)},(0,r.Z)(t,"&.".concat(H.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,r.Z)(t,"&.".concat(H.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),(0,r.Z)(t,"&:hover:not(.".concat(H.disabled,")"),{cursor:"pointer"}),t),!i.disableGutters&&(0,r.Z)({},"&.".concat(H.expanded),{minHeight:64}))})),O=(0,i.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:function(e,t){return t.content}})((function(e){var t=e.theme,n=e.ownerState;return(0,w.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!n.disableGutters&&(0,r.Z)({transition:t.transitions.create(["margin"],{duration:t.transitions.duration.shortest})},"&.".concat(H.expanded),{margin:"20px 0"}))})),z=(0,i.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:function(e,t){return t.expandIconWrapper}})((function(e){var t=e.theme;return(0,r.Z)({display:"flex",color:(t.vars||t).palette.action.active,transform:"rotate(0deg)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})},"&.".concat(H.expanded),{transform:"rotate(180deg)"})})),F=R.forwardRef((function(e,t){var n=(0,k.Z)({props:e,name:"MuiAccordionSummary"}),r=n.children,i=n.className,a=n.expandIcon,s=n.focusVisibleClassName,o=n.onClick,d=(0,y.Z)(n,V),c=R.useContext(P),l=c.disabled,u=void 0!==l&&l,p=c.disableGutters,h=c.expanded,m=c.toggle,x=(0,w.Z)({},n,{expanded:h,disabled:u,disableGutters:p}),v=function(e){var t=e.classes,n=e.expanded,r=e.disabled,i=e.disableGutters,a={root:["root",n&&"expanded",r&&"disabled",!i&&"gutters"],focusVisible:["focusVisible"],content:["content",n&&"expanded",!i&&"contentGutters"],expandIconWrapper:["expandIconWrapper",n&&"expanded"]};return(0,S.Z)(a,D,t)}(x);return(0,f.jsxs)(B,(0,w.Z)({focusRipple:!1,disableRipple:!0,disabled:u,component:"div","aria-expanded":h,className:(0,C.Z)(v.root,i),focusVisibleClassName:(0,C.Z)(v.focusVisible,s),onClick:function(e){m&&m(e),o&&o(e)},ref:t,ownerState:x},d,{children:[(0,f.jsx)(O,{className:v.content,ownerState:x,children:r}),a&&(0,f.jsx)(z,{className:v.expandIconWrapper,ownerState:x,children:a})]}))}));function L(e){return(0,N.Z)("MuiAccordionDetails",e)}(0,q.Z)("MuiAccordionDetails",["root"]);var J=["className"],K=(0,i.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{padding:e.theme.spacing(1,2,2)}})),Q=R.forwardRef((function(e,t){var n=(0,k.Z)({props:e,name:"MuiAccordionDetails"}),r=n.className,i=(0,y.Z)(n,J),a=n,s=function(e){var t=e.classes;return(0,S.Z)({root:["root"]},L,t)}(a);return(0,f.jsx)(K,(0,w.Z)({className:(0,C.Z)(s.root,r),ref:t,ownerState:a},i))})),X=n(8289);function Y(){return(0,f.jsx)(f.Fragment,{children:X.c_.map((function(e){return(0,f.jsxs)(T,{children:[(0,f.jsx)(F,{expandIcon:(0,f.jsx)(h.Z,{icon:"eva:arrow-ios-downward-fill",width:20,height:20}),children:(0,f.jsx)(s.Z,{variant:"subtitle1",children:e.heading})}),(0,f.jsx)(Q,{children:(0,f.jsx)(s.Z,{children:e.detail})})]},e.id)}))})}var $=n(15082),ee=n(69099);function te(){return(0,f.jsxs)(l.Z,{component:x.DG,spacing:3,children:[(0,f.jsx)(c.m.div,{variants:(0,x.EU)().inUp,children:(0,f.jsx)(s.Z,{variant:"h4",children:"Haven't found the right help?"})}),(0,f.jsx)(c.m.div,{variants:(0,x.EU)().inUp,children:(0,f.jsx)($.Z,{fullWidth:!0,label:"Name"})}),(0,f.jsx)(c.m.div,{variants:(0,x.EU)().inUp,children:(0,f.jsx)($.Z,{fullWidth:!0,label:"Email"})}),(0,f.jsx)(c.m.div,{variants:(0,x.EU)().inUp,children:(0,f.jsx)($.Z,{fullWidth:!0,label:"Subject"})}),(0,f.jsx)(c.m.div,{variants:(0,x.EU)().inUp,children:(0,f.jsx)($.Z,{fullWidth:!0,label:"Enter your message here.",multiline:!0,rows:4})}),(0,f.jsx)(c.m.div,{variants:(0,x.EU)().inUp,children:(0,f.jsx)(ee.Z,{size:"large",variant:"contained",children:"Submit Now"})})]})}var ne=n(75908),re=n(9289),ie=n(19536),ae=n(46923),se=n(89840),oe=n(43429),de=n(22868),ce=n(25937),le=[{label:"Managing your account",icon:"https://minimal-assets-api-dev.vercel.app/assets/icons/faqs/ic_account.svg",href:"#"},{label:"Payment",icon:"https://minimal-assets-api-dev.vercel.app/assets/icons/faqs/ic_payment.svg",href:"#"},{label:"Delivery",icon:"https://minimal-assets-api-dev.vercel.app/assets/icons/faqs/ic_delivery.svg",href:"#"},{label:"Problem with the Product",icon:"https://minimal-assets-api-dev.vercel.app/assets/icons/faqs/ic_package.svg",href:"#"},{label:"Return & Refund",icon:"https://minimal-assets-api-dev.vercel.app/assets/icons/faqs/ic_refund.svg",href:"#"},{label:"Guarantees and assurances",icon:"https://minimal-assets-api-dev.vercel.app/assets/icons/faqs/ic_assurances.svg",href:"#"}];function ue(){var e=(0,de.Z)("up","md"),t=(0,oe.Z)(),n=t.toggle,r=t.onOpen,i=t.onClose;return e?(0,f.jsx)(u.Z,{component:x.DG,sx:{mb:15,display:"grid",gap:3,gridTemplateColumns:{md:"repeat(3, 1fr)",lg:"repeat(6, 1fr)"}},children:le.map((function(e){return(0,f.jsx)(c.m.div,{variants:(0,x.EU)().in,children:(0,f.jsx)(pe,{category:e})},e.label)}))}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(ne.Z,{position:"absolute",color:"transparent",sx:{top:-120,boxShadow:0},children:[(0,f.jsx)(re.Z,{children:(0,f.jsx)(ee.Z,{startIcon:(0,f.jsx)(h.Z,{icon:"eva:menu-2-fill"}),onClick:r,children:"Categories"})}),(0,f.jsx)(ie.Z,{})]}),(0,f.jsx)(ae.ZP,{open:n,onClose:i,children:(0,f.jsx)(u.Z,{sx:{p:1,display:"grid",gap:1,gridTemplateColumns:"repeat(2, 1fr)"},children:le.map((function(e){return(0,f.jsxs)(se.Z,{onClick:i,sx:{py:2,maxWidth:140,borderRadius:1,textAlign:"center",typography:"body2",alignItems:"center",flexDirection:"column",justifyContent:"center",bgcolor:"background.neutral"},children:[(0,f.jsx)(ce.Z,{alt:e.icon,src:e.icon,sx:{width:48,height:48,mb:1}}),e.label]},e.label)}))})})]})}function pe(e){var t=e.category,n=t.label,r=t.icon;return(0,f.jsxs)(M.Z,{variant:"outlined",sx:{px:2,height:260,borderRadius:2,display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center","&:hover":{boxShadow:function(e){return e.customShadows.z24}}},children:[(0,f.jsx)(ce.Z,{alt:r,visibleByDefault:!0,disabledEffect:!0,src:r,sx:{mb:2,width:80,height:80}}),(0,f.jsx)(s.Z,{variant:"subtitle2",children:n})]})}var he=(0,i.ZP)("div")((function(e){var t=e.theme;return(0,r.Z)({paddingTop:t.spacing(8)},t.breakpoints.up("md"),{paddingTop:t.spacing(11)})}));function me(){return(0,f.jsx)(d.Z,{title:"Faqs",children:(0,f.jsxs)(he,{children:[(0,f.jsx)(b,{}),(0,f.jsxs)(a.Z,{sx:{mt:15,mb:10,position:"relative"},children:[(0,f.jsx)(ue,{}),(0,f.jsx)(s.Z,{variant:"h3",sx:{mb:5},children:"Frequently asked questions"}),(0,f.jsxs)(o.ZP,{container:!0,spacing:10,children:[(0,f.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,f.jsx)(Y,{})}),(0,f.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,f.jsx)(te,{})})]})]})]})})}}}]);