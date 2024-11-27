export function registerEscapeHandler(outsideContainer: HTMLElement | null, cb: () => void) {
  if (!outsideContainer) return
  function click(this: HTMLElement, e: HTMLElementEventMap["click"]) {
    if (e.target !== this) return
    e.preventDefault()
    e.stopPropagation()
    cb()
  }

  function esc(e: HTMLElementEventMap["keydown"]) {
    if (!e.key.startsWith("Esc")) return
    e.preventDefault()
    cb()
  }

  outsideContainer?.addEventListener("click", click)
  window.addCleanup(() => outsideContainer?.removeEventListener("click", click))
  document.addEventListener("keydown", esc)
  window.addCleanup(() => document.removeEventListener("keydown", esc))
}

export function removeAllChildren(node: HTMLElement) {
  while (node.firstChild) {
    node.removeChild(node.firstChild)
  }
}

export function renderExcalidrawLinks(theme: "dark" | "light") {
  let currentTheme = theme == "dark" ? "light" : "dark"
  Object.values(document.getElementsByTagName("img")).forEach((img) => {
    if (img.src.endsWith(`.excalidraw.${currentTheme}.svg`)) {
      let srcParts = img.src.split(".")
      srcParts.splice(-2, 1, theme)
      img.src = srcParts.join(".")
    }
  })
}
export function getUserPreferredColorScheme() {
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
}
// Have SVG images in the article adhere to the correct color scheme.
document.addEventListener("nav", (e) => {
  let theme = localStorage.getItem("theme") ?? getUserPreferredColorScheme()
  Object.values(document.getElementsByTagName("article")[0].getElementsByTagName("a")).forEach(
    (a) => {
      if (a.href.endsWith(".excalidraw")) {
        let img = document.createElement("img")
        const name = a.href.split("/").slice(-1)[0]
        img.src = `/Excalidraw/${name}.${theme}.svg`
        a.replaceWith(img)
      }
    },
  )
})