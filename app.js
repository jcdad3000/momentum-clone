const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function handleLoginBtnClick(){
    console.dir(loginInput.value)
    console.log("click!!!")
}

loginButton.addEventListener("click",handleLoginBtnClick)

