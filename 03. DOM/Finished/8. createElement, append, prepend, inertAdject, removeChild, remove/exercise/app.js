// createElement()
// append()
// prepend()

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
// remove()

const h1 = document.querySelector("h1");
const ul = document.querySelector("ul");
const li = document.createElement("li");
li.innerText = 6;
li.classList.add("special");
// ul.append(li);
ul.prepend(li);
ul.removeChild(li);
h1.remove();
// ul.insertAdjacentElement("beforebegin", li);
// ul.insertAdjacentElement("afterend", li);
// ul.insertAdjacentElement("beforeend", li);
ul.insertAdjacentElement("afterend", li);
console.log(li);
