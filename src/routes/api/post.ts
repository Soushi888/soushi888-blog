import PostModel, { Post } from '$models/Post';
import type { Request, Response } from '@sveltejs/kit';

const headers = {
	'Accepts': 'application/json',
	'Content-Type': 'application/json'
};

export const post = async (request: Request): Promise<Response> => {
	try {
		const postModel = await PostModel();
		const post = request.body as unknown as Post;

		if (!post.name) return {
			headers,
			status: 400,
			body: JSON.stringify({ error: 'the name can\'t be empty' })
		};

		post.name.trim();
		post.slug = post.name
			.toLowerCase()
			.replaceAll(/[^a-z0-9\s]/g, '')
			.trim()
			.replaceAll(' ', '-');
		if (!post.thumbnail) post.thumbnail = '/static/images/maxim-berg-unsplash.jpg';
		if (!post.content) post.content = '';
		if (!post.excerpt) post.excerpt = '';
		if (!post.tags) post.tags = [];
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
