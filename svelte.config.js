// svelte.config.cjs
import adapter from '@sveltejs/adapter-static';
/** @type {import('@sveltejs/kit').Config} */

export default {
	kit: {
		target: '#svelte',
		adapter: adapter({
			pages: 'build/_app/pages',
			assets: 'build/_app/assets',
			fallback: '200.html'
		})
	}
};
