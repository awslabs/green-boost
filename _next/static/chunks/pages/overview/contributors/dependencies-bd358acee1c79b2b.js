(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[714],{9806:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/overview/contributors/dependencies",function(){return o(3968)}])},3968:function(e,n,o){"use strict";o.r(n),o.d(n,{__toc:function(){return s}});var t=o(651),i=o(3530),d=o(7380);let s=[{depth:2,value:"Dependencies vs Peer Dependencies",id:"dependencies-vs-peer-dependencies"},{depth:3,value:"Core 3rd Party Dependencies",id:"core-3rd-party-dependencies"},{depth:4,value:"gboost-infra",id:"gboost-infra"},{depth:4,value:"gboost-node",id:"gboost-node"},{depth:4,value:"gboost-ui",id:"gboost-ui"},{depth:2,value:"Update Dependencies",id:"update-dependencies"}];function r(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3",h4:"h4",ul:"ul",li:"li",em:"em"},(0,d.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:"Dependencies"}),"\n",(0,t.jsx)(n.h2,{id:"dependencies-vs-peer-dependencies",children:"Dependencies vs Peer Dependencies"}),"\n",(0,t.jsxs)(n.p,{children:["When building a React component, CDK construct, or Node.js function that depends on a 3rd party library outside of the core 3rd party dependencies (listed below), make those dependencies optional peer dependencies and do not export the component or construct from the index/root of the package. Export the component or construct from a subpath of the module via package.json#exports so that only consumers of the package who want to use that functionality have to install the 3rd party dependency. Core dependencies include libraries already included in the ",(0,t.jsx)(n.code,{children:'"dependencies"'})," key of the package.json. Each component/construct should include any additional libraries that need to be installed in the docs."]}),"\n",(0,t.jsx)(n.h3,{id:"core-3rd-party-dependencies",children:"Core 3rd Party Dependencies"}),"\n",(0,t.jsx)(n.h4,{id:"gboost-infra",children:"gboost-infra"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"aws-cdk-lib"}),"\n",(0,t.jsx)(n.li,{children:"cdk-nag"}),"\n",(0,t.jsx)(n.li,{children:"constructs"}),"\n",(0,t.jsx)(n.li,{children:"gboost-common"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"gboost-node",children:"gboost-node"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"gboost-common"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"gboost-ui",children:"gboost-ui"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"@emotion/cache"}),"\n",(0,t.jsx)(n.li,{children:"@emotion/react"}),"\n",(0,t.jsx)(n.li,{children:"@emotion/styled"}),"\n",(0,t.jsx)(n.li,{children:"@mui/icons-material"}),"\n",(0,t.jsx)(n.li,{children:"@mui/material"}),"\n",(0,t.jsx)(n.li,{children:"gboost-common"}),"\n",(0,t.jsx)(n.li,{children:"next"}),"\n",(0,t.jsx)(n.li,{children:"react"}),"\n",(0,t.jsx)(n.li,{children:"react-dom"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"update-dependencies",children:"Update Dependencies"}),"\n",(0,t.jsxs)(n.p,{children:["GB dependencies should be updated regularly. To update all patch and minor NPM versions, run ",(0,t.jsx)(n.code,{children:"pnpm -r up -i"}),". This will launch an interactive CLI UI that allows you to pick which dependencies you want to updated. You can type ",(0,t.jsx)(n.code,{children:"a"})," to update them all. For patch and minor version updated, you ",(0,t.jsx)(n.em,{children:"should"})," be safe to do this."]}),"\n",(0,t.jsxs)(n.p,{children:["You'll also want to check for major package upgrades but tread cautiously as these new versions contain breaking changes that may or may not break GB. For major version upgrades run ",(0,t.jsx)(n.code,{children:"pnpm -r up -i --latest"}),". For any major upgrades, make sure to check out the realease notes or changelog for the package on GitHub."]})]})}n.default=(0,i.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.a)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)},pageOpts:{filePath:"src/pages/overview/contributors/dependencies.mdx",route:"/overview/contributors/dependencies",timestamp:172150086e4,title:"Dependencies",headings:s},pageNextRoute:"/overview/contributors/dependencies"})}},function(e){e.O(0,[530,888,774,179],function(){return e(e.s=9806)}),_N_E=e.O()}]);