import { json } from '@sveltejs/kit';
import type { App } from '$lib/types';

async function getPosts() {
	let posts: App[] = [];

	const paths = import.meta.glob('/src/apps/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = `/apps/${path.split('/').at(-1)?.replace('.md', '')}`;

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<App, 'slug'>;
			const post = { ...metadata, slug } satisfies App;
			post.published && posts.push(post);
		}
	}

	posts = posts.sort((a, b) => (a.title > b.title ? 1 : -1));

	return posts;
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
