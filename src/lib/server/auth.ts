import { betterAuth } from 'better-auth';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';
import { mongo } from './mongo';
import { environ } from '$lib/utils';

/** Shared Better Auth client instance for Svelte applications. */
export const auth = betterAuth({
	baseURL: environ('BETTER_AUTH_URL'),
	secret: environ('BETTER_AUTH_SECRET'),
	database: mongodbAdapter(mongo().db()),
	emailAndPassword: {
		enabled: true,
		autoSignIn: false,
		requireEmailVerification: true
	}
});
