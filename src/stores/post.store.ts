import { writable } from 'svelte/store';
import type { Post } from '$models/Post';

const api = 'http://localhost:3000/api';

const PostStore = () => {
	const posts = writable<Post[]>([]);
	const post = writable<Post>();

	const getPosts = async () => {
		try {
			const response = await fetch(`${api}/posts`);
			const result = await response.json();

			posts.set(result);
		} catch (e) {
			console.error(e);
		}
	};

	const getPost = async (slug: string) => {
		try {
			const response = await fetch(`${api}/post/${slug}`);
			const result = await response.json();

			post.set(result);
		} catch (e) {
			console.error(e);
		}
	};

	return { posts, post, getPosts, getPost };
};

const posts = PostStore();
export default posts;
