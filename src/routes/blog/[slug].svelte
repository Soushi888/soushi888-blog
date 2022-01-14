<!-- HTML -->
<script>
	import BlogArticle from '$components/BlogArticle.svelte';
</script>

<svelte:head>
	<title>Soushi888 | Blog</title>
</svelte:head>

<main>
	<BlogArticle />
</main>

<style lang='scss'>
    main {
        height: calc(var(--full-heigth) - 200px);
    }
</style>
