import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';

const config = {
	kit: { 
		adapter: adapter(),
		alias: {
			$routes: 'src/routes',
		}
	},
	preprocess: [mdsvex()],
	extensions: ['.svelte', '.svx']
};

export default config;
