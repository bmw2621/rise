<script lang="ts">
	import { onMount } from 'svelte';
	import Logo from '../shared/Logo.svelte';
	import RedParagraph from '../shared/RedParagraph.svelte';
	let banner: HTMLDivElement;

	onMount(() => {
		const header = document.querySelector('header');
		const headerHeightStr = getComputedStyle(header).height;
		const headerHeight = parseInt(headerHeightStr.slice(0, headerHeightStr.length - 2));
		banner.style.minHeight = window.innerHeight - headerHeight + 'px';
	});
</script>

<div id="wrapper" bind:this={banner}>
	<div id="logo-wrapper">
		<Logo
			fillColor="white"
			style="width: 100%; max-width: 300px; margin: 2rem; filter: drop-shadow(5px 5px 21px rgba(194, 194, 194, 0.45));"
		/>
	</div>
	<RedParagraph
		style="width: 100%; height: 100%; padding: 2rem 1rem"
		title="Rise Gymnastics Academy"
		text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor iaculis dictum. Sed auctor suscipit nulla, a iaculis sem faucibus eu. Vivamus pulvinar erat sapien. Vivamus id consequat lorem. In pretium urna eu mi rutrum sollicitudin. Phasellus sit amet dapibus tellus. Duis consequat velit vel ultrices egestas. "
	/>
</div>

<style>
	#wrapper {
		background: black;
		height: 100%;
		display: grid;
		grid-template: 1fr max-content / auto;
	}

	#logo-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
	}
</style>
