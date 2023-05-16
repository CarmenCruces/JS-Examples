let jugador = {name: "Sergio Callejas", posicion: "4", esTitular: true, dorsal: 33}

for (propiedad in jugador){
  console.log(propiedad+':', eval('jugador.' + propiedad));
}
console.log(' ')
for (propiedad in jugador){
  console.log(propiedad+':', jugador[propiedad]);
}
