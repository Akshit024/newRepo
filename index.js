const element = document.getElementById("my-element");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    element.classList.add("scrolled");
  } else {
    element.classList.remove("scrolled");
  }
});
