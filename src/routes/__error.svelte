<!-- JS -->
<script context='module'>
	export const load = ({ status, error }) => {
		return {
			props: {
				error,
				status
			}
		};
	};
</script>
<script>
	import '/static/styles/reset.css';
	import '/static/styles/variables.scss';

	export let error, status;
</script>

<!-- HTML -->
<main>
	<h1>Error {status}</h1>
	<p>{error.message}</p>
</main>

<!-- CSS -->
<style lang='scss'>
  main {
    h1, p {
      text-align: center;
    }

    h1 {
      font-weight: 600;
      font-size: 2.5rem;
      margin: var(--space);
    }
  }
</style>
