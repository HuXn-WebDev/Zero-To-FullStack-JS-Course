let menu_lis = document.querySelectorAll(".menu_Links ul li");

menu_lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    document
      .querySelectorAll(".menu_Links ul li.active")
      .forEach((activeEle) => {
        activeEle.classList.remove("active");
      });

    e.target.classList.add("active");

    document.querySelectorAll(".sections > section").forEach((section) => {
      if (e.target.textContent === section.dataset.section) {
        document.querySelectorAll(".sections .visible").forEach((ele) => {
          ele.classList.remove("visible");
        });
        section.classList.add("visible");
      }
    });
  });
});
