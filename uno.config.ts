import { defineConfig, presetUno, transformerDirectives } from 'unocss';

export default defineConfig({
	presets: [presetUno()],
	shortcuts: {
		button: 'bg-white dark:bg-zinc-700 p-2 rounded-md shadow-md'
	},
	transformers: [
		transformerDirectives({
			applyVariable: ['--apply']
		})
	]
});
