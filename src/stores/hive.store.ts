import { writable } from 'svelte/store';
import type { Discussion } from '@hiveio/dhive';
import { Client, type DisqussionQuery } from '@hiveio/dhive';

const HiveStore = () => {
	const posts = writable<Discussion[]>([]);
	const post = writable<Discussion>();

	const author = 'soushi888';
	const node = 'https://api.hive.blog';
	const client = new Client(node);
	console.log('Connection to the Hive node : ', node);

	const getPosts = async () => {
		try {
			const query: DisqussionQuery = {
				tag: author,
				limit: 20
			};

			let discussions: Discussion[] = await client.database.getDiscussions('blog', query);
			discussions = discussions.filter(d => d.author === author && !JSON.parse(d.json_metadata).original_author);
			console.log(discussions.length, 'posts fetched.');
			discussions.forEach(d => {
				delete d.active_votes;
				d.json_metadata = JSON.parse(d.json_metadata);
			});

			posts.set(discussions);
		} catch (e) {
			console.error(e);
		}
	};

	const getPost = async (permalink: string) => {
		console.log('get post :', permalink);
		try {
			const content = await client.database.call('get_content', [author, permalink]);
			post.set(content);
		} catch (e) {
			console.error(e);
		}
	};

	return { posts, post, getPosts, getPost };
};

export default HiveStore();
