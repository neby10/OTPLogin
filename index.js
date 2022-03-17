// console.log("hello there");





function generate() {
    console.log("generate function was called");
}

function login() {
    let result = document.getElementById("result");
    result.style.display = "block";
    let password = document.getElementById("password");
    if (password.value === "0000") {
        result.innerHTML = "SUCCESS";
    } else {
        result.innerHTML = "TRY AGAIN";
    }
}