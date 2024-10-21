// eventsExampleHandlers.js

const { utilFuntion1, utilFuntion2 } = require("../utils/helpers");

// Assuming db and io are required or passed in some way to be accessible
const event1Handler = (socket, db, io) => {
    return (data) => {
      io.emit("showSomething");
    };
  };

  const event2Handler = (socket, db, io) => {
    return (data) => {
      io.emit("hola");
    };
  };

  const event3Handler = (socket, db, io) => {
    return (data) => {
      io.emit("winner");
    };
  };

module.exports = {
  event1Handler,
  event2Handler,
  event3Handler,
};
