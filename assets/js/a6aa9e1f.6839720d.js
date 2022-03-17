"use strict";(self.webpackChunkgboost_docs=self.webpackChunkgboost_docs||[]).push([[3089],{2109:function(e,t,a){a.d(t,{Z:function(){return b}});var r=a(9126),n=a(9231),l=a(1506),i=a(5042),s=a(7854),m="sidebar_Iry5",o="sidebarItemTitle__0PI",c="sidebarItemList_mVp0",d="sidebarItem_Y6Dg",u="sidebarItemLink_qV3r",g="sidebarItemLinkActive_KGfu",p=a(8180);function v(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),n.createElement("ul",{className:c},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:d},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:g},e.title))}))))}var h=["sidebar","toc","children"];function b(e){var t=e.sidebar,a=e.toc,s=e.children,m=(0,r.Z)(e,h),o=t&&t.items.length>0;return n.createElement(i.Z,m,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},o&&n.createElement("aside",{className:"col col--3"},n.createElement(v,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},a))))}},4366:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var r=a(9231),n=a(9),l=a(2109),i=a(614),s=a(7788),m=a(7657);function o(e){var t=e.metadata,a=e.items,o=e.sidebar,c=(0,n.Z)().siteConfig.title,d=t.blogDescription,u=t.blogTitle,g="/"===t.permalink?c:u;return r.createElement(l.Z,{title:g,description:d,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogListPage,searchMetadata:{tag:"blog_posts_list"},sidebar:o},a.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(s.Z,{metadata:t}))}},7788:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(9231),n=a(8180),l=a(1130);function i(e){var t=e.metadata,a=t.previousPage,i=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},a&&r.createElement(l.Z,{permalink:a,title:r.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},i&&r.createElement(l.Z,{permalink:i,title:r.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},614:function(e,t,a){a.d(t,{Z:function(){return k}});var r=a(9231),n=a(1506),l=a(4852),i=a(8180),s=a(7854),m=a(7488),o=a(7657),c=a(4413),d=a(2751),u=a(8287),g="blogPostTitle_JcXk",p="blogPostData_UHv9",v="blogPostDetailsFull_CqZz",h=a(4793),b="image_A8Ls";function E(e){var t=e.author,a=t.name,n=t.title,l=t.url,i=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:l},r.createElement("img",{className:b,src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(s.Z,{href:l,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))}var f="authorCol_f_n_",_="imageOnlyAuthorRow_CiUl",Z="imageOnlyAuthorCol_iSN4";function N(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",l?_:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,n.Z)(!l&&"col col--6",l?Z:f),key:t},r.createElement(E,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function k(e){var t,a,b,E=(b=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return b(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),f=(0,m.C)().withBaseUrl,_=e.children,Z=e.frontMatter,k=e.assets,P=e.metadata,T=e.truncated,w=e.isBlogPostPage,I=void 0!==w&&w,L=P.date,y=P.formattedDate,C=P.permalink,A=P.tags,M=P.readingTime,x=P.title,U=P.editUrl,R=P.authors,B=null!=(t=k.image)?t:Z.image,O=!I&&T,D=A.length>0,q=I?"h1":"h2";return r.createElement("article",{className:I?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(q,{className:g,itemProp:"headline"},I?x:r.createElement(s.Z,{itemProp:"url",to:C},x)),r.createElement("div",{className:(0,n.Z)(p,"margin-vert--md")},r.createElement("time",{dateTime:L,itemProp:"datePublished"},y),void 0!==M&&r.createElement(r.Fragment,null," \xb7 ",E(M))),r.createElement(N,{authors:R,assets:k})),B&&r.createElement("meta",{itemProp:"image",content:f(B,{absolute:!0})}),r.createElement("div",{id:I?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(l.Zo,{components:d.Z},_)),(D||T)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(a={},a[v]=I,a))},D&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":O})},r.createElement(h.Z,{tags:A})),I&&U&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:U})),O&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":D})},r.createElement(s.Z,{to:P.permalink,"aria-label":(0,i.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:x})},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},8287:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(9231),n=a(8180),l=a(5086),i=a(9126),s=a(1506),m="iconEdit_Atbd",o=["className"];function c(e){var t=e.className,a=(0,i.Z)(e,o);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(m,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var d=a(7657);function u(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:d.kM.common.editThisPage},r.createElement(c,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1130:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(9231),n=a(7854);function l(e){var t=e.permalink,a=e.title,l=e.subLabel;return r.createElement(n.Z,{className:"pagination-nav__link",to:t},l&&r.createElement("div",{className:"pagination-nav__sublabel"},l),r.createElement("div",{className:"pagination-nav__label"},a))}},2725:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(9231),n=a(1506),l=a(7854),i="tag_wOoG",s="tagRegular_xpaO",m="tagWithCount_QxPc";function o(e){var t,a=e.permalink,o=e.name,c=e.count;return r.createElement(l.Z,{href:a,className:(0,n.Z)(i,(t={},t[s]=!c,t[m]=c,t))},o,c&&r.createElement("span",null,c))}},4793:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(9231),n=a(1506),l=a(8180),i=a(2725),s="tags_wIMe",m="tag_rhXq";function o(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(s,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:m},r.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);