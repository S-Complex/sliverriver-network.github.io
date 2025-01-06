<script lang="ts">
	import 'uno.css';
	import '$lib/assets/style.css';
	import Header from 'components/Header.svelte';
</script>

<svelte:head>
	<title>Sliver Complex</title>
	<meta name="description" content="The landing site of Sliver Complex." />
	<link
		rel="icon"
		type="image/webp"
		sizes="64x64"
		href="https://library.gxres.net/images/icons/favicon.webp"
	/>
	<link
		rel="apple-touch-icon"
		type="image/webp"
		sizes="128x128"
		href="https://library.gxres.net/images/icons/big-favicon.webp"
	/>
	<link rel="canonical" href="https://insli.cc" />
</svelte:head>

<div class="flex flex-col min-h-svh">
	<Header />
	<main class="flex-auto p-4 max-w-2xl mx-auto w-full">
		<slot />
	</main>
	<footer>
		<p class="text-center text-sm">
			© 2022 - {new Date().getFullYear()} <a href="/">Sliver Complex</a>. Powered by
			<a href="https://svelte.dev" target="_blank" rel="noopener noreferer">SvelteKit</a>.
		</p>
	</footer>
</div>

<style>
</style>
