const btn = document.querySelector(".btn");
btn.addEventListener("click", makeRequest);

// ---------------------------------------
// function makeRequest() {
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => {
//       if (!res.ok) new Error(res.statusText);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data.id);
//       console.log(data.title);
//       console.log(data.body);
//     })
//     .catch((error) => console.log(error));
// }
// ---------------------------------------

// ---------------------------------------
// Rendering content to the browser
// function makeRequest() {
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => {
//       if (!res.ok) new Error(res.statusText);
//       return res.json();
//     })
//     .then((data) => {
//       document.querySelector(".id").innerHTML = data.id;
//       document.querySelector(".title").innerHTML = data.title;
//       document.querySelector(".body").innerHTML = data.body;
//     })
//     .catch((error) => console.log(error));
// }
// ---------------------------------------

// ---------------------------------------
// Rendering Multiple Data
function makeRequest() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      if (!res.ok) new Error(res.statusText);
      return res.json();
    })
    .then((data) => {
      let output = document.querySelector(".all-posts");
      data.forEach((element) => {
        output.innerHTML += `
            <div>ID: ${element.id} </div>
            <div>Title: ${element.title} </div>
            <div>Body: ${element.body} </div> </br>
            <hr>
        `;
      });
    })
    .catch((error) => console.log(error));
}
// ---------------------------------------
