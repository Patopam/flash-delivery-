import { router, socket } from "../routes.js";

export default function renderScreen2() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <h1>Justo follow the instructions</h1>
    `;

  socket.on("hola", (data) => {
    router.navigateTo('/Game');
  });
}
