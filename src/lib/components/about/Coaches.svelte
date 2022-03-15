<script lang="ts">
	type Coach = {
		name: string;
		imgUrl: string;
		classes: string[];
	};

	const coaches: Coach[] = [
		{ name: 'Jane Doe', imgUrl: '/mock/fake1.png', classes: ['Class1', 'Class2', 'Class3'] },
		{ name: 'John Deere', imgUrl: '/mock/fake2.png', classes: ['Class1', 'Class2', 'Class3'] },
		{ name: 'Jane Day', imgUrl: '/mock/fake3.png', classes: ['Class1', 'Class2', 'Class3'] },
		{ name: 'Jack Dorsey', imgUrl: '/mock/fake4.png', classes: ['Class1', 'Class2', 'Class3'] },
		{ name: 'Jill Dillon', imgUrl: '/mock/fake5.png', classes: ['Class1', 'Class2', 'Class3'] }
	];
</script>

<div id="wrapper">
	<h1>Coaches</h1>
	<div id="coaches">
		{#each coaches as coach}
			<div class="coach">
				<img src={coach.imgUrl} alt={coach.name} />
				<h2 style:margin="0">{coach.name}</h2>
				{#each coach.classes as c}
					<p>{c}</p>
				{/each}
			</div>
		{/each}
	</div>
</div>

<style>
	h1 {
		margin: 0;
		text-shadow: 6px 6px 12px var(--secondary);
	}

	h2 {
		text-align: center;
	}

	img {
		width: 100%;
		max-width: 275px;
	}

	p {
		color: var(--secondary);
		margin: 0;
	}

	#wrapper {
		width: 100%;
		background: black;
		color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem 1rem;
	}

	#coaches {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}

	.coach {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 1rem;
	}
</style>
