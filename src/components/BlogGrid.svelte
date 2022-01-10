<script lang='ts'>
	import { onMount } from 'svelte';
	import PostStore from '../stores/post.store';

	onMount(async () => {
		await PostStore.getPosts();
	});
</script>

<div class='BlogGrid'>
	{#each $PostStore as post}
		<div class='blog-card'>
			<h3>{post.name}</h3>
			<div>
				<img src={post.thumbnail} alt={post.name}>
			</div>
			<p>{post.excerpt}</p>
		</div>
	{/each}
</div>


<style lang='scss'>
  .BlogGrid {
    display: grid;
    grid-template-columns:  1fr 1fr 1fr;
    gap: var(--space);


    .blog-card {
      border: var(--background-dark) solid 1px;
      border-radius: 2%;
			padding: 15px;

      h3 {
        text-align: center;
        font-size: 1.4rem;
				font-weight: 600;
        margin-bottom: var(--space);
      }

      div {
        display: flex;
        justify-content: center;

        img {
          box-sizing: border-box;
          width: 400px;
          margin: auto;
					border: var(--background-dark) 2px solid;
        }
      }
    }
  }
</style>
