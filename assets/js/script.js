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

// Primo esempio catch

const result = document.querySelector('#result');

function divide(num1, num2) {
	return new Promise((resolve, reject) => {
		if (num1 === 0 || num2 === 0) {
			reject(new Error('Divisione per zero!'));
			return;
		}
		resolve((result.textContent = `Risultato: ${num1 / num2}`));
	});
}

divide(7, 3).catch((err) => {
	result.textContent = err.message;
});
