function ejemplo(nombre, apellidos) {
  if (apellidos != undefined){
       console.log("Hola " + nombre + " " + apellidos);
  } else {
       console.log("Hola " + nombre);
  }
}

ejemplo("Manuel");
ejemplo("Pepito", "Grillo");
ejemplo("Ricardo", "corazon", "leon");
