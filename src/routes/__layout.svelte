<script>
	import '../styles/variables.scss';
	import TopBar from '../components/TopBar.svelte';
</script>

<TopBar/>
<slot/>

<style global lang='scss'>
  p {
      font-size: 1.3rem;
  }
</style>
