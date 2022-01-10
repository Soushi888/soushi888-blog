import { connectToDatabase } from '$lib/db';


export interface Post {
	name: string;
	slug: string;
	thumbnail: string;
	content: string;
	tags: string[];
	createdAt: Date;
	updatedAt: Date;
}

async function PostModel() {
	const dbConnection = await connectToDatabase();
	const db = dbConnection.db;
	const collection = db.collection('posts');

	const getAllPosts = async () => {
		return await collection.find().toArray();
	};


	return { getAllPosts };
}


export default PostModel;
