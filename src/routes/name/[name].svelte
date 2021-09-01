<script context='module'>
	export const load = ({ page }) => ({ props: { name: page.params.name } });
</script>

<script>
	import { throwError } from 'svelte-preprocess/dist/modules/errors';

	export let name;

	if (name === 'Soushi') throwError('Error of the death !!!');
</script>

<h1>Hello {name}</h1>

<style>
	h1 {
			color: red;
	}
</style>
