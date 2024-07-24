<script lang="ts">
	import 'uno.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import { createThemeSwitcher, Theme } from 'svelte-theme-select';
	createThemeSwitcher();
</script>

<svelte:head>
	<title>Sliver Complex</title>
	<meta name="description" content="The landing site of Sliver Complex." />
	<link rel="icon" href="https://library.gxres.net/images/icons/favicon.webp" />
</svelte:head>

<div>
	<Header />
	<main class="max-w-4xl mx-auto p-4">
		<slot />
	</main>
	<Footer />
</div>

<Theme />

<style>
	:global(body) {
		--apply: 'm-0 bg-white dark:bg-neutral-800 text-black dark:text-white';
		font-family: 'Noto Sans';
	}
	:global(a) {
		--apply: 'text-sky-600 no-underline hover:underline';
	}
	:global(code) {
		--apply: 'text-red';
		font-family: 'Jetbrains Mono';
	}
</style>
