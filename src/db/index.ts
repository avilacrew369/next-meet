import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema/auth-schema';
import { relations } from './relations';

export const db = drizzle(process.env.DATABASE_URL!, {
  schema: {
    ...schema,
    ...relations
  }
});