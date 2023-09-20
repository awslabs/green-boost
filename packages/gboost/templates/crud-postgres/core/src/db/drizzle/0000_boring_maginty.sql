-- Custom SQL migration file, put you code below!  --
create schema {{GB_SQL_APP_ID}};
create role {{GB_SQL_APP_ID}}_iam_user with login;
grant rds_iam to {{GB_SQL_APP_ID}}_iam_user;
grant usage on schema {{GB_SQL_APP_ID}} to {{GB_SQL_APP_ID}}_iam_user;
-- https://gist.github.com/zaenk/2e9c1936663caae71b212f056b5dfb5f
alter default privileges in schema {{GB_SQL_APP_ID}} grant insert, update, delete, select on tables to {{GB_SQL_APP_ID}}_iam_user;