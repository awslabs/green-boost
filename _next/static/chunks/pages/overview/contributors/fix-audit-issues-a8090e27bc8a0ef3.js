(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[472],{7722:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/overview/contributors/fix-audit-issues",function(){return i(1925)}])},1925:function(e,n,i){"use strict";i.r(n),i.d(n,{__toc:function(){return r}});var t=i(5250),s=i(8720),d=i(2318);let r=[];function o(e){let n=Object.assign({h1:"h1",p:"p",code:"code",a:"a"},(0,d.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:"Fix Audit Issues"}),"\n",(0,t.jsxs)(n.p,{children:["On each PR, ",(0,t.jsx)(n.code,{children:"pnpm audit"})," is used to detect ",(0,t.jsx)(n.a,{href:"https://www.redhat.com/en/topics/security/what-is-cve",children:"CVEs"}),". The GitHub Actions Workflow will fail if any CVEs >= moderate severity are found by running the command ",(0,t.jsx)(n.code,{children:"pnpm audit --audit-level moderate"}),". If the dependency is a direct dependency of your project, you should try to ",(0,t.jsx)(n.a,{href:"#update-dependencies",children:"update dependencies"}),". You can learn why a dependency is in your project (dependency hierarchy) with ",(0,t.jsx)(n.code,{children:"pnpm why <package-name>"}),". If the dependency is a transitive dependency (dependency of dependency), you'll need to use PNPM's ",(0,t.jsx)(n.a,{href:"https://pnpm.io/package_json#pnpmoverrides",children:"pnpm.overrides feature"})," by adding to the ",(0,t.jsx)(n.code,{children:"package.json#pnpm.overrides"})," object a key/value pair like: ",(0,t.jsx)(n.code,{children:'"<package-name>@<vulnerable-version>": "<patched-version>"'}),". Then run ",(0,t.jsx)(n.code,{children:"pnpm i"})," to update your dependencies."]}),"\n",(0,t.jsxs)(n.p,{children:["Periodically, ",(0,t.jsx)(n.code,{children:"pnpm.overrides"})," should be cleaned up as libraries overtime will update to patched version of packages."]}),"\n",(0,t.jsxs)(n.p,{children:["If there is no patched version of the library and you can safely ignore the CVE, you can add it to ",(0,t.jsx)(n.code,{children:"pnpm.auditConfig.ignoreCves"}),"."]})]})}n.default=(0,s.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.a)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)},pageOpts:{filePath:"src/pages/overview/contributors/fix-audit-issues.mdx",route:"/overview/contributors/fix-audit-issues",title:"Fix Audit Issues",headings:r},pageNextRoute:"/overview/contributors/fix-audit-issues"})}},function(e){e.O(0,[720,774,888,179],function(){return e(e.s=7722)}),_N_E=e.O()}]);