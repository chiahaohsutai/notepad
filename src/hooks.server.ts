import { auth } from '$lib/server/auth';
import { svelteKitHandler } from 'better-auth/svelte-kit';
import { building } from '$app/environment';
import { redirect, type Handle } from '@sveltejs/kit';

const PUBLIC_ROUTES = ['/signin', '/signup', '/signout'];
const SIGN_IN_ROUTES = ['/signin', '/signup'];

export const handle: Handle = async ({ event, resolve }) => {
	const session = await auth.api.getSession({
		headers: event.request.headers
	});

	if (session) {
		event.locals.session = session.session;
		event.locals.user = session.user;
	}
	const pathname = event.url.pathname.replace(/\/+$/, '');
	const isSignedIn = !!event.locals.user;

	const isPublicRoute = PUBLIC_ROUTES.includes(pathname);
	const isAuthRoute = pathname.startsWith('/api/auth');

	if (!isPublicRoute && !isAuthRoute && !isSignedIn) {
		throw redirect(303, '/signin');
	}
	const isSignInRoute = SIGN_IN_ROUTES.includes(pathname);

	if (isPublicRoute && isSignedIn && isSignInRoute) {
		throw redirect(303, '/');
	}
	return svelteKitHandler({ event, resolve, auth, building });
};
