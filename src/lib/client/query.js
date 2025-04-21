export const getAllProjects = () => {
  const files = import.meta.glob('/src/routes/\\(project\\)/**/+page.svx', { eager: true })

  const projects = []

  Object.entries(files).forEach(([ path, content ], i) => {
    if (content.metadata?.hide) return

    const slugMatch = path.match(/\/([^\/]+)\/[^\/]+\.svx$/)
    const slug = slugMatch ? slugMatch[1] : null

    const project = {
      slug,
      ...content.metadata
    }

    if (content.metadata.date) {
      project.date = new Date(content.metadata.date)
    }

    project.Content = content.default

    projects.push(project)
  })

  return projects
}