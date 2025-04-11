import { writable } from "svelte/store";

export const projectsLoaded = writable(false)
export const projects = writable([])
export const currentProject = writable(null)