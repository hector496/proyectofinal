document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener los valores del formulario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validar credenciales (esto es un ejemplo básico)
    if (username === "admin" && password === "1234") {
        // Redirigir a la página de bienvenida
        window.location.href = "registro.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});