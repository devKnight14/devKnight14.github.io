(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[10],{1015:function(e,t,n){"use strict";var r=n(0),c=n(477),a=n.n(c),i=n(79),o=n(238),s=n(971),u=n(221),l=n(319),b=n(89),d=n(49);t.a=function(){var e,t=Object(i.b)(),n=Object(d.c)().account,c=Object(l.d)(),j=c.profile,f=c.isInitialized,p=c.isLoading,O=Object(s.n)().userNftsInitializationState,m=Object(s.f)(),x=null===j||void 0===j?void 0:j.tokenId,h=null===j||void 0===j||null===(e=j.tokenId)||void 0===e?void 0:e.toString(),v=null===j||void 0===j?void 0:j.collectionAddress,g=Object(r.useMemo)((function(){return x?{tokenId:h,collectionAddress:v,nftLocation:b.d.PROFILE}:null}),[h,v,x]),C=Object(u.a)(h),S=n&&O===b.e.UNINITIALIZED&&f&&!p,k=C!==h&&!p&&n;Object(r.useEffect)((function(){!S&&!k||a()(m)||t(Object(o.h)({account:n,collections:m,profileNftWithCollectionAddress:g}))}),[t,n,S,k,h,m,g])}},1024:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var r=n(0),c=n(25),a=n(79),i=n(220),o=function(e){var t=Object(c.c)((function(t){return t.teams.data[e]})),n=Object(a.b)();return Object(r.useEffect)((function(){n(Object(i.b)(e))}),[e,n]),t},s=function(){var e=Object(c.c)((function(e){return e.teams})),t=e.isInitialized,n=e.isLoading,o=e.data,s=Object(a.b)();return Object(r.useEffect)((function(){s(Object(i.c)())}),[s]),{teams:o,isInitialized:t,isLoading:n}}},1030:function(e,t,n){"use strict";var r,c,a,i,o=n(5),s=n(60),u=n(9),l=(n(0),n(6)),b=n(2),d=n(1),j=["name","value","isChecked","image","onChange","disabled","children"],f=l.e.label(r||(r=Object(u.a)(["\n  cursor: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  opacity: ",";\n"])),(function(e){return e.isDisabled?"not-allowed":"pointer"}),(function(e){return e.isDisabled?"0.6":"1"})),p=l.e.div(c||(c=Object(u.a)(["\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  height: 80px;\n  padding: 8px 16px;\n"]))),O=l.e.div(a||(a=Object(u.a)(["\n  margin-left: 16px;\n"]))),m=l.e.div(i||(i=Object(u.a)(["\n  align-self: stretch;\n  background-image: url('","');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  flex: none;\n  width: 80px;\n"])),(function(e){return e.src}));t.a=function(e){var t=e.name,n=e.value,r=e.isChecked,c=void 0!==r&&r,a=e.image,i=e.onChange,u=e.disabled,l=e.children,x=Object(s.a)(e,j);return Object(d.jsx)(b.z,Object(o.a)(Object(o.a)({isSuccess:c,isDisabled:u,mb:"16px"},x),{},{children:Object(d.jsxs)(f,{isDisabled:u,children:[Object(d.jsxs)(p,{children:[Object(d.jsx)(b.bc,{name:t,checked:c,value:n,onChange:function(e){return i(e.target.value)},disabled:u,style:{flex:"none"}}),Object(d.jsx)(O,{children:l})]}),Object(d.jsx)(m,{src:a})]})}))}},1031:function(e,t,n){var r=n(644);e.exports=function(e,t){var n=-1,c=e.length,a=c-1;for(t=void 0===t?c:t;++n<t;){var i=r(n,a),o=e[i];e[i]=e[n],e[n]=o}return e.length=t,e}},1047:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(21),c=n(17);function a(e,t){Object(c.a)(2,arguments);var n=Object(r.default)(e),a=Object(r.default)(t);return n.getTime()-a.getTime()}},1056:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(21),c=n(17);function a(e,t){Object(c.a)(2,arguments);var n=Object(r.default)(e),a=Object(r.default)(t),i=n.getTime()-a.getTime();return i<0?-1:i>0?1:i}},1081:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(496);function c(e){return Object(r.a)({},e)}},1082:function(e,t,n){var r=n(1083),c=n(1084),a=n(55);e.exports=function(e){return(a(e)?r:c)(e)}},1083:function(e,t,n){var r=n(482),c=n(1031);e.exports=function(e){return c(r(e))}},1084:function(e,t,n){var r=n(1031),c=n(645);e.exports=function(e){return r(c(e))}},1124:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(1047),c=n(17);function a(e,t){Object(c.a)(2,arguments);var n=Object(r.a)(e,t)/1e3;return n>0?Math.floor(n):Math.ceil(n)}},1599:function(e,t,n){"use strict";n.r(t);var r,c,a,i=n(0),o=n(49),s=n(91),u=n(237),l=n(319),b=n(472),d=n(1015),j=n(141),f=n(971),p=n(9),O=n(6),m=n(2),x=n(13),h=n(3),v=n.n(h),g=n(10),C=n(8),S=n(5),k=n(45),y=n(180),w=Object(y.parseUnits)("1"),I=Object(y.parseUnits)("0.5"),A=["5","6","7","8","9"],E=n(1),D=w.add(I),N=D.mul(5),T={isInitialized:!1,currentStep:0,teamId:null,selectedNft:{collectionAddress:null,tokenId:null},userName:"",minimumCakeRequired:D,allowance:N},M=function(e,t){switch(t.type){case"initialize":return Object(S.a)(Object(S.a)({},e),{},{isInitialized:!0,currentStep:t.step});case"next_step":return Object(S.a)(Object(S.a)({},e),{},{currentStep:e.currentStep+1});case"set_team":return Object(S.a)(Object(S.a)({},e),{},{teamId:t.teamId});case"set_selected_nft":return Object(S.a)(Object(S.a)({},e),{},{selectedNft:{tokenId:t.tokenId,collectionAddress:t.collectionAddress}});case"set_username":return Object(S.a)(Object(S.a)({},e),{},{userName:t.userName});default:return e}},P=Object(i.createContext)(null),L=function(e){var t=e.children,n=Object(i.useReducer)(M,T),r=Object(C.a)(n,2),c=r[0],a=r[1],s=Object(o.c)().account;Object(i.useEffect)((function(){var e=!0;return s&&function(){var t=Object(g.a)(v.a.mark((function t(){var n,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(k.c)(),t.next=3,n.canMint(s);case 3:r=t.sent,a({type:"initialize",step:r?0:1}),e&&a({type:"initialize",step:r?0:1});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),function(){e=!1}}),[s,a]);var u=Object(i.useMemo)((function(){return{nextStep:function(){return a({type:"next_step"})},setTeamId:function(e){return a({type:"set_team",teamId:e})},setSelectedNft:function(e,t){return a({type:"set_selected_nft",tokenId:e,collectionAddress:t})},setUserName:function(e){return a({type:"set_username",userName:e})}}}),[a]);return Object(E.jsx)(P.Provider,{value:Object(S.a)(Object(S.a)({},c),{},{actions:u}),children:t})},z=O.e.div(r||(r=Object(p.a)(["\n  border-bottom: 2px solid ",";\n  margin-top: 32px;\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])),(function(e){return e.theme.colors.textSubtle})),_=["Get Starter Collectible","Set Profile Picture","Join Team","Set Name"],R=function(){var e=Object(x.b)().t,t=Object(i.useContext)(P).currentStep;return Object(E.jsxs)(z,{children:[Object(E.jsx)(m.eb,{as:"h1",scale:"xxl",color:"secondary",mb:"8px",id:"profile-setup-title",children:e("Profile Setup")}),Object(E.jsx)(m.eb,{as:"h2",scale:"lg",mb:"8px",children:e("Show off your stats and collectibles with your unique profile")}),Object(E.jsx)(m.Cc,{color:"textSubtle",mb:"8px",children:e("Total cost: 1.5 CAKE")}),Object(E.jsx)(m.qb,{href:"".concat(j.a,"/profile"),children:Object(E.jsx)(m.u,{mb:"24px",scale:"sm",variant:"secondary",children:e("Back to profile")})}),Object(E.jsx)(m.q,{children:_.map((function(n,r){return Object(E.jsx)(m.Cc,{color:r<=t?"text":"textDisabled",children:e(n)},n)}))})]})},F=n(122),U=function(){var e=Object(x.b)().t;return Object(E.jsxs)("div",{children:[Object(E.jsx)(m.eb,{scale:"xl",mb:"8px",children:e("Oops!")}),Object(E.jsx)(m.Cc,{as:"p",mb:"16px",children:e("Please connect your wallet to continue")}),Object(E.jsx)(F.a,{})]})},q=n(979),W=n(52),Y=n(155),X=n(154),B=n(986),J=n(118),K=n(79),H=n(238),G=n(83),Q=n(1030),Z=function(e){return Object(E.jsx)(m.u,Object(S.a)({endIcon:Object(E.jsx)(m.f,{color:"currentColor"})},e))},V=function(){return Object(i.useContext)(P)},$=function(){var e=Object(i.useState)(""),t=Object(C.a)(e,2),n=t[0],r=t[1],c=Object(i.useState)([]),a=Object(C.a)(c,2),s=a[0],u=a[1],l=V(),b=l.actions,d=l.minimumCakeRequired,p=l.allowance,O=Object(f.f)(),h=Object(J.a)().toastSuccess,k=Object(K.b)(),I=Object(o.c)().account,D=Object(W.d)(),N=Object(W.b)(),T=Object(x.b)().t,M=Object(Y.e)(),P=M.balance,L=M.fetchStatus===Y.a.SUCCESS&&P.gte(w),z=Object(X.a)().callWithGasPrice;Object(i.useEffect)((function(){var e=function(){var e=Object(g.a)(v.a.mark((function e(){var t,n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.r)(j.b);case 2:t=e.sent,n=t.data,r=A.map((function(e){if(n&&n[e])return Object(S.a)(Object(S.a)({},n[e]),{},{bunnyId:e})})),u(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();0===s.length&&e()}),[s]);var _=Object(q.a)({onRequiresApproval:function(){var e=Object(g.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.allowance(I,N.address);case 3:return t=e.sent,e.abrupt("return",t.gte(d));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),onApprove:function(){return z(D,"approve",[N.address,p.toString()])},onConfirm:function(){return z(N,"mintNFT",[n])},onApproveSuccess:function(){h(T("Enabled"),T("Press 'confirm' to mint this NFT"))},onSuccess:function(){h(T("Success"),T("You have minted your starter NFT")),k(Object(H.h)({account:I,collections:O})),b.nextStep()}}),R=_.isApproving,F=_.isApproved,U=_.isConfirmed,$=_.isConfirming,ee=_.handleApprove,te=_.handleConfirm;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(m.Cc,{fontSize:"20px",color:"textSubtle",bold:!0,children:T("Step %num%",{num:1})}),Object(E.jsx)(m.eb,{as:"h3",scale:"xl",mb:"24px",children:T("Get Starter Collectible")}),Object(E.jsx)(m.Cc,{as:"p",children:T("Every profile starts by making a \u201cstarter\u201d collectible (NFT).")}),Object(E.jsx)(m.Cc,{as:"p",children:T("This starter will also become your first profile picture.")}),Object(E.jsx)(m.Cc,{as:"p",mb:"24px",children:T("You can change your profile pic later if you get another approved Pancake Collectible.")}),Object(E.jsx)(m.z,{mb:"24px",children:Object(E.jsxs)(m.A,{children:[Object(E.jsx)(m.eb,{as:"h4",scale:"lg",mb:"8px",children:T("Choose your Starter!")}),Object(E.jsx)(m.Cc,{as:"p",color:"textSubtle",children:T("Choose wisely: you can only ever make one starter collectible!")}),Object(E.jsx)(m.Cc,{as:"p",mb:"24px",color:"textSubtle",children:T("Cost: %num% CAKE",{num:Object(y.formatUnits)(w)})}),s.map((function(e){return Object(E.jsx)(Q.a,{name:"mintStarter",value:null===e||void 0===e?void 0:e.bunnyId,image:null===e||void 0===e?void 0:e.image.thumbnail,isChecked:n===(null===e||void 0===e?void 0:e.bunnyId),onChange:function(e){return r(e)},disabled:R||$||U||!L,children:Object(E.jsx)(m.Cc,{bold:!0,children:null===e||void 0===e?void 0:e.name})},null===e||void 0===e?void 0:e.name)})),!L&&Object(E.jsx)(m.Cc,{color:"failure",mb:"16px",children:T("A minimum of %num% CAKE is required",{num:Object(y.formatUnits)(w)})}),Object(E.jsx)(B.b,{isApproveDisabled:null===n||U||$||F,isApproving:R,isConfirmDisabled:!F||U||!L,isConfirming:$,onApprove:ee,onConfirm:te})]})}),Object(E.jsx)(Z,{onClick:b.nextStep,disabled:!U,children:T("Next Step")})]})},ee=n(110),te=n(36),ne=n(89),re=Object(O.e)(ee.a)(c||(c=Object(p.a)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.primary})),ce=O.e.div(a||(a=Object(p.a)(["\n  margin-bottom: 24px;\n"]))),ae=function(){var e=Object(o.c)().library,t=Object(i.useState)(!1),n=Object(C.a)(t,2),r=n[0],c=n[1],a=Object(i.useState)(!1),s=Object(C.a)(a,2),u=s[0],l=s[1],b=Object(i.useContext)(P),p=b.selectedNft,O=b.actions,h=Object(f.n)(),S=h.nfts,y=h.userNftsInitializationState;Object(d.a)();var w=Object(x.b)().t,I=Object(J.a)(),A=I.toastError,D=I.toastSuccess,N=Object(X.a)().callWithGasPrice,T=function(){var t=Object(g.a)(v.a.mark((function t(){var n,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(k.n)(p.collectionAddress,e.getSigner()),t.next=3,N(n,"approve",[Object(te.r)(),p.tokenId]);case 3:return r=t.sent,l(!0),t.next=7,r.wait();case 7:t.sent.status?(D(w("Enabled"),w("Please progress to the next step.")),l(!1),c(!0)):(A(w("Error"),w("Please try again. Confirm the transaction and make sure you are paying enough gas!")),l(!1));case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return 0===S.length&&y===ne.e.INITIALIZED?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(m.eb,{scale:"xl",mb:"24px",children:w("Oops!")}),Object(E.jsx)(m.Cc,{bold:!0,fontSize:"20px",mb:"24px",children:w("We couldn\u2019t find any Pancake Collectibles in your wallet.")}),Object(E.jsx)(m.Cc,{as:"p",children:w("You need a Pancake Collectible to finish setting up your profile. If you sold or transferred your starter collectible to another wallet, you\u2019ll need to get it back or acquire a new one somehow. You can\u2019t make a new starter with this wallet address.")})]}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(m.Cc,{fontSize:"20px",color:"textSubtle",bold:!0,children:w("Step %num%",{num:2})}),Object(E.jsx)(m.eb,{as:"h3",scale:"xl",mb:"24px",children:w("Set Profile Picture")}),Object(E.jsx)(m.z,{mb:"24px",children:Object(E.jsxs)(m.A,{children:[Object(E.jsx)(m.eb,{as:"h4",scale:"lg",mb:"8px",children:w("Choose collectible")}),Object(E.jsx)(m.Cc,{as:"p",color:"textSubtle",children:w("Choose a profile picture from the eligible collectibles (NFT) in your wallet, shown below.")}),Object(E.jsxs)(m.Cc,{as:"p",color:"textSubtle",mb:"24px",children:[w("Only approved Pancake Collectibles can be used."),Object(E.jsx)(re,{to:"".concat(j.a,"/collections"),style:{marginLeft:"4px"},children:w("See the list >")})]}),Object(E.jsx)(ce,{children:S.filter((function(e){return e.location===ne.d.WALLET})).map((function(e){return Object(E.jsx)(Q.a,{name:"profilePicture",value:e.tokenId,image:e.image.thumbnail,isChecked:e.tokenId===p.tokenId,onChange:function(t){return O.setSelectedNft(t,e.collectionAddress)},children:Object(E.jsx)(m.Cc,{bold:!0,children:e.name})},"".concat(e.collectionAddress,"#").concat(e.tokenId))}))}),Object(E.jsx)(m.eb,{as:"h4",scale:"lg",mb:"8px",children:w("Allow collectible to be locked")}),Object(E.jsx)(m.Cc,{as:"p",color:"textSubtle",mb:"16px",children:w("The collectible you've chosen will be locked in a smart contract while it\u2019s being used as your profile picture. Don't worry - you'll be able to get it back at any time.")}),Object(E.jsx)(m.u,{isLoading:u,disabled:r||u||null===p.tokenId,onClick:T,endIcon:u?Object(E.jsx)(m.i,{spin:!0,color:"currentColor"}):void 0,id:"approveStarterCollectible",children:w("Enable")})]})}),Object(E.jsx)(Z,{onClick:O.nextStep,disabled:null===p.tokenId||!r||u,children:w("Next Step")})]})},ie=n(1082),oe=n.n(ie),se=n(1024),ue=function(){var e=V(),t=e.teamId,n=e.actions,r=Object(x.b)().t,c=Object(se.b)().teams,a=function(e){return n.setTeamId(parseInt(e,10))},o=Object(i.useMemo)((function(){return oe()(Object.values(c))}),[c]);return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(m.Cc,{fontSize:"20px",color:"textSubtle",bold:!0,children:r("Step %num%",{num:3})}),Object(E.jsx)(m.eb,{as:"h3",scale:"xl",mb:"24px",children:r("Join a Team")}),Object(E.jsx)(m.Cc,{as:"p",mb:"24px",children:r("It won\u2019t be possible to undo the choice you make for the foreseeable future!")}),Object(E.jsx)(m.z,{mb:"24px",children:Object(E.jsxs)(m.A,{children:[Object(E.jsx)(m.eb,{as:"h4",scale:"lg",mb:"8px",children:r("Join a Team")}),Object(E.jsx)(m.Cc,{as:"p",color:"textSubtle",mb:"24px",children:r("There\u2019s currently no big difference between teams, and no benefit of joining one team over another for now. So pick whichever one you like!")}),o&&o.map((function(e){return Object(E.jsxs)(Q.a,{name:"teams-selection",value:e.id,isChecked:t===e.id,image:"/images/teams/".concat(e.images.md),onChange:a,disabled:!e.isJoinable,children:[Object(E.jsx)(m.Cc,{bold:!0,children:e.name}),Object(E.jsxs)(m.cb,{children:[Object(E.jsx)(m.S,{mr:"8px"}),Object(E.jsx)(m.Cc,{children:e.users.toLocaleString()})]})]},e.name)}))]})}),Object(E.jsx)(Z,{onClick:n.nextStep,disabled:null===t,children:r("Next Step")})]})},le=n(1056),be=n(21),de=n(648),je=n(17),fe=n(649),pe=n(650);function Oe(e){Object(je.a)(1,arguments);var t=Object(be.default)(e);return Object(fe.default)(t).getTime()===Object(pe.default)(t).getTime()}function me(e,t){Object(je.a)(2,arguments);var n,r=Object(be.default)(e),c=Object(be.default)(t),a=Object(le.a)(r,c),i=Math.abs(Object(de.default)(r,c));if(i<1)n=0;else{1===r.getMonth()&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-a*i);var o=Object(le.a)(r,c)===-a;Oe(Object(be.default)(e))&&1===i&&1===Object(le.a)(e,c)&&(o=!1),n=a*(i-Number(o))}return 0===n?0:n}var xe=n(1124),he=n(345),ve=n(1081),ge=n(168),Ce=1440,Se=43200;function ke(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Object(je.a)(2,arguments);var r=n.locale||he.a;if(!r.formatDistance)throw new RangeError("locale must contain formatDistance property");var c=Object(le.a)(e,t);if(isNaN(c))throw new RangeError("Invalid time value");var a,i,o=Object(ve.a)(n);o.addSuffix=Boolean(n.addSuffix),o.comparison=c,c>0?(a=Object(be.default)(t),i=Object(be.default)(e)):(a=Object(be.default)(e),i=Object(be.default)(t));var s,u=Object(xe.a)(i,a),l=(Object(ge.a)(i)-Object(ge.a)(a))/1e3,b=Math.round((u-l)/60);if(b<2)return n.includeSeconds?u<5?r.formatDistance("lessThanXSeconds",5,o):u<10?r.formatDistance("lessThanXSeconds",10,o):u<20?r.formatDistance("lessThanXSeconds",20,o):u<40?r.formatDistance("halfAMinute",null,o):u<60?r.formatDistance("lessThanXMinutes",1,o):r.formatDistance("xMinutes",1,o):0===b?r.formatDistance("lessThanXMinutes",1,o):r.formatDistance("xMinutes",b,o);if(b<45)return r.formatDistance("xMinutes",b,o);if(b<90)return r.formatDistance("aboutXHours",1,o);if(b<Ce){var d=Math.round(b/60);return r.formatDistance("aboutXHours",d,o)}if(b<2520)return r.formatDistance("xDays",1,o);if(b<Se){var j=Math.round(b/Ce);return r.formatDistance("xDays",j,o)}if(b<86400)return s=Math.round(b/Se),r.formatDistance("aboutXMonths",s,o);if((s=me(i,a))<12){var f=Math.round(b/Se);return r.formatDistance("xMonths",f,o)}var p=s%12,O=Math.floor(s/12);return p<3?r.formatDistance("aboutXYears",O,o):p<9?r.formatDistance("overXYears",O,o):r.formatDistance("almostXYears",O+1,o)}var ye,we,Ie,Ae,Ee=n(898),De=n(58),Ne=n(186),Te=n(60),Me=["timeout"],Pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.timeout,r=void 0===n?1e4:n,c=Object(Te.a)(t,Me);return Promise.race([fetch(e,c),new Promise((function(t,n){setTimeout((function(){n(new Error("Request for ".concat(e," timed out after ").concat(r," milliseconds")))}),r)}))])},Le=n(22),ze=n(159),_e=n(136),Re=function(e){var t=e.account,n=e.teamId,r=e.selectedNft,c=e.minimumCakeRequired,a=e.allowance,i=e.onDismiss,o=Object(x.b)().t,s=Object(W.u)(),u=Object(K.b)(),l=Object(J.a)().toastSuccess,b=Object(W.d)(),d=Object(X.a)().callWithGasPrice,j=Object(q.a)({onRequiresApproval:function(){var e=Object(g.a)(v.a.mark((function e(){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.allowance(t,s.address);case 3:return n=e.sent,e.abrupt("return",n.gte(c));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),onApprove:function(){return d(b,"approve",[s.address,a.toJSON()])},onConfirm:function(){return d(s,"createProfile",[n,r.collectionAddress,r.tokenId])},onSuccess:function(){var e=Object(g.a)(v.a.mark((function e(n){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.receipt,e.next=3,u(Object(ze.c)(t));case 3:i(),l(o("Profile created!"),Object(E.jsx)(_e.b,{txHash:r.transactionHash}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),f=j.isApproving,p=j.isApproved,O=j.isConfirmed,h=j.isConfirming,C=j.handleApprove,S=j.handleConfirm;return Object(E.jsxs)(m.Fb,{title:o("Complete Profile"),onDismiss:i,children:[Object(E.jsx)(m.Cc,{color:"textSubtle",mb:"8px",children:o("Submitting NFT to contract and confirming User Name and Team.")}),Object(E.jsxs)(m.cb,{justifyContent:"space-between",mb:"16px",children:[Object(E.jsx)(m.Cc,{children:o("Cost")}),Object(E.jsx)(m.Cc,{children:o("%num% CAKE",{num:Object(y.formatUnits)(I)})})]}),Object(E.jsx)(B.b,{isApproveDisabled:O||h||p,isApproving:f,isConfirmDisabled:!p||O,isConfirming:h,onApprove:C,onConfirm:S})]})},Fe=n(201);!function(e){e.IDLE="idle",e.CREATED="created",e.NEW="new"}(Ae||(Ae={}));var Ue=O.e.div(ye||(ye=Object(p.a)(["\n  position: relative;\n  max-width: 240px;\n"]))),qe=Object(O.e)(m.lb)(we||(we=Object(p.a)(["\n  padding-right: 40px;\n"]))),We=Object(O.e)(m.cb)(Ie||(Ie=Object(p.a)(["\n  align-items: center;\n  height: 24px;\n  justify-content: center;\n  margin-top: -12px;\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  width: 24px;\n"]))),Ye=function(){var e=Object(i.useState)(!1),t=Object(C.a)(e,2),n=t[0],r=t[1],c=V(),a=c.teamId,s=c.selectedNft,u=c.userName,l=c.actions,b=c.minimumCakeRequired,d=c.allowance,j=Object(x.b)().t,f=Object(o.c)().account,p=Object(J.a)().toastError,O=Object(Le.a)().library,h=Object(i.useState)(Ae.IDLE),S=Object(C.a)(h,2),k=S[0],w=S[1],A=Object(i.useState)(!1),D=Object(C.a)(A,2),N=D[0],T=D[1],M=Object(i.useState)(!1),P=Object(C.a)(M,2),L=P[0],z=P[1],_=Object(i.useState)(""),R=Object(C.a)(_,2),F=R[0],U=R[1],q=Object(i.useRef)(null),W=Object(Y.e)(),X=W.balance,B=W.fetchStatus===Y.a.SUCCESS&&X.gte(I),K=Object(m.fd)(Object(E.jsx)(Re,{userName:u,selectedNft:s,account:f,teamId:a,minimumCakeRequired:b,allowance:d}),!1),H=Object(C.a)(K,1)[0],G=k===Ae.CREATED,Q=Object(i.useState)(void 0),Z=Object(C.a)(Q,2),$=Z[0],ee=Z[1],te=Object(Fe.a)($,200);Object(i.useEffect)((function(){var e=function(){var e=Object(g.a)(v.a.mark((function e(t){var n,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,z(!0),te){e.next=8;break}T(!1),U(""),q.current=null,e.next=22;break;case 8:return e.next=10,Pe("".concat(De.b,"/api/users/valid/").concat(te),{method:"get",signal:t,timeout:3e4});case 10:if(n=e.sent,q.current=null,!n.ok){e.next=17;break}T(!0),U(""),e.next=22;break;case 17:return e.next=19,n.json();case 19:c=e.sent,T(!1),U(null===c||void 0===c||null===(r=c.error)||void 0===r?void 0:r.message);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(0),T(!1),"AbortError"!==e.t0.name&&(U(j("Error fetching data")),console.error(e.t0));case 28:return e.prev=28,z(!1),e.finish(28);case 31:case"end":return e.stop()}}),e,null,[[0,24,28,31]])})));return function(t){return e.apply(this,arguments)}}();q.current&&q.current.abort(),q.current=new AbortController,e(q.current.signal)}),[te,j]);var ne=function(){var e=Object(g.a)(v.a.mark((function e(){var t,n,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,z(!0),e.next=4,Object(Ne.c)(O,f,u);case 4:return t=e.sent,e.next=7,fetch("".concat(De.b,"/api/users/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:f,username:u,signature:t})});case 7:if(!(n=e.sent).ok){e.next=12;break}w(Ae.CREATED),e.next=16;break;case 12:return e.next=14,n.json();case 14:c=e.sent,p(j("Error"),null===c||void 0===c||null===(r=c.error)||void 0===r?void 0:r.message);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),p((null===e.t0||void 0===e.t0?void 0:e.t0.message)?e.t0.message:JSON.stringify(e.t0));case 21:return e.prev=21,z(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[0,18,21,24]])})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){f&&function(){var e=Object(g.a)(v.a.mark((function e(){var t,n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(De.b,"/api/users/").concat(f));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,t.ok?(r=ke(Object(Ee.default)(n.created_at),new Date),U(j("Created %dateCreated% ago",{dateCreated:r})),l.setUserName(n.username),w(Ae.CREATED),T(!0)):w(Ae.NEW),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),p(j("Error"),j("Unable to verify username"));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()()}),[f,w,T,U,l,p,j]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(m.Cc,{fontSize:"20px",color:"textSubtle",bold:!0,children:j("Step %num%",{num:4})}),Object(E.jsx)(m.eb,{as:"h3",scale:"xl",mb:"24px",children:j("Set Your Name")}),Object(E.jsx)(m.Cc,{as:"p",mb:"24px",children:j("This name will be shown in team leaderboards and search results as long as your profile is active.")}),Object(E.jsx)(m.z,{mb:"24px",children:Object(E.jsxs)(m.A,{children:[Object(E.jsx)(m.eb,{as:"h4",scale:"lg",mb:"8px",children:j("Set Your Name")}),Object(E.jsx)(m.Cc,{as:"p",color:"textSubtle",mb:"24px",children:j("Your name must be at least 3 and at most 15 standard letters and numbers long. You can\u2019t change this once you click Confirm.")}),k===Ae.IDLE?Object(E.jsx)(m.hc,{height:"40px",width:"240px"}):Object(E.jsxs)(Ue,{children:[Object(E.jsx)(qe,{onChange:function(e){var t=e.target.value;l.setUserName(t),ee(t)},isWarning:u&&!N,isSuccess:u&&N,minLength:3,maxLength:15,disabled:G,placeholder:j("Enter your name..."),value:u}),Object(E.jsxs)(We,{children:[L&&Object(E.jsx)(m.i,{spin:!0}),!L&&N&&u&&Object(E.jsx)(m.K,{color:"success"}),!L&&!N&&u&&Object(E.jsx)(m.Wc,{color:"failure"})]})]}),Object(E.jsx)(m.Cc,{color:"textSubtle",fontSize:"14px",py:"4px",mb:"16px",style:{minHeight:"30px"},children:F}),Object(E.jsx)(m.Cc,{as:"p",color:"failure",mb:"8px",children:j("Only reuse a name from other social media if you're OK with people viewing your wallet. You can't change your name once you click Confirm.")}),Object(E.jsx)("label",{htmlFor:"checkbox",style:{display:"block",cursor:"pointer",marginBottom:"24px"},children:Object(E.jsxs)(m.cb,{alignItems:"center",children:[Object(E.jsx)("div",{style:{flex:"none"},children:Object(E.jsx)(m.H,{id:"checkbox",scale:"sm",checked:n,onChange:function(){return r(!n)}})}),Object(E.jsx)(m.Cc,{ml:"8px",children:j("I understand that people can view my wallet if they know my username")})]})}),Object(E.jsx)(m.u,{onClick:ne,disabled:!N||G||L||!n,children:j("Confirm")})]})}),Object(E.jsx)(m.u,{onClick:H,disabled:!N||!G,id:"completeProfileCreation",children:j("Complete Profile")}),!B&&Object(E.jsx)(m.Cc,{color:"failure",mt:"16px",children:j("A minimum of %num% CAKE is required",{num:Object(y.formatUnits)(I)})})]})},Xe=function(){var e=Object(x.b)().t,t=Object(i.useContext)(P),n=t.isInitialized,r=t.currentStep;return Object(o.c)().account?n?0===r?Object(E.jsx)($,{}):1===r?Object(E.jsx)(ae,{}):2===r?Object(E.jsx)(ue,{}):3===r?Object(E.jsx)(Ye,{}):null:Object(E.jsx)("div",{children:e("Loading...")}):Object(E.jsx)(U,{})};t.default=function(){var e=Object(o.c)().account,t=Object(l.d)(),n=t.isInitialized,r=t.isLoading,c=t.hasProfile;return Object(d.a)(),Object(f.c)(),!n||r?Object(E.jsx)(b.a,{}):e&&c?Object(E.jsx)(s.a,{to:"".concat(j.a,"/profile/").concat(e.toLowerCase())}):Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(L,{children:Object(E.jsxs)(u.b,{children:[Object(E.jsx)(R,{}),Object(E.jsx)(Xe,{})]})})})}},971:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return d})),n.d(t,"l",(function(){return j})),n.d(t,"f",(function(){return f})),n.d(t,"e",(function(){return p})),n.d(t,"m",(function(){return O})),n.d(t,"d",(function(){return m})),n.d(t,"g",(function(){return x})),n.d(t,"n",(function(){return h})),n.d(t,"i",(function(){return v})),n.d(t,"h",(function(){return g})),n.d(t,"j",(function(){return C})),n.d(t,"k",(function(){return S}));var r=n(0),c=n(25),a=n(79),i=n(141),o=n(38),s=n(238),u=n(89),l=function(){var e=Object(a.b)();Object(r.useEffect)((function(){e(Object(s.d)())}),[e])},b=function(e){var t=Object(a.b)();Object(r.useEffect)((function(){t(Object(s.c)(e))}),[t,e])},d=function(e){var t=Object(a.b)(),n=Object(c.c)((function(e){return e.nftMarket.data.loadingState})),o=n.latestPancakeBunniesUpdateAt,u=n.isUpdatingPancakeBunnies,l=m(e),b=l?l.map((function(e){return e.tokenId})):[],d=O(i.b),j=d?d.map((function(e){return e.tokenId})):[],f=l.length>0?l[0]:null,p=Object(r.useMemo)((function(){return f?{name:f.name,description:f.description,collection:{name:f.collectionName},image:f.image}:null}),[f]);return{isUpdatingPancakeBunnies:u,latestPancakeBunniesUpdateAt:o,fetchMorePancakeBunnies:function(n){t(Object(s.e)({bunnyId:e,existingTokensWithBunnyId:b,allExistingPBTokenIds:j,existingMetadata:p,orderDirection:n}))}}},j=function(){return Object(c.c)((function(e){return e.nftMarket.data.loadingState}))},f=function(){return Object(c.c)((function(e){return e.nftMarket.data.collections}))},p=function(e){var t=Object(o.j)(e)||"";return f()[t]},O=function(e){var t=Object(o.j)(e)||"";return Object(c.c)((function(e){return e.nftMarket.data.nfts[t]}))},m=function(e){var t=Object(c.c)((function(e){return e.nftMarket.data.nfts[i.b]}));return t?t.filter((function(t){return t.attributes[0].value===e&&t.marketData.isTradable})):[]},x=function(){return Object(c.c)((function(e){return e.nftMarket.initializationState}))},h=function(){return Object(c.c)((function(e){return e.nftMarket.data.user}))},v=function(e){var t=Object(c.c)((function(t){return t.nftMarket.data.filters[e]}));return t?t.activeFilters:{}},g=function(e){var t=Object(c.c)((function(t){return t.nftMarket.data.filters[e]}));return t?t.loadingState:u.c.IDLE},C=function(e){var t=Object(c.c)((function(t){return t.nftMarket.data.filters[e]}));return t?t.ordering:{field:"currentAskPrice",direction:"asc"}},S=function(e){var t=Object(c.c)((function(t){return t.nftMarket.data.filters[e]}));return!t||t.showOnlyOnSale}},979:function(e,t,n){"use strict";var r=n(3),c=n.n(r),a=n(10),i=n(8),o=n(5),s=n(0),u=n(115),l=n(49),b=n(118),d=n(13),j={approvalState:"idle",confirmState:"idle"},f=function(e,t){switch(t.type){case"requires_approval":return Object(o.a)(Object(o.a)({},e),{},{approvalState:"success"});case"approve_sending":return Object(o.a)(Object(o.a)({},e),{},{approvalState:"loading"});case"approve_receipt":return Object(o.a)(Object(o.a)({},e),{},{approvalState:"success"});case"approve_error":return Object(o.a)(Object(o.a)({},e),{},{approvalState:"fail"});case"confirm_sending":return Object(o.a)(Object(o.a)({},e),{},{confirmState:"loading"});case"confirm_receipt":return Object(o.a)(Object(o.a)({},e),{},{confirmState:"success"});case"confirm_error":return Object(o.a)(Object(o.a)({},e),{},{confirmState:"fail"});default:return e}};t.a=function(e){var t=e.onApprove,n=e.onConfirm,r=e.onRequiresApproval,o=e.onSuccess,p=void 0===o?u.noop:o,O=e.onApproveSuccess,m=void 0===O?u.noop:O,x=Object(d.b)().t,h=Object(l.c)().account,v=Object(s.useReducer)(f,j),g=Object(i.a)(v,2),C=g[0],S=g[1],k=Object(s.useRef)(r),y=Object(b.a)().toastError;return Object(s.useEffect)((function(){h&&k.current&&k.current().then((function(e){e&&S({type:"requires_approval"})}))}),[h,k,S]),{isApproving:"loading"===C.approvalState,isApproved:"success"===C.approvalState,isConfirming:"loading"===C.confirmState,isConfirmed:"success"===C.confirmState,hasApproveFailed:"fail"===C.approvalState,hasConfirmFailed:"fail"===C.confirmState,handleApprove:function(){var e=Object(a.a)(c.a.mark((function e(){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:return n=e.sent,S({type:"approve_sending"}),e.next=7,n.wait();case 7:(r=e.sent).status&&(S({type:"approve_receipt"}),m({state:C,receipt:r})),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),S({type:"approve_error"}),y(x("Error"),x("Please try again. Confirm the transaction and make sure you are paying enough gas!"));case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),handleConfirm:function(){var e=Object(a.a)(c.a.mark((function e(){var t,r,a,i=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:{},S({type:"confirm_sending"}),e.prev=2,e.next=5,n(t);case 5:return r=e.sent,e.next=8,r.wait();case 8:(a=e.sent).status&&(S({type:"confirm_receipt"}),p({state:C,receipt:a})),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),S({type:"confirm_error"}),y(x("Error"),x("Please try again. Confirm the transaction and make sure you are paying enough gas!"));case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}()}}},986:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r,c,a,i,o,s=n(9),u=(n(0),n(6)),l=n(2),b=n(13),d=n(1);!function(e){e.ROW="row",e.SEQUENTIAL="sequential"}(o||(o={}));var j=u.e.div(r||(r=Object(s.a)(["\n  align-items: center;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n\n  "," {\n    grid-template-columns: 1fr 24px 1fr;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),f=Object(u.e)(l.u)(c||(c=Object(s.a)(["\n  width: 100%;\n\n  "," {\n    min-width: 160px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),p={width:"24px",color:"textDisabled"},O=Object(u.e)(l.N).attrs(p)(a||(a=Object(s.a)(["\n  display: none;\n\n  "," {\n    display: block;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),m=Object(u.e)(l.L).attrs(p)(i||(i=Object(s.a)(["\n  display: block;\n\n  "," {\n    display: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),x=Object(d.jsx)(l.i,{spin:!0,color:"currentColor"});t.b=function(e){var t=e.isApproveDisabled,n=e.isApproving,r=e.isConfirming,c=e.isConfirmDisabled,a=e.onApprove,i=e.onConfirm,s=e.buttonArrangement,u=void 0===s?o.ROW:s,p=e.confirmLabel,h=e.confirmId,v=Object(b.b)().t,g=null!==p&&void 0!==p?p:v("Confirm");return u===o.ROW?Object(d.jsxs)(j,{children:[Object(d.jsx)(l.p,{children:Object(d.jsx)(f,{disabled:t,onClick:a,endIcon:n?x:void 0,isLoading:n,children:v(n?"Enabling":"Enable")})}),Object(d.jsxs)(l.cb,{justifyContent:"center",children:[Object(d.jsx)(O,{}),Object(d.jsx)(m,{})]}),Object(d.jsx)(l.p,{children:Object(d.jsx)(f,{id:h,onClick:i,disabled:c,isLoading:r,endIcon:r?x:void 0,children:r?v("Confirming"):g})})]}):Object(d.jsx)(d.Fragment,{children:t?Object(d.jsx)(l.p,{children:Object(d.jsx)(f,{id:h,onClick:i,disabled:c,isLoading:r,endIcon:r?x:void 0,children:r?v("Confirming"):g})}):Object(d.jsx)(l.p,{children:Object(d.jsx)(f,{onClick:a,endIcon:n?x:void 0,isLoading:n,children:v(n?"Enabling":"Enable")})})})}}}]);
//# sourceMappingURL=10.27c9c9cd.chunk.js.map