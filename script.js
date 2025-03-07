let registros = [];

document.getElementById("guardar-btn").addEventListener("click", function() {
    // Obtener los valores del formulario
    const nombreMaquina = document.getElementById("nombre-maquina").value.trim();
    const pieza1 = document.getElementById("pieza1").value.trim();
    const pieza2 = document.getElementById("pieza2").value.trim();
    const pieza3 = document.getElementById("pieza3").value.trim();
    const fotoInput = document.getElementById("foto-maquina-input");

    // Verificar que todos los campos estén llenos y que se haya seleccionado una foto
    if (nombreMaquina && pieza1 && pieza2 && pieza3 && fotoInput.files.length > 0) {
        // Crear una URL para la imagen cargada
        const fotoURL = URL.createObjectURL(fotoInput.files[0]);

        // Crear el objeto con los datos
        const nuevoRegistro = {
            nombre: nombreMaquina,
            piezas: [pieza1, pieza2, pieza3],
            fotoURL: fotoURL
        };

        // Agregar el nuevo registro al array de registros
        registros.unshift(nuevoRegistro);  // Usamos unshift para añadir al principio (descendente)

        // Mostrar los registros guardados en la tabla
        mostrarRegistros();

        // Limpiar los campos del formulario
        document.getElementById("registro-form").reset();
    } else {
        alert("Por favor, completa todos los campos, incluyendo la foto.");
    }
});

// Función para mostrar los registros en la tabla
function mostrarRegistros() {
    const tablaCuerpo = document.getElementById("tabla-datos");
    tablaCuerpo.innerHTML = "";  // Limpiar la tabla antes de agregar los nuevos datos

    // Iterar sobre los registros y mostrarlos en la tabla
    registros.forEach(registro => {
        const nuevaFila = document.createElement("tr");

        // Crear las celdas con los datos del registro
        nuevaFila.innerHTML = `
            <td><img src="${registro.fotoURL}" alt="Foto de la máquina"></td>
            <td>${registro.nombre}</td>
            <td>${registro.piezas.join(", ")}</td>
        `;
        
        tablaCuerpo.appendChild(nuevaFila);
    });
}

// Función para borrar todos los registros
document.getElementById("reset-btn").addEventListener("click", function() {
    // Vaciar el array de registros
    registros = [];
    
    // Limpiar la tabla
    mostrarRegistros();
    
    // Opcional: mostrar un mensaje de éxito
    alert("Todos los registros han sido borrados.");

});
document.querySelector(".login-container form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener los valores del formulario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validar credenciales (esto es un ejemplo básico)
    if (username === "admin" && password === "1234") {
        // Redirigir a la página de inicio (index.html)
        window.location.href = "index.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});