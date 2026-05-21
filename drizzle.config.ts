/// <reference types="node" />
import { defineConfig } from 'drizzle-kit';
import assert from 'node:assert';

const DATABASE_URL = process.env.DATABASE_URL as string;
assert(DATABASE_URL, 'Environment variable DATABASE_URL not defined');

export default defineConfig({
	out: './drizzle',
	schema: './src/lib/server/db/schema.ts',
	dialect: 'postgresql',
	dbCredentials: { url: DATABASE_URL }
});
