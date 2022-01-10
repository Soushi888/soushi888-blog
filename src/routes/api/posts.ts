import { connectToDatabase } from '$lib/db';
import { ObjectID } from 'mongodb';
import PostModel from '$models/Post';
import post from '$models/Post';

export const get = async () => {
	try {
		let posts = await PostModel();
		posts = await posts.getAllPosts();

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
