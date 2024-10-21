const db = require('../db');
const { event1Handler, event2Handler, event3Handler} = require('../events-handlers/changeHandlers');

const exampleEvent = (socket, io) => {
	socket.on('event1', event1Handler(socket, db, io));
	socket.on('event2', event2Handler(socket, db, io));
	socket.on('event3', event3Handler(socket, db, io));
};

module.exports = { exampleEvent };	