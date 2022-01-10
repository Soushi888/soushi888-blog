<script lang='ts'>
	import { onMount } from 'svelte';
	import PostStore from '../stores/post.store';

	onMount(async () => {
		await PostStore.getPosts();
	});
</script>

<blog-grid>
	{#each $PostStore as post}
		<blog-card>
			<h3>{post.name}</h3>
			<thumbnail>
				<a href='#articles'><img src={post.thumbnail} alt={post.name}></a>
			</thumbnail>
			<excerpt>
				<p>{post.excerpt}</p>
				<a class='read-more' href='#articles'>Lire plus...</a>
			</excerpt>
		</blog-card>
	{/each}
</blog-grid>


<style lang='scss'>
  blog-grid {
    display: grid;
    grid-template-columns:  1fr 1fr 1fr;
    gap: var(--space);

    blog-card {
			height: max-content;
			align-self: center;
      border: var(--background-dark) solid 1px;
      border-radius: 2%;
      padding: 15px var(--space);

      h3 {
        text-align: center;
        font-size: 1.4rem;
        font-weight: 600;
      }

      thumbnail {
        display: flex;
        justify-content: center;

        img {
          box-sizing: border-box;
          width: 100%;
          margin: var(--space) auto;
          border: var(--background-dark) 2px solid;
          cursor: pointer;
          transition: all 500ms ease;

          &:hover {
            filter: grayscale(0.3);
          }
        }
      }

      excerpt {
        .read-more {
					display: block;
          text-decoration: underline;
          margin-top: 10px;
          cursor: pointer;

					&:hover {
						color: var(--red);
					}
        }
      }
    }
  }
</style>
