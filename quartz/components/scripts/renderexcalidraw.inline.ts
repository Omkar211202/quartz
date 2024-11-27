
function getUserPreferredColorScheme() {
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
  }
  function getTheme() {
    return (
      (localStorage.getItem("theme") as "light" | "dark") ??
      (getUserPreferredColorScheme() as "light" | "dark")
    )
  }
  function draw(el: any, theme: "light" | "dark") {
    if (el.localName == "blockquote") {
      let img = document.createElement("img")
      img.src = `/Excalidraw/${el.dataset.url}.${theme}.svg`
      el.replaceWith(img)
    }
    return el
  }
  function drawAll(e: any) {
    let theme = getTheme()
    document
      .querySelectorAll("blockquote[data-url$='.excalidraw']")
      .forEach((blockquote) => draw(blockquote, theme))
  }
  function redraw(img: any, targetTheme: "light" | "dark") {
    let srcParts = img.src.split(".")
    srcParts.splice(-2, 1, targetTheme)
    img.src = srcParts.join(".")
    return img
  }
  function redrawAll(e: any) {
    let targetTheme = getTheme() // NOTE: Dependent on `Darkmode` component handler already having changed this value.
    let currentTheme = targetTheme == "dark" ? "light" : "dark"
    Object.values(document.getElementsByTagName("article")[0].getElementsByTagName("img")).forEach(
      (img) => {
        if (img.src.endsWith(`.excalidraw.${currentTheme}.svg`)) {
          redraw(img, targetTheme)
        }
      },
    )
  }
  document.addEventListener("nav", (e) => {
    drawAll(e)
    const toggleSwitch = document.querySelector("#darkmode-toggle") as HTMLInputElement
    toggleSwitch.addEventListener("change", redrawAll)
    window.addCleanup(() => toggleSwitch.removeEventListener("change", redrawAll))
  })