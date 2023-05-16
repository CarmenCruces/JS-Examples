const Tarea = function ( nomtarea, urgencia ) {
  this.nombre = nomtarea;
  this.urgencia = urgencia;
}

const nueva = new Tarea('una', 'dos');
const tarea1 = new Tarea('tarea nueva', 'baja');
console.log(tarea1);
console.log(nueva);
  