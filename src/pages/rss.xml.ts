import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteConfig } from "@/site-config";

export const get = async () => {
	const posts = await getCollection("post");

	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: import.meta.env.SITE,
		items: posts.map((post) => {
			console.log(post);
			const slug = post.slug.split("/").slice(1).join("/");

			return {
				title: post.data.title,
				description: post.data.description,
				pubDate: post.data.publishDate,
				link: `${post.data.lang}/posts/${slug}`,
			};
		}),
	});
};
