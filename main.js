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