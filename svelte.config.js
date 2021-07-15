import staticAdapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */

// hydrate the <div id="svelte"> element in src/app.html
const config = {
	kit: {
		target: '#svelte',
		adapter: staticAdapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: '200.html'
		})
	}
};

export default config;
