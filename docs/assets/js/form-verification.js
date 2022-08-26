const userName = document.querySelector("input.username");
const email = document.querySelector("input[type='email']");
const password = document.querySelector('input[type="password"]');
const confirmPassword = document.querySelector(".confirm-password");
const usernameError = document.querySelector(".username-error");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");
const confirmPasswordError = document.querySelector(".confirm-password-error");
const sumitBtn = document.querySelector("input[type='submit']");

function validateEmail(email) {
    const regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

const verifyUsername = () => {
    if (userName.value.length > 5) {
        usernameError.textContent = "";
        usernameError.style.display = "none";
    } else if (userName.value === "") {
        usernameError.textContent = "Name is required.";
        usernameError.style.display = "block";
    } else {
        usernameError.textContent = "Name must be greater than 5 characters";
        usernameError.style.display = "block";
    }
};

const verifyEmail = () => {
    if (validateEmail(email.value)) {
        emailError.textContent = "";
        emailError.style.display = "none";
    } else if (email.value === "") {
        emailError.textContent = "Email is required.";
        emailError.style.display = "block";
    } else {
        emailError.textContent = "Email format is wrong.";
        emailError.style.display = "block";
    }
};

const verifyPassword = () => {
    if (password.value.length > 8) {
        passwordError.textContent = "";
        passwordError.style.display = "none";
    } else if (password.value === "") {
        passwordError.textContent = "Password is required.";
        passwordError.style.display = "block";
    } else {
        passwordError.textContent =
            "Password must be greater than 8 characters";
        passwordError.style.display = "block";
    }
};

const verifyConfirmPassword = () => {
    if (password.value === confirmPassword.value) {
        confirmPasswordError.textContent = "";
        confirmPasswordError.style.display = "none";
    } else {
        confirmPasswordError.textContent = "Password doesn't match";
        confirmPasswordError.style.display = "block";
    }
};

if (userName) {
    userName.addEventListener("focusout", verifyUsername);
    userName.addEventListener("input", verifyUsername);
}

if (email) {
    email.addEventListener("focusout", verifyEmail);
    email.addEventListener("input", verifyEmail);
}
if (password) {
    password.addEventListener("focusout", verifyPassword);
    password.addEventListener("input", verifyPassword);
}
if (confirmPassword) {
    confirmPassword.addEventListener("input", verifyConfirmPassword);
}
