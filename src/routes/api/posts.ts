import PostModel from '$models/Post';

export const get = async () => {
	try {
		const postModel = await PostModel();
		const posts = await postModel.getAllPosts();

		return {
			body: posts
		};
	} catch (e) {
		return {
			status: 500,
			body: { message: 'A server error occurred' }
		};
	}

};
