const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password1 = document.querySelector(".password1");
const password2 = document.querySelector(".password2");
const submit = document.querySelector(".submit");

// MESSAGES
const usernameMessage = document.querySelector(".user-msg");
const emailMessage = document.querySelector(".email-msg");
const password1Message = document.querySelector(".password1-msg");
const password2Message = document.querySelector(".password2-msg");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (username === "" && email === "" && password1 === "" && password2 === "") {
    alert("Please fill all input fields");
  }

  if (username.value === "") {
    showMessage(usernameMessage, "Please Provide Your Name", "#FF0000");
  } else {
    showMessage(usernameMessage, "Great Name", "#4BB543");
  }

  if (email.value === "") {
    showMessage(emailMessage, "Please Provide Your Email", "#FF0000");
  } else {
    showMessage(emailMessage, "Got your email", "#4BB543");
  }

  if (password1.value === "") {
    showMessage(password1Message, "Please Provide Your Password", "#FF0000");
  } else {
    showMessage(password1Message, "Valid password", "#4BB543");
  }

  if (password2.value === "") {
    showMessage(password2Message, "Confirm Your Password", "#FF0000");
  } else if (password1.value !== password2.value) {
    showMessage(password2Message, "Passwords do not match", "#FF0000");
  } else {
    showMessage(password2Message, "Valid password", "#4BB543");
  }
});

function showMessage(element, msg, color) {
  element.style.visibility = "visible";
  element.textContent = msg;
  element.style.color = color;
  element.previousElementSibling.style.border = `2px solid ${color}`;
}
