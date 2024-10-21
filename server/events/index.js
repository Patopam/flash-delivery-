const { exampleEvent } = require("./changeEvent")

const handleEvents = (socket, io) => {
  exampleEvent(socket, io)

}

module.exports = { handleEvents }
