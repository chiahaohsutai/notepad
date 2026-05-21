import { app } from '$lib/server';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ request }) => app.fetch(request);
export const POST: RequestHandler = ({ request }) => app.fetch(request);
