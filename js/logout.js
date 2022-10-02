const logoutBtn = document.querySelector("#logout-btn");

function onLogout() {
    localStorage.removeItem(USERNAME_KEY);
    
}

function paintLogout(){
    logoutBtn.classList.remove("hidden");
    logoutBtn.addEventListener("click",onLogout);
}

if (savedUsername === null) {

} else {
    paintLogout();
}
