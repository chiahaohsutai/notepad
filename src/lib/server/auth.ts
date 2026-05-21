import { betterAuth } from 'better-auth';
import { environ } from '$lib/utils';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from './db';

/** Shared Better Auth client instance for Svelte applications. */
export const auth = betterAuth({
	baseURL: environ('BETTER_AUTH_URL'),
	secret: environ('BETTER_AUTH_SECRET'),
	database: drizzleAdapter(db, { provider: 'pg' }),
	emailAndPassword: {
		enabled: true,
		autoSignIn: false,
		requireEmailVerification: true
	}
});
