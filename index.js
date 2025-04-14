console.log(
	'Cada Categoría de ejercicios tiene a su derecha su posición en líneas de cod'
);
//Variables y Tipos de Datos
console.log('Variables y Tipos de Datos (4 - 13)');
let nombre = 'Karla Jiménez';
let edad = 25;
let puedoConducir = true;

console.log(nombre, typeof nombre);
console.log(edad, typeof edad);
console.log(puedoConducir, typeof puedoConducir);

//Operadores Aritméticos
console.log('Operadores Aritméticos (14 - 33)');
const numero1 = 20;
const numero2 = 40;

totalSuma = numero1 + numero2;
console.log(totalSuma);

totalResta = numero1 - numero2;
console.log(totalResta);

totalMultiplicacion = numero1 * numero2;
console.log(totalMultiplicacion);

totalDivision = numero1 / numero2;
console.log(totalDivision);

totalModulo = numero1 % numero2;
console.log(totalModulo);

//Operadores de asignación y comparación
console.log('Operadores de asignación y comparación 34 - 63');
const num1 = 15;
const num2 = 20;
const num3 = '25';

if (num1 >= num2) {
	console.log(num1 + ' >= ' + num2);
}

if (num1 <= num2) {
	console.log(num1 + ' <= ' + num2);
}

if (num1 < num3) {
	console.log(num1 + ' < ' + num3);
}

if (num3 < num2) {
	console.log(num2 + ' < ' + num2);
}

if (num3 !== num1) {
	console.log(num3 + ' !== ' + num1);
}

if (num1 === num2) {
	console.log(num1 + ' === ' + num2);
}

//Condicionales
console.log('Condicionales (64 - 137)');
const nro1 = 10;
const nro2 = 20;
const nro3 = 30;
let maximo = 0;
let minimo = 0;

if (nro1 > nro2) {
	if (nro1 > nro3) {
		maximo = nro1;
		console.log('El mayor de los 3 números es: ', maximo);
		if (nro2 > nro3) {
			minimo = nro3;
			console.log('El menor de los 3 números es: ', minimo);
		} else {
			minimo = nro2;
			console.log('El menor de los 3 números es: ', minimo);
		}
	} else {
		maximo = nro3;
		console.log('El mayor de los 3 números es: ', maximo);
		minimo = nro2;
		console.log('El menor de los 3 números es: ', minimo);
	}
} else {
	if (nro2 > nro3) {
		maximo = nro2;
		console.log('El mayor de los 3 números es: ', maximo);
		if (nro1 > nro3) {
			minimo = nro3;
			console.log('El menor de los 3 números es: ', minimo);
		} else {
			minimo = nro1;
			console.log('El menor de los 3 números es: ', minimo);
		}
	} else {
		maximo = nro3;
		console.log('El mayor de los 3 números es: ', maximo);
		minimo = nro1;
		console.log('El menor de los 3 números es: ', minimo);
	}
}

if (nro1 % 2 == 0) {
	console.log('El nro: ' + nro1 + ' es par');
} else {
	console.log('El nro: ' + nro1 + ' es impar');
}

if (nro2 % 2 == 0) {
	console.log('El nro: ' + nro2 + ' es par');
} else {
	console.log('El nro: ' + nro2 + ' es impar');
}

if (nro3 % 2 == 0) {
	console.log('El nro: ' + nro3 + ' es par');
} else {
	console.log('El nro: ' + nro3 + ' es impar');
}

if (nro1 % 5 == 0) {
	console.log('El nro: ' + nro1 + ' es múltiplo de 5');
}

if (nro2 % 5 == 0) {
	console.log('El nro: ' + nro2 + ' es múltiplo de 5');
}

if (nro3 % 5 == 0) {
	console.log('El nro: ' + nro3 + ' es múltiplo de 5');
}

//Ciclos
console.log('Ciclos (138 - 192)');
let i;
//Del 1 al 10
for (i = 1; i <= 10; i++) {
	console.log(i);
}

//Del 10 al 1
for (i = 10; i >= 1; i--) {
	console.log(i);
}

//Solo Pares
for (i = 1; i <= 10; i++) {
	if (i % 2 == 0) {
		console.log(i);
	}
}

//Solo Impares
for (i = 1; i <= 10; i++) {
	if (i % 2 !== 0) {
		console.log(i);
	}
}

