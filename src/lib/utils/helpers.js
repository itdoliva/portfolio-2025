function download(href, filename) {
  const a = document.createElement('a')
  a.href = href
  a.download = filename

  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

export { 
  download 
}