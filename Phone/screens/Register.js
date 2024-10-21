import { router, socket } from '../routes.js';

export default function renderScreen2() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Amazon</h1>

        <!-- Formulario con campos de nombre, apellido y número de celular -->
        <form id="registerForm">
            <div>
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required>
            </div>
            <div>
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required>
            </div>
            <div>
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" required>
            </div>
        </form>

        <!-- Botón para cambiar de pantalla (visual) -->
        <button id="goToScreen3">Lets go</button>
    `;

	// Enviar los datos del formulario cuando se complete el campo de teléfono
	document.getElementById('phone').addEventListener('input', (e) => {
		// Verifica si el campo de teléfono está lleno
		if (e.target.value.length > 0) {
			const firstName = document.getElementById('firstName').value;
			const lastName = document.getElementById('lastName').value;
			const phone = document.getElementById('phone').value;

			// Emitir los datos por WebSocket
			console.log(`Form Data: ${firstName}, ${lastName}, ${phone}`);
			socket.emit('registerEvent', { firstName, lastName, phone });
		}
	});

    // Función para verificar si todos los campos están llenos
    function areInputsFilled() {
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const phone = document.getElementById("phone").value.trim();

        // Verificar si todos los inputs están llenos
        return firstName !== "" && lastName !== "" && phone !== "";
    }

    // Función que se activa al hacer clic en el botón si los inputs están llenos
    function activateFunction() {

        router.navigateTo('/Players');
		socket.emit('event2');
        // Aquí puedes agregar la lógica para ir a la siguiente pantalla o función
    }

    // Añadir evento al botón
    document.getElementById("goToScreen3").addEventListener("click", (event) => {
        event.preventDefault(); // Evitar el comportamiento por defecto del botón

        if (areInputsFilled()) {
            activateFunction(); // Llamar a la función si los inputs están llenos
        } else {
            alert("Por favor, llena todos los campos antes de continuar."); // Mostrar advertencia
        }
    });





}
