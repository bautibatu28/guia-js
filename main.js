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

const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
  const valor = input.value;

  const numero = Number(valor);
  const resultado = numero + 10;

  mensaje.textContent = "Resultado: " + resultado;
});

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
let opcion = "iniciar";

switch (opcion) {
  case "iniciar":
    console.log("Iniciando juego...");
    break;

  case "configuracion":
    console.log("Abriendo configuración");
    break;

  case "creditos":
    console.log("Mostrando créditos");
    break;

  case "salir":
    console.log("Saliendo del juego");
    break;

  default:
    console.log("Opción inválida");
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
const sumar = (a, b) => {
  return a + b;
};

console.log(sumar(10, 5));
const jugador = {
  nombre: "Luna",
  vida: 100,
  energia: 80,
  nivel: 1,
  inventario: ["espada", "poción"]
};

console.log("Nombre:", jugador.nombre);
console.log("Vida:", jugador.vida);
console.log("Energía:", jugador.energia);
console.log("Nivel:", jugador.nivel);
console.log("Inventario:", jugador.inventario);
const jugador2 = {
  nombre: "Kai",
  nivel: 1,
  monedas: 0
};

jugador2.nivel += 1;
jugador2.monedas += 50;

console.log(jugador2);
for (let i = 0; i < personajes.length; i++) {
  const p = personajes[i];

  console.log(`${p.nombre} es ${p.tipo} y está en nivel ${p.nivel}`);
}
const personajesFuertes = personajes.filter((
  personaje) => {
  return personaje.nivel >= 3;
});

console.log(personajesFuertes);
const nombres = personajes.map((personaje) => {
  return personaje.nombre;
});

console.log(nombres);
const personajeEncontrado = personajes.find((personaje) => {
  return personaje.nombre === "Kai";
});

console.log(personajeEncontrado);
const vidaTotal = personajes.reduce((acumulador, personaje) => {
  return acumulador + personaje.vida;
}, 0);

console.log(vidaTotal);

// 23. Mostrar mensaje en pantalla
mensaje.textContent = "Bienvenido a la guía de JavaScript";
mensaje.style.color = "blue";

// 24. Botón que suma puntos
let puntos = 0;
// 25. Validar nombre de usuario
boton.addEventListener("click", function () {
  const valor = input.value;

  if (valor.trim() === "") {
    mensaje.textContent = "Ingresá un nombre para continuar";
    return;
  }

  const numero = Number(valor);

  if (!isNaN(numero) && valor !== "") {
    puntos += numero + 10;
  } else {
    puntos += 10;
  }

  mensaje.textContent = "Puntos: " + puntos;

 // 26. Guardar puntaje en LocalStorage
  localStorage.setItem("jugador", JSON.stringify({
    nombre: valor,
    puntaje: puntos
  }));

  console.log(JSON.parse(localStorage.getItem("jugador")));
});
