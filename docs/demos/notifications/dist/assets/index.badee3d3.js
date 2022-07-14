var ee=Object.defineProperty,re=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var q=(e,n,r)=>n in e?ee(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,D=(e,n)=>{for(var r in n||(n={}))_.call(n,r)&&q(e,r,n[r]);if(P)for(var r of P(n))j.call(n,r)&&q(e,r,n[r]);return e},M=(e,n)=>re(e,ne(n));var H=(e,n)=>{var r={};for(var s in e)_.call(e,s)&&n.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&P)for(var s of P(e))n.indexOf(s)<0&&j.call(e,s)&&(r[s]=e[s]);return r};import{j as W,r as f,a as oe,q as ae,g as t,b as i,c as l,d as c,s as w,e as h,y as x,f as $,h as v,i as R,w as se,k as te,l as u,m as A,n as d,o as g,p as C,t as S,u as N,v as U,x as k,z as E,A as ie,T as le,B as ce,C as ue,D as Ae,E as de,F as ge,$ as V,M as ye,G as pe,H as me,I as fe,X as be,J as we,K as O,L as X,_ as he,N as xe,O as I,P as $e,Q as ve,R as G,Z as Re,S as Ce,U as Se,V as Ne,W as Ue}from"./vendor.153f1592.js";const ke=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const y of o)if(y.type==="childList")for(const b of y.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&s(b)}).observe(document,{childList:!0,subtree:!0});function r(o){const y={};return o.integrity&&(y.integrity=o.integrity),o.referrerpolicy&&(y.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?y.credentials="include":o.crossorigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function s(o){if(o.ep)return;o.ep=!0;const y=r(o);fetch(o.href,y)}};ke();const p=W.exports.jsx,Q=W.exports.jsxs,Ee=W.exports.Fragment;f.exports.createContext(void 0);const K="gb-portal";function Ie(){const e=document.createElement("div");return e.setAttribute("id",K),e}function Fe(e){const n=f.exports.useRef(document.getElementById(K)||Ie());return f.exports.useEffect(()=>{document.body.appendChild(n.current);const r=n.current;return()=>{r.remove()}},[]),oe.exports.createPortal(p(Ee,{children:e.children}),n.current)}const{styled:a,css:Xe,globalCss:Le,keyframes:Qe,getCssText:Ke,theme:Ye,createTheme:Te,config:Ze}=ae({theme:{colors:D(D({primary1:t.green1,primary2:t.green2,primary3:t.green3,primary4:t.green4,primary5:t.green5,primary6:t.green6,primary7:t.green7,primary8:t.green8,primary9:t.green9,primary10:t.green10,primary11:t.green11,primary12:t.green12,primaryA1:i.greenA1,primaryA2:i.greenA2,primaryA3:i.greenA3,primaryA4:i.greenA4,primaryA5:i.greenA5,primaryA6:i.greenA6,primaryA7:i.greenA7,primaryA8:i.greenA8,primaryA9:i.greenA9,primaryA10:i.greenA10,primaryA11:i.greenA11,primaryA12:i.greenA12,secondary1:l.blue1,secondary2:l.blue2,secondary3:l.blue3,secondary4:l.blue4,secondary5:l.blue5,secondary6:l.blue6,secondary7:l.blue7,secondary8:l.blue8,secondary9:l.blue9,secondary10:l.blue10,secondary11:l.blue11,secondary12:l.blue12,secondaryA1:c.blueA1,secondaryA2:c.blueA2,secondaryA3:c.blueA3,secondaryA4:c.blueA4,secondaryA5:c.blueA5,secondaryA6:c.blueA6,secondaryA7:c.blueA7,secondaryA8:c.blueA8,secondaryA9:c.blueA9,secondaryA10:c.blueA10,secondaryA11:c.blueA11,secondaryA12:c.blueA12,gray1:w.sage1,gray2:w.sage2,gray3:w.sage3,gray4:w.sage4,gray5:w.sage5,gray6:w.sage6,gray7:w.sage7,gray8:w.sage8,gray9:w.sage9,gray10:w.sage10,gray11:w.sage11,gray12:w.sage12,grayA1:h.sageA1,grayA2:h.sageA2,grayA3:h.sageA3,grayA4:h.sageA4,grayA5:h.sageA5,grayA6:h.sageA6,grayA7:h.sageA7,grayA8:h.sageA8,grayA9:h.sageA9,grayA10:h.sageA10,grayA11:h.sageA11,grayA12:h.sageA12,success1:t.green1,success2:t.green2,success3:t.green3,success4:t.green4,success5:t.green5,success6:t.green6,success7:t.green7,success8:t.green8,success9:t.green9,success10:t.green10,success11:t.green11,success12:t.green12,successA1:i.greenA1,successA2:i.greenA2,successA3:i.greenA3,successA4:i.greenA4,successA5:i.greenA5,successA6:i.greenA6,successA7:i.greenA7,successA8:i.greenA8,successA9:i.greenA9,successA10:i.greenA10,successA11:i.greenA11,successA12:i.greenA12,info1:l.blue1,info2:l.blue2,info3:l.blue3,info4:l.blue4,info5:l.blue5,info6:l.blue6,info7:l.blue7,info8:l.blue8,info9:l.blue9,info10:l.blue10,info11:l.blue11,info12:l.blue12,infoA1:c.blueA1,infoA2:c.blueA2,infoA3:c.blueA3,infoA4:c.blueA4,infoA5:c.blueA5,infoA6:c.blueA6,infoA7:c.blueA7,infoA8:c.blueA8,infoA9:c.blueA9,infoA10:c.blueA10,infoA11:c.blueA11,infoA12:c.blueA12,warn1:x.yellow1,warn2:x.yellow2,warn3:x.yellow3,warn4:x.yellow4,warn5:x.yellow5,warn6:x.yellow6,warn7:x.yellow7,warn8:x.yellow8,warn9:x.yellow9,warn10:x.yellow10,warn11:x.yellow11,warn12:x.yellow12,warnA1:$.yellowA1,warnA2:$.yellowA2,warnA3:$.yellowA3,warnA4:$.yellowA4,warnA5:$.yellowA5,warnA6:$.yellowA6,warnA7:$.yellowA7,warnA8:$.yellowA8,warnA9:$.yellowA9,warnA10:$.yellowA10,warnA11:$.yellowA11,warnA12:$.yellowA12,error1:v.red1,error2:v.red2,error3:v.red3,error4:v.red4,error5:v.red5,error6:v.red6,error7:v.red7,error8:v.red8,error9:v.red9,error10:v.red10,error11:v.red11,error12:v.red12,errorA1:R.redA1,errorA2:R.redA2,errorA3:R.redA3,errorA4:R.redA4,errorA5:R.redA5,errorA6:R.redA6,errorA7:R.redA7,errorA8:R.redA8,errorA9:R.redA9,errorA10:R.redA10,errorA11:R.redA11,errorA12:R.redA12},se),te),fontSizes:{1:"12px",2:"13px",3:"15px",4:"17px",5:"19px",6:"21px",7:"27px",8:"35px",9:"59px"},fonts:{main:"'InterVariable'"},radii:{1:"4px",2:"6px",3:"8px",4:"12px",round:"50%",pill:"9999px"},sizes:{1:"5px",2:"10px",3:"15px",4:"20px",5:"25px",6:"35px",7:"45px",8:"65px",9:"80px"},space:{1:"5px",2:"10px",3:"15px",4:"20px",5:"25px",6:"35px",7:"45px",8:"65px",9:"80px"},transitions:{sidebar:"width 225ms ease",fadeIn:"opacity 0.3s ease, visibility 0.3s ease"},zIndices:{1:"100",2:"200",3:"300",4:"400",max:"999"}},media:{bp1:"(min-width: 425px)",bp2:"(min-width: 768px)",bp3:"(min-width: 1024px)",bp4:"(min-width: 1440px)",motion:"(prefers-reduced-motion)",hover:"(any-hover: hover)",dark:"(prefers-color-scheme: dark)",light:"(prefers-color-scheme: light)"},utils:{p:e=>({padding:e}),pt:e=>({paddingTop:e}),pr:e=>({paddingRight:e}),pb:e=>({paddingBottom:e}),pl:e=>({paddingLeft:e}),px:e=>({paddingLeft:e,paddingRight:e}),py:e=>({paddingTop:e,paddingBottom:e}),m:e=>({margin:e}),mt:e=>({marginTop:e}),mr:e=>({marginRight:e}),mb:e=>({marginBottom:e}),ml:e=>({marginLeft:e}),mx:e=>({marginLeft:e,marginRight:e}),my:e=>({marginTop:e,marginBottom:e}),ta:e=>({textAlign:e}),fd:e=>({flexDirection:e}),fw:e=>({flexWrap:e}),ai:e=>({alignItems:e}),ac:e=>({alignContent:e}),jc:e=>({justifyContent:e}),as:e=>({alignSelf:e}),fg:e=>({flexGrow:e}),fs:e=>({flexShrink:e}),fb:e=>({flexBasis:e}),bc:e=>({backgroundColor:e}),br:e=>({borderRadius:e}),btrr:e=>({borderTopRightRadius:e}),bbrr:e=>({borderBottomRightRadius:e}),bblr:e=>({borderBottomLeftRadius:e}),btlr:e=>({borderTopLeftRadius:e}),bs:e=>({boxShadow:e}),lh:e=>({lineHeight:e}),ox:e=>({overflowX:e}),oy:e=>({overflowY:e}),pe:e=>({pointerEvents:e}),us:e=>({WebkitUserSelect:e,userSelect:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),size:e=>({width:e,height:e}),appearance:e=>({WebkitAppearance:e,appearance:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e})}});Te("dark-theme",{colors:{primary1:u.green1,primary2:u.green2,primary3:u.green3,primary4:u.green4,primary5:u.green5,primary6:u.green6,primary7:u.green7,primary8:u.green8,primary9:u.green9,primary10:u.green10,primary11:u.green11,primary12:u.green12,primaryA1:A.greenA1,primaryA2:A.greenA2,primaryA3:A.greenA3,primaryA4:A.greenA4,primaryA5:A.greenA5,primaryA6:A.greenA6,primaryA7:A.greenA7,primaryA8:A.greenA8,primaryA9:A.greenA9,primaryA10:A.greenA10,primaryA11:A.greenA11,primaryA12:A.greenA12,secondary1:d.blue1,secondary2:d.blue2,secondary3:d.blue3,secondary4:d.blue4,secondary5:d.blue5,secondary6:d.blue6,secondary7:d.blue7,secondary8:d.blue8,secondary9:d.blue9,secondary10:d.blue10,secondary11:d.blue11,secondary12:d.blue12,secondaryA1:g.blueA1,secondaryA2:g.blueA2,secondaryA3:g.blueA3,secondaryA4:g.blueA4,secondaryA5:g.blueA5,secondaryA6:g.blueA6,secondaryA7:g.blueA7,secondaryA8:g.blueA8,secondaryA9:g.blueA9,secondaryA10:g.blueA10,secondaryA11:g.blueA11,secondaryA12:g.blueA12,gray1:C.sage1,gray2:C.sage2,gray3:C.sage3,gray4:C.sage4,gray5:C.sage5,gray6:C.sage6,gray7:C.sage7,gray8:C.sage8,gray9:C.sage9,gray10:C.sage10,gray11:C.sage11,gray12:C.sage12,grayA1:S.sageA1,grayA2:S.sageA2,grayA3:S.sageA3,grayA4:S.sageA4,grayA5:S.sageA5,grayA6:S.sageA6,grayA7:S.sageA7,grayA8:S.sageA8,grayA9:S.sageA9,grayA10:S.sageA10,grayA11:S.sageA11,grayA12:S.sageA12,success1:u.green1,success2:u.green2,success3:u.green3,success4:u.green4,success5:u.green5,success6:u.green6,success7:u.green7,success8:u.green8,success9:u.green9,success10:u.green10,success11:u.green11,success12:u.green12,successA1:A.greenA1,successA2:A.greenA2,successA3:A.greenA3,successA4:A.greenA4,successA5:A.greenA5,successA6:A.greenA6,successA7:A.greenA7,successA8:A.greenA8,successA9:A.greenA9,successA10:A.greenA10,successA11:A.greenA11,successA12:A.greenA12,info1:d.blue1,info2:d.blue2,info3:d.blue3,info4:d.blue4,info5:d.blue5,info6:d.blue6,info7:d.blue7,info8:d.blue8,info9:d.blue9,info10:d.blue10,info11:d.blue11,info12:d.blue12,infoA1:g.blueA1,infoA2:g.blueA2,infoA3:g.blueA3,infoA4:g.blueA4,infoA5:g.blueA5,infoA6:g.blueA6,infoA7:g.blueA7,infoA8:g.blueA8,infoA9:g.blueA9,infoA10:g.blueA10,infoA11:g.blueA11,infoA12:g.blueA12,warn1:N.yellow1,warn2:N.yellow2,warn3:N.yellow3,warn4:N.yellow4,warn5:N.yellow5,warn6:N.yellow6,warn7:N.yellow7,warn8:N.yellow8,warn9:N.yellow9,warn10:N.yellow10,warn11:N.yellow11,warn12:N.yellow12,warnA1:U.yellowA1,warnA2:U.yellowA2,warnA3:U.yellowA3,warnA4:U.yellowA4,warnA5:U.yellowA5,warnA6:U.yellowA6,warnA7:U.yellowA7,warnA8:U.yellowA8,warnA9:U.yellowA9,warnA10:U.yellowA10,warnA11:U.yellowA11,warnA12:U.yellowA12,error1:k.red1,error2:k.red2,error3:k.red3,error4:k.red4,error5:k.red5,error6:k.red6,error7:k.red7,error8:k.red8,error9:k.red9,error10:k.red10,error11:k.red11,error12:k.red12,errorA1:E.redA1,errorA2:E.redA2,errorA3:E.redA3,errorA4:E.redA4,errorA5:E.redA5,errorA6:E.redA6,errorA7:E.redA7,errorA8:E.redA8,errorA9:E.redA9,errorA10:E.redA10,errorA11:E.redA11,errorA12:E.redA12}});Le({"*, *::before, *::after":{boxSizing:"border-box"},"*":{margin:0,fontFamily:"$main"},"html, body":{height:"100%"},body:{lineHeight:1.5,fontSmooth:"antialiased"},"img, picture, video, canvas, svg, iframe":{display:"block",maxWidth:"100%"},"p, h1, h2, h3, h4, h5, h6":{overflowWrap:"break-word"},"#root, #__next":{isolation:"isolate"}});const De=a(ie,{position:"absolute",variants:{position:{"top-center":{top:"$4",right:"auto",left:"auto"},"top-right":{top:"$4",right:"$4",left:"auto"},"bottom-right":{bottom:"$4",right:"$4",left:"auto"},"bottom-center":{bottom:"$4",right:"auto",left:"auto"},"bottom-left":{bottom:"$4",left:"$4",right:"auto"},"top-left":{top:"$4",left:"$4",right:"auto"}}}}),Oe=f.exports.forwardRef((e,n)=>{const{body:r,className:s,heading:o,variation:y="info",removeNotification:b}=e;return p(De,{ref:n,className:s,isDismissible:!0,heading:o,onDismiss:b,position:"bottom-right",variation:y,children:r})}),Y=300,z={opacity:0,transform:"translateX(100%)"},Pe={opacity:1,transform:"translateX(0)"},ze=a(Oe,{transitionDuration:`${Y}ms`,transitionTimingFunction:"ease",transitionProperty:"opacity, transform",zIndex:"$2",variants:{animate:{entering:z,entered:Pe,exiting:z,exited:z,unmounted:z}}});function Be(e){const m=e,{index:n,notification:r,onEnter:s,onExited:o,removeNotification:y}=m,b=H(m,["index","notification","onEnter","onExited","removeNotification"]),F=f.exports.useRef(null),T=f.exports.useRef(0);return f.exports.useEffect(()=>{if(r.timeout!==1/0)return T.current=window.setTimeout(()=>y(r.id),r.timeout||5e3),()=>window.clearTimeout(T.current)},[r,y]),p(le,M(D({nodeRef:F,timeout:Y,mountOnEnter:!0,unmountOnExit:!0},b),{onEnter:()=>{document.body.style.overflowX="hidden",s&&s()},onExited:()=>{document.body.style.overflowX="",o&&o()},children:J=>p(ze,{ref:F,body:r.body,css:{bottom:`calc($5 + calc(64px * ${n}))`},heading:r.heading,variation:r.variation,animate:J,removeNotification:()=>y(r.id)})}))}function Me(e){const{notifications:n,removeNotification:r}=e;return p(Fe,{children:p(ce,{childFactory:s=>f.exports.cloneElement(s),children:n.map((s,o)=>p(Be,{index:o,notification:s,removeNotification:r},s.id))})})}const Z=f.exports.createContext({notify:e=>{},clearNotifications:()=>{}});function Ge(e){const{add:n,cleanQueue:r,state:s,update:o}=ue({initialValues:[],limit:5}),y=f.exports.useCallback(F=>o(T=>T.filter(m=>m.id!==F)),[o]),b={notify:F=>{n(M(D({},F),{id:Ae()}))},clearNotifications:()=>r()};return Q(Z.Provider,{value:b,children:[e.children,p(Me,{notifications:s,removeNotification:y})]})}function We(){const e=f.exports.useContext(Z);if(e===void 0)throw new Error("useNotifications must be used within a NotificationProvider");return e}a("div");a(de,{height:"95vh"});a(ge,{p:"$3",ta:"center"});a(V,{fontSize:"$8 !important"});a("ul",{listStyle:"none",p:"$3"});a("li",{cursor:"pointer",display:"grid",py:"$3","&:hover":{bc:"$gray4"}});a("header",{bc:"$primary9",boxSizing:"border-box",color:"white",gridArea:"header",width:"100%",height:"$8",px:"$4",py:"$2",minWidth:"320px"});a(V);a(ye,{fontSize:"$7",cursor:"pointer"});a(pe,{fontSize:"$7",cursor:"pointer"});a(me,{fontSize:"$7"});a(fe,{fontSize:"$7"});a(be,{bc:"$primary11 !important",gap:"$2"});a(we,{gap:"$2"});a("main",{gridArea:"content",bc:"$gray1",height:"100%"});a("aside",{display:"none",backgroundColor:"$gray1",borderRight:"1px solid $gray6",gridArea:"sidebar",transition:"$sidebar","@bp3":{display:"block"}});a("footer",{gridArea:"footer",bc:"$primary3",ta:"center",fontSize:"$2"});new Date().getFullYear();a(O,{"&:hover":{backgroundColor:"$primary3"}});a(X,{alignSelf:"center",mr:"$2"});a(X,{alignSelf:"center"});a(O,{bc:"$primary4"});a(O,{bc:"$info3",borderRadius:"$pill",gap:"$2"});a(he,{height:55});a(xe,{bc:"$primary2"});const B=I`
  fragment userFields on User {
    createdAt
    email
    email_verified
    given_name
    family_name
    status
    enabled
    updatedAt
    username
  }
`;I`
  query ListUsers($input: ListUsersInput) {
    listUsers(input: $input) {
      users {
        ...userFields
      }
      nextToken
    }
  }
  ${B}
`;I`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      ...userFields
    }
  }
  ${B}
`;I`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input)
  }
`;I`
  mutation DeleteUsers($usernames: [String!]!) {
    deleteUsers(usernames: $usernames)
  }
`;I`
  query ListGroups {
    listGroups {
      groups {
        createdAt
        description
        name
        precedence
        updatedAt
      }
    }
  }
`;I`
  query ListGroupsForUser($username: String!) {
    listGroupsForUser(username: $username) {
      name
    }
  }
`;I`
  query GetUser($username: String!) {
    getUser(username: $username) {
      groups
      ...userFields
    }
  }
  ${B}
`;I`
  query ListUsersInGroup($input: ListUsersInGroupInput) {
    listUsersInGroup(input: $input) {
      users {
        ...userFields
      }
      nextToken
    }
  }
  ${B}
`;I`
  mutation DisableUsers($usernames: [String!]!) {
    disableUsers(usernames: $usernames)
  }
`;I`
  mutation EnableUsers($usernames: [String!]!) {
    enableUsers(usernames: $usernames)
  }
`;I`
  mutation ResetPasswords($usernames: [String!]!) {
    resetPasswords(usernames: $usernames)
  }
`;var L=(e=>(e.Unconfirmed="UNCONFIRMED",e.Confirmed="CONFIRMED",e.Archived="ARCHIVED",e.Compromised="COMPROMISED",e.Unknown="UNKNOWN",e.ResetRequired="RESET_REQUIRED",e.ForceChangePassword="FORCE_CHANGE_PASSWORD",e))(L||{});a(O,{backgroundColor:"$success3"});a(O,{backgroundColor:"$info3",gap:"$2"});L.Archived+"",L.Compromised+"",L.Confirmed+"",L.ForceChangePassword+"",L.ResetRequired+"",L.Unconfirmed+"",L.Unknown+"";const qe=["info","error","success","warning"];function _e(){const[e,n]=f.exports.useState("Body of notification"),[r,s]=f.exports.useState(""),[o,y]=f.exports.useState("info"),[b,F]=f.exports.useState(5e3),{notify:T}=We();return Q($e,{direction:"column",maxWidth:"500px",style:{marginLeft:"auto",marginRight:"auto"},children:[p(ve,{level:1,style:{textAlign:"center"},children:"Notifications Demo"}),p(G,{placeholder:"Input body of notification",label:"Body",value:e,onChange:m=>n(m.target.value)}),p(G,{label:"Heading",placeholder:"Input heading of notification",value:r,onChange:m=>s(m.target.value)}),p(Re,{label:"Variation",value:o,onChange:m=>y(m.target.value),children:qe.map(m=>p("option",{value:m,children:m},m))}),p(G,{label:"Timeout (ms)",value:b,type:"number",onChange:m=>F(Number(m.target.value))}),p(Ce,{onClick:()=>T({body:e,heading:r,variation:o,timeout:b}),variation:"primary",children:"Notify"})]})}function je(){return p(Se,{children:p(Ge,{children:p(_e,{})})})}Ne.render(p(Ue.StrictMode,{children:p(je,{})}),document.getElementById("root"));
