(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[23],{1025:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return i}));var c=n(25),r=function(){var e=Object(c.c)((function(e){return e.voting.proposals}));return Object.values(e)},o=function(e){return Object(c.c)((function(t){return t.voting.proposals[e]}))},a=function(e){var t=Object(c.c)((function(t){return t.voting.votes[e]}));return t?t.filter((function(e){return!0!==e._inValid})):[]},s=function(){return Object(c.c)((function(e){return e.voting.voteLoadingStatus}))},i=function(){return Object(c.c)((function(e){return e.voting.proposalLoadingStatus}))}},1048:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return j}));var c=n(5),r=n(60),o=(n(0),n(246)),a=n(40),s=n(1),i=["proposalState"],u=["isCoreProposal"],b=function(e){var t=e.proposalState,n=Object(r.a)(e,i);return t===a.g.ACTIVE?Object(s.jsx)(o.h,Object(c.a)({},n)):t===a.g.PENDING?Object(s.jsx)(o.g,Object(c.a)({},n)):Object(s.jsx)(o.a,Object(c.a)({},n))},j=function(e){var t=e.isCoreProposal,n=Object(r.a)(e,u);return t?Object(s.jsx)(o.d,Object(c.a)({},n)):Object(s.jsx)(o.b,Object(c.a)({},n))}},1602:function(e,t,n){"use strict";n.r(t);var c,r,o,a,s,i,u,b,j,l,d,p=n(9),O=n(0),x=n(2),f=n(6),h=n(237),g=n(110),m=n(13),v=n(318),y=Object(f.e)(x.ib)(c||(c=Object(p.a)(["\n  display: none;\n\n  "," {\n    display: block;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),C=n(1),w=Object(f.e)(x.p)(r||(r=Object(p.a)(["\n  background: ",";\n  padding-bottom: 32px;\n  padding-top: 32px;\n"])),(function(e){return e.theme.colors.gradients.bubblegum})),k=function(){var e=Object(m.b)().t;return Object(C.jsx)(w,{children:Object(C.jsx)(v.a,{children:Object(C.jsxs)(x.cb,{alignItems:"center",justifyContent:"space-between",children:[Object(C.jsxs)(x.p,{pr:"32px",children:[Object(C.jsx)(x.eb,{as:"h1",scale:"xxl",color:"secondary",mb:"16px",children:e("Voting")}),Object(C.jsx)(x.eb,{as:"h3",scale:"lg",mb:"16px",children:e("Have your say in the future of the PancakeSwap Ecosystem")}),Object(C.jsx)(x.u,{startIcon:Object(C.jsx)(x.ac,{color:"currentColor",width:"24px"}),as:g.a,to:"/voting/proposal/create",children:e("Make a Proposal")})]}),Object(C.jsx)(y,{src:"/images/voting/voting-presents.png",width:361,height:214})]})})})},I=Object(f.e)(x.p)(o||(o=Object(p.a)(["\n  background: ",";\n  padding-bottom: 32px;\n  padding-top: 32px;\n"])),(function(e){return e.theme.colors.gradients.bubblegum})),S=function(){var e=Object(m.b)().t;return Object(C.jsx)(I,{children:Object(C.jsx)(v.a,{children:Object(C.jsxs)(x.cb,{alignItems:"center",justifyContent:"space-between",children:[Object(C.jsxs)(x.p,{pr:"32px",children:[Object(C.jsx)(x.eb,{as:"h2",scale:"lg",mb:"16px",children:e("Got a suggestion?")}),Object(C.jsx)(x.Cc,{as:"p",children:e("Community proposals are a great way to see how the community feels about your ideas.")}),Object(C.jsx)(x.Cc,{as:"p",mb:"16px",children:e("They won't necessarily be implemented if the community votes successful, but suggestions with a lot of community support may be made into Core proposals.")}),Object(C.jsx)(x.u,{startIcon:Object(C.jsx)(x.ac,{color:"currentColor",width:"24px"}),as:g.a,to:"/voting/proposal/create",children:e("Make a Proposal")})]}),Object(C.jsx)(y,{src:"/images/voting/voting-bunny.png",width:173,height:234})]})})})},E=n(5),T=n(8),L=n(79),N=n(486),D=n(1025),A=n(40),M=n(987),P=n(470),B=n.n(P),V=n(991),F=Object(f.e)(x.cb)(a||(a=Object(p.a)(["\n  border-bottom: 1px solid ",";\n"])),(function(e){return e.theme.colors.cardBorder})),G=f.e.div(s||(s=Object(p.a)(["\n  ",":last-child {\n    border-bottom: 0;\n  }\n"])),F),H=function(){return Object(C.jsx)(G,{children:B()(V.d).map((function(e){return Object(C.jsxs)(F,{alignItems:"center",justifyContent:"space-between",py:"16px",px:"24px",children:[Object(C.jsxs)(x.p,{style:{flex:1},children:[Object(C.jsx)(x.hc,{height:"21px",width:"70%",mb:"4px"}),Object(C.jsx)(x.hc,{height:"21px",width:"30%",mb:"4px"}),Object(C.jsx)(x.hc,{height:"21px",width:"40%"})]}),Object(C.jsx)(x.hc,{height:"32px",width:"32px"})]},e)}))})},J=f.e.div(i||(i=Object(p.a)(["\n  background-color: ",";\n  padding-top: 16px;\n"])),(function(e){return e.theme.colors.input})),R=function(e){switch(e){case A.h.COMMUNITY:return 1;case A.h.ALL:return 2;case A.h.CORE:default:return 0}},U=function(e){var t=e.proposalType,n=e.onTypeChange,c=Object(m.b)().t;return Object(C.jsx)(J,{children:Object(C.jsxs)(x.xc,{activeIndex:R(t),onItemClick:function(e){n(function(e){switch(e){case 1:return A.h.COMMUNITY;case 2:return A.h.ALL;default:return A.h.CORE}}(e))},children:[Object(C.jsx)(x.wc,{children:Object(C.jsxs)(x.cb,{alignItems:"center",children:[Object(C.jsx)(x.Sc,{color:"currentColor",mr:"4px"}),c("Core")]})}),Object(C.jsxs)(x.wc,{children:[" ",Object(C.jsxs)(x.cb,{alignItems:"center",children:[Object(C.jsx)(x.S,{color:"currentColor",mr:"4px"}),c("Community")]})]}),Object(C.jsx)(x.wc,{children:"All"})]})})},Y=n(21),z=n(949),_=function(e){var t=Object(Y.default)(1e3*e);return Object(z.default)(t,"MMM do, yyyy HH:mm")},q=function(e){var t=e.startDate,n=e.endDate,c=e.proposalState,r=Object(m.b)().t,o={fontSize:"16px",color:"textSubtle",ml:"8px"};return c===A.g.CLOSED?Object(C.jsx)(x.Cc,Object(E.a)(Object(E.a)({},o),{},{children:r("Ended %date%",{date:_(n)})})):c===A.g.PENDING?Object(C.jsx)(x.Cc,Object(E.a)(Object(E.a)({},o),{},{children:r("Starts %date%",{date:_(t)})})):Object(C.jsx)(x.Cc,Object(E.a)(Object(E.a)({},o),{},{children:r("Ends %date%",{date:_(n)})}))},K=n(1048),Q=Object(f.e)(g.a)(u||(u=Object(p.a)(["\n  align-items: center;\n  border-bottom: 1px solid ",";\n  display: flex;\n  padding: 16px 24px;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.colors.cardBorder}),(function(e){return e.theme.colors.dropdown})),W=function(e){var t=e.proposal,n="/voting/proposal/".concat(t.id);return Object(C.jsxs)(Q,{to:n,children:[Object(C.jsxs)(x.p,{as:"span",style:{flex:1},children:[Object(C.jsx)(x.Cc,{bold:!0,mb:"8px",children:t.title}),Object(C.jsx)(x.cb,{alignItems:"center",mb:"8px",children:Object(C.jsx)(q,{startDate:t.start,endDate:t.end,proposalState:t.state})}),Object(C.jsxs)(x.cb,{alignItems:"center",children:[Object(C.jsx)(K.a,{proposalState:t.state}),Object(C.jsx)(K.b,{isCoreProposal:Object(M.h)(t),ml:"8px"})]})]}),Object(C.jsx)(x.hb,{variant:"text",children:Object(C.jsx)(x.f,{width:"24px"})})]})},X=Object(f.e)(x.cb).attrs({alignItems:"center"})(b||(b=Object(p.a)(["\n  border-bottom: 1px solid ",";\n  padding: 16px 24px;\n"])),(function(e){return e.theme.colors.cardBorder})),Z=f.e.label(j||(j=Object(p.a)(["\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  margin-right: 16px;\n"]))),$=[{value:A.g.ACTIVE,label:"Vote Now"},{value:A.g.PENDING,label:"Soon"},{value:A.g.CLOSED,label:"Closed"}],ee=function(e){var t=e.filterState,n=e.onFilterChange,c=e.isLoading,r=Object(m.b)().t;return Object(C.jsx)(X,{children:$.map((function(e){var o=e.value,a=e.label;return Object(C.jsxs)(Z,{children:[Object(C.jsx)(x.bc,{scale:"sm",value:o,checked:t===o,onChange:function(e){var t=e.currentTarget.value;n(t)},disabled:c}),Object(C.jsx)(x.Cc,{ml:"8px",children:r(a)})]},a)}))})},te=function(){var e=Object(m.b)().t,t=Object(O.useState)({proposalType:A.h.CORE,filterState:A.g.ACTIVE}),n=Object(T.a)(t,2),c=n[0],r=n[1],o=Object(D.b)(),a=Object(D.c)(),s=Object(L.b)(),i=c.proposalType,u=c.filterState,b=o===A.j.LOADING,j=o===A.j.IDLE;Object(O.useEffect)((function(){s(Object(N.c)({first:1e3,state:u}))}),[u,s]);var l=Object(M.b)(Object(M.c)(a,i),u);return Object(C.jsxs)(v.a,{py:"40px",children:[Object(C.jsx)(x.p,{mb:"48px",children:Object(C.jsxs)(x.q,{children:[Object(C.jsx)(g.a,{to:"/",children:e("Home")}),Object(C.jsx)(x.Cc,{children:e("Voting")})]})}),Object(C.jsx)(x.eb,{as:"h2",scale:"xl",mb:"32px",id:"voting-proposals",children:e("Proposals")}),Object(C.jsxs)(x.z,{children:[Object(C.jsx)(U,{proposalType:i,onTypeChange:function(e){r((function(t){return Object(E.a)(Object(E.a)({},t),{},{proposalType:e})}))}}),Object(C.jsx)(ee,{filterState:u,onFilterChange:function(e){r((function(t){return Object(E.a)(Object(E.a)({},t),{},{filterState:e})}))},isLoading:b}),b&&Object(C.jsx)(H,{}),j&&l.length>0&&l.map((function(e){return Object(C.jsx)(W,{proposal:e},e.id)})),j&&0===l.length&&Object(C.jsx)(x.cb,{alignItems:"center",justifyContent:"center",p:"32px",children:Object(C.jsx)(x.eb,{as:"h5",children:e("No proposals found")})})]})]})},ne=f.e.div(l||(l=Object(p.a)(["\n  flex: none;\n"]))),ce=f.e.div(d||(d=Object(p.a)(["\n  flex: 1;\n  height: 100%;\n"])));t.default=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(h.a,{}),Object(C.jsxs)(x.cb,{flexDirection:"column",minHeight:"calc(100vh - 64px)",children:[Object(C.jsx)(ne,{children:Object(C.jsx)(k,{})}),Object(C.jsx)(ce,{children:Object(C.jsx)(te,{})}),Object(C.jsx)(ne,{children:Object(C.jsx)(S,{})})]})]})}},987:function(e,t,n){"use strict";n.d(t,"h",(function(){return p})),n.d(t,"c",(function(){return O})),n.d(t,"b",(function(){return x})),n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return h})),n.d(t,"i",(function(){return g})),n.d(t,"g",(function(){return m})),n.d(t,"a",(function(){return v})),n.d(t,"f",(function(){return y}));var c=n(15),r=n(32),o=n(5),a=n(3),s=n.n(a),i=n(10),u=n(58),b=n(35),j=n(40),l=n(119),d=n(991),p=function(e){return d.a.includes(e.author.toLowerCase())},O=function(e,t){switch(t){case j.h.COMMUNITY:return e.filter((function(e){return!p(e)}));case j.h.CORE:return e.filter((function(e){return p(e)}));case j.h.ALL:default:return e}},x=function(e,t){return e.filter((function(e){return e.state===t}))},f=function(){return{plugins:{},network:56,strategies:[{name:"cake",params:{symbol:"CAKE",address:b.a.cake.address,decimals:18}}]}},h=function(){return{version:d.e,timestamp:(Date.now()/1e3).toFixed(),space:d.c}},g=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,c,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u.k,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if((n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:throw c=e.sent,new Error(null===c||void 0===c?void 0:c.error_description);case 8:return e.next=10,n.json();case 10:return r=e.sent,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(i.a)(s.a.mark((function e(t,n,c){var r,o,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=c,e.t0){e.next=5;break}return e.next=4,l.a.getBlockNumber();case 4:e.t0=e.sent;case 5:return r=e.t0,e.next=8,fetch("".concat(u.l,"/power"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:t,block:r,poolAddresses:n})});case 8:return o=e.sent,e.next=11,o.json();case 11:return a=e.sent,e.abrupt("return",a.data);case 13:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),v=function(e){return e.reduce((function(e,t){var n=t.proposal.choices[t.choice-1];return Object(o.a)(Object(o.a)({},e),{},Object(c.a)({},n,e[n]?[].concat(Object(r.a)(e[n]),[t]):[t]))}),{})},y=function(e){return e.reduce((function(e,t){var n,c=parseFloat(null===(n=t.metadata)||void 0===n?void 0:n.votingPower);return c||(c=0),e+c}),0)}},991:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return i}));var c=10,r=["0x842B508681eE336E74600974B4623B709477d29D","0x977e0c1005dff8749f8cac22f4df0bd5f013d1a7","0x6eaf1b33b8672c5dc40ab8f4ba3a0111723126c7"].map((function(e){return e.toLowerCase()})),o="https://gateway.ipfs.io/ipfs",a="0.1.3",s="cake.eth",i=10}}]);
//# sourceMappingURL=23.120cb458.chunk.js.map