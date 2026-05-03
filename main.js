console.log("Guía JavaScript iniciada");
const nombre = "Luna";
let edad = 18;
let vida = 100;
let puntaje = 0;
let estaActivo = true;

console.log(nombre, edad, vida, puntaje, estaActivo);
let puntosBase = 100;
let bonus = 50;
let penalizacion = 20;

let puntajeTotal = puntosBase + bonus - penalizacion;
console.log("Puntaje total:", puntajeTotal);
edad = 12; 

if (edad >= 13) {
  console.log("Puede jugar");
} else {
  console.log("No puede jugar todavía");
}
vida = 50;

if (vida > 70) {
  console.log("Jugador en buen estado");
} else if (vida >= 30) {
  console.log("Jugador herido");
} else if (vida >= 1) {
  console.log("Jugador en peligro");
} else if (vida === 0) {
  console.log("Game Over");
} else {
  console.log("Error: vida inválida");
}
for (let i = 3; i >= 1; i--) {
  console.log(i);
}

console.log("¡Comienza!");
puntajeTotal = 0;

for (let ronda = 1; ronda <= 5; ronda++) {
  puntajeTotal += 10; // suma 10 en cada ronda
}

console.log(puntajeTotal);
const inventario = ["espada", "poción", "llave", "escudo", "mapa"];


console.log("Primer objeto:", inventario[0]);


console.log("Último objeto:", inventario[inventario.length - 1]);


console.log("Cantidad de objetos:", inventario.length);
for (let i = 0; i < inventario.length; i++) {
  console.log(inventario[i]);
}
let mochila = [];


mochila.push("linterna");
mochila.push("comida");
mochila.push("mapa");


mochila.pop();


console.log(mochila);
const objetos = ["espada", "poción", "llave", "escudo"];

if (inventario.includes("llave")) {
  console.log("La puerta se abre");
} else {
  console.log("Necesitás una llave");
}
function saludarUsuario(nombre) {
  console.log("Bienvenido/a, " + nombre);
}
saludarUsuario("Luna");
saludarUsuario("Kai");
function calcularVidaRestante(vida, danio) {
  return vida - danio;
}

let resultado = calcularVidaRestante(100, 30);
console.log(resultado);