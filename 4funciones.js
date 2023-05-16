// funcion declaración:
saludar('Miguel');
function saludar(elNombre) {
  console.log( `bienvenido ${elNombre}`);
}

cliente('Pedro Miralles');
// funcion expresion:
const cliente = function(nomcli) {
  console.log(`Se presenta el cliente ${nomcli}`);
}
