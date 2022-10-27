<!-- JS -->
<script context='module'>
  export async function load({params}) {
    return {props: {slug: params.slug}};
  }
</script>

<script lang='ts'>
  import {onMount} from 'svelte';
  import {post, getPost} from '$stores/hive.store';
  import BlogArticle from '$components/blog/BlogArticle.svelte';

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
    <BlogArticle post={$post}/>
  {:else}
    <h2 class='no-post'>Aucune publication trouvée...</h2>
  {/if}
</main>

<!-- CSS -->
<style lang='scss'>
  main {
    min-height: calc(var(--full-heigth) - 200px);

    .no-post {
      text-align: center;
      font-size: 2.5rem;
      font-weight: 600;
      padding-top: var(--space);
    }
  }
</style>
