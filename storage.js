let registerButton = document.getElementById('register_button');
console.log(registerButton);
registerButton.addEventListener('click', register);

function register() {
    email = document.getElementById("emailRegister").value;
    password = document.getElementById("pwdRegister").value;
    confirmPassword = document.getElementById("pwdRegisterRepeat").value;

    if (password === confirmPassword) {
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPwd", password);
    }
    else {
        alert("Your password does not match.");
    }
}

const loginButton = document.getElementById('login_button');
loginButton.addEventListener('click', login);

function login(event) {
    console.log("hey");
    event.preventDefault();
    email = document.getElementById("emailLogin").value;
    password = document.getElementById("pwdLogin").value;
    let x = localStorage.getItem("userEmail");
    let y = localStorage.getItem("userPwd");
    console.log(x);

    if (email == x && password == y) {
        alert("Login successful!");
    }
    else {
        alert("Email and password doesn't match.");
    }
}*/
