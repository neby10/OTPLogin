// March 17, 2022


var otp_password;

document.getElementById("generate-submit").addEventListener('click', function(e) {
    // e.preventDefault();
    console.log("generate clicked");

    otp_password = Math.floor(Math.random() * 10000).toString();
    let otp = document.getElementById("otp-password");
    otp.innerHTML = otp_password;
})

document.getElementById("login-submit").addEventListener('click', function(e) {
    // e.preventDefault();
    console.log("button clicked");

    let result = document.getElementById("result");
    result.style.display = "block";
    let password = document.getElementById("password");
    if (password.value === otp_password) {
        result.innerHTML = "SUCCESS";
    } else {
        result.innerHTML = "TRY AGAIN";
    }
})

// document.addEventListener("keydown", function(e) {
//     if (e.key === 'Enter') {
//         alert('Enter is pressed!');
//     }
// })
