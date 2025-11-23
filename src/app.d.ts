// See https://kit.svelte.dev/docs/types#app

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface Window {
		dataLayer: unknown[];
		gtag: Gtag.Gtag;
	}
}

export {};
