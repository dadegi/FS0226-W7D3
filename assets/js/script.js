// Asincrono semplice
console.log('primo'); // 1
setTimeout(() => {
	// 2
	(callback(), 3000); // 5
});

function callback() {
	console.log('terzo'); // 4
}

console.log('secondo'); // 3

// Gestione stato promise
const semaforo = document.querySelector('#semaforo');
const promiseState = document.querySelector('#promiseState');
const spinner = document.querySelector('#spinner');

function wait(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function mostra(light, text) {
	semaforo.textContent = light;
	promiseState.textContent = text;
}

mostra('🛑', 'Stop');
wait(2000)
	.then(() => mostra('🟢', 'Via!'))
	.then(() => wait(2000))
	.then(() => mostra('🟡', 'attesa..'))
	.then(() => wait(2000))
	.then(() => mostra('🛑', 'Stop'))
	.then(() => spinner.classList.add('nascondi'));
