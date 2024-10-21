import { router, socket } from '../routes.js';

export default function renderScreen3() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Shake it till you make it</h1>
        <button id="goToScreen1">Go to Instructions</button>
    `;

	document.getElementById('goToScreen1').addEventListener('click', () => {
		router.navigateTo('/');
	});

	socket.on('winner', (data) => {
		router.navigateTo('/Message');
	});
}
