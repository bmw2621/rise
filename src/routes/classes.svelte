<script lang="ts" context="module">
	import type { JRClass, JRDays } from '$lib/types';
	export const load = async ({ fetch }) => {
		const categories = await fetch(
			'https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJson?OrgID=544124'
		)
			.then((resp) => resp.json())
			.then((data) =>
				data.rows.reduce((acc, row): { [key: string]: JRClass[] } => {
					if (!acc[row.category1]) acc[row.category1] = [];
					acc[row.category1].push({ ...row });
					return acc;
				}, {})
			);

		return {
			props: {
				categories
			}
		};
	};
</script>

<script lang="ts">
	export let categories: unknown | undefined;

	const formatDays = (days: JRDays): string => {
		return Object.keys(days)
			.reduce((acc, val) => {
				if (days[val]) {
					let dayAbbrev = val.charAt(0).toUpperCase();
					if (dayAbbrev === 'S' || dayAbbrev === 'T') dayAbbrev += val.charAt(1);
					return [...acc, dayAbbrev];
				}
				return acc;
			}, [])
			.join('');
	};

	const formatDate = (startDate: string, endDate: string): string => {
		const start = startDate
			? new Date(startDate).toLocaleString('en-US', { month: 'short', day: 'numeric' })
			: '';
		const end = endDate
			? new Date(endDate).toLocaleString('en-US', { month: 'short', day: 'numeric' })
			: '';
		return `${start} - ${end}`;
	};
</script>

<h1>Classes</h1>
{#if categories}
	{#each Object.keys(categories) as category}
		{@const jsCategory = categories[category]}
		<h2>{category}</h2>
		<div class="jr-category">
			<table>
				<thead>
					<td />
					<td>Name</td>
					<td>Dates</td>
					<td>Time</td>
					<td>Days</td>
					<td>Instructor</td>
				</thead>
				<tbody>
					{#each jsCategory as jrClass}
						<tr>
							<td style:max-width="200px" style:word-break="break-word" style:font-weight="600"
								>{jrClass.name}</td
							>
							<td style:color="var(--secondary)"><a href={jrClass.online_reg_link}>Register</a></td>
							<td>{formatDate(jrClass.start_date, jrClass.end_date)}</td>
							<td>{`${jrClass.start_time}-${jrClass.end_time}`}</td>
							<td>{formatDays(jrClass.meeting_days)}</td>
							<td>{jrClass.instructors[0] || ''}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/each}
{:else}
	<h1>Loading...</h1>
{/if}

<style>
	table {
		border-collapse: collapse;
	}
	tr:nth-child(odd) {
		background: lightgray;
	}
	td {
		padding: 5px;
	}

	.jr-category,
	table {
		width: 100%;
	}

	.jr-category {
		background: white;
		margin-bottom: 2rem;
	}

	thead {
		font-weight: bold;
		color: var(--primary);
		background: #eee;
	}

	h1,
	h2 {
		width: 100%;
		text-align: center;
		/* text-shadow: 6px 6px 22px var(--primary); */
	}

	h1 {
		color: var(--primary);
		text-shadow: 6px 6px 18px black;
	}

	@media (max-width: 900px) {
		tr {
			display: flex;
			flex-direction: column;
			border: 5px solid var(--gray);
			margin-bottom: 1rem;
			padding: 0.5rem;
		}

		thead {
			display: none;
		}
	}
</style>
