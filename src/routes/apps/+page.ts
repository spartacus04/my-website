import type { App } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('/api/apps');
	const posts: App[] = await response.json();
	return { posts };
}
