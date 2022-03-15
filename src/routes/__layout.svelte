<script lang="ts">
	import Button from '$lib/components/shared/Button.svelte';
	import Logo from '$lib/components/shared/Logo.svelte';
	import { FACEBOOK_URL, INSTAGRAM_URL, PORTAL_URL, TWITTER_URL } from '$lib/constants';
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
	import {
		faFacebookSquare,
		faInstagram,
		faTwitterSquare
	} from '@fortawesome/free-brands-svg-icons';
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	const socialLinks: { icon: IconDefinition; href: string }[] = [
		{ icon: faFacebookSquare, href: FACEBOOK_URL },
		{ icon: faInstagram, href: INSTAGRAM_URL },
		{ icon: faTwitterSquare, href: TWITTER_URL }
	];

	const siteLinks: { label: string; href: string }[] = [
		{ label: 'About', href: '/about' },
		{ label: 'Classes', href: '/classes' },
		{ label: 'Team', href: '/team' },
		{ label: 'News', href: '/news' },
		{ label: 'Resources', href: '/resources' }
	];

	let mobileNav: Omit<HTMLDivElement, 'align'>;

	const toggleMobileNav = () => {
		const { maxHeight } = mobileNav.style;
		mobileNav.style.maxHeight = maxHeight === '500px' ? '0px' : '500px';
	};
</script>

<svelte:head>
	<link rel="preload" as="image" href="/heroOverlay.png" />
	<link rel="preload" as="image" href="/hero.jpg" />
</svelte:head>

<header>
	<a
		href="/"
		on:click={() => {
			mobileNav.style.maxHeight = '0px';
		}}
		id="logo-container"
	>
		<Logo width="80px" />
	</a>

	<nav id="site-nav">
		{#each siteLinks as { label, href }}
			<a {href} tabindex={0}>{label}</a>
		{/each}
	</nav>
	<nav id="social-nav">
		{#each socialLinks as { icon, href }}
			<a {href} tabindex={0}><Fa {icon} size="2x" /></a>
		{/each}
		<a href={PORTAL_URL} tabindex={0}><Button label="Parent Portal" /></a>
	</nav>
	<button on:click={toggleMobileNav}><Fa icon={faBars} size="2x" /></button>
	<nav id="site-nav-mobile" bind:this={mobileNav}>
		{#each siteLinks as { label, href }}
			<a {href} on:click={toggleMobileNav} tabindex={0}>{label}</a>
		{/each}
		<div id="social">
			{#each socialLinks as { icon, href }}
				<a {href} tabindex={0}><Fa {icon} size="2x" /></a>
			{/each}
		</div>
		<a href={PORTAL_URL} tabindex={0}><Button label="Parent Portal" /></a>
	</nav>
</header>

<main>
	<slot />
</main>

<footer>
	<div id="business-info">
		<strong style:font-size="1.5rem">Rise Gymnastics Academy</strong>
		<p style:margin="0">7808 White Bluff Rd<br />Savannah, GA 31406<br />(912) 354-4343</p>
		<div style:display="flex" style:margin="0.75rem 0 0.25rem 0">
			{#each socialLinks as { icon, href }}
				<a {href} style:margin-left="0"><Fa {icon} size="2x" style="color: var(--secondary)" /></a>
			{/each}
		</div>
		<strong style:margin="0.75rem 0 0.25rem 0">Hours</strong>
		<p style:margin="0">Monday - Saturday • 4:00 - 8:00 pm</p>
	</div>
	<a href="https://usagym.org" style:margin="0">
		<img style:width="200px" src="usaGymnastics.png" alt="" />
	</a>
</footer>

<style>
	a {
		display: flex;
		align-items: center;
		margin: 0 0.5rem;
	}

	button {
		display: none;
		border: 0;
		background: none;
		width: fit-content;
		margin-left: 1rem;
	}

	footer {
		background: var(--primary);
		padding: 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	header {
		position: sticky;
		top: 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		justify-content: center;
		height: 100px;
		background: #eee;
		box-shadow: 0 10px 25px black;
		z-index: 100;
	}

	main {
		max-width: 1000px;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
	}

	nav {
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
	}

	#business-info {
		color: white;
		display: flex;
		flex-direction: column;
	}

	#logo-container {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		margin: 0;
	}

	#site-nav > a:hover {
		text-decoration: underline;
	}

	#site-nav-mobile {
		display: none;
		background: white;
		overflow: hidden;
		height: fit-content;
		max-height: 0px;
		position: absolute;
		top: 100px;
		transition: max-height 250ms ease-in-out;
	}

	#site-nav-mobile > div {
		display: flex;
	}

	#site-nav-mobile > * {
		margin: 1rem;
	}

	@media (max-width: 1200px) {
		#site-nav,
		#social-nav {
			font-size: 0.75rem;
		}
	}

	@media (max-width: 800px) {
		#site-nav,
		#social-nav {
			display: none;
		}

		#site-nav-mobile {
			display: inline;
		}

		button {
			display: inline;
		}

		footer {
			flex-direction: column-reverse;
		}

		footer img {
			margin-bottom: 2rem;
		}
	}
</style>
