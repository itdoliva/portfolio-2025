export const getAllProjects = () => {
  const files = import.meta.glob('/src/routes/**/+page.svx', { eager: true })

  const projects = Object.entries(files).map(([ path, content ]) => {
    const { metadata } = content

    const slugMatch = path.match(/\/([^\/]+)\/[^\/]+\.svx$/)
    const slug = slugMatch ? slugMatch[1] : null

    return {
      ...metadata,
      date: new Date(metadata.date),
      slug,
    }
  })

  return projects
}