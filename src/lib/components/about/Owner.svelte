<script lang="ts">
	const blah = 'blah';
</script>

<div id="wrapper">
	<img src="/mock/ownerFake.png" alt="owner" />
	<div id="owner-content">
		<h1>Sarah Capen</h1>
		<p>Owner</p>
		<p>
			Dolor ad cillum Lorem eiusmod officia ad do minim adipisicing et. Ex laborum quis deserunt sit
			aliqua anim in aliqua anim occaecat officia veniam. Laborum duis minim culpa commodo aliqua
			aliquip dolor incididunt sunt duis excepteur. Pariatur mollit in occaecat exercitation fugiat
			nulla ullamco nulla dolor laborum veniam ea. Incididunt ad do et sunt deserunt incididunt aute
			ea ullamco aute ex ex nulla. Irure sit fugiat cillum quis aliqua eiusmod non eiusmod occaecat
			labore. Occaecat proident adipisicing non qui laboris eu ipsum commodo consectetur
			exercitation anim reprehenderit mollit.
		</p>
	</div>
</div>

<style>
	h1,
	p {
		margin: 0;
	}

	h1 {
		color: var(--primary);
		text-shadow: 6px 6px 12px rgba(0, 0, 0, 0.5);
	}

	#wrapper {
		display: grid;
		grid-template: auto / 1fr auto;
		grid-gap: 2rem;
		padding: 3rem;
		background: white;
		width: 100%;
	}

	#owner-content p:first-of-type {
		margin-bottom: 1rem;
		color: var(--gray);
		font-style: italic;
	}

	@media (max-width: 900px) {
		#wrapper {
			grid-template: 1fr auto / auto;
			justify-items: center;
			padding: 3rem 0;
			height: max-content;
			width: 100%;
		}

		img {
			width: 100%;
			max-width: 300px;
		}

		#owner-content {
			padding: 1rem;
			width: 100%;
		}
	}
</style>
