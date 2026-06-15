document.addEventListener("DOMContentLoaded", function () {

    const password = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");
    const form = document.getElementById("loginForm");
    const error = document.getElementById("error");

    togglePassword.addEventListener("click", function () {
        const isHidden = password.type === "password";
        password.type = isHidden ? "text" : "password";

        this.classList.toggle("fa-eye");
        this.classList.toggle("fa-eye-slash");
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        login();
    });

    function login() {
        const email = document.getElementById("email").value.trim();
        const pass = document.getElementById("password").value.trim();

        if (email === "aron@gmail.com" && pass === "aron2026") {
            window.location.href = "home.html";
        }
        else if (email === "jessa@gmail.com" && pass === "jessa2026") {
            window.location.href = "jhome.html";
        }
        else {
            error.textContent = "Invalid email or password";
        }
    }
});