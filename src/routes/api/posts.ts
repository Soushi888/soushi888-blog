import PostModel from '$models/Post';
import type { ResponseBody } from '@sveltejs/kit';

const headers = {
	'Accepts': 'application/json',
	'Content-Type': 'application/json'
};

export const get = async (): Promise<ResponseBody> => {
	try {
		const postModel = await PostModel();
		const posts = await postModel.getAllPosts();

		return {
			headers,
			status: 200,
			body: JSON.stringify(posts)
		};
	} catch (e) {
		return {
			headers,
			status: 500,
			body: JSON.stringify({ message: 'A server error occurred' })
		};
	}
};
