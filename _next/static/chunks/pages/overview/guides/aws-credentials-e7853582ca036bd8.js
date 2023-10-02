(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[928],{7038:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/overview/guides/aws-credentials",function(){return n(6369)}])},6369:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return o}});var r=n(5250),i=n(6393),a=n(2520),l=n(8306);let o=[{depth:2,value:"The Problem",id:"the-problem"},{depth:2,value:"AWS CLI",id:"aws-cli"},{depth:2,value:"Alias",id:"alias"},{depth:2,value:"direnv",id:"direnv"}];function t(e){let s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",span:"span",strong:"strong"},(0,a.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{children:"AWS Credentials"}),"\n",(0,r.jsx)(s.h2,{id:"the-problem",children:"The Problem"}),"\n",(0,r.jsxs)(s.p,{children:["The simplest way to use ",(0,r.jsx)(s.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/security-creds.html",children:"AWS Security Credentials"})," (AWS_ACCESS_KEY_ID, ...) is to copy and paste them from your provider (like IAM Identity Center) into your shell. However, what happens when you need to start a new shell process (new terminal tab) and still need your AWS credentials? You'll need to copy and paste them from your provider again \uD83D\uDE44."]}),"\n",(0,r.jsx)(s.h2,{id:"aws-cli",children:"AWS CLI"}),"\n",(0,r.jsx)(s.p,{children:"In order to persist credentials between shell processes, you can use the ~/.aws/credentials and ~/.aws/config files which are automatically recognized by the AWS CLI, SDKs, and CDK."}),"\n",(0,r.jsx)(l.UW,{type:"info",children:(0,r.jsx)(s.p,{children:"AWS recommends using temporary credentials using IAM Roles. Try to avoid using long-lived IAM User credentials."})}),"\n",(0,r.jsx)(s.p,{children:"You can persist credentials exported into your terminal with the following commands:"}),"\n",(0,r.jsx)(s.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,r.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"aws"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"configure"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"set"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"aws_access_key_id"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"$AWS_ACCESS_KEY_ID"'})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"aws"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"configure"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"set"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"aws_secret_access_key"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"$AWS_SECRET_ACCESS_KEY"'})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"aws"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"configure"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"set"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"aws_session_token"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"$AWS_SESSION_TOKEN"'})]})]})}),"\n",(0,r.jsx)(s.p,{children:"Checkout your ~/.aws/credentials and ~/.aws/config to confirm the credentials have been saved:"}),"\n",(0,r.jsx)(s.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,r.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"cat"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"~/.aws/credentials"})]})})}),"\n",(0,r.jsxs)(s.p,{children:["This works, but what if you're switching between multiple AWS accounts and want to save different sets of credentials? We need a way to separate and identify sets of credentials. This is what the ",(0,r.jsx)(s.code,{children:"AWS_PROFILE"})," environment variable is for. You can append ",(0,r.jsx)(s.code,{children:'--profile "$AWS_PROFILE"'})," to each of the previous ",(0,r.jsx)(s.code,{children:"aws configure set..."})," commands with an exported ",(0,r.jsx)(s.code,{children:"AWS_PROFILE"})," environment variable to identify sets of credentials."]}),"\n",(0,r.jsx)(s.h2,{id:"alias",children:"Alias"}),"\n",(0,r.jsxs)(s.p,{children:["To make the previous commands easier to run, you can create an alias, ",(0,r.jsx)(s.code,{children:"uac"})," (",(0,r.jsx)(s.strong,{children:"u"}),"pdate ",(0,r.jsx)(s.strong,{children:"a"}),"ws ",(0,r.jsx)(s.strong,{children:"c"}),"redentials), in your shell configuration file (.zschrc, ...) like below:"]}),"\n",(0,r.jsx)(s.pre,{"data-language":"bash","data-theme":"default",filename:".zshrc",hasCopyCode:!0,children:(0,r.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"alias"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" uac"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'("})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'  aws configure set aws_access_key_id "$AWS_ACCESS_KEY_ID" --profile "$AWS_PROFILE"'})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'  aws configure set aws_secret_access_key "$AWS_SECRET_ACCESS_KEY" --profile "$AWS_PROFILE"'})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'  aws configure set aws_session_token "$AWS_SESSION_TOKEN" --profile "$AWS_PROFILE"'})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'  echo "AWS Credentials Updated ✅"'})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:")'"})})]})}),"\n",(0,r.jsxs)(s.p,{children:["Now, with your AWS credentials and ",(0,r.jsx)(s.code,{children:"AWS_PROFILE"})," in your shell process, you can simply run ",(0,r.jsx)(s.code,{children:"uac"})," and your AWS credentials will be persisted but you'll need to ensure the ",(0,r.jsx)(s.code,{children:"AWS_PROFILE"})," environment variable is set so that AWS tools know which persisted credentials to use. This is where ",(0,r.jsx)(s.a,{href:"https://direnv.net/",children:"direnv"})," can help."]}),"\n",(0,r.jsx)(s.h2,{id:"direnv",children:"direnv"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"direnv"})," is an extension for your shell that loads and unloads environment variables in your current shell based on your current working directory. This means you can add a ",(0,r.jsx)(s.code,{children:".envrc"})," file at the root of your monorepo that looks like:"]}),"\n",(0,r.jsx)(s.pre,{"data-language":"bash","data-theme":"default",filename:".envrc",hasCopyCode:!0,children:(0,r.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" AWS_PROFILE"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"my-profile"})]})})}),"\n",(0,r.jsxs)(s.p,{children:["Then run ",(0,r.jsx)(s.span,{"data-rehype-pretty-code-fragment":"",children:(0,r.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"direnv"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"allow"})]})})})," and now ",(0,r.jsx)(s.code,{children:"AWS_PROFILE"})," will be set in any new shell process created within your monorepo. Prove this by running ",(0,r.jsx)(s.span,{"data-rehype-pretty-code-fragment":"",children:(0,r.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"printenv"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"grep"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"AWS"})]})})}),".\nYou'll notice in ",(0,r.jsx)(s.span,{"data-rehype-pretty-code-fragment":"",children:(0,r.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"gboost"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"create"})]})})})," templates, there are .envrc files already setup for you with commonly needed environment variables like ",(0,r.jsx)(s.code,{children:"AWS_PROFILE"}),". We also include DB related environment variables so you easily connect to your DB locally. You're welcome to set other environment variables you commonly need within your .envrc file."]})]})}s.default=(0,i.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,a.a)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(t,{...e})}):t(e)},pageOpts:{filePath:"src/pages/overview/guides/aws-credentials.mdx",route:"/overview/guides/aws-credentials",title:"AWS Credentials",headings:o},pageNextRoute:"/overview/guides/aws-credentials"})}},function(e){e.O(0,[393,774,888,179],function(){return e(e.s=7038)}),_N_E=e.O()}]);