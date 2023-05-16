const fildata = [
  { id: '1046', nombre: 'marcos garcia', activo: true, acumulado: '1.300' },
  { id: '0061', nombre: 'maria vera', activo: true, acumulado: '750' },
  { id: '1098', nombre: 'Ramon illescas', activo: false, acumulado: '1.300' },
  { id: '0601', nombre: 'victoria abril', activo: true, acumulado: '2.750' },
  { id: '0725', nombre: 'guillrmo furiase', activo: false, acumulado: '500' },
]

let mensaje = [];
const setMensaje = (cliente) => {
  return `el client ${cliente.id} esta inactivo`;
}
const listaInactivos = (data) => {
  mensaje.push(data);
}

for (cliente of fildata) {
  if (cliente.activo === false) {
    listaInactivos(setMensaje(cliente));

  }
}

console.log(mensaje);

//console.log(setCliente());