import { writable } from 'svelte/store';
import type { Post } from '$models/Post';

const api = 'http://localhost:3000/api';


const PostStore = () => {
	const { subscribe, set, update } = writable<Post[]>([]);

	const getPosts = async () => {
		try {
			const response = await fetch(`${api}/posts`);
			const result = await response.json();

			set(result);
		} catch (e) {
			console.error(e);
		}
	};

	return { subscribe, set, update, getPosts };
};

const posts = PostStore();
export default posts;
