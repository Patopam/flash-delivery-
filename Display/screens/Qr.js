import { router, socket } from '../routes.js';

export default function renderScreen1() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Do it like a true champion! Do you dare?</h1>
    `;

	socket.on('showSomething', (data) => {
		router.navigateTo('/Instructions');
	});
}
