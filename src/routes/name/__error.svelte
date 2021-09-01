<script context='module'>
	export const load = ({ error, status }) => {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	};
</script>
<script>
	export let title;
</script>

<h1>Problem with name. {title}</h1>
