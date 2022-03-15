<script lang="ts">
	import type { Article, CalendarEvent } from '$lib/types';

	export let data: Article | CalendarEvent;

	const formatDate = (d) =>
		new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
</script>

<div class="card-wrapper">
	<img src={data.imgUrl} alt={data.title} />
	<div class="card-content">
		<strong>{data.title}</strong>
		<p style:color="var(--gary)" style:font-style="italic" style:margin-bottom="0.5rem">
			{formatDate(data.published)}
		</p>
		<p>{data.summary.slice(0, 50) + '...'}</p>
	</div>
</div>

<style>
	.card-wrapper {
		background: white;
		display: grid;
		grid-template: auto / 1fr auto;
		align-items: center;
		grid-gap: 0.75rem;
		padding: 0.75rem;
		margin-bottom: 1rem;
		/* align-self: start; */
		/* height: 100%; */
	}

	.card-wrapper * {
		margin: 0;
		/* margin-bottom: 1rem; */
	}

	.card-content:last-child,
	.card-wrapper:last-child {
		margin-bottom: 0;
	}

	img {
		/* width: 100px; */
		aspect-ratio: 1;
		width: 6rem;
		align-self: start;
	}

	strong {
		color: var(--primary);
	}
</style>
