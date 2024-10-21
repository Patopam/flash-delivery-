// gameHandlers.js

const event1Handler = (socket, db, io) => {
	let countdownInterval;
	let timeLeft = 10; // 10 segundos

	return () => {
		// Emitir el evento 'startTimer' a todos los clientes conectados
		io.emit('startTimer', timeLeft);

		// Iniciar el temporizador
		countdownInterval = setInterval(() => {
			timeLeft--;

			// Emitir el tiempo restante a todos los clientes
			io.emit('updateTimer', timeLeft);

			// Cuando el tiempo se acabe
			if (timeLeft <= 0) {
				clearInterval(countdownInterval); // Detener el temporizador
				io.emit('timeUp'); // Notificar a los clientes que el tiempo ha terminado
			}
		}, 1000); // Actualizar cada segundo
	};
};

const event2Handler = (socket, db, io) => {
	return () => {
		// Lógica para manejar el evento 'movementCar'
	};
};

const event3Handler = (socket, db, io) => {
	return () => {
		// Lógica para manejar el evento 'notification'
	};
};

module.exports = {
	event1Handler,
	event2Handler,
	event3Handler,
};
