// ------------------------------------
// createElement()
// appendChild()
// append()
// prepend()
// insertBefore()

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
// remove()
// ------------------------------------

// ------------------------------------
// Creating Element
// const h1 = document.createElement("h1");
// const body = document.body;

// // Adding Text
// h1.textContent = "Hello World";

// // Attaching element to the body
// body.appendChild(h1);
// ------------------------------------

// ------------------------------------
const ul = document.querySelector("ul");

// ------------ appendChild() ------------
const newLi = document.createElement("li");
newLi.innerText = "I'm li tag";
ul.appendChild(newLi);

// ------------ insertBefore(what, where) ------------
const firstLi = document.querySelector("li");
ul.insertBefore(newLi, firstLi);

// ------------ insertAdjacentElement(where, what) ------------
const firstP = document.querySelector("p");
const i = document.createElement("i");
i.innerText = "I'm italics";
i.style.color = "skyblue";
firstP.insertAdjacentElement("beforebegin", i);
firstP.insertAdjacentElement("afterbegin", i);
firstP.insertAdjacentElement("beforeend", i);
firstP.insertAdjacentElement("afterend", i);

// ------------------ Append() ------------------
// In append method you can pass more then one element
let section = document.querySelector("section");
section.append(i, firstLi);

// ----------- Prepend() -----------
// You can still pass multiple elements if you want to, but it will push it at the top.
let newList = document.querySelector(".new-list");
let a = document.createElement("a");
a.textContent = "HuXn WebDev";
a.href = "www.youtube.com/@huxnwebdev";
newList.prepend(a);

// ----------- removeChild() -----------
newList.removeChild(a);
newList.remove();
