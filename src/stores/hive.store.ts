import { writable } from 'svelte/store';
import type { Discussion } from '@hiveio/dhive';
import { Client, type DisqussionQuery } from '@hiveio/dhive';

const HiveStore = () => {
	const posts = writable<Discussion[]>([]);
	const post = writable<Discussion>();

	const client = new Client('https://api.hive.blog');
	const author = 'soushi888';

	const getPosts = async () => {
		try {
			const query: DisqussionQuery = {
				tag: author,
				limit: 20
			};

			let discussions: Discussion[] = await client.database.getDiscussions('blog', query);
			discussions = discussions.filter(p => p.author === author);
			console.log(discussions.length, 'posts fetched.');
			discussions.forEach(p => {
				delete p.active_votes;
				p.json_metadata = JSON.parse(p.json_metadata);
			});

			posts.set(discussions);
		} catch (e) {
			console.error(e);
		}
	};

	return { posts, post, getPosts };
};

const posts = HiveStore();
export default posts;
