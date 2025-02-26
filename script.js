// Array para almacenar los datos de las máquinas
let registros = [];

document.getElementById("guardar-btn").addEventListener("click", function() {
    // Obtener los valores del formulario
    const nombreMaquina = document.getElementById("nombre-maquina").value;
    const pieza1 = document.getElementById("pieza1").value;
    const pieza2 = document.getElementById("pieza2").value;
    const pieza3 = document.getElementById("pieza3").value;
    const fotoInput = document.getElementById("foto-maquina-input");

    // Verificar que todos los campos estén llenos
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
    const tablaCuerpo = document.getElementById("tabla-datos").getElementsByTagName("tbody")[0];
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
