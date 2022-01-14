import PostModel from '$models/Post';

const headers = {
	'Accepts': 'application/json',
	'Content-Type': 'application/json'
};

export const get = async ({params}) => {
	try {
		const postModel = await PostModel();
		const post = await postModel.getPost(params.slug)

		return {
			headers,
			status: 200,
			body: JSON.stringify(post)
		};
	} catch (e) {
		return {
			headers,
			status: 500,
			body: JSON.stringify({ message: 'A server error occurred' })
		};
	}
}
