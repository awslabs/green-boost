(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[837],{6490:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/m1-deploy-gb-app",function(){return n(6641)}])},6641:function(e,s,n){"use strict";n.r(s);var r=n(5250),o=n(154),l=n(7160);function t(e){let s=Object.assign({h1:"h1",p:"p",h2:"h2",ol:"ol",li:"li",a:"a",h3:"h3",pre:"pre",code:"code",span:"span",ul:"ul"},(0,l.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{children:"Module 1: Deploy Green Boost Template App"}),"\n",(0,r.jsx)(s.p,{children:"Welcome to Module 1. In this module you will deploy a Green Boost web app starting from the Aurora PostgreSQL Template."}),"\n",(0,r.jsx)(s.h2,{id:"learn",children:"Learn"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Read through the ",(0,r.jsx)(s.a,{href:"../overview/intro",children:"Overview"})," docs."]}),"\n",(0,r.jsxs)(s.li,{children:["Review the Green Boost ",(0,r.jsx)(s.a,{href:"https://github.com/orgs/awslabs/projects/48/views/7",children:"Project Board"})," to see what's on the road map."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"apply",children:"Apply"}),"\n",(0,r.jsx)(s.h3,{id:"m11---deploy-the-aurora-postgresql-template",children:"M1.1 - Deploy the Aurora PostgreSQL Template."}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Follow ",(0,r.jsx)(s.a,{href:"../overview/prereqs",children:"prerequisites"}),"."]}),"\n",(0,r.jsx)(s.li,{children:"Run below commands:"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"add"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-g"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"gboost"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"env"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"use"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"--global"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"18"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# optional - ensure Node.js 18 is used"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"gboost"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"create"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# select CRUD Aurora PostgreSQL template"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"your-director"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"y"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"i"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"infra"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"deploy:local"})]})]})}),"\n",(0,r.jsx)(s.h3,{id:"m12---resources--constructs",children:"M1.2 - Resources & Constructs"}),"\n",(0,r.jsxs)(s.p,{children:["While you're waiting (~20 minutes) for your CloudFormation stacks to deploy, checkout the resources in each stack being deployed. What resources are there? Which resources map to which constructs within the infrastructure code that ",(0,r.jsx)(s.span,{"data-rehype-pretty-code-fragment":"",children:(0,r.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"gboost"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"create"})]})})})," generated? See infrastructure code in ",(0,r.jsx)(s.code,{children:"infra/src/app/**"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"m13---visit-web-app",children:"M1.3 - Visit Web App"}),"\n",(0,r.jsxs)(s.p,{children:["View your newly deployed web app at the CloudFront URL printed by the ",(0,r.jsx)(s.span,{"data-rehype-pretty-code-fragment":"",children:(0,r.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"deploy:local"})]})})})," command."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Your UI stack created an output with the CloudFront URL that will look something like: ",(0,r.jsx)(s.code,{children:"myapp5stickbui9C39A55A.CloudFrontDomainName = d1q16n5pof924c.cloudfront.net"})," which contains the URL."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"m14---monitor-dashboard",children:"M1.4 - Monitor Dashboard"}),"\n",(0,r.jsx)(s.p,{children:"View your CloudWatch Monitoring Dashboard in the AWS Console. Which resources are being monitored? What thresholds were set for alarms?"}),"\n",(0,r.jsx)(s.h3,{id:"m15---scan-code",children:"M1.5 - Scan Code"}),"\n",(0,r.jsxs)(s.p,{children:["Review the other folders generated by ",(0,r.jsx)(s.span,{"data-rehype-pretty-code-fragment":"",children:(0,r.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"gboost"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"create"})]})})}),". You'll be working more with them in the next modules."]})]})}n(425),s.default=(0,o.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,l.ah)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(t,{...e})}):t(e)},pageOpts:{filePath:"src/pages/learn/m1-deploy-gb-app.mdx",route:"/learn/m1-deploy-gb-app",headings:[{depth:1,value:"Module 1: Deploy Green Boost Template App",id:"module-1-deploy-green-boost-template-app"},{depth:2,value:"Learn",id:"learn"},{depth:2,value:"Apply",id:"apply"},{depth:3,value:"M1.1 - Deploy the Aurora PostgreSQL Template.",id:"m11---deploy-the-aurora-postgresql-template"},{depth:3,value:"M1.2 - Resources & Constructs",id:"m12---resources--constructs"},{depth:3,value:"M1.3 - Visit Web App",id:"m13---visit-web-app"},{depth:3,value:"M1.4 - Monitor Dashboard",id:"m14---monitor-dashboard"},{depth:3,value:"M1.5 - Scan Code",id:"m15---scan-code"}],title:"Module 1: Deploy Green Boost Template App"},pageNextRoute:"/learn/m1-deploy-gb-app"})}},function(e){e.O(0,[154,774,888,179],function(){return e(e.s=6490)}),_N_E=e.O()}]);