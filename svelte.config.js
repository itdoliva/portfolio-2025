import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';

const config = {
	kit: { 
		adapter: adapter({
			fallback: '404.html'
		}),
		alias: {
			$routes: 'src/routes',
		},
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	},
	preprocess: [mdsvex()],
	extensions: ['.svelte', '.svx']
};

export default config;
