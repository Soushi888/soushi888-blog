import clientPromise from '$lib/db';

export const get = async () => {
	const dbConnection = await clientPromise;
	const db = dbConnection.db("soushi888-blog");
	const collection = db.collection('posts');

	const posts = await collection.find();

	return {
		body: await posts.toArray()
	};
};
