import { getAllProjects } from "$lib/client/query"

export async function load({ fetch, params }) {
  const projects = getAllProjects()

  return {
    projects
  }
}