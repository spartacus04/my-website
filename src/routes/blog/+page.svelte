<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<h1>Blog</h1>
<a href="/blog/rss.xml" target="_blank"
	><img
		alt="rss"
		src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Generic_Feed-icon.svg/1024px-Generic_Feed-icon.svg.png"
	/>RSS</a
>
<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href={post.slug} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	.posts {
		margin-top: 2em;
		display: flex;
		flex-wrap: wrap;
		gap: var(--size-7);
	}

	.post {
		border: 1px solid var(--brand);
		border-radius: 1em;
		padding: 1em;
		max-inline-size: var(--size-content-3);
	}

	.title {
		font-size: var(--font-size-fluid-3);
		text-transform: capitalize;
	}

	.date {
		color: var(--text-2);
	}

	.description {
		margin-top: var(--size-3);
	}

	a[href='/blog/rss.xml'] {
		color: inherit;
		text-decoration: none;
		display: flex;
		height: 2em;
		aspect-ratio: 1;
		gap: 0.5em;
		margin-top: 1em;
	}
</style>
