import {writable} from 'svelte/store';
import type {Discussion} from '@hiveio/dhive';
import {Client, type DisqussionQuery} from '@hiveio/dhive';

export const posts = writable<Discussion[]>([]);
export const post = writable<Discussion>();

export const author = 'soushi888';
export const node = 'https://api.hive.blog';
export const client = new Client(node);
console.log('Connection to the Hive node : ', node);


export const getPosts = async (): Promise<void> => {
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

export const getPost = async (permalink: string): Promise<void> => {
	console.log('get post :', permalink);
	try {
		const content = await client.database.call('get_content', [author, permalink]);
		post.set(content);
	} catch (e) {
		console.error(e);
	}
};