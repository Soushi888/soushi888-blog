import { writable } from 'svelte/store';
import type { Discussion } from "@hiveio/dhive";

const api = 'http://localhost:3000/api';

const HiveStore = () => {
	const posts = writable<Discussion[]>([]);
	const post = writable<Discussion>();

	const getPosts = async () => {
		try {
			const response = await fetch(`${api}/hive`);
			const result = await response.json();

			posts.set(result);
		} catch (e) {
			console.error(e);
		}
	};

	const getPost = async (slug: string) => {
		try {
			const response = await fetch(`${api}/hive/${slug}`);
			const result = await response.json();

			post.set(result);
		} catch (e) {
			console.error(e);
		}
	};

	return { posts, post, getPosts, getPost };
};

const posts = HiveStore();
export default posts;
