import { redirect } from '@sveltejs/kit';
import { currentProject } from '$lib/stores/global';
import { get } from 'svelte/store';

export function load() {
  // const slug = get(currentProject).slug;

  // console.log(slug)
  // throw redirect(307, '/' + slug);
}