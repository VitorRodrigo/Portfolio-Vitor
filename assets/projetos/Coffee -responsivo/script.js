  // tell the embed parent frame the height of the content
  if (window.parent && window.parent.parent){
    window.parent.parent.postMessage(["resultsFrame", {
      height: document.body.getBoundingClientRect().height,
      slug: "hLacoye3"
    }], "*")
  }

  // always overwrite window.name, in case users try to set it manually
  window.name = "result"

  $('.carousel').carousel()
  $('.carousel').carousel({
    interval: 2000
  })