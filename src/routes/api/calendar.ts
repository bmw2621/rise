import type { CalendarEvent } from '$lib/types';
import type { RequestHandlerOutput } from '@sveltejs/kit';
import url from 'url';

/** @type {import('@sveltejs/kit').RequestHandler} */
export const get = async ({ request }: { request: Request }): Promise<RequestHandlerOutput> => {
	const queryParams = url.parse(request.url, true).query;
	const length: number =
		queryParams.length && !Array.isArray(queryParams.length) && parseInt(queryParams.length);
	const last3events: CalendarEvent[] = [
		{
			title: 'Title 1',
			published: new Date().toISOString(),
			summary:
				'Qui cillum do ullamco fugiat proident reprehenderit consequat minim sit labore dolore amet est adipisicing.',
			imgUrl: '/mock/event1.png',
			link: '/news/title-1'
		},
		{
			title: 'Title 2',
			published: new Date().toISOString(),
			summary:
				'Velit eu quis commodo duis tempor veniam nisi ut proident proident. Culpa est culpa anim minim magna proident nulla reprehenderit anim.',
			imgUrl: '/mock/event2.png',
			link: '/news/title-2'
		},
		{
			title: 'Title 3',
			published: new Date().toISOString(),
			summary:
				'Et ex exercitation magna incididunt minim sit proident nisi eiusmod magna cillum. Pariatur consequat esse adipisicing eu elit velit consectetur.',
			imgUrl: '/mock/event3.png',
			link: '/news/title-3'
		}
	];

	return {
		status: 200,
		body: JSON.stringify(last3events.slice(0, length))
	};
};
