(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[655],{4999:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/m6-tooling",function(){return s(6994)}])},6994:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return a}});var i=s(5250),t=s(8720),r=s(2318);let a=[{depth:2,value:"Learn",id:"learn"},{depth:2,value:"Apply",id:"apply"},{depth:3,value:"M6.1 - PNPM Workspaces",id:"m61---pnpm-workspaces"},{depth:3,value:"M6.2 - PNPM Scripts",id:"m62---pnpm-scripts"},{depth:3,value:"M6.3 - Static Code Analysis with ESLint",id:"m63---static-code-analysis-with-eslint"},{depth:3,value:"M6.4 - NPM Audit",id:"m64---npm-audit"},{depth:3,value:"M6.5 - Pre-commit Hooks",id:"m65---pre-commit-hooks"}];function l(e){let n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",a:"a",span:"span",code:"code",h3:"h3"},(0,r.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"Module 6: Tooling"}),"\n",(0,i.jsx)(n.p,{children:"Green Boost (GB) tooling includes: PNPM, ESLint, TypeScript Compiler, NPM Audit, Prettier, and Husky. GB projects created with gboost create are setup as a monorepo."}),"\n",(0,i.jsx)(n.h2,{id:"learn",children:"Learn"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Monorepo: scan ",(0,i.jsx)(n.a,{href:"https://monorepo.tools/",children:"Monorepos Explained"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Focus on what monorepos are and why you should use them. This explainer resource is from a 3rd party vendor but still includes valuable information. GB doesn’t use full blown monorepo tooling currently. Still considering whether additional complexity is worth it. Specifically, considering ",(0,i.jsx)(n.a,{href:"https://turbo.build/repo",children:"Turborepo"})," for faster Lambda builds."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Package Manager: lightly scan the ",(0,i.jsx)(n.a,{href:"https://pnpm.io/",children:"PNPM docs"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Focus on ",(0,i.jsx)(n.a,{href:"https://pnpm.io/motivation",children:"motivation"})," and ",(0,i.jsx)(n.a,{href:"https://pnpm.io/workspaces",children:"workspaces"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Static Code Analysis: lightly scan the ",(0,i.jsx)(n.a,{href:"https://eslint.org/",children:"ESLint docs"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Focus on ",(0,i.jsx)(n.a,{href:"https://eslint.org/docs/latest/use/core-concepts",children:"core concepts"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Type Checking: lightly scan the ",(0,i.jsx)(n.span,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"tsc"})})})})," (TypeScript Compiler) ",(0,i.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html",children:"docs"})]}),"\n",(0,i.jsxs)(n.li,{children:["3rd Party Vulnerability Scanning: read docs ",(0,i.jsx)(n.a,{href:"https://docs.npmjs.com/cli/v9/commands/npm-audit",children:"here"})]}),"\n",(0,i.jsxs)(n.li,{children:["Code Formatting: lightly scan the ",(0,i.jsx)(n.a,{href:"https://prettier.io/",children:"Prettier docs"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You'll notice GB templates have no prettier configuration as they use the default prettier settings. If desired, this can be easily customized as shown in the docs."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Pre-commit Hooks: lightly scan the ",(0,i.jsx)(n.a,{href:"https://typicode.github.io/husky/",children:"Husky docs"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"apply",children:"Apply"}),"\n",(0,i.jsx)(n.h3,{id:"m61---pnpm-workspaces",children:"M6.1 - PNPM Workspaces"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Review the ",(0,i.jsx)(n.code,{children:"pnpm-workspace.yaml"})," file in root of GB repo. Understand how workspaces reference each other’s packages"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"m62---pnpm-scripts",children:"M6.2 - PNPM Scripts"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Run ",(0,i.jsx)(n.span,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"lint"})]})})})," and ",(0,i.jsx)(n.span,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"typecheck"})]})})})," and ",(0,i.jsx)(n.span,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"test"})]})})})," in the root of the repository. Notice how PNPM is running those commands in every workspace that has those commands within their ",(0,i.jsx)(n.code,{children:"package.json#scripts"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"m63---static-code-analysis-with-eslint",children:"M6.3 - Static Code Analysis with ESLint"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Intentionally create a code-smell (see all rules ",(0,i.jsx)(n.a,{href:"https://eslint.org/docs/latest/rules/",children:"here"}),") and verify ESLint is runs and shows red squiggles in your editor. If you're using VS Code, you will need to install the ES Lint Extension to see linting. Also recommend the Error Lens extension if you like seeing the error in line with your code."]}),"\n",(0,i.jsx)(n.li,{children:"Review ESLint configuration. Add a custom ESLint rule. Understand how ESLint works with Prettier to enforce code formatting."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"m64---npm-audit",children:"M6.4 - NPM Audit"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.span,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"audit"})]})})})," is an alias for ",(0,i.jsx)(n.span,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"npm"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"audit"})]})})})]}),"\n",(0,i.jsxs)(n.li,{children:["Run ",(0,i.jsx)(n.span,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"audit"})]})})}),". Any CVEs?"]}),"\n",(0,i.jsxs)(n.li,{children:["If you found any CVEs of sub-dependencies - dependencies that you didn't specify the version for. How can you update them? Checkout PNPM's overrides configuration option. Now override the offending package's version with the overrides configuration option and verify ",(0,i.jsx)(n.span,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"audit"})]})})})," succeeds."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"m65---pre-commit-hooks",children:"M6.5 - Pre-commit Hooks"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Make an update in a TypeScript file in each each top level folder. The change can be as trivial as adding a comment."}),"\n",(0,i.jsx)(n.li,{children:"Now stage and commit those changes."}),"\n",(0,i.jsxs)(n.li,{children:["Notice how Husky's pre-commit hook defined in ",(0,i.jsx)(n.code,{children:".husky/pre-commit"})," runs invoking ",(0,i.jsx)(n.span,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"lint-staged"})]})})})," which in turn runs the ",(0,i.jsx)(n.code,{children:".lintstagedrc.js"})," file in each top level folder."]}),"\n"]})]})}n.default=(0,t.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.a)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)},pageOpts:{filePath:"src/pages/learn/m6-tooling.mdx",route:"/learn/m6-tooling",title:"Module 6: Tooling",headings:a},pageNextRoute:"/learn/m6-tooling"})}},function(e){e.O(0,[720,774,888,179],function(){return e(e.s=4999)}),_N_E=e.O()}]);