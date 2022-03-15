<script lang="ts">
	import type { Article, CalendarEvent } from '$lib/types';
	import Card from './Card.svelte';

	export let events: CalendarEvent[];
	export let articles: Article[];
</script>

<div id="wrapper">
	<div class="calendar-section">
		<h2>Calendar</h2>
		{#each events as event}
			<Card data={event} />
		{/each}
	</div>
	<div class="calendar-section">
		<h2>News</h2>
		{#each articles as article}
			<Card data={article} />
		{/each}
	</div>
</div>

<style>
	h2 {
		color: white;
		text-shadow: 6px 6px 12px var(--secondary);
		text-align: center;
	}

	.calendar-section {
		/* display: flex;
		flex-direction: column; */
		height: 100%;
		display: grid;
		grid-template-rows: auto repeat(3, 1fr);
		grid-gap: 1rem;
	}

	#wrapper {
		background: black;
		display: grid;
		grid-template: auto / 1fr 1fr;
		grid-gap: 1rem;
		padding: 2rem;
	}

	@media (max-width: 900px) {
		#wrapper {
			grid-template: 1fr 1fr / auto;
		}
	}
</style>
