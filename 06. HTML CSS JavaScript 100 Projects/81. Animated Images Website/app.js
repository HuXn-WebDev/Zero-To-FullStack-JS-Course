let btns = document.querySelectorAll(".btn");
let banner = document.getElementById("banner");

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    banner.src = `images/${index}.jpg`;
    animation();
    btn.classList.add("active");
  });
});

function animation() {
  banner.classList.add("zoom");

  setTimeout(() => {
    banner.classList.remove("zoom");
  }, 1000);

  for (b of btns) {
    b.classList.remove("active");
  }
}
