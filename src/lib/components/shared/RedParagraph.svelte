<script lang="ts">
	export let title: string;
	export let text: string;
	export let style: string = '';
</script>

<div {style}>
	<h1>{title}</h1>
	<p>{text}</p>
</div>

<style>
	div {
		background-color: var(--primary);
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 3rem 1rem;
	}

	h1 {
		text-shadow: 6px 6px 12px black;
		margin: 0;
		text-align: center;
	}

	p {
		margin: 0;
		margin-top: 2rem;
		max-width: 800px;
		text-align: left;
	}
</style>
