const icon = document.querySelector(".icon");
const header = document.querySelector("header");

icon.addEventListener("click", (e) => {
  header.classList.toggle("active");
});
