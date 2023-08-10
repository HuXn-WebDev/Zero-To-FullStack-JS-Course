const btn = document.querySelector(".btn").addEventListener("click", render);

async function render() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response) throw Error(response.statusText);
    const data = await response.json();
    let output = document.querySelector(".all-posts");
    data.forEach((element) => {
      output.innerHTML += `
        <div>ID: ${element.id} </div>
        <div>Title: ${element.title} </div>
        <div>Body: ${element.body} </div> </br>
        <hr>
    `;
    });
  } catch (error) {
    console.log(error);
  }
}
