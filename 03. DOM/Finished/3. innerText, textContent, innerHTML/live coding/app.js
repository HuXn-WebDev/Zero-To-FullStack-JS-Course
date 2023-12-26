// innerText
// textContent
// innerHTML

const p = document.querySelector("p");
// Formatted & will not show script tag.
console.log(p.innerText);
// Not Formated and will show script tag.
console.log(p.textContent);
// Will Show All the content + HTML
console.log(p.innerHTML);

// Changing the values.
const h1 = document.querySelector("h1");
h1.innerText = "Text Changed";
h1.innerHTML = "<em>123</em>";
