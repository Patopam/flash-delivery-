const db = require('../db');
const { event1Handler, event2Handler, event3Handler } = require('../events-handlers/phoneHandlers');

const exampleEvent = (socket, io) => {
	socket.on('newPlayer', event1Handler(socket, db, io));
	socket.on('Movement', event2Handler(socket, db, io));
	socket.on('notifyWinner', event3Handler(socket, db, io));
};

module.exports = { exampleEvent };
