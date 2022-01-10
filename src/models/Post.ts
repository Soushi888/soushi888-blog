import { connectToDatabase } from '$lib/db';
import type { ObjectId } from 'mongodb';


export type Post = {
	_id: ObjectId;
	name: string;
	slug: string;
	thumbnail: string;
	excerpt: string;
	content: string;
	tags: string[];
	createdAt: Date;
	updatedAt: Date;
}

type PostModel = {
	getAllPosts: () => Promise<Post[]>
	createPost: (post: Post) => Promise<ObjectId>
}


async function PostModel(): Promise<PostModel> {
	const dbConnection = await connectToDatabase();
	const db = dbConnection.db;
	const collection = db.collection('posts');

	const getAllPosts = async () => {
		return await collection.find().toArray() as unknown as Post[];
	};

	const createPost = async (post: Post) => {
		const createdDoc = await collection.insertOne(post);
		return createdDoc.insertedId;
	};


	return { getAllPosts, createPost };
}


export default PostModel;
