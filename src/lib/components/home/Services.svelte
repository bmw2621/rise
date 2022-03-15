<script lang="ts">
	import Button from '$lib/components/shared/Button.svelte';

	const services: { src: string; title: string; description: string; cta: string; href: string }[] =
		[
			{
				title: 'Competitive Programs',
				src: '/images/competitive.jpg',
				description:
					'Aliquip esse incididunt veniam esse aliqua culpa eiusmod. Consectetur velit sint eu anim irure aliquip ea.',
				cta: 'View Programs',
				href: '/teams'
			},
			{
				title: 'Recreational Classes',
				src: '/images/recClass.jpg',
				description:
					'Aliquip esse incididunt veniam esse aliqua culpa eiusmod. Consectetur velit sint eu anim irure aliquip ea.',
				cta: 'View Classes',
				href: '/teams'
			},
			{
				title: 'Event Space',
				src: '/images/eventSpace.jpg',
				description:
					'Aliquip esse incididunt veniam esse aliqua culpa eiusmod. Consectetur velit sint eu anim irure aliquip ea.',
				cta: 'View Programs',
				href: '/teams'
			}
		];
</script>

<div id="card-wrapper">
	{#each services as { src, title, description, cta, href }}
		<div>
			<div
				id="card-img"
				style={`
                background: url(${src});
                background-position: center;
                background-size: cover; 
                aspect-ratio: 1;
                `}
				alt={title}
			>
				{title}
			</div>
			<p>{description}</p>
			<Button label={cta} style="height: auto; padding: 1rem" />
		</div>
	{/each}
</div>

<style>
	#card-wrapper {
		display: grid;
		grid-gap: 2rem;
		grid-template: auto / repeat(3, 1fr);
		padding: 3rem;
		height: auto;
		background: white;
	}

	#card-img {
		box-shadow: inset 0px 0px 25px 300px rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		font-weight: bold;
		font-size: 1.5rem;
		text-align: center;
	}

	@media (max-width: 900px) {
		#card-wrapper {
			grid-template: repeat(3, 1fr) / auto;
		}
	}
</style>
