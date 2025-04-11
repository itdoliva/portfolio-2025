export const getAllProjects = () => {
  const files = import.meta.glob('/src/routes/\\(project\\)/**/+page.svx', { eager: true })

  const projects = Object.entries(files).map(([ path, content ], i) => {
    const slugMatch = path.match(/\/([^\/]+)\/[^\/]+\.svx$/)
    const slug = slugMatch ? slugMatch[1] : null

    const project = {
      slug,
      ...content.metadata
    }

    if (content.metadata.date) {
      project.date = new Date(content.metadata.date)
    }

    if (i === 0) {
      project.Content = content.default
    }

    return project
  })

  return projects
}