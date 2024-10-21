import { router, socket } from '../routes.js';

export default function renderScreen4() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Winner</h1>
    `;

	socket.on('returnScreen1', (data) => {
		router.navigateTo('/');
	});
}
