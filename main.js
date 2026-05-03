//1. Crear datos de un jugador
console.log("Guía JavaScript iniciada");
const nombre = "Luna";
let edad = 18;
let vida = 100;
let puntaje = 0;
let estaActivo = true;

console.log(nombre, edad, vida, puntaje, estaActivo);
//2. Calcular puntaje final
let puntosBase = 100;
let bonus = 50;
let penalizacion = 20;
//3. Convertir texto a número
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
//4. Validar edad mínima
edad = 12; 

if (edad >= 13) {
  console.log("Puede jugar");
} else {
  console.log("No puede jugar todavía");
}
//5. Estado del jugador según vida
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
//6. Menú de opciones
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
//7. Cuenta regresiva
for (let i = 3; i >= 1; i--) {
  console.log(i);
}

console.log("¡Comienza!");
//8. Sumar puntos por rondas
puntajeTotal = 0;

for (let ronda = 1; ronda <= 5; ronda++) {
  puntajeTotal += 10;
}

console.log(puntajeTotal);
//9. Recorrer inventario
const inventario = ["espada", "poción", "llave", "escudo", "mapa"];


console.log("Primer objeto:", inventario[0]);


console.log("Último objeto:", inventario[inventario.length - 1]);

//10. Mostrar todos los objetos
console.log("Cantidad de objetos:", inventario.length);
for (let i = 0; i < inventario.length; i++) {
  console.log(inventario[i]);
}
//11. Agregar y quitar elementos
let mochila = [];


mochila.push("linterna");
mochila.push("comida");
mochila.push("mapa");


mochila.pop();


console.log(mochila);
//12. Buscar un objeto
const objetos = ["espada", "poción", "llave", "escudo"];

if (inventario.includes("llave")) {
  console.log("La puerta se abre");
} else {
  console.log("Necesitás una llave");
}
function saludarUsuario(nombre) {
  console.log("Bienvenido/a, " + nombre);
}
//13. Función saludo
saludarUsuario("Luna");
saludarUsuario("Kai");
//14. Función daño
function calcularVidaRestante(vida, danio) {
  return vida - danio;
}

let resultado = calcularVidaRestante(100, 30);
console.log(resultado);
//15. Arrow function
const sumar = (a, b) => {
  return a + b;
};

console.log(sumar(10, 5));
//16. Objeto jugador
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
//17. Modificar objeto
const jugador2 = {
  nombre: "Kai",
  nivel: 1,
  monedas: 0
};

jugador2.nivel += 1;
jugador2.monedas += 50;

console.log(jugador2);
// 18. Array de objetos
for (let i = 0; i < personajes.length; i++) {
  const p = personajes[i];

  console.log(`${p.nombre} es ${p.tipo} y está en nivel ${p.nivel}`);
}
// 19. Filter
const personajesFuertes = personajes.filter((
  personaje) => {
  return personaje.nivel >= 3;
});
// 20. Map
console.log(personajesFuertes);
const nombres = personajes.map((personaje) => {
  return personaje.nombre;
});

console.log(nombres);
// 21. Find
const personajeEncontrado = personajes.find((personaje) => {
  return personaje.nombre === "Kai";
});

console.log(personajeEncontrado);
// 22. Reduce
const vidaTotal = personajes.reduce((acumulador, personaje) => {
  return acumulador + personaje.vida;
}, 0);

console.log(vidaTotal);


mensaje.textContent = "Bienvenido a la guía de JavaScript";
mensaje.style.color = "blue";

let puntos = 0;

boton.addEventListener("click", function () {
  const valor = input.value;

  // validar nombre
  if (valor.trim() === "") {
    mensaje.textContent = "Ingresá un nombre para continuar";
    return;
  }

  const numero = Number(valor);

  // sumar puntos
  if (!isNaN(numero) && valor !== "") {
    puntos += numero + 10;
  } else {
    puntos += 10;
  }

  // mostrar puntos
  mensaje.textContent = "Puntos: " + puntos;

  // guardar en localStorage
  localStorage.setItem("jugador", JSON.stringify({
    nombre: valor,
    puntaje: puntos
  }));

  // mostrar en consola
  console.log(JSON.parse(localStorage.getItem("jugador")));
});

