<script lang="ts">
	import 'uno.css';
	import '@unocss/reset/tailwind-compat.css';
	import { createThemeSwitcher, Theme } from 'svelte-theme-select';
	createThemeSwitcher();
</script>

<svelte:head>
	<title>Sliver Complex</title>
	<meta name="description" content="The landing site of Sliver Complex." />
	<link rel="icon" href="https://library.gxres.net/images/icons/favicon.webp" />
</svelte:head>

<div class="flex flex-col items-center justify-center p-4 min-h-svh">
	<header class="space-y-4">
		<div class="flex justify-center">
			<img
				class="rounded-full"
				width="128"
				height="128"
				src="https://library.gxres.net/images/icons/big-favicon.webp"
				alt="Sliver Complex logo"
			/>
		</div>
		<hgroup class="text-center space-y-2">
			<h1 class="text-2xl">Sliver Complex</h1>
			<p>
				Personal lab of <a target="_blank" href="https://github.com/gxres042">@gxres042</a> and
				<a target="_blank" href="https://github.com/slivermoe">@slivermoe</a>
			</p>
		</hgroup>
		<div class="flex justify-center gap-4">
			<a class="button" href="/">Index</a>
			<a class="button" href="/project">Projects</a>
			<a class="button" href="/about">About</a>
		</div>
	</header>
	<main class="mx-auto max-w-4xl p-4">
		<slot />
	</main>
	<footer class="text-center">
		<p>Copyright © 2019 - 2024 <a href="/">Sliver Complex</a>. Powered by SvelteKit.</p>
	</footer>
</div>

<Theme />

<style>
	:global(.dark) {
		color-scheme: dark;
	}
	:global(body) {
		--apply: 'bg-gradient-to-r from-indigo-50 via-sky-50 to-cyan-50 dark:from-indigo-950 dark:via-sky-950 dark:to-cyan-950';
		font-family:
			-apple-system,
			BlinkMacSystemFont,
			Segoe UI,
			system-ui,
			Roboto,
			PingFang SC,
			Hiragino Sans GB,
			Source Han Sans SC,
			Noto Sans CJK SC,
			Noto Sans SC,
			WenQuanYi Micro Hei,
			WenQuanYi Zen Hei,
			Helvetica Neue,
			Microsoft YaHei,
			Helvetica,
			Arial,
			sans-serif,
			Apple Color Emoji,
			Segoe UI Emoji,
			Segoe UI Symbol;
	}
	:global(a) {
		--apply: 'text-blue-500 no-underline hover:underline';
	}
	:global(code) {
		--apply: 'text-red';
		font-family:
			ui-monospace,
			JetBrains Mono,
			SFMono-Regular,
			Menlo,
			Monaco,
			Consolas,
			Andale Mono,
			Liberation Mono,
			Ubuntu Mono,
			Courier New,
			monospace;
	}
	:global(h1) {
		--apply: 'text-2xl';
	}
	:global(h2) {
		--apply: 'text-xl my-4 font-medium';
	}
	:gloabl(h3) {
		--apply: 'text-lg my-4';
	}
	:global(p) {
		--apply: 'text-base my-4';
	}
</style>
