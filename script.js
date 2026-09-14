const body = document.body
let state = true
document.getElementById("darkmode-toggle").addEventListener("click", () => {
  if (state) {
    body.id = ("dark-mode")
  }
  else {
    body.removeAttribute("id")
  }
  state = !state
})
