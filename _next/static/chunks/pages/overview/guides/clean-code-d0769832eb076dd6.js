(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[726],{8028:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/overview/guides/clean-code",function(){return s(5303)}])},5303:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return d}});var i=s(651),l=s(3530),t=s(7380),r=s(2867);let d=[{depth:2,value:"The Problem",id:"the-problem"},{depth:2,value:"File Structure",id:"file-structure"},{depth:2,value:"core",id:"core"},{depth:3,value:"adapters/primary",id:"adaptersprimary"},{depth:3,value:"adapters/secondary",id:"adapterssecondary"},{depth:3,value:"db",id:"db"},{depth:3,value:"modules/${entity}",id:"modulesentity"},{depth:3,value:"modules/${model}",id:"modulesmodel"},{depth:2,value:"infra",id:"infra"},{depth:3,value:"app/stateful",id:"appstateful"},{depth:3,value:"app/stateless",id:"appstateless"},{depth:3,value:"packages",id:"packages"},{depth:2,value:"ui",id:"ui"},{depth:3,value:"app",id:"app"},{depth:3,value:"components",id:"components"},{depth:3,value:"context",id:"context"},{depth:3,value:"hooks",id:"hooks"}];function o(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",ul:"ul",li:"li",h3:"h3",code:"code"},(0,t.a)(),e.components);return r.zH||a("FileTree",!1),r.zH.File||a("FileTree.File",!0),r.zH.Folder||a("FileTree.Folder",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"Clean Code"}),"\n",(0,i.jsx)(n.h2,{id:"the-problem",children:"The Problem"}),"\n",(0,i.jsxs)(n.p,{children:["There is no commonly agreed upon way to organize code for full stack cloud native web apps on AWS. This can make it challenging for greenfield projects to know where to start. Without a clear strategy for organizing code, projects can turn into a messy ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Anti-pattern#:~:text=A%20Big%20Ball%20of%20Mud,%2C%20and%20repeated%2C%20expedient%20repair.",children:"big ball of mud"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"In order to keep code architecture clean, this guide provides some recommendations for organizing your code. You do not have to follow it to build with Green Boost. However, keep in mind the less decisions you have to make as a developer, the faster you can build. Enforcing the right restrictions on your code can actually free you to focus on adding business value."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Freedom is not the absence of restrictions but the presence of the right restrictions - Timothy Keller"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"file-structure",children:"File Structure"}),"\n",(0,i.jsxs)(r.zH,{children:[(0,i.jsx)(r.zH.Folder,{name:"core",defaultOpen:!0,children:(0,i.jsxs)(r.zH.Folder,{name:"src",defaultOpen:!0,children:[(0,i.jsxs)(r.zH.Folder,{name:"adapters",defaultOpen:!0,children:[(0,i.jsx)(r.zH.Folder,{name:"primary"}),(0,i.jsx)(r.zH.Folder,{name:"secondary"})]}),(0,i.jsx)(r.zH.Folder,{name:"db"}),(0,i.jsxs)(r.zH.Folder,{name:"modules",defaultOpen:!0,children:[(0,i.jsxs)(r.zH.Folder,{name:"`${entity}`",defaultOpen:!0,children:[(0,i.jsx)(r.zH.File,{name:"`${entity}.db.ts`"}),(0,i.jsx)(r.zH.File,{name:"`${entity}.entity.ts`"}),(0,i.jsx)(r.zH.File,{name:"`${entity}.repository.ts`"}),(0,i.jsx)(r.zH.File,{name:"`${entity}.schema.ts`"}),(0,i.jsx)(r.zH.File,{name:"`${action}-${entity}.usecase.ts`"})]}),(0,i.jsxs)(r.zH.Folder,{name:"`${model}`",defaultOpen:!0,children:[(0,i.jsx)(r.zH.File,{name:"`${model}.model.ts`"}),(0,i.jsx)(r.zH.File,{name:"`${model}.schema.ts`"}),(0,i.jsx)(r.zH.File,{name:"`${action}-${model}.usecase.ts`"})]})]})]})}),(0,i.jsx)(r.zH.Folder,{name:"infra",defaultOpen:!0,children:(0,i.jsx)(r.zH.Folder,{name:"src",defaultOpen:!0,children:(0,i.jsxs)(r.zH.Folder,{name:"app",defaultOpen:!0,children:[(0,i.jsxs)(r.zH.Folder,{name:"stateful",defaultOpen:!0,children:[(0,i.jsx)(r.zH.File,{name:"data-stack.ts"}),(0,i.jsx)(r.zH.File,{name:"network-stack.ts"})]}),(0,i.jsxs)(r.zH.Folder,{name:"stateless",defaultOpen:!0,children:[(0,i.jsx)(r.zH.File,{name:"job-stack.ts"}),(0,i.jsx)(r.zH.File,{name:"monitor-stack.ts"}),(0,i.jsx)(r.zH.File,{name:"ui-stack.ts"})]})]})})}),(0,i.jsx)(r.zH.Folder,{name:"packages"}),(0,i.jsx)(r.zH.Folder,{name:"ui",defaultOpen:!0,children:(0,i.jsxs)(r.zH.Folder,{name:"src",defaultOpen:!0,children:[(0,i.jsx)(r.zH.Folder,{name:"app"}),(0,i.jsx)(r.zH.Folder,{name:"components"}),(0,i.jsx)(r.zH.Folder,{name:"context"}),(0,i.jsx)(r.zH.Folder,{name:"hooks"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"core",children:"core"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Center of your application."}),"\n",(0,i.jsx)(n.li,{children:"Contains business logic."}),"\n",(0,i.jsxs)(n.li,{children:["Subfolder structure inspired by the following design ideas. Learn more ",(0,i.jsx)(n.a,{href:"../../learn/resources#clean-code",children:"here"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Domain Driven Design"}),"\n",(0,i.jsx)(n.li,{children:"Hexagonal Architecture"}),"\n",(0,i.jsx)(n.li,{children:"Vertical Slices"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Primarily includes backend functionality."}),"\n",(0,i.jsx)(n.li,{children:"Additionally includes common code shared between db, infra, and ui folders."}),"\n",(0,i.jsx)(n.li,{children:"Typical Request Path: User ↔ Primary Adapter ↔ Use Case ↔ Entity/Schema ↔ Repository ↔ Secondary Adapter ↔ External API"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"adaptersprimary",children:"adapters/primary"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Bootstrap scripts that serve as the starting point of the program."}),"\n",(0,i.jsx)(n.li,{children:"Considered primary adapters based on hexagonal architecture."}),"\n",(0,i.jsx)(n.li,{children:"Drive your application."}),"\n",(0,i.jsx)(n.li,{children:"Depend upon services."}),"\n",(0,i.jsx)(n.li,{children:"Examples includes Lambda handlers invoked by API Gateway EventBridge."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"adapterssecondary",children:"adapters/secondary"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Translate communication between the domain and the outside world."}),"\n",(0,i.jsx)(n.li,{children:"Based on hexagonal architecture, these are secondary adapters."}),"\n",(0,i.jsx)(n.li,{children:"Examples include a database repository, cache client, or email client."}),"\n",(0,i.jsx)(n.li,{children:"Don't contain business logic. Don't depend upon modules."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"db",children:"db"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"DB related code"}),"\n",(0,i.jsx)(n.li,{children:"Stores migration files"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"modulesentity",children:(0,i.jsx)(n.code,{children:"modules/${entity}"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Entities represent a single instance of your domain object saved into the DB. See more ",(0,i.jsx)(n.a,{href:"https://stackoverflow.com/questions/8743995/what-is-difference-between-a-model-and-an-entity",children:"here"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Have UUID"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"modules/${entity}.db.ts"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Defines DB table for entity."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"modules/${entity}.entity.ts"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Class including business logic related to this entity."}),"\n",(0,i.jsx)(n.li,{children:"Depends upon schema."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"modules/${entity}/repository.ts"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Translation layer between use case and secondary adapter."}),"\n",(0,i.jsx)(n.li,{children:"Depends on secondary adapter."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"modules/${entity}/schema.ts"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Validation for entity to ensure business rules are followed."}),"\n",(0,i.jsx)(n.li,{children:"No dependencies."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"modules/${entity}/usecase.ts"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Thin layer responsible for orchestrating collaboration between modules and adapters"}),"\n",(0,i.jsx)(n.li,{children:"Depends upon entities, models,"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"modulesmodel",children:(0,i.jsx)(n.code,{children:"modules/${model}"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Models represents a real world object that is related to the domain space but not necessarily persisted. See more ",(0,i.jsx)(n.a,{href:"https://stackoverflow.com/questions/8743995/what-is-difference-between-a-model-and-an-entity",children:"here"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Also known as value objects."}),"\n",(0,i.jsxs)(n.li,{children:["Don't create ",(0,i.jsx)(n.a,{href:"https://www.martinfowler.com/bliki/AnemicDomainModel.html",children:"anemic domain models"})," which only consist of properties/attributes."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"infra",children:"infra"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["AWS Cloud Development Kit (CDK) source code for defining ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/cdk/v2/guide/stacks.html",children:"stacks"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"appstateful",children:"app/stateful"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Collection of CDK Stacks that persist or store information on AWS."}),"\n",(0,i.jsx)(n.li,{children:"Deployed less infrequently."}),"\n",(0,i.jsx)(n.li,{children:"Examples include: network-stacks.ts, db-stack.ts, object-stack.ts."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"appstateless",children:"app/stateless"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Collection of CDK Stacks that do not persist or store information on AWS."}),"\n",(0,i.jsx)(n.li,{children:"Deployed frequently."}),"\n",(0,i.jsx)(n.li,{children:"Examples include: job-stack.ts, monitor-stack.ts, ui-stack.ts."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"packages",children:"packages"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Reusable modules across workspaces."}),"\n",(0,i.jsx)(n.li,{children:"Examples include TypeScript configuration and ESLint configuration."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"ui",children:"ui"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Web user interface code"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"app",children:"app"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Define routing for Next.js filesystem based router."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"components",children:"components"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Reusable components found across routes."}),"\n",(0,i.jsx)(n.li,{children:"Don't add components here that are only used within a single routes."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"context",children:"context"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Application wide shared state that doesn't require prop-drilling."}),"\n",(0,i.jsx)(n.li,{children:"Examples include user information or preferences."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"hooks",children:"hooks"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Custom hooks which extract state from components allowing for reuse."}),"\n",(0,i.jsx)(n.li,{children:"Use when you find yourself copying and pasting ui code logic between components."}),"\n"]})]})}function a(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=(0,l.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.a)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)},pageOpts:{filePath:"src/pages/overview/guides/clean-code.mdx",route:"/overview/guides/clean-code",timestamp:172150086e4,title:"Clean Code",headings:d},pageNextRoute:"/overview/guides/clean-code"})}},function(e){e.O(0,[530,888,774,179],function(){return e(e.s=8028)}),_N_E=e.O()}]);