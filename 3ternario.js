function valor(numero){
  if (numero > 5) {
    console.log("es mayor que 5");
  } else {
    console.log("es menor que 5");
  }
}
valor(3);

// condicion ? instruccion : instruccion;
// condicional ternario.
function valor(numero){
  var resultdo = (numero > 5) ? "es mayor que 5" : "es menor que 5";
  console.log(resultdo);
}

valor(7);
