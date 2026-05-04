27. let, const y var
Yo usaría let cuando necesito una variable que puede cambiar durante el programa, por ejemplo el puntaje o la vida del jugador
Usaría const cuando el valor no va a cambiar, como el nombre del juego o datos que no se modifican
Se recomienda evitar var porque es más vieja y puede dar errores con el alcance de las variables, entonces hoy se usa más let y const


28. ¿Qué es el scope?
Primero se muestra “Local” porque dentro de la función hay una variable llamada nombre que solo existe ahí
Después se muestra “Global” porque es la variable que está afuera de la función
Esto pasa porque las variables tienen distintos “alcances”: la que está dentro de la función solo se usa ahí, y la de afuera se puede usar en todo el código.


29. Array y objeto
Un array lo usaría cuando necesito guardar una lista de cosas, como un inventario de un juego con espadas, pociones y llaves
Un objeto lo usaría cuando quiero representar algo con características, como un jugador que tiene nombre, vida y nivel
La diferencia es que el array es una lista de elementos y el objeto es una descripción de una sola cosa


30. Eventos en JavaScript
El elemento que escucha el evento es el botón
El evento que se está escuchando es el click
La acción que se ejecuta es mostrar un mensaje en la consola cuando el usuario hace clic
Esto se puede usar en páginas web o videojuegos para cosas como botones de jugar, atacar, abrir menús o interactuar con la interfaz