# Installation
Requirements:
- [Git](https://git-scm.com/)
- [PNPM](https://pnpm.io/)
- [AWS CDK Toolkit](https://docs.aws.amazon.com/cdk/v2/guide/cli.html)
  - `pnpm add -g cdk`
- [Bootstrapped AWS Account](https://aws.amazon.com/getting-started/)
  - `cdk bootstrap aws://<account-number>/<region>`

1. Setup environment
```bash
pnpm env use --global 16
pnpm add -g gboost
```

:::info

Don't want to globally install? use: `pnpm dlx gboost ...` wherever you see `gboost`

:::

2. Scaffold your web app
```bash
gboost create # follow prompts
cd my-gb-app
pnpm i # install dependencies
```

3. Boostrap your AWS account and deploy infrastructure
```bash
cdk bootstrap aws://123456789012/us-east-1
gboost deploy-dev
# remember to acknowledge IAM changes when prompted
```

4. Visit the CloudFront URL logged by `gboost deploy-dev`