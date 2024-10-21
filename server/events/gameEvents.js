// gameEvents.js

const { event1Handler, event2Handler, event3Handler } = require('../events-handlers/gameHandlers');

const exampleEvent = (socket, io) => {
	// Escucha el evento 'startGame' para iniciar el temporizador
	socket.on('startGame', event1Handler(socket, db, io));

	// Otros eventos
	socket.on('movementCar', event2Handler(socket, db, io));
	socket.on('notification', event3Handler(socket, db, io));
};

module.exports = { exampleEvent };
