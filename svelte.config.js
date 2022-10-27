import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import * as path from "path";

/** @type {import("@sveltejs/kit").Config} */
const config = {
	preprocess: preprocess({sourceMap: true}),

	kit: {
		adapter: adapter({
			fallback: "index.html",
		}),
		vite: {
			resolve: {
				alias: {
					$models: path.resolve("src/models"),
					$components: path.resolve("src/components"),
					$stores: path.resolve("src/stores")
				}
			},
			server: {
				fs: {
					allow: [".."]
				}
			}
		}
	}
};

export default config;
