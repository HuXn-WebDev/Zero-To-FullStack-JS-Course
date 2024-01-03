let result = document.querySelector(".result-btn");

result.addEventListener("click", decimal);

function decimal() {
  let decimal = document.getElementById("number").value;
  let tempDecimal;
  let rem = 0;
  let binary = 0;
  let place = 1;

  tempDecimal = decimal;

  while (tempDecimal > 0) {
    rem = tempDecimal % 2;
    binary = binary + rem * place;
    tempDecimal = parseInt(tempDecimal / 2);
    place = place * 10;
  }

  const h1 = document.createElement("h1");
  h1.innerHTML = `${binary}`;

  //   h1.style.border = "2px solid black";
  //   h1.style.padding = "10px";
  //   h1.style.marign = "5px";

  const container = document.querySelector(".results-container");
  container.append(h1);
}
