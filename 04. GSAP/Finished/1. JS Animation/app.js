const sidebar = document.querySelector(".sidebar");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("hide");
});
