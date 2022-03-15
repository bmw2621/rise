import type { Article } from '$lib/types';
import type { RequestHandlerOutput } from '@sveltejs/kit';
import url from 'url';

/** @type {import('@sveltejs/kit').RequestHandler} */
export const get = async ({ request }: { request: Request }): Promise<RequestHandlerOutput> => {
	const queryParams = url.parse(request.url, true).query;
	const length: number =
		queryParams.length && !Array.isArray(queryParams.length) && parseInt(queryParams.length);
	const last3Articles: Article[] = [
		{
			title: 'Article 1',
			published: new Date().toISOString(),
			summary:
				'Dolore incididunt et culpa sunt officia mollit commodo velit ad mollit laboris in duis.',
			imgUrl: '/mock/event3.png',
			link: '/news/article-1'
		},
		{
			title: 'Article 2',
			published: new Date().toISOString(),
			summary:
				'Enim nostrud amet consequat eiusmod laborum officia tempor pariatur incididunt dolore voluptate ut.',
			imgUrl: '/mock/event1.png',
			link: '/news/article-2'
		},
		{
			title: 'Article 3',
			published: new Date().toISOString(),
			summary: 'Id ipsum in exercitation occaecat consequat nostrud.',
			imgUrl: '/mock/event2.png',
			link: '/news/article-3'
		}
	];

	return {
		status: 200,
		body: JSON.stringify(last3Articles.slice(0, length))
	};
};
