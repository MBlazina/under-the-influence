import adapter from '@sveltejs/adapter-auto';
import preprocessor from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocessor({
		scss: {
			prependData: `@import './src/theme/variables.scss';`
		}
	}),
	kit: {
		adapter: adapter()
	}
};

export default config;
