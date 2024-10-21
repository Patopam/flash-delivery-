import { router, socket } from '../routes.js';

export default function renderScreen4() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>You won</h1>
        <p>Your reward will be sent to your phone number</p>
        <button id="goToScreen1">Finish</button>
    `;

	document.getElementById('goToScreen1').addEventListener('click', () => {
		router.navigateTo('/');
		socket.emit('event2');
	});
}
