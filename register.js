const registerButton = document.getElementById('register_button');
registerButton.addEventListener('click', register);

function register() {
    email = document.getElementById("emailRegister").value;
    password = document.getElementById("pwdRegister").value;
    confirmPassword = document.getElementById("pwdRegisterRepeat").value;

    if (password === confirmPassword) {
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPwd", password);

        alert("You have created an account!");
    }
    else {
        alert("Your password does not match.");
    }
}