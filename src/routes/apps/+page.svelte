<script lang="ts">
	import * as config from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<h1>Le mie app</h1>
<p>Queste sono solo un paio delle app che ho sviluppato finora, controlla le altre <a href="https://github.com/spartacus04" target="_blank">qui!</a></p>

<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<div class="titlecontainer">
					<a href={post.slug} class="title">{post.title}</a>
					<img src={post.image} alt="icon">
				</div>
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
		width: fit-content;
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

	.titlecontainer {
		display: flex;
		align-items: stretch;
		justify-content: space-between;
		gap: 1em;
	}

	.titlecontainer img {
		image-rendering: pixelated;
		width: 64px;
		height: 64px;
		border-radius: 0;
	}
</style>
