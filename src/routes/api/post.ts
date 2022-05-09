import PostModel, { type Post } from '$models/Post';
import type { RequestHandlerOutput, ResponseBody } from '@sveltejs/kit';

const headers = {
	'Accepts': 'application/json',
	'Content-Type': 'application/json'
};

export const post = async (request: RequestHandlerOutput): Promise<ResponseBody> => {
	try {
		const postModel = await PostModel();
		const post = request.body as unknown as Post;

		if (!post.name) return {
			headers,
			status: 400,
			body: JSON.stringify({ error: 'the name can\'t be empty' })
		};
		post.name.trim();
		post.slug = post.slug ?? post.name
			.toLowerCase()
			.replaceAll(/[^a-z0-9\s]/g, '')
			.trim()
			.replaceAll(' ', '-');
		post.thumbnail = post.thumbnail ?? '/static/images/maxim-berg-unsplash.jpg';
		post.content = post.content ?? '';
		post.excerpt = post.excerpt ?? '';
		post.tags = post.tags ?? [];
		post.published = post.published ?? false;
		post.createdAt = new Date();
		post.updatedAt = new Date();

		post._id = await postModel.createPost(post);

		return {
			headers,
			status: 200,
			body: JSON.stringify(post)
		};
	} catch (e) {
		return {
			headers,
			status: 500,
			body: JSON.stringify({ error: e })
		};
	}
};
