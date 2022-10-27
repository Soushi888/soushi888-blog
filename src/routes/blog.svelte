<!-- HTML -->
<script>
  import BlogGrid from "../components/blog/BlogGrid.svelte";
  import LastArticles from "../components/LastArticles.svelte";
</script>

<svelte:head>
  <title>Soushi888 | Blog</title>
</svelte:head>

<main>
  <h1>Blog</h1>
  <LastArticles/>
</main>

<!-- CSS -->
<style lang='scss'>
  main {
    min-height: calc(var(--full-heigth) - 220px);

    h1 {
      font-size: 3rem;
      font-weight: 700;
      text-align: center;
      padding: 20px;
    }
  }

</style>
