<script lang="ts">
	import { onMount } from 'svelte';

	interface Repo {
		name: string;
		html_url: string;
		description: string;
	}

	let repos: Repo[] = [];
	let isLoading = true;

	onMount(async () => {
		const response = await fetch('https://api.slirv.vip/org-projects');
		const data: Repo[] = await response.json();
		repos = data.map((repo) => ({
			name: repo.name,
			html_url: repo.html_url,
			description: repo.description
		}));
		isLoading = false;
	});
</script>

<hgroup>
	<h1>Project</h1>
	<p>List of projects that are visible to everyone in this lab.</p>
</hgroup>

{#if isLoading}
	<p>Loading...</p>
{:else}
	<div class=":uno: grid grid-cols-1 sm:grid-cols-2 gap-4">
		{#each repos as repo (repo.name)}
			<a href={repo.html_url}>
				<div class=":uno: px-4 py-2 shadow-md hover:shadow-lg rounded">
					<p class=":uno: text-2xl font-semibold">{repo.name}</p>
					<p>{repo.description}</p>
				</div>
			</a>
		{/each}
	</div>
{/if}
