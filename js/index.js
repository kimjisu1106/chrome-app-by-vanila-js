const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting");

function onLoginSubmit(event) {
    event.preventDefault();
    const userName = loginInput.value;

}

loginForm.addEventListener("submit",onLoginSubmit)


