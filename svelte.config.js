import adapter from '@sveltejs/adapter-auto';
import path from 'path';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			experimental: {
				prebundleSvelteLibraries: true
			},
			resolve: {
				alias: {
					$lib: path.resolve('./src/lib'),
					$comp: path.resolve('./src/components')
				}
			}
		}
	}
};

export default config;
