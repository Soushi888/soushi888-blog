<script lang='ts'>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import PostStore from '$stores/post.store';

	const { slug } = $page.params;
	const { post } = PostStore;

	let header: HTMLDivElement;
	let createdDate, formatedDate;

	onMount(async () => {
		await PostStore.getPost(slug);
		header.style.backgroundImage = `url(${$post.thumbnail})`;
		createdDate = new Date($post.createdAt);
		formatedDate = `${createdDate.getDate()}-${createdDate.getMonth() + 1}-${createdDate.getFullYear()}`;
	});

</script>

<article>
	{#if ($post)}
		<header bind:this={header}>
			<texts>
				<h1>{$post.name}</h1>
				<h2>Publié le <br>{formatedDate}</h2>
			</texts>
		</header>
	{/if}
</article>


<!-- CSS -->
<style lang='scss'>
  article {
    header {
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-size: cover;
      background-position: center;
      border-bottom: 2px var(--background-dark) solid;

      texts {
        padding: calc(var(--space) * 2) calc(var(--space) * 3);
        border-radius: 25px;
        color: var(--background-light);
        background: rgba(56, 55, 55, 0.85);

        h1 {
          text-align: center;
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        h2 {
          text-align: center;
        }
      }
    }
  }
</style>
