const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  // if its ' ' then put out Space or else put out whatever key is
  insert.innerHTML = `
  <div class="key">
  ${event.key === " " ? "Space" : event.key} 
  <small>event.key</small>
</div>

  <div class="key">
    ${event.keyCode}
    <small>event.keyCode</small>
  </div>

  <div class="key">
    ${event.code}
    <small>event.code</small>
  </div>
  `;
});

// keyCode is deprecated
