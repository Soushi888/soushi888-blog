<script lang="ts">
  export let content:string;

  import {afterUpdate} from "svelte";
  import {Converter} from "showdown";
  import Autolinker from "autolinker";

  afterUpdate(async () => {
    const converter = new Converter();
    const autolinker = new Autolinker();
    const html = converter.makeHtml(content);
    content = autolinker.link(html);
  });
</script>

<div class="showdown-content">
  {@html content}
</div>

<style lang="scss">
  .showdown-content {
    margin: var(--marge-sm) auto auto;
    padding-bottom: var(--marge-sm);
    width: 1400px;

    h1 {
      font-size: 2.5rem;
      margin: var(--space) auto;
    }

    h2 {
      font-size: 2rem;
      margin: calc(var(--space) / 2) auto;
    }

    p {
      line-break: auto;

      &:not(:last-child) {
        margin-bottom: var(--space);
      }
    }

    ul {
      margin-bottom: var(--space);
    }

    li {
      list-style: disc;
      margin-left: var(--space);
      font-size: 1.2rem;
    }

    img {
      display: block;
      max-width: 1200px;
      margin: var(--marge-sm) auto;
    }

    blockquote {
      margin-left: 50px;
      padding-left: 50px;
      margin-bottom: var(--space);
      border-left: var(--background-light) 5px solid;

      p:not(:last-of-type) {
        margin-bottom: var(--space);
      }
    }
  }
</style>