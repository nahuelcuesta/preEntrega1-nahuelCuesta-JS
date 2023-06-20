function jugarJuego() {
  let puntaje = 0;
  let continuar = true;
  let tiro = 0;
  bienvenida();
  let comienzo = confirm("'Juego del HUEVO' Tira el dado y suma la mayor cantidad de puntos y evita el numero 1. ¿Jugamos?");

  if (comienzo) {
    while (continuar) {
      tiro += 1;
      let dado = obtenerNumeroRandom();
      if (dado === 1) {
        puntaje = 0;
        continuar = false;
        console.log("-----Tiro " + tiro + "---------");
        console.log("Dado Numero = " + dado);
        console.log("¡HUEVO En el Tiro " + tiro + "!" + " Mala suerte o ambición. Tu puntaje es 0.");
        alert("¡HUEVO En el Tiro " + tiro + "!" + " Mala suerte o ambición. Tu puntaje es 0.");
      } else {
        puntaje += dado;
        console.log("-----Tiro " + tiro + "---------");
        console.log("Dado Numero = " + dado);
        console.log("Puntaje actual = " + puntaje);
        let confirmacion = confirm("Sacaste un " + dado + ". Tu puntaje actual es " + puntaje + ". ------------------------------(Aceptar) = Volver a tirar / (Cancelar) = Plantarse");
        if (!confirmacion) {
          continuar = false;
          console.log("Bien hecho tu PUNTAJE FINAL es " + puntaje);
          alert("Bien hecho tu PUNTAJE FINAL es  " + puntaje + ".");
          document.write("<p>" + " Puntaje obtenido = " + puntaje + "<p/>");
        }
      }
    }
  } else {
    alert("Chau ORTIVA");
  }
}
//Obtener numero random entre 1 y 6
function obtenerNumeroRandom() {
  return Math.ceil(Math.random() * 6);
}
function bienvenida() {
  let bienvenida = console.log("Juego del HUEVO");
  let instruccion = console.log("Tira el dado y suma la mayor cantidad de puntos y evita el numero 1.");
}

// Iniciar el juego
jugarJuego();