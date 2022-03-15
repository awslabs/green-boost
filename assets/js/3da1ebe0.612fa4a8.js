"use strict";(self.webpackChunkgboost_docs=self.webpackChunkgboost_docs||[]).push([[2303],{4852:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(9231);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),f=i,g=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8673:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return c},toc:function(){return u},default:function(){return f}});var r=t(5086),i=t(9126),a=(t(9231),t(4852)),o=["components"],p={id:"Page",title:"Interface: Page",sidebar_label:"Page",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"api-ui/interfaces/Page",id:"api-ui/interfaces/Page",title:"Interface: Page",description:"Configure pages shown within drawer on right side of app screen",source:"@site/docs/api-ui/interfaces/Page.md",sourceDirName:"api-ui/interfaces",slug:"/api-ui/interfaces/Page",permalink:"/green-boost/docs/api-ui/interfaces/Page",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Page",title:"Interface: Page",sidebar_label:"Page",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"OnQueryParams",permalink:"/green-boost/docs/api-ui/interfaces/OnQueryParams"},next:{title:"SmartSelectFieldProps",permalink:"/green-boost/docs/api-ui/interfaces/SmartSelectFieldProps"}},c={},u=[{value:"Properties",id:"properties",level:2},{value:"children",id:"children",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"component",id:"component",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"icon",id:"icon",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"path",id:"path",level:3},{value:"Defined in",id:"defined-in-4",level:4}],d={toc:u};function f(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Configure pages shown within drawer on right side of app screen"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"children"},"children"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"children"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Omit"),"<",(0,a.kt)("a",{parentName:"p",href:"/green-boost/docs/api-ui/interfaces/Page"},(0,a.kt)("inlineCode",{parentName:"a"},"Page")),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"children"'),">","[]"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/awslabs/green-boost/blob/main/packages/gboost-ui/src/page.ts#L7"},"packages/gboost-ui/src/page.ts:7")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"component"},"component"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"component"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactElement"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"JSXElementConstructor"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/awslabs/green-boost/blob/main/packages/gboost-ui/src/page.ts#L8"},"packages/gboost-ui/src/page.ts:8")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"icon"},"icon"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"icon"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactElement"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"JSXElementConstructor"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/awslabs/green-boost/blob/main/packages/gboost-ui/src/page.ts#L9"},"packages/gboost-ui/src/page.ts:9")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/awslabs/green-boost/blob/main/packages/gboost-ui/src/page.ts#L10"},"packages/gboost-ui/src/page.ts:10")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"path"},"path"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"path"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/awslabs/green-boost/blob/main/packages/gboost-ui/src/page.ts#L11"},"packages/gboost-ui/src/page.ts:11")))}f.isMDXComponent=!0}}]);