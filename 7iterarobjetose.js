let equipo = [
  {name: "David Gómez", posicion: "5"},
  {name: "Sergio Callejas", posicion: "4"},
  {name: "Javier Rodríguez", posicion: "3"},
  {name: "Laura Fernández", posicion: "2"},
  {name: "Manuel Fernández", posicion: "1"}
  ]
  //recorremos por posición que ocupa en el array
  for (jugador in equipo){
      console.log(equipo[jugador]);
  }

  //recorremos directamente los objetos del array
for (jugador of equipo){
  console.log(jugador.name);
}

  