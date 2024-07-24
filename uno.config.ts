import { defineConfig, presetUno, presetWebFonts, transformerDirectives } from 'unocss';
import transformerCompileClass from '@unocss/transformer-compile-class';

export default defineConfig({
	presets: [
		presetUno(),
		presetWebFonts({
			provider: 'bunny',
			fonts: {
				sans: 'Noto Sans',
				mono: 'Jetbrains Mono'
			}
		})
	],
	shortcuts: {
		'nav-item':
			'px-2 py-3 hover:bg-neutral-100 dark:hover:bg-neutral-600 flex items-center text-black dark:text-white no-underline'
	},
	transformers: [
		transformerCompileClass(),
		transformerDirectives({
			applyVariable: ['--apply']
		})
	]
});
