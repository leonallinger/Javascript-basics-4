const loginButton = document.getElementById('login_button');
loginButton.addEventListener('click', login);

function login(event) {
    event.preventDefault();
    email = document.getElementById("emailLogin").value;
    password = document.getElementById("pwdLogin").value;

    let x = localStorage.getItem("userEmail");
    let y = localStorage.getItem("userPwd");

    if (email == x && password == y) {
        alert("Login successful!");
    }
    else {
        alert("Email and password doesn't match.");
    }
}
