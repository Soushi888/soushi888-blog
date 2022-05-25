<!-- JS -->
<script context='module'>
	export async function load({ params }) {
		return {
			props: {
				slug: params.slug
			}
		};
	}
</script>

<script lang='ts'>
	import { onMount } from 'svelte';
	import HiveStore from '$stores/hive.store';
	// import BlogArticle from '$components/BlogArticle.svelte';
	const { post, getPost } = HiveStore;

	export let slug;

	onMount(async () => {
		await getPost(slug);
	});
</script>

<svelte:head>
	<title>Soushi888 | Blog</title>
</svelte:head>

<!-- HTML -->
<main>
	{#if $post}
		<h2>{$post.root_title}</h2>
		<p>{$post.body}</p>
	{/if}
</main>

<!-- CSS -->
<style lang='scss'>
  main {
    height: calc(var(--full-heigth) - 200px);

	h2 {
		font-size: 2rem;
	}
	}
</style>
