<script lang='ts'>
  import {afterUpdate} from 'svelte';
  import {Discussion} from '@hiveio/dhive';
  import ShowdownContent from "./ShowdownContent.svelte";

  export let post: Discussion;

  let header: HTMLDivElement;
  let formattedDate;

  afterUpdate(() => {
    const createdDate = new Date(post.created);
    formattedDate = `${createdDate.getDate()}-${createdDate.getMonth() + 1}-${createdDate.getFullYear()}`;

    const image = JSON.parse(post.json_metadata).image[0];
    header.style.backgroundImage = `url(${image})`;
  });
</script>

<article>
  <header bind:this={header}>
    <div class='texts'>
      <h1>{post.root_title}</h1>
      <h2>Publié le <br>{formattedDate}</h2>
    </div>
  </header>

  <ShowdownContent content={post.body}/>
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
