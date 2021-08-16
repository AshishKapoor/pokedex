// svelte.config.cjs
import static_adapter from '@sveltejs/adapter-static';
/** @type {import('@sveltejs/kit').Config} */

export default {
	kit: {
		target: '#svelte',
		adapter: static_adapter(),
	}
};
