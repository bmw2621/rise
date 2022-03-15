<script lang="ts">
	export let label: string;
	export let clickHandler: (e: MouseEvent) => void | null = null;
	export let style: string | null = null;
</script>

<button on:click={clickHandler} {style}>{label}</button>

<style>
	button {
		text-align: center;
		font-size: 1rem;
		font-family: inherit;
		color: white;
		height: 100%;
		width: 100%;
		padding: 0.25rem 1rem;
		background: var(--secondary);
		border: none;
		border-radius: 4px;
	}
</style>
