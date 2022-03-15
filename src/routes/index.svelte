<script lang="ts" context="module">
	import Calendar from '$lib/components/home/Calendar.svelte';
	import Hero from '$lib/components/home/Hero.svelte';
	import Services from '$lib/components/home/Services.svelte';
	import RedParagraph from '$lib/components/shared/RedParagraph.svelte';
	import type { Article, CalendarEvent } from '$lib/types';

	export async function load({ params, fetch, session, stuff }) {
		const calendarResponse = await fetch('api/calendar/?length=3');
		const articleResponse = await fetch('api/articles/?length=3');
		return {
			status: calendarResponse.status && articleResponse.status,
			props: {
				events: calendarResponse.ok && (await calendarResponse.json()),
				articles: articleResponse.ok && (await articleResponse.json())
			}
		};
	}
</script>

<script lang="ts">
	export let events: CalendarEvent[];
	export let articles: Article[];
</script>

<Hero />
<RedParagraph
	title="Train to Win"
	text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor iaculis dictum. Sed auctor suscipit nulla, a iaculis sem faucibus eu. Vivamus pulvinar erat sapien. Vivamus id consequat lorem. In pretium urna eu mi rutrum sollicitudin. Phasellus sit amet dapibus tellus. Duis consequat velit vel ultrices egestas."
/>
<Services />
<Calendar {events} {articles} />
