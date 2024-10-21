import { router, socket } from '../routes.js';

export default function renderScreen3() {
	const app = document.getElementById('app');
	app.innerHTML = `
		<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
		  <style>
        .caja {
            position: relative;
            width: 100%;
            height: 200px;

        }

        #carro1 {
            position: absolute;
            top: 50px; /* Ajusta según necesites */
            left: 0px; /* Inicia los carros desde la izquierda */
        }
		#carro2 {
            position: absolute;
            top: 50px; /* Ajusta según necesites */
            left: 10px; /* Inicia los carros desde la izquierda */
        }
		#casa{
		 position: absolute;
            top: 50px; /* Ajusta según necesites */
            left: 240px; /* Inicia los carros desde la izquierda */
		}
    </style>
        <h1>Game</h1>

		<div class="caja">
		<i id= "carro2" class='bx bxs-truck bx-lg' style='color:#29A7D9'  ></i>
		<i id= "carro1" class='bx bxs-truck bx-lg' style='color:#0B1B2D'  ></i>
		<i id= "casa"class='bx bxs-home bx-lg' style='color:#0B1B2D'  ></i>
		</div>

        <p id="timer"></p>
    `;

	const timerElement = document.getElementById('timer');

	function onTimerComplete() {
		router.navigateTo('/Winner');
		socket.emit('event3');
	}

	// Función para iniciar el temporizador
	function startTimer(duration) {
		let timer = duration,
			seconds;
		const interval = setInterval(() => {
			seconds = parseInt(timer % 60, 10); // Obtener los segundos restantes
			console.log(seconds + ' segundos restantes');

			// Mover los carros en función de los segundos restantes
			if (seconds % 2 === 0) {
				moveCar('carro1'); // Mover carro1 cuando los segundos son pares
			} else {
				moveCar('carro2'); // Mover carro2 cuando los segundos son impares
			}

			// Cuando el temporizador llegue a 0
			if (--timer < 1) {
				clearInterval(interval); // Detener el intervalo
				onTimerComplete(); //Llamar a la función al terminar
			}
		}, 1000); // Ejecutar cada 1 segundo
	}

	function moveCar(carId) {
		const car = document.getElementById(carId);
		let currentLeft = parseInt(window.getComputedStyle(car).left, 10) || 0;
		car.style.left = currentLeft + 10 + 'px'; // Mover el carro 10px hacia la derecha
	}

	// Iniciar el temporizador de 30 segundos
	startTimer(13);
}
