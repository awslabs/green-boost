// @ts-nocheck
import { pgSchema } from "drizzle-orm/pg-core";

// schema is created in custom migration file with {{GB_SQL_APP_ID}}_iam_user so that DB IAM
// user has access to all tables within this schema
// want to use config.appId but https://github.com/drizzle-team/drizzle-kit-mirror/issues/55
export const schema = pgSchema("{{GB_SQL_APP_ID}}");
