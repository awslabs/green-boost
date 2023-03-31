# DB

## Migrations
### File Layout
- migration-core.ts: Core logic to run migrations and print results. Depends on migration-provider.ts
- migration-handler.ts: Entrypoint for Lambda to run migrations for CloudFormation Custom Resource. Depends on migration-core.ts.
- migration-provider.ts: Defines migrations.
- migration-cli.ts: CLI to run migrations locally. Depends on migration-core.ts
### Migration CLI

### Potential Confusion About Table Schemas with Migration Files
Do not take any single migration file as the source of truth for a table schema. That table may be updated in a later migration file. Use pgAdmin to check out the schema of a table.

## DB Bastion Setup
TODO: update to use AWS Client VPN
1. Create a t2.micro EC2 instance within your db stack's vpc
1. Select Ingress subnet (not Database or Application)
1. Create security group with name including your alias opening port 22 only to your IP address
1. Create key-pair for yourself
1. Set ec2 name to something descriptive including your alias like <alias>-db-bastion
1. Add an inbound rule to the Aurora writer instance's SG to allow 5432 traffic from the *private* IP address of your ec2 instance
1. Setup an SSH Tunnel between your local machine and Amazon Aurora PostgreSQL with the command:
`ssh -i <path-to-ec2-key-pair> -fNL 5432:<aurora-writer-endpoint>:5432 ec2-user@<ec2-domain>`
1. Add AWS credentials to terminal
1. Export your DB's password in AWS Secrets Manager like: `export PGPASSWORD="DatabaseSecret123"`
1. `dbWrite` and `dbRead` defined in src/db.ts will use `PGPASSWORD` instead of IAM Signature V4

## SSH Tunneling Tip
Sometimes, the SSH tunneling process stops working but is still running on port 5432 so you cannot connect via pgAdmin or these scripts. In that case, run `ps aux | grep ssh`, find the correct process by looking for the command you ran. Then run `kill <PID>` replacing the process ID.

## Fixing Corrupted Migrations
You may run into the situation where you have created and run a migration locally from a feature branch, but meanwhile 
the main branch has been updated with a new migration that has a timestamp prior to the one in your feature branch. 
Since you have already run your migration locally, if you merge the main branch into your feature branch and try to
run the migrations again, you will get an error since the migration order is already saved to the `kysely_migration`
table and is effectively append-only. Follow these manual steps to fix the issue:
1. In `db/src/migrations/migration-provider.ts`, comment out the new migration(s) that corrupted the order
1. Migrate down to the migration prior to where the order was corrupted with `pnpm migrate to <migration-name>`
1. Delete the corrupted rows in the `kysely_migration` table 
1. In `db/src/migrations/migration-provider.ts`, uncomment the new migration(s)
1. Migrate to latest with `pnpm migrate to latest`