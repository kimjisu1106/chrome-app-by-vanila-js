const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetingText = document.querySelector("h1#greeting");
const mainFocusForm = document.querySelector("#main-focus");
const logoutBtn = document.getElementById("logout-button");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const MAINFOCUS_KEY = "mainfocus";

function onLogout(e){
    e.preventDefault();
    mainFocusForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLogin);
    greetingText.innerText = `반가워요`;
    logoutBtn.classList.add(HIDDEN_CLASSNAME);
}

logoutBtn.addEventListener("click",onLogout);

function onLogin(e) {
  e.preventDefault();
  const username = loginInput.value;
  loginInput.value = "";
  localStorage.setItem(USERNAME_KEY,username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  logoutBtn.classList.remove(HIDDEN_CLASSNAME);
  greeting(username);
}

function appearMainFocus() {
    mainFocusForm.classList.remove(HIDDEN_CLASSNAME);
}

function greeting(username) {
    greetingText.innerText = `좋은 날이에요, ${username}.`;
    appearMainFocus();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    logoutBtn.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLogin);
} else {
    greeting(savedUsername);
    logoutBtn.classList.remove(HIDDEN_CLASSNAME);
}