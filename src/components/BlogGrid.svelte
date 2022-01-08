<script lang='ts'>
	import thumbnail from '/static/images/maxim-berg-unsplash.jpg';

	type Post = {
		name: string
		thumbnail: string
		excerpt: string
	}

	const data: Post[] = [
		{
			name: 'Post 1',
			thumbnail,
			excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda culpa delectus dolores ea esse facere impedit, inventore ipsam nisi non numquam perspiciatis possimus praesentium.'
		}
	];
</script>

<div class='BlogGrid'>
</div>


<style>
    .BlogGrid {

    }
</style>
