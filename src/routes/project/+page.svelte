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

<section class="min-h-screen">
	<hgroup>
		<h1>Project</h1>
		<p>List of projects that are visible to everyone in our GitHub organization.</p>
	</hgroup>

	{#if isLoading}
		<p class="text-center">Loading...</p>
	{:else}
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
			{#each repos as repo (repo.name)}
				<a href={repo.html_url} target="_blank">
					<div class="px-6 py-4 space-y-4 shadow hover:shadow-md rounded bg-sky-50 dark:bg-sky-950">
						<div class="text-2xl font-semibold">{repo.name}</div>
						<div>{repo.description}</div>
					</div>
				</a>
			{/each}
		</div>
	{/if}
</section>

<style>
	a {
		--apply: 'text-black dark:text-white no-underline';
	}
</style>
