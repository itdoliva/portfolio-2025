import { get } from "svelte/store"
import { getAllProjects } from "$lib/client/query"
import { projects, projectsLoaded, currentProject } from "$lib/stores/global"

export const ssr = false

export async function load({ route }) {

  let allProjects

  if (!get(projectsLoaded)) {
    allProjects = getAllProjects()
    allProjects.sort((a, b) => b.date - a.date)
    projects.set(allProjects)
    projectsLoaded.set(true)
  }
  else {
    allProjects = get(projects)
  }

  if (route.id === '/') {
    currentProject.set(allProjects[0])
  }
  else if (route.id.startsWith('/(project)')) {
    const slug = route.id.split('/')[2]
    const project = allProjects.find(p => p.slug === slug)

    if (project) {
      currentProject.set(project)
    }
  }

  return {
    route: route.id,
  }
}