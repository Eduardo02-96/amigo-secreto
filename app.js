// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // Arreglo para almacenar los nombres de los amigos

// Función para agregar un amigo a la lista (máximo 5 participantes)
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre && !amigos.includes(nombre)) {
        if (amigos.length < 5) {
            amigos.push(nombre); // Añadimos el nombre al arreglo de amigos
            input.value = ""; // Limpiamos el campo de entrada
            mostrarListaAmigos(); // Actualizamos la lista de amigos en la interfaz
        } else {
            alert("Ya tienes 5 amigos. No se pueden añadir más.");
        }
    } else {
        alert("Por favor, ingresa un nombre válido o que no se repita.");
    }
}

// Función para mostrar la lista de amigos en la interfaz
function mostrarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista anterior

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para mezclar un arreglo de manera aleatoria (Fisher-Yates)
function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Intercambiar elementos
    }
}

// Función para sortear un solo nombre aleatorio (amigo secreto)
function sortearAmigo() {
    if (amigos.length < 5) {
        alert("Debes agregar 5 amigos para hacer el sorteo.");
        return;
    }

    // Mezclamos el arreglo de amigos
    mezclarArray(amigos);

    // Seleccionamos un amigo aleatorio
    const index = Math.floor(Math.random() * amigos.length); // Selección aleatoria
    const amigoSorteado = amigos[index]; // El amigo sorteado es el que aparece en ese índice

    // Mostrar el resultado en pantalla (solo un nombre)
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar los resultados anteriores
    const li = document.createElement("li");
    li.textContent = `¡El amigo secreto es: ${amigoSorteado}!`;
    resultado.appendChild(li);
}
