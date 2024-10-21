import { router, socket } from '../routes.js';

export default function renderScreen1() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Just 3 questions before you start</h1>
        <button id="goToScreen2">Register</button>
    `;

	document.getElementById('goToScreen2').addEventListener('click', () => {
		router.navigateTo('/Register');
	});
	document.getElementById("goToScreen2").addEventListener("click", () => {
		console.log("emited");
		socket.emit("event1");
	  });

	
}
