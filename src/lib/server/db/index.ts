import { environ } from '$lib/utils';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

/**
 * Shared Drizzle ORM database instance configured with the application's
 * PostgreSQL connection pool. Use this instance to perform all database
 * queries and transactions.
 */
export const db = drizzle({ client: new Pool({ connectionString: environ('DATABASE_URL') }) });
