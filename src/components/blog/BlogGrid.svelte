<script lang='ts'>
	import { onMount } from 'svelte';
	import HiveStore from '$stores/hive.store';

	const { posts, getPosts } = HiveStore;
	const peakDLink = 'https://peakd.com';

	onMount(async () => {
		await getPosts();
	});
</script>

<div class='blog-grid'>
	{#each $posts as post}
		<div class='blog-card'>
			<h3>{post.title}</h3>
			{#if post.json_metadata.image[0]}
				<div class='thumbnail'>
					<a href={`${peakDLink}${post.url}`} target='_blank'><img src={post.json_metadata.image[0]}
																																	 alt={post.name}></a>
				</div>
			{/if}
			<div class='excerpt'>
				<p>{post.body.split(' ', 25).join(' ')}...</p>
				<a class='read-more' target='_blank' href={`${peakDLink}${post.url}`}>Lire plus</a>
			</div>
		</div>
	{/each}
</div>


<style lang='scss'>
  .blog-grid {
    display: grid;
    grid-template-columns:  1fr 1fr 1fr;
    gap: var(--space);

    .blog-card {
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

      .thumbnail {
        display: flex;
        justify-content: center;

        img {
          box-sizing: border-box;
          width: 300px;
          margin: var(--space) auto;
          border: var(--background-dark) 2px solid;
          transition: all 500ms ease;

          &:hover {
            filter: grayscale(0.5);
          }
        }
      }

      .excerpt {
				word-break: break-word;

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
