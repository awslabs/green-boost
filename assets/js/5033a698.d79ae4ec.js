"use strict";(self.webpackChunkgboost_docs=self.webpackChunkgboost_docs||[]).push([[7700],{4852:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return c}});var r=t(9231);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),c=a,f=d["".concat(p,".").concat(c)]||d[c]||m[c]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3358:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var r=t(1528),a=t(2854),i=(t(9231),t(4852)),o=["components"],s={id:"UserManagementProps",title:"Interface: UserManagementProps",sidebar_label:"UserManagementProps",sidebar_position:0,custom_edit_url:null},p=void 0,l={unversionedId:"api-infra/interfaces/UserManagementProps",id:"api-infra/interfaces/UserManagementProps",title:"Interface: UserManagementProps",description:"Hierarchy",source:"@site/docs/api-infra/interfaces/UserManagementProps.md",sourceDirName:"api-infra/interfaces",slug:"/api-infra/interfaces/UserManagementProps",permalink:"/green-boost/docs/api-infra/interfaces/UserManagementProps",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"UserManagementProps",title:"Interface: UserManagementProps",sidebar_label:"UserManagementProps",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"UserBaseProps",permalink:"/green-boost/docs/api-infra/interfaces/UserBaseProps"},next:{title:"Exports",permalink:"/green-boost/docs/api-ui/"}},u={},m=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"adminGroupNames",id:"admingroupnames",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"api",id:"api",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"groupNames",id:"groupnames",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"stage",id:"stage",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"userPoolId",id:"userpoolid",level:3},{value:"Defined in",id:"defined-in-4",level:4}],d={toc:m};function c(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/green-boost/docs/api-infra/interfaces/CommonProps"},(0,i.kt)("inlineCode",{parentName:"a"},"CommonProps"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"UserManagementProps"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"admingroupnames"},"adminGroupNames"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"adminGroupNames"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,"Admin group names allocate elevated privileges to users in these groups"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/awslabs/green-boost/blob/main/packages/gboost-infra/src/user-management/index.ts#L16"},"user-management/index.ts:16")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"api"},"api"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"api"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphqlApi")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/awslabs/green-boost/blob/main/packages/gboost-infra/src/user-management/index.ts#L10"},"user-management/index.ts:10")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"groupnames"},"groupNames"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"groupNames"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/awslabs/green-boost/blob/main/packages/gboost-infra/src/user-management/index.ts#L12"},"user-management/index.ts:12")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stage"},"stage"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"stage"),": ",(0,i.kt)("a",{parentName:"p",href:"/green-boost/docs/api-infra/enums/Stage"},(0,i.kt)("inlineCode",{parentName:"a"},"Stage"))),(0,i.kt)("p",null,"Stage or type of environment to deploy to"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"default"))," Stage.Dev"),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/green-boost/docs/api-infra/interfaces/CommonProps"},"CommonProps"),".",(0,i.kt)("a",{parentName:"p",href:"/green-boost/docs/api-infra/interfaces/CommonProps#stage"},"stage")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/awslabs/green-boost/blob/main/packages/gboost-infra/src/common-props.ts#L12"},"common-props.ts:12")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"userpoolid"},"userPoolId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"userPoolId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/awslabs/green-boost/blob/main/packages/gboost-infra/src/user-management/index.ts#L11"},"user-management/index.ts:11")))}c.isMDXComponent=!0}}]);