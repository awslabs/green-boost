"use strict";(self.webpackChunkgboost_docs=self.webpackChunkgboost_docs||[]).push([[7918],{8383:function(e,t,a){a.r(t),a.d(t,{default:function(){return ie}});var n=a(9231),r=a(1506),l=a(2208),i=a(9782),s=a(5033);function o(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(s.Z,(0,l.Z)({},t,{subLabel:n.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(s.Z,(0,l.Z)({},a,{subLabel:n.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var c=a(7500),d=a(698),m=a(6034),u=a(8913),v=a(7382),b=a(3616);var f={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function p(e){var t=f[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(d.Z,{to:a,onClick:r},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function g(e){var t,a=e.className,l=e.versionMetadata,i=(0,c.Z)().siteConfig.title,s=(0,m.gA)({failfast:!0}).pluginId,o=(0,u.J)(s).savePreferredVersionName,d=(0,m.Jo)(s),b=d.latestDocSuggestion,f=d.latestVersionSuggestion,g=null!=b?b:(t=f).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,r.Z)(a,v.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(p,{siteTitle:i,versionMetadata:l})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:f.label,to:g.path,onClick:function(){return o(f.name)}})))}function E(e){var t=e.className,a=(0,b.E)();return a.banner?n.createElement(g,{className:t,versionMetadata:a}):null}function L(e){var t=e.className,a=(0,b.E)();return a.badge?n.createElement("span",{className:(0,r.Z)(t,v.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function N(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function Z(e){var t=e.lastUpdatedBy;return n.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function k(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement("span",{className:v.k.common.lastUpdated},n.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(N,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(Z,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var C=a(1459),_=a(3274),H="lastUpdated_moGy";function x(e){return n.createElement("div",{className:(0,r.Z)(v.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(_.Z,e)))}function U(e){var t=e.editUrl,a=e.lastUpdatedAt,l=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,r.Z)(v.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(C.Z,{editUrl:t})),n.createElement("div",{className:(0,r.Z)("col",H)},(a||l)&&n.createElement(k,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:l})))}function y(e){var t=e.content.metadata,a=t.editUrl,l=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,s=t.lastUpdatedBy,o=t.tags,c=o.length>0,d=!!(a||l||s);return c||d?n.createElement("footer",{className:(0,r.Z)(v.k.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(x,{tags:o}),d&&n.createElement(U,{editUrl:a,lastUpdatedAt:l,lastUpdatedBy:s,formattedLastUpdatedAt:i})):null}var T=a(2922),A=a(1769),w="tocCollapsible_ZKLX",I="tocCollapsibleContent_Bwpz",B="tocCollapsibleExpanded_djC9",M=a(2482),O=a(9161),S="tocCollapsibleButton_LYDF",V="tocCollapsibleButtonExpanded_B0KU",D=["collapsed"];function P(e){var t=e.collapsed,a=(0,O.Z)(e,D);return n.createElement("button",(0,l.Z)({type:"button"},a,{className:(0,r.Z)("clean-btn",S,!t&&V,a.className)}),n.createElement(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}function R(e){var t=e.toc,a=e.className,l=e.minHeadingLevel,i=e.maxHeadingLevel,s=(0,A.u)({initialState:!0}),o=s.collapsed,c=s.toggleCollapsed;return n.createElement("div",{className:(0,r.Z)(w,!o&&B,a)},n.createElement(P,{collapsed:o,onClick:c}),n.createElement(A.z,{lazy:!0,className:I,collapsed:o},n.createElement(M.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:i})))}var z=a(2775),F="docItemContainer__P3F",j="docItemCol_Upgz",q="tocMobile_TvgA",K=a(1165),G=a(7624),J=a(3181),W=a(4500),X={breadcrumbsContainer:"breadcrumbsContainer_tOyw",breadcrumbHomeIcon:"breadcrumbHomeIcon_KTW6"},Y=a(4303);function Q(e){return n.createElement("svg",(0,l.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}function $(e){var t=e.children,a=e.href,r="breadcrumbs__link";return e.isLast?n.createElement("span",{className:r,itemProp:"name"},t):a?n.createElement(d.Z,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r},t)}function ee(e){var t=e.children,a=e.active,i=e.index,s=e.addMicrodata;return n.createElement("li",(0,l.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(i+1)}))}function te(){var e=(0,Y.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(d.Z,{"aria-label":(0,i.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.Z)("breadcrumbs__link",X.breadcrumbsItemLink),href:e},n.createElement(Q,{className:X.breadcrumbHomeIcon})))}function ae(){var e=(0,J.s1)(),t=(0,W.Ns)();return e?n.createElement("nav",{className:(0,r.Z)(v.k.docs.docBreadcrumbs,X.breadcrumbsContainer),"aria-label":(0,i.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(te,null),e.map((function(t,a){var r=a===e.length-1;return n.createElement(ee,{key:a,active:r,index:a,addMicrodata:!!t.href},n.createElement($,{href:t.href,isLast:r},t.label))})))):null}var ne=a(4719);function re(e){var t,a=e.content,r=a.metadata,l=a.frontMatter,i=a.assets,s=l.keywords,o=r.description,c=r.title,d=null!=(t=i.image)?t:l.image;return n.createElement(K.d,{title:c,description:o,keywords:s,image:d})}function le(e){var t=e.content,a=t.metadata,l=t.frontMatter,i=l.hide_title,s=l.hide_table_of_contents,c=l.toc_min_heading_level,d=l.toc_max_heading_level,m=a.title,u=!i&&void 0===t.contentTitle,b=(0,G.i)(),f=!s&&t.toc&&t.toc.length>0,p=f&&("desktop"===b||"ssr"===b);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,r.Z)("col",!s&&j)},n.createElement(E,null),n.createElement("div",{className:F},n.createElement("article",null,n.createElement(ae,null),n.createElement(L,null),f&&n.createElement(R,{toc:t.toc,minHeadingLevel:c,maxHeadingLevel:d,className:(0,r.Z)(v.k.docs.docTocMobile,q)}),n.createElement("div",{className:(0,r.Z)(v.k.docs.docMarkdown,"markdown")},u&&n.createElement("header",null,n.createElement(z.Z,{as:"h1"},m)),n.createElement(ne.Z,null,n.createElement(t,null))),n.createElement(y,e)),n.createElement(o,{previous:a.previous,next:a.next}))),p&&n.createElement("div",{className:"col col--3"},n.createElement(T.Z,{toc:t.toc,minHeadingLevel:c,maxHeadingLevel:d,className:v.k.docs.docTocDesktop})))}function ie(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(K.FG,{className:t},n.createElement(re,e),n.createElement(le,e))}},2922:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(2208),r=a(9161),l=a(9231),i=a(1506),s=a(2482),o="tableOfContents_cqSu",c=["className"];function d(e){var t=e.className,a=(0,r.Z)(e,c);return l.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",t)},l.createElement(s.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},2482:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(2208),r=a(9161),l=a(9231);function i(e){var t=e.toc,a=e.className,n=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(i,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}var s=l.memo(i),o=["parentIndex"];function c(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),a=Array(7).fill(-1);t.forEach((function(e,t){var n=a.slice(2,e.level);e.parentIndex=Math.max.apply(Math,n),a[e.level]=t}));var n=[];return t.forEach((function(e){var a=e.parentIndex,l=(0,r.Z)(e,o);a>=0?t[a].children.push(l):n.push(l)})),n}function d(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return t.flatMap((function(e){var t=d({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[Object.assign({},e,{children:t})]:t}))}var m=a(1743);function u(e){var t=e.getBoundingClientRect();return t.top===t.bottom?u(e.parentNode):t}function v(e,t){var a,n,r=t.anchorTopOffset,l=e.find((function(e){return u(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(u(l))?l:null!=(n=e[e.indexOf(l)-1])?n:null:null!=(a=e[e.length-1])?a:null}function b(){var e=(0,l.useRef)(0),t=(0,m.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function f(e){var t=(0,l.useRef)(void 0),a=b();(0,l.useEffect)((function(){if(!e)return function(){};var n=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function s(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),s=function(e){for(var t=e.minHeadingLevel,a=e.maxHeadingLevel,n=[],r=t;r<=a;r+=1)n.push("h"+r+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),o=v(s,{anchorTopOffset:a.current}),c=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),function(){document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,a])}var p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,a=e.className,i=void 0===a?"table-of-contents table-of-contents__left-border":a,o=e.linkClassName,u=void 0===o?"table-of-contents__link":o,v=e.linkActiveClassName,b=void 0===v?void 0:v,h=e.minHeadingLevel,g=e.maxHeadingLevel,E=(0,r.Z)(e,p),L=(0,m.L)(),N=null!=h?h:L.tableOfContents.minHeadingLevel,Z=null!=g?g:L.tableOfContents.maxHeadingLevel,k=function(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return(0,l.useMemo)((function(){return d({toc:c(t),minHeadingLevel:a,maxHeadingLevel:n})}),[t,a,n])}({toc:t,minHeadingLevel:N,maxHeadingLevel:Z});return f((0,l.useMemo)((function(){if(u&&b)return{linkClassName:u,linkActiveClassName:b,minHeadingLevel:N,maxHeadingLevel:Z}}),[u,b,N,Z])),l.createElement(s,(0,n.Z)({toc:k,className:i,linkClassName:u},E))}},3616:function(e,t,a){a.d(t,{E:function(){return s},q:function(){return i}});var n=a(9231),r=a(9695),l=n.createContext(null);function i(e){var t=e.children,a=e.version;return n.createElement(l.Provider,{value:a},t)}function s(){var e=(0,n.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);