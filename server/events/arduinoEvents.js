const db = require('../db');
const { event1Handler} = require('../events-handlers/arduinoHandlers');

const exampleEvent = (socket, io) => {
	socket.on('winnerOn', event1Handler(socket, db, io));
};

module.exports = { exampleEvent };