//Solo Multiplos de 3
for (i = 1; i <= 10; i++) {
	if (i % 3 == 0) {
		console.log('El nro: ' + i + ' es multiplo de 3');
	}
}

//Solo Multiplos de 5
for (i = 1; i <= 10; i++) {
	if (i % 5 == 0) {
		console.log('El nro: ' + i + ' es multiplo de 5');
	}
}

//Solo Multiplos de 3 y 5
for (i = 1; i <= 10; i++) {
	if (i % 3 == 0 && i % 5 == 0) {
		console.log('El nro: ' + i + ' es multiplo de 3 y 5');
	}
}

//Solo Multiplos de 3 o 5
for (i = 1; i <= 10; i++) {
	if (i % 3 == 0 || i % 5 == 0) {
		console.log('El nro: ' + i + ' es multiplo de 3 o 5');
	}
}

//Funciones
console.log('Funciones (193 - 230)');

let palabras = 'pasar A alGun FormaTo';
function Mayusculas(frase = '') {
	return frase.toUpperCase();
}
console.log('Todo a mayúsculas: ' + Mayusculas(palabras));

function Minusculas(frase = '') {
	return frase.toLowerCase();
}
console.log('Todo a minúsculas: ' + Minusculas(palabras));

function resta(numero1, numero2) {
	return numero1 - numero2;
}
let resultadoResta = resta(100, 20);
console.log('Resta: ' + resultadoResta);

function division(numero1, numero2) {
	return numero1 / numero2;
}
let resultadoDivision = division(100, 20);
console.log('División: ' + resultadoDivision);

function multiplicacion(numero1, numero2) {
	return numero1 * numero2;
}
let respuestaMultiplicacion = multiplicacion(100, 20);
console.log('Multiplicación: ' + respuestaMultiplicacion);

let palabra = 'PARALELEPIDO';
function Tamano(frase = '') {
	return frase.length;
}
console.log('Longuitud del string: ' + Tamano(palabra));

//Arrays
console.log('Arrays (231 - 287)');
let numeros = [1, 2, 3, 4, 5];

function Suma(arreglo = []) {
	let total = 0;
	arreglo.forEach((numero) => {
		total = total + numero;
	});
	return total;
}

function Promedio(arreglo = []) {
	let total = 0;
	arreglo.forEach((numero) => {
		total = total + numero;
	});
	total = total / arreglo.length;
	return total;
}

let canciones = ['Nota', 'on & on', 'waiting', 'Mbappe'];
//Opción con ForEach
function CancionesEnMayusculas(lista = []) {
	repertorio = [];
	lista.forEach((cancion) => {
		repertorio.push(cancion.toUpperCase());
	});
	return repertorio;
}
//Opción con Map
function CancionesEnMayusculas2(lista = []) {
	return lista.map((cancion) => cancion.toUpperCase());
}

//Opción con ForEach
function NumerosPares(arreglo = []) {
	listaPares = [];
	arreglo.forEach((numero) => {
		if (numero % 2 == 0) {
			listaPares.push(numero);
		}
	});
	return listaPares;
}
//Opción con Filter
function NumerosPares2(arreglo = []) {
	return arreglo.filter((numero) => numero % 2 == 0);
}

console.log(Suma(numeros));
console.log(Promedio(numeros));
console.log('Versión ForEach: [' + CancionesEnMayusculas(canciones) + ']');
console.log('Versión Map: [' + CancionesEnMayusculas2(canciones) + ']');
console.log('Versión ForEach: [' + NumerosPares(numeros) + ']');
console.log('Versión Filter: [' + NumerosPares2(numeros) + ']');

//Objetos
console.log('Objetos (288 - 311)');

const persona = {
	nombre: 'Karla Jiménez',
	edad: 25,
	genero: 'Femenino',
};
console.log(persona);

const caja = {
	cuadernos: 3,
	lapices: 'lapices pasta',
	papel: 2,
	fotografias: 1,
	estado: 'bueno',
};

console.log(caja);
console.log(caja.cuadernos + ' ' + typeof caja.cuadernos);
console.log(caja.lapices + ' ' + typeof caja.lapices);
console.log(caja.papel + ' ' + typeof caja.papel);
console.log(caja.fotografias + ' ' + typeof caja.fotografias);
console.log(caja.estado + ' ' + typeof caja.estado);
