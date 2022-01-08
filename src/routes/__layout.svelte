<script>
	import '../styles/variables.scss';
	import TopBar from '../components/TopBar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<TopBar />
<slot />
<Footer />

<style global lang='scss'>
  p {
    font-size: 1.3rem;
  }
</style>
