(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[13],{1025:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return i}));var c=n(25),r=function(){var e=Object(c.c)((function(e){return e.voting.proposals}));return Object.values(e)},a=function(e){return Object(c.c)((function(t){return t.voting.proposals[e]}))},o=function(e){var t=Object(c.c)((function(t){return t.voting.votes[e]}));return t?t.filter((function(e){return!0!==e._inValid})):[]},s=function(){return Object(c.c)((function(e){return e.voting.voteLoadingStatus}))},i=function(){return Object(c.c)((function(e){return e.voting.proposalLoadingStatus}))}},1048:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return j}));var c=n(5),r=n(60),a=(n(0),n(246)),o=n(40),s=n(1),i=["proposalState"],l=["isCoreProposal"],b=function(e){var t=e.proposalState,n=Object(r.a)(e,i);return t===o.g.ACTIVE?Object(s.jsx)(a.h,Object(c.a)({},n)):t===o.g.PENDING?Object(s.jsx)(a.g,Object(c.a)({},n)):Object(s.jsx)(a.a,Object(c.a)({},n))},j=function(e){var t=e.isCoreProposal,n=Object(r.a)(e,l);return t?Object(s.jsx)(a.d,Object(c.a)({},n)):Object(s.jsx)(a.b,Object(c.a)({},n))}},1055:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return b}));var c,r=n(5),a=n(9),o=(n(0),n(2)),s=n(6),i=n(1),l=s.e.div(c||(c=Object(a.a)(["\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 12px;\n  display: flex;\n  height: 64px;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  padding: 0 16px;\n"])),(function(e){return e.theme.colors.cardBorder})),b=function(e){return Object(i.jsx)(o.p,Object(r.a)({mb:"24px",maxWidth:"320px"},e))}},1077:function(e,t,n){"use strict";var c,r=n(9),a=n(6).e.div(c||(c=Object(r.a)(["\n  align-items: start;\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: minmax(0, 1fr);\n\n  "," {\n    grid-template-columns: 1fr 332px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg}));t.a=a},1078:function(e,t,n){"use strict";n(0);var c=n(2),r=n(13),a=n(34),o=n(1055),s=n(1);t.a=function(e){var t=e.total,n=e.cakeBalance,i=e.cakeVaultBalance,l=e.cakePoolBalance,b=e.poolsBalance,j=e.cakeBnbLpBalance,u=Object(r.b)().t;return Object(s.jsxs)(o.a,{mb:"0",children:[Object(s.jsx)(c.Dc,{as:"p",mb:"24px",fontSize:"14px",color:"textSubtle",children:u("Your voting power is determined by the amount of CAKE you held at the block detailed below. CAKE held in other places does not contribute to your voting power.")}),Object(s.jsx)(c.Dc,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:u("Overview")}),Object(s.jsxs)(o.b,{children:[Object(s.jsx)(c.Dc,{color:"secondary",children:u("Your Voting Power")}),Object(s.jsx)(c.Dc,{bold:!0,fontSize:"20px",children:Object(a.e)(t,0,3)})]}),Object(s.jsx)(c.Dc,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:u("Your Cake Held Now")}),Object(s.jsxs)(c.db,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(s.jsx)(c.Dc,{color:"textSubtle",fontSize:"16px",children:u("Wallet")}),Object(s.jsx)(c.Dc,{textAlign:"right",children:Object(a.e)(n,0,3)})]}),Object(s.jsxs)(c.db,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(s.jsx)(c.Dc,{color:"textSubtle",fontSize:"16px",children:u("Manual CAKE Pool")}),Object(s.jsx)(c.Dc,{textAlign:"right",children:Object(a.e)(l,0,3)})]}),Object(s.jsxs)(c.db,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(s.jsx)(c.Dc,{color:"textSubtle",fontSize:"16px",children:u("Auto CAKE Pool")}),Object(s.jsx)(c.Dc,{textAlign:"right",children:Object(a.e)(i,0,3)})]}),Object(s.jsxs)(c.db,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(s.jsx)(c.Dc,{color:"textSubtle",fontSize:"16px",children:u("Other Syrup Pools")}),Object(s.jsx)(c.Dc,{textAlign:"right",children:Object(a.e)(b,0,3)})]}),Object(s.jsxs)(c.db,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(s.jsx)(c.Dc,{color:"textSubtle",fontSize:"16px",children:u("CAKE BNB LP")}),Object(s.jsx)(c.Dc,{textAlign:"right",children:Object(a.e)(j,0,3)})]})]})}},1079:function(e,t,n){"use strict";var c=n(3),r=n.n(c),a=n(5),o=n(10),s=n(8),i=n(0),l=n(49),b=n(181),j=n(36),u=n(119),d=n(987),p={verificationHash:null,cakeBalance:0,cakeVaultBalance:0,cakePoolBalance:0,poolsBalance:0,cakeBnbLpBalance:0,total:0};t.a=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Object(l.c)(),c=n.account,x=Object(i.useState)(p),O=Object(s.a)(x,2),h=O[0],f=O[1],m=Object(i.useState)(!!c),v=Object(s.a)(m,2),g=v[0],w=v[1];return Object(i.useEffect)((function(){c&&t&&function(){var n=Object(o.a)(r.a.mark((function n(){var o,s,i,l,p,x,O,h,m,v,g;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(w(!0),n.prev=1,n.t0=e,n.t0){n.next=7;break}return n.next=6,u.a.getBlockNumber();case 6:n.t0=n.sent;case 7:return o=n.t0,n.next=10,Object(b.b)(o);case 10:return s=n.sent,i=s.map((function(e){var t=e.contractAddress;return Object(j.a)(t)})),n.next=14,Object(d.g)(c,i,o);case 14:l=n.sent,p=l.cakeBalance,x=l.cakeBnbLpBalance,O=l.cakePoolBalance,h=l.total,m=l.poolsBalance,v=l.cakeVaultBalance,g=l.verificationHash,t&&f((function(e){return Object(a.a)(Object(a.a)({},e),{},{verificationHash:g,cakeBalance:parseFloat(p),cakeBnbLpBalance:parseFloat(x),cakePoolBalance:parseFloat(O),poolsBalance:parseFloat(m),cakeVaultBalance:parseFloat(v),total:parseFloat(h)})}));case 23:return n.prev=23,w(!1),n.finish(23);case 26:case"end":return n.stop()}}),n,null,[[1,,23,26]])})));return function(){return n.apply(this,arguments)}}()()}),[c,e,f,t,w]),Object(a.a)(Object(a.a)({},h),{},{isLoading:g})}},1123:function(e,t,n){"use strict";var c,r,a,o=n(5),s=(n(0),n(1126)),i=n.n(s),l=n(1162),b=n.n(l),j=n(9),u=n(2),d=n(6),p=n(1),x=d.e.table(c||(c=Object(j.a)(["\n  margin-bottom: 32px;\n  margin-top: 32px;\n  width: 100%;\n\n  td,\n  th {\n    color: ",";\n    padding: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),O=d.e.div(r||(r=Object(j.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n\n  li {\n    margin-bottom: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),h=function(e){return Object(p.jsx)(u.fb,Object(o.a)({as:"h4",scale:"lg",my:"16px"},e))},f={h1:h,h2:h,h3:h,h4:h,h5:h,h6:h,p:function(e){return Object(p.jsx)(u.Dc,Object(o.a)({as:"p",my:"16px"},e))},table:x,ol:function(e){return Object(p.jsx)(O,Object(o.a)({as:"ol"},e))},ul:function(e){return Object(p.jsx)(O,Object(o.a)({as:"ul"},e))},pre:d.e.pre(a||(a=Object(j.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n  max-width: 100%;\n  overflow-x: auto;\n"])),(function(e){return e.theme.colors.text}))};t.a=function(e){return Object(p.jsx)(i.a,Object(o.a)({remarkPlugins:[b.a],components:f},e))}},1601:function(e,t,n){"use strict";n.r(t);var c,r,a,o=n(0),s=n(2),i=n(49),l=n(91),b=n(110),j=n(79),u=n(40),d=n(1025),p=n(486),x=n(13),O=n(318),h=n(1123),f=n(472),m=n(987),v=n(1048),g=n(1077),w=n(9),k=n(6),y=n(949),S=n(38),D=n(194),C=n(991),B=n(1),I=Object(k.e)(s.p)(c||(c=Object(w.a)(["\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.cardBorder})),A=function(e){var t=e.proposal,n=Object(x.b)().t,c=new Date(1e3*t.start),r=new Date(1e3*t.end);return Object(B.jsxs)(s.z,{mb:"16px",children:[Object(B.jsx)(s.C,{children:Object(B.jsx)(s.fb,{as:"h3",scale:"md",children:n("Details")})}),Object(B.jsxs)(s.A,{children:[Object(B.jsxs)(s.db,{alignItems:"center",mb:"8px",children:[Object(B.jsx)(s.Dc,{color:"textSubtle",children:n("Identifier")}),Object(B.jsx)(s.sb,{href:"".concat(C.b,"/").concat(t.id),ml:"8px",children:t.id.slice(0,8)})]}),Object(B.jsxs)(s.db,{alignItems:"center",mb:"8px",children:[Object(B.jsx)(s.Dc,{color:"textSubtle",children:n("Creator")}),Object(B.jsx)(s.sb,{href:Object(S.e)(t.author,"address"),ml:"8px",children:Object(D.a)(t.author)})]}),Object(B.jsxs)(s.db,{alignItems:"center",mb:"16px",children:[Object(B.jsx)(s.Dc,{color:"textSubtle",children:n("Snapshot")}),Object(B.jsx)(s.sb,{href:Object(S.e)(t.snapshot,"block"),ml:"8px",children:t.snapshot})]}),Object(B.jsxs)(I,{p:"16px",children:[Object(B.jsx)(v.a,{proposalState:t.state,mb:"8px"}),Object(B.jsxs)(s.db,{alignItems:"center",children:[Object(B.jsx)(s.Dc,{color:"textSubtle",fontSize:"14px",children:n("Start Date")}),Object(B.jsx)(s.Dc,{ml:"8px",children:Object(y.default)(c,"yyyy-MM-dd HH:mm")})]}),Object(B.jsxs)(s.db,{alignItems:"center",children:[Object(B.jsx)(s.Dc,{color:"textSubtle",fontSize:"14px",children:n("End Date")}),Object(B.jsx)(s.Dc,{ml:"8px",children:Object(y.default)(r,"yyyy-MM-dd HH:mm")})]})]})]})]})},L=n(470),V=n.n(L),E=n(34),P=Object(k.e)(s.Dc)(r||(r=Object(w.a)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),N=function(e){var t=e.choices,n=e.votes,c=Object(x.b)().t,r=Object(m.a)(n),a=Object(d.e)(),o=Object(i.c)().account,l=Object(m.f)(n);return Object(B.jsxs)(s.z,{children:[Object(B.jsx)(s.C,{children:Object(B.jsx)(s.fb,{as:"h3",scale:"md",children:c("Current Results")})}),Object(B.jsxs)(s.A,{children:[a===u.j.IDLE&&t.map((function(e,t){var n=r[e]||[],a=Object(m.f)(n),i=0===l?0:a/l*100,b=n.some((function(e){return o&&e.voter.toLowerCase()===o.toLowerCase()}));return Object(B.jsxs)(s.p,{mt:t>0?"24px":"0px",children:[Object(B.jsxs)(s.db,{alignItems:"center",mb:"8px",children:[Object(B.jsx)(P,{mb:"4px",title:e,children:e}),b&&Object(B.jsxs)(s.Ac,{variant:"success",outline:!0,ml:"8px",children:[Object(B.jsx)(s.J,{mr:"4px"})," ",c("Voted")]})]}),Object(B.jsx)(s.p,{mb:"4px",children:Object(B.jsx)(s.ac,{primaryStep:i,scale:"sm"})}),Object(B.jsxs)(s.db,{alignItems:"center",justifyContent:"space-between",children:[Object(B.jsx)(s.Dc,{color:"textSubtle",children:c("%total% Votes",{total:Object(E.e)(a,0,2)})}),Object(B.jsxs)(s.Dc,{children:[i.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),"%"]})]})]},e)})),a===u.j.LOADING&&V()(t.length).map((function(e,t){return Object(B.jsx)(s.p,{mt:t>0?"24px":"0px",children:Object(B.jsx)(s.ic,{height:"36px",mb:"4px"})},e)}))]})]})},z=n(5),F=n(3),T=n.n(F),M=n(10),H=n(8),J=n(60),K=n(118),G=n(122),Y=n(15),Q=n(186),R=n(22),W=n(101);!function(e){e.MAIN="main",e.DETAILS="details"}(a||(a={}));var _,U,q,X,Z,$,ee,te,ne=n(1055),ce=function(e){var t=e.vote,n=e.total,c=e.isPending,r=e.isLoading,a=e.onConfirm,o=e.onViewDetails,i=e.onDismiss,l=Object(x.b)().t;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)(ne.a,{children:[Object(B.jsx)(s.Dc,{color:"secondary",mb:"8px",textTransform:"uppercase",fontSize:"12px",bold:!0,children:l("Voting For")}),Object(B.jsx)(P,{bold:!0,fontSize:"20px",mb:"8px",title:t.label,children:t.label}),Object(B.jsx)(s.Dc,{color:"secondary",mb:"8px",textTransform:"uppercase",fontSize:"12px",bold:!0,children:l("Your Voting Power")}),r?Object(B.jsx)(s.ic,{height:"64px",mb:"24px"}):Object(B.jsxs)(ne.b,{onClick:o,style:{cursor:"pointer"},children:[Object(B.jsx)(s.Dc,{bold:!0,fontSize:"20px",children:Object(E.e)(n,0,3)}),Object(B.jsx)(s.ib,{scale:"sm",variant:"text",children:Object(B.jsx)(s.N,{width:"24px"})})]}),Object(B.jsx)(s.Dc,{as:"p",color:"textSubtle",fontSize:"14px",children:l("Are you sure you want to vote for the above choice? This action cannot be undone.")})]}),Object(B.jsx)(s.u,{isLoading:c,endIcon:c?Object(B.jsx)(s.i,{spin:!0,color:"currentColor"}):null,disabled:r||0===n,width:"100%",mb:"8px",onClick:a,children:l("Confirm Vote")}),Object(B.jsx)(s.u,{variant:"secondary",width:"100%",onClick:i,children:l("Cancel")})]})},re=n(1078),ae=n(1079),oe=function(e){var t,n=e.onSuccess,c=e.proposalId,r=e.vote,l=e.block,b=e.onDismiss,j=Object(o.useState)(a.MAIN),d=Object(H.a)(j,2),p=d[0],O=d[1],h=Object(o.useState)(!0),f=Object(H.a)(h,2),v=f[0],g=f[1],w=Object(o.useState)(!1),k=Object(H.a)(w,2),y=k[0],S=k[1],D=Object(i.c)().account,C=Object(x.b)().t,I=Object(K.a)().toastError,A=Object(R.a)().library,L=Object(W.a)().theme,V=Object(ae.a)(l,v),E=V.isLoading,P=V.total,N=V.cakeBalance,F=V.cakeVaultBalance,J=V.cakePoolBalance,G=V.poolsBalance,_=V.cakeBnbLpBalance,U=V.verificationHash,q=p===a.MAIN,X=q?null:function(){return O(a.MAIN)},Z=(t={},Object(Y.a)(t,a.MAIN,C("Confirm Vote")),Object(Y.a)(t,a.DETAILS,C("Voting Power")),t),$=function(){g(!1),b()},ee=function(){var e=Object(M.a)(T.a.mark((function e(){var t,a,o;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S(!0),t=JSON.stringify(Object(z.a)(Object(z.a)({},Object(m.e)()),{},{type:u.i.VOTE,payload:{proposal:c,choice:r.value,metadata:{votingPower:P.toString(),verificationHash:U}}})),e.next=5,Object(Q.c)(A,D,t);case 5:return a=e.sent,o={address:D,msg:t,sig:a},e.next=9,Object(m.i)(o);case 9:return S(!1),e.next=12,n();case 12:$(),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(0),S(!1),I(C("Error"),null===e.t0||void 0===e.t0?void 0:e.t0.message),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(B.jsx)(s.Gb,{title:Z[p],onBack:X,onDismiss:b,hideCloseButton:!q,headerBackground:L.colors.gradients.cardHeader,children:Object(B.jsxs)(s.p,{mb:"24px",width:"320px",children:[p===a.MAIN&&Object(B.jsx)(ce,{vote:r,isLoading:E,isPending:y,total:P,onConfirm:ee,onViewDetails:function(){return O(a.DETAILS)},onDismiss:$}),p===a.DETAILS&&Object(B.jsx)(re.a,{total:P,cakeBalance:N,cakeVaultBalance:F,cakePoolBalance:J,poolsBalance:G,cakeBnbLpBalance:_})]})})},se=["proposal"],ie=k.e.label(_||(_=Object(w.a)(["\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 16px;\n  cursor: ",";\n  display: flex;\n  margin-bottom: 16px;\n  padding: 16px;\n"])),(function(e){var t=e.theme,n=e.isChecked;return t.colors[n?"success":"cardBorder"]}),(function(e){return e.isDisabled?"not-allowed":"pointer"})),le=k.e.div(U||(U=Object(w.a)(["\n  flex: 1;\n  padding-left: 16px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 0;\n"]))),be=function(e){var t=e.proposal,n=Object(J.a)(e,se),c=Object(o.useState)(null),r=Object(H.a)(c,2),a=r[0],l=r[1],b=Object(x.b)().t,u=Object(K.a)().toastSuccess,d=Object(j.b)(),O=Object(i.c)().account,h=function(){var e=Object(M.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(b("Vote cast!")),d(Object(p.d)({proposalId:t.id,block:Number(t.snapshot)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=Object(s.gd)(Object(B.jsx)(oe,{onSuccess:h,proposalId:t.id,vote:a,block:Number(t.snapshot)})),m=Object(H.a)(f,1)[0];return Object(B.jsxs)(s.z,Object(z.a)(Object(z.a)({},n),{},{children:[Object(B.jsx)(s.C,{children:Object(B.jsx)(s.fb,{as:"h3",scale:"md",children:b("Cast your vote")})}),Object(B.jsxs)(s.A,{children:[t.choices.map((function(e,t){var n=t+1===(null===a||void 0===a?void 0:a.value);return Object(B.jsxs)(ie,{isChecked:n,isDisabled:!O,children:[Object(B.jsx)("div",{style:{flexShrink:0},children:Object(B.jsx)(s.cc,{scale:"sm",value:e,checked:n,onChange:function(){l({label:e,value:t+1})},disabled:!O})}),Object(B.jsx)(le,{children:Object(B.jsx)(s.Dc,{as:"span",title:e,children:e})})]},e)})),O?Object(B.jsx)(s.u,{onClick:m,disabled:null===a,children:b("Cast Vote")}):Object(B.jsx)(G.a,{})]})]}))},je=n(322),ue=n.n(je),de=Object(k.e)(s.db)(q||(q=Object(w.a)(["\n  border-bottom: 1px solid ",";\n  padding: 16px 24px;\n"])),(function(e){return e.theme.colors.cardBorder})),pe=Object(k.e)(s.ic)(X||(X=Object(w.a)(["\n  flex: 1;\n"]))),xe=function(){return Object(B.jsx)(s.p,{children:V()(10).map((function(e){return Object(B.jsxs)(de,{children:[Object(B.jsx)(s.ic,{height:"21px",mr:"32px",width:"100px"}),Object(B.jsx)(pe,{height:"21px",mr:"32px",width:"100%"}),Object(B.jsx)(pe,{height:"21px",width:"100%"})]},e)}))})},Oe=Object(k.e)(s.p).attrs({alignItems:"center"})(Z||(Z=Object(w.a)(["\n  grid-area: address;\n"]))),he=Object(k.e)(s.p)($||($=Object(w.a)(["\n  grid-area: choice;\n  overflow: hidden;\n"]))),fe=Object(k.e)(s.p)(ee||(ee=Object(w.a)(["\n  justify-self: end;\n  grid-area: vote;\n"]))),me=Object(k.e)(s.eb)(te||(te=Object(w.a)(["\n  border-bottom: 1px solid ",";\n  grid-gap: 8px;\n  grid-template-areas:\n    'address address address'\n    'choice choice vote';\n  grid-template-columns: 1fr 1fr 120px;\n  padding: 8px 16px;\n\n  "," {\n    grid-gap: 16px;\n    grid-template-areas: 'address choice vote';\n    padding: 16px 24px;\n  }\n"])),(function(e){return e.theme.colors.cardBorder}),(function(e){return e.theme.mediaQueries.sm})),ve=function(e){var t,n=e.vote,c=e.isVoter,r=Object(x.b)().t,a=!!(null===(t=n.metadata)||void 0===t?void 0:t.votingPower),o=a?parseFloat(n.metadata.votingPower).toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:3}):"--";return Object(B.jsxs)(me,{children:[Object(B.jsx)(Oe,{children:Object(B.jsxs)(s.db,{alignItems:"center",children:[Object(B.jsx)(s.sb,{href:Object(S.e)(n.voter,"address"),children:Object(D.a)(n.voter)}),c&&Object(B.jsxs)(s.Ac,{variant:"success",outline:!0,ml:"8px",children:[Object(B.jsx)(s.J,{mr:"4px"})," ",r("Voted")]})]})}),Object(B.jsx)(he,{children:Object(B.jsx)(P,{title:n.proposal.choices[n.choice-1],children:n.proposal.choices[n.choice-1]})}),Object(B.jsx)(fe,{children:Object(B.jsxs)(s.db,{alignItems:"center",justifyContent:"end",children:[Object(B.jsx)(s.Dc,{title:n.metadata.votingPower,children:o}),a&&Object(B.jsx)(s.sb,{href:"".concat(C.b,"/").concat(n.id)})]})})]})},ge=function(e){var t,n=parseFloat(null===e||void 0===e||null===(t=e.metadata)||void 0===t?void 0:t.votingPower);return n||(n=0),n},we=function(e){var t=e.votes,n=Object(o.useState)(!1),c=Object(H.a)(n,2),r=c[0],a=c[1],l=Object(x.b)().t,b=Object(i.c)().account,j=ue()(t,[ge,"created"],["desc","desc"]),p=r?j:j.slice(0,20),O=Object(d.e)()===u.j.IDLE;return Object(B.jsxs)(s.z,{children:[Object(B.jsx)(s.C,{children:Object(B.jsxs)(s.db,{alignItems:"center",justifyContent:"space-between",children:[Object(B.jsx)(s.fb,{as:"h3",scale:"md",children:l("Votes (%count%)",{count:t.length.toLocaleString()})}),!O&&Object(B.jsx)(s.i,{spin:!0,width:"22px"})]})}),!O&&Object(B.jsx)(xe,{}),O&&p.length>0&&Object(B.jsxs)(B.Fragment,{children:[p.map((function(e){var t=b&&e.voter.toLowerCase()===b.toLowerCase();return Object(B.jsx)(ve,{vote:e,isVoter:t},e.id)})),Object(B.jsx)(s.db,{alignItems:"center",justifyContent:"center",py:"8px",px:"24px",children:Object(B.jsx)(s.u,{width:"100%",onClick:function(){a(!r)},variant:"text",endIcon:r?Object(B.jsx)(s.O,{color:"primary",width:"21px"}):Object(B.jsx)(s.L,{color:"primary",width:"21px"}),disabled:!O,children:l(r?"Hide":"See All")})})]}),O&&0===p.length&&Object(B.jsx)(s.db,{alignItems:"center",justifyContent:"center",py:"32px",children:Object(B.jsx)(s.fb,{as:"h5",children:l("No votes found")})})]})},ke=n(237);t.default=function(){var e=Object(l.i)().id,t=Object(d.a)(e),n=Object(x.b)().t,c=Object(i.c)().account,r=Object(j.b)(),a=Object(d.d)(e),w=Object(d.e)(),k=Object(d.b)(),y=c&&a.some((function(e){return e.voter.toLowerCase()===c.toLowerCase()})),S=null!==t&&void 0!==t?t:{},D=S.id,C=void 0===D?null:D,I=S.snapshot,L=void 0===I?null:I,V=w===u.j.LOADING||k===u.j.LOADING;return Object(o.useEffect)((function(){r(Object(p.b)(e))}),[e,r]),Object(o.useEffect)((function(){C&&L&&r(Object(p.d)({proposalId:C,block:Number(L)}))}),[C,L,r]),t?Object(B.jsxs)(O.a,{py:"40px",children:[Object(B.jsx)(ke.a,{}),Object(B.jsx)(s.p,{mb:"40px",children:Object(B.jsx)(s.u,{as:b.a,to:"/voting",variant:"text",startIcon:Object(B.jsx)(s.c,{color:"primary",width:"24px"}),px:"0",children:n("Back to Vote Overview")})}),Object(B.jsxs)(g.a,{children:[Object(B.jsxs)(s.p,{children:[Object(B.jsxs)(s.p,{mb:"32px",children:[Object(B.jsxs)(s.db,{alignItems:"center",mb:"8px",children:[Object(B.jsx)(v.a,{proposalState:t.state}),Object(B.jsx)(v.b,{isCoreProposal:Object(m.h)(t),ml:"8px"})]}),Object(B.jsx)(s.fb,{as:"h1",scale:"xl",mb:"16px",children:t.title}),Object(B.jsx)(s.p,{children:Object(B.jsx)(h.a,{children:t.body})})]}),!V&&!y&&t.state===u.g.ACTIVE&&Object(B.jsx)(be,{proposal:t,mb:"16px"}),Object(B.jsx)(we,{votes:a})]}),Object(B.jsxs)(s.p,{children:[Object(B.jsx)(A,{proposal:t}),Object(B.jsx)(N,{choices:t.choices,votes:a})]})]})]}):Object(B.jsx)(f.a,{})}},987:function(e,t,n){"use strict";n.d(t,"h",(function(){return p})),n.d(t,"c",(function(){return x})),n.d(t,"b",(function(){return O})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return f})),n.d(t,"i",(function(){return m})),n.d(t,"g",(function(){return v})),n.d(t,"a",(function(){return g})),n.d(t,"f",(function(){return w}));var c=n(15),r=n(32),a=n(5),o=n(3),s=n.n(o),i=n(10),l=n(58),b=n(35),j=n(40),u=n(119),d=n(991),p=function(e){return d.a.includes(e.author.toLowerCase())},x=function(e,t){switch(t){case j.h.COMMUNITY:return e.filter((function(e){return!p(e)}));case j.h.CORE:return e.filter((function(e){return p(e)}));case j.h.ALL:default:return e}},O=function(e,t){return e.filter((function(e){return e.state===t}))},h=function(){return{plugins:{},network:56,strategies:[{name:"cake",params:{symbol:"CAKE",address:b.a.cake.address,decimals:18}}]}},f=function(){return{version:d.e,timestamp:(Date.now()/1e3).toFixed(),space:d.c}},m=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,c,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l.k,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if((n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:throw c=e.sent,new Error(null===c||void 0===c?void 0:c.error_description);case 8:return e.next=10,n.json();case 10:return r=e.sent,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(s.a.mark((function e(t,n,c){var r,a,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=c,e.t0){e.next=5;break}return e.next=4,u.a.getBlockNumber();case 4:e.t0=e.sent;case 5:return r=e.t0,e.next=8,fetch("".concat(l.l,"/power"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:t,block:r,poolAddresses:n})});case 8:return a=e.sent,e.next=11,a.json();case 11:return o=e.sent,e.abrupt("return",o.data);case 13:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),g=function(e){return e.reduce((function(e,t){var n=t.proposal.choices[t.choice-1];return Object(a.a)(Object(a.a)({},e),{},Object(c.a)({},n,e[n]?[].concat(Object(r.a)(e[n]),[t]):[t]))}),{})},w=function(e){return e.reduce((function(e,t){var n,c=parseFloat(null===(n=t.metadata)||void 0===n?void 0:n.votingPower);return c||(c=0),e+c}),0)}},991:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return i}));var c=10,r=["0x842B508681eE336E74600974B4623B709477d29D","0x977e0c1005dff8749f8cac22f4df0bd5f013d1a7","0x6eaf1b33b8672c5dc40ab8f4ba3a0111723126c7"].map((function(e){return e.toLowerCase()})),a="https://gateway.ipfs.io/ipfs",o="0.1.3",s="cake.eth",i=10}}]);
//# sourceMappingURL=13.82e4ed42.chunk.js.map