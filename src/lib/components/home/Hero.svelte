<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import Button from '../shared/Button.svelte';
	let hero: HTMLDivElement;

	onMount(() => {
		const header = document.querySelector('header');
		const headerHeightStr = getComputedStyle(header).height;
		const headerHeight = parseInt(headerHeightStr.slice(0, headerHeightStr.length - 2));
		hero.style.height = window.innerHeight - headerHeight + 'px';
	});
</script>

<div id="hero-wrapper" bind:this={hero}>
	<div id="hero">
		{#await new Promise((r) => setTimeout(r, 100)) then _}
			<div in:fly={{ y: -200, duration: 1500 }} id="hero-content">
				<h1 id="slogan">
					<span style:color="white">Rise</span> to the Challenge
				</h1>
				<div id="cta">
					<h1>Coastal Georgia's Premier Training Facility</h1>
					<a href="/classes"
						><Button
							style={'height: auto; width: auto; padding: 1rem;'}
							label="Register For Classes"
						/></a
					>
				</div>
			</div>
		{/await}
	</div>
</div>

<style>
	#hero-wrapper {
		width: 100%;
		height: 1000px;
		background: url('/hero.jpg');
		background-size: cover;
		background-position: center;
		transition: height 1s;
		overflow: hidden;
	}

	#hero {
		width: 100%;
		height: 100%;
		background: url('heroOverlay.png');
		background-size: cover;
		background-position: center;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10vw;
		line-height: 3rem;
	}

	#hero-content {
		display: grid;
		grid-template: auto / 1fr 1fr;
		height: auto;
	}

	#slogan {
		margin: 0;
		color: var(--secondary);
		word-spacing: 9999px;
		font-size: 3rem;
		text-shadow: 10px 10px 12px black;
	}

	#cta {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
		min-width: 400px;
		height: 100%;
	}

	#cta > h1 {
		color: white;
		font-family: Raleway;
		font-size: 2rem;
		font-weight: normal;
		margin: 0;
		text-align: right;
		line-height: 2rem;
		max-width: 20rem;
		text-shadow: 10px 10px 12px black;
	}
	@media (max-width: 800px) {
		#hero-content {
			grid-template: 1fr 1fr / auto;
			grid-gap: 1.5rem;
		}

		#hero-content * {
			text-align: center;
		}

		#cta {
			align-items: center;
		}

		#cta > h1 {
			text-align: center;
			font-size: 1.5rem;
		}

		#slogan {
			font-size: 2.5rem;
			line-height: 2.4rem;
		}
	}
</style>
