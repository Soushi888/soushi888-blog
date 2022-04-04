import { Client, Discussion, DisqussionQuery } from "@hiveio/dhive";
import type { Response } from "@sveltejs/kit";

const headers = {
  "Accepts": "application/json",
  "Content-Type": "application/json"
};

const author = "soushi888";

export const get = async (): Promise<Response> => {
  try {
    const client = new Client("https://api.hive.blog");
    let query: DisqussionQuery = {
      tag: "soushi888",
      limit: 20,
    };

    let posts: Discussion[] = await client.database.getDiscussions("blog", query);
    posts = posts.filter(p => p.author === author)
    console.log(posts.length, "posts fetched.");
    posts.forEach(p => {
      delete p.active_votes
      p.json_metadata = JSON.parse(p.json_metadata);
    })

    return {
      headers,
      status: 500,
      body: JSON.stringify(posts)
    };
  } catch (e) {
    return {
      headers,
      status: 500,
      body: JSON.stringify({ message: "A server error occurred" })
    };
  }
};
