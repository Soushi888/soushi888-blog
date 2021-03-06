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
	published: boolean;
	createdAt: Date;
	updatedAt: Date;
}

type PostModel = {
	getAllPosts: () => Promise<Post[]>
	getPost: (slug: string) => Promise<Post>
	createPost: (post: Post) => Promise<ObjectId>
}


async function PostModel(): Promise<PostModel> {
	const dbConnection = await connectToDatabase();
	const db = dbConnection.db;
	const collection = db.collection('posts');
	await collection.createIndex([{ name: 1 }, { createdAt: 1 }, { updatedAt: 1 }]);
	await collection.createIndex({ slug: 1 }, { unique: true });

	const getAllPosts = async () => {
		return await collection.find({}, { projection: { content: 0 } })
			.toArray() as unknown as Post[];
	};

	const getPost = async (slug: string) => {
		return await collection.findOne({ slug }) as unknown as Post;
	};

	const createPost = async (post: Post) => {
		const createdDoc = await collection.insertOne(post);
		return createdDoc.insertedId;
	};


	return { getAllPosts, getPost, createPost };
}

export default PostModel;
