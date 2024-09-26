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

<section class="space-y-2">
	<hgroup>
		<h2>Project</h2>
		<p>List of projects that are visible to everyone in our GitHub organization.</p>
	</hgroup>

	{#if isLoading}
		<p class="text-center">Loading...</p>
	{:else}
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			{#each repos as repo (repo.name)}
				<a
					href={repo.html_url}
					target="_blank"
					class="h-full rounded-md bg-white p-4 shadow-md space-y-4 dark:bg-zinc-700"
				>
					<h3 class="text-2xl font-semibold">{repo.name}</h3>
					<p>{repo.description}</p>
				</a>
			{/each}
		</div>
	{/if}
</section>

<style>
	a {
		--apply: 'text-black dark:text-white';
	}
</style>
