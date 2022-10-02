const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const APPEAR_CLASSNAME = "appear";
const DISAPPEAR_CLASSNAME = "disappear";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `반가워요, ${username}.`;
}

function onLoginSubmit(event) {
    event.preventDefault();
    const inputUsername = loginInput.value;
    localStorage.setItem(USERNAME_KEY, inputUsername);
    loginForm.classList.add(DISAPPEAR_CLASSNAME);
    setTimeout(function() {
        loginForm.classList.add(HIDDEN_CLASSNAME);
    }, 1000);
    greeting.classList.add(APPEAR_CLASSNAME);
    setTimeout(function() {
        paintGreetings(inputUsername);
    }, 1000);
}

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}










