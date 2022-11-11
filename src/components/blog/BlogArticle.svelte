<script lang='ts'>
	import { Converter } from 'showdown';
	import Autolinker from 'autolinker';
	import { afterUpdate } from 'svelte';
	import { Discussion } from '@hiveio/dhive';

	export let post: Discussion;

	let header: HTMLDivElement;
	let content: HTMLDivElement;
	let formatedDate;

	afterUpdate(async () => {
		let createdDate = new Date(post.created);
		formatedDate = `${createdDate.getDate()}-${createdDate.getMonth() + 1}-${createdDate.getFullYear()}`;

		let image = JSON.parse(post.json_metadata).image[0];
		header.style.backgroundImage = `url(${image})`;

		let converter = new Converter();
		let autolinker = new Autolinker();
		let html = converter.makeHtml(post.body);
		content.innerHTML = autolinker.link(html);
	});
</script>

<svelte:head>
	<link rel='stylesheet' href='/static/styles/showdown-content.css'>
</svelte:head>

<article>
	<header bind:this={header}>
		<div class='texts'>
			<h1>{post.root_title}</h1>
			<h2>Publié le <br>{formatedDate}</h2>
		</div>
	</header>
	<div class='showdown-content' bind:this={content}></div>
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
      background-repeat: no-repeat;
      border-bottom: 2px var(--background-dark) solid;

      .texts {
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
