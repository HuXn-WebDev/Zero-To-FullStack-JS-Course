let form = document.querySelector("form");
let input = document.querySelector("input");
let todos = document.querySelector(".todos");

function getTodo(value) {
  // Creating New Elements
  let todo = document.createElement("div");
  let textEl = document.createElement("span");

  // Setting values & Styles
  textEl.innerHTML = value;

  // Appending Our Element To The DOM
  todo.appendChild(textEl);

  let closeEl = document.createElement("span");
  closeEl.innerHTML = "&times;";
  closeEl.classList.add("delete");

  // Attaching Events
  closeEl.addEventListener("click", function (e) {
    todos.removeChild(todo);
  });

  todo.appendChild(closeEl);
  todo.classList.add("todo");
  return todo;
}

form.addEventListener("submit", (e) => {
  // preventing the default behavior
  e.preventDefault();
  let value = input.value;
  if (!value.trim()) return;
  todos.appendChild(getTodo(value));
  input.value = "";
});
