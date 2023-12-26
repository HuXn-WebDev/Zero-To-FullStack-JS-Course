document.getElementById("btn").addEventListener("click", () => {
  // Getting Elements From The DOM
  let num1 = document.querySelector(".num1").value;
  let num2 = document.querySelector(".num2").value;
  let result = document.querySelector(".result");
  let oprator = document.getElementById("selectOp").value;

  switch (oprator) {
    case "plus":
      result.innerHTML = +num1 + +num2;
      break;
    case "min":
      result.innerHTML = +num1 - +num2;
      break;
    case "dev":
      result.innerHTML = +num1 / +num2;
      break;
    case "multi":
      result.innerHTML = +num1 * +num2;
  }
});
