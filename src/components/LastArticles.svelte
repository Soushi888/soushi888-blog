<!-- JS -->
<script>
	import BlogGrid from './BlogGrid.svelte';
</script>

<!-- HTML -->
<section id='articles'>
	<h2>Derniers Articles</h2>
	<BlogGrid />
</section>

<!-- CSS -->
<style lang='scss'>
  #articles {
    background: var(--background-yellow);
    padding: var(--space) var(--marge);

    h2 {
      text-align: center;
      margin-bottom: var(--space);
      font-weight: 600;
      font-size: 2rem;
    }
  }
</style>
