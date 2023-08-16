(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12],{1240:function(e,s,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/overview/contributors/testing-locally",function(){return o(6954)}])},6954:function(e,s,o){"use strict";o.r(s);var n=o(5250),i=o(154),t=o(7160);function r(e){let s=Object.assign({h1:"h1",p:"p",code:"code",h3:"h3",a:"a",ul:"ul",li:"li",pre:"pre",span:"span"},(0,t.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{children:"Testing Locally"}),"\n",(0,n.jsxs)(s.p,{children:["To develop ",(0,n.jsx)(s.code,{children:"gboost-ui"})," or ",(0,n.jsx)(s.code,{children:"gboost-infra"})," or ",(0,n.jsx)(s.code,{children:"gboost-common"})," in your Green Boost application repository (created with ",(0,n.jsx)(s.code,{children:"gboost create"}),"), run ",(0,n.jsx)(s.code,{children:"pnpm add ../path/to/gboost/packages/gboost-*"})," replacing the path with the path to wherever the package is locally. This will change your package.json."]}),"\n",(0,n.jsx)(s.p,{children:"Instructions below allow you to edit .ts files and test out your changes without having to compile to .js each time you make a change."}),"\n",(0,n.jsx)(s.h3,{id:"gboost-ui",children:"gboost-ui"}),"\n",(0,n.jsxs)(s.p,{children:["After running ",(0,n.jsx)(s.code,{children:"pnpm add ../path/to/gboost/packages/gboost-ui"})," in your GB app ui folder, you'll need to restart the Vite dev server."]}),"\n",(0,n.jsxs)(s.p,{children:["For any library used in ",(0,n.jsx)(s.code,{children:"gboost-ui"})," and the consuming package (ui folder), you'll want to add that library to Vite's ",(0,n.jsx)(s.a,{href:"https://vitejs.dev/config/#resolve-dedupe",children:"resolve.dedupe"})," configuration parameter. See an explanation ",(0,n.jsx)(s.a,{href:"https://blog.maximeheckel.com/posts/duplicate-dependencies-npm-link/",children:"here"}),". Here is an inexhaustive list: ",(0,n.jsx)(s.code,{children:'["aws-amplify", "@aws-amplify/ui-react", "graphql", "graphql-tag", "react", "react-dom", "react-icons", "react-router-dom", "@vanilla-extract/css"]'})]}),"\n",(0,n.jsx)(s.h3,{id:"gboost",children:"gboost"}),"\n",(0,n.jsxs)(s.p,{children:["Install ",(0,n.jsx)(s.code,{children:"vite-node"})," globally with ",(0,n.jsx)(s.code,{children:"pnpm add -g vite-node"}),". Then you can run the CLI source (TS files) with: ",(0,n.jsx)(s.code,{children:'vite-node --options.deps.inline="@aws-sdk/util-user-agent-node" ../path/to/green-boost/packages/gboost/src/index.ts -- <command>'}),". You can remove ",(0,n.jsx)(s.code,{children:'--options.deps.inline="@aws-sdk/util-user-agent-node"'})," once ",(0,n.jsx)(s.a,{href:"https://github.com/aws/aws-sdk-js-v3/issues/3622",children:"this issue"})," is resolved."]}),"\n",(0,n.jsx)(s.h3,{id:"gboost-infra",children:"gboost-infra"}),"\n",(0,n.jsxs)(s.p,{children:["After running ",(0,n.jsx)(s.code,{children:"pnpm add ../path/to/gboost/packages/gboost-infra"})," in your GB app infra folder you'll have 2 instances of ",(0,n.jsx)(s.code,{children:"aws-cdk-lib"})," and ",(0,n.jsx)(s.code,{children:"cdk-nag"}),". One in your project and one in the green-boost repository. This causes an issue for ",(0,n.jsx)(s.code,{children:"cdk-nag"})," because it uses ",(0,n.jsx)(s.code,{children:"instanceof"})," comparisons on classes to conditionally check if resources adhere to requirements. See more ",(0,n.jsx)(s.a,{href:"https://github.com/cdklabs/cdk-nag/issues/1219",children:"here"}),". To get around this, we'll use Vite's ",(0,n.jsx)(s.code,{children:"resolve.dedupe"})," ",(0,n.jsx)(s.a,{href:"https://vitejs.dev/config/shared-options.html#resolve-dedupe",children:"configuration feature"}),". Steps:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["In infra folder run: ",(0,n.jsx)(s.code,{children:"pnpm add -D vite vite-node"})]}),"\n",(0,n.jsx)(s.li,{children:"Add vite.config.ts"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{"data-language":"ts","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"ts","data-theme":"default",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { defineConfig } "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"vite"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  resolve"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    dedupe"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"aws-cdk-lib"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"cdk-nag"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})})]})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Change cdk.json#app to ",(0,n.jsx)(s.code,{children:'"/path/to/your/app/infra/node_modules/.bin/vite-node src/local-app.ts"'})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:'cdk synth "**"'}),". Now only 1 version of those libraries will be used when synthesizing your app."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Note: you'll need to run ",(0,n.jsx)(s.code,{children:"pnpm build"})," within green-boost/packages/gboost-infra if using constructs that rely on built code like custom resources."]})]})}o(425),s.default=(0,i.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(r,{...e})}):r(e)},pageOpts:{filePath:"src/pages/overview/contributors/testing-locally.mdx",route:"/overview/contributors/testing-locally",headings:[{depth:1,value:"Testing Locally",id:"testing-locally"},{depth:3,value:"gboost-ui",id:"gboost-ui"},{depth:3,value:"gboost",id:"gboost"},{depth:3,value:"gboost-infra",id:"gboost-infra"}],title:"Testing Locally"},pageNextRoute:"/overview/contributors/testing-locally"})}},function(e){e.O(0,[154,774,888,179],function(){return e(e.s=1240)}),_N_E=e.O()}]);