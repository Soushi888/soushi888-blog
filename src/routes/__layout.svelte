<!-- JS -->
<script>
	import '../styles/variables.scss';
	import TopBar from '../components/TopBar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<!-- HTML -->
<TopBar />
<slot />
<Footer />

<!-- SCSS -->
<style global lang='scss'>
  p {
    font-size: 1.3rem;
  }
</style>
