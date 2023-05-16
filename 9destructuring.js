const objeto = { nombre: 'Tomas', apellido: 'Lamas', direccion: 'C/ La loma alta, 34', copo:'05120',
estudios: {
  basicos: 'ESO',
  secundarios: ['Bachiller', 'Fp2'],
  extra: 'Curso de mecanografia y taquigrafia',
}};

const {nombre, apellido, direccion, copo, estudios} = objeto;

console.log(estudios);
console.log(estudios.secundarios);

const {secundarios} = objeto.estudios;

console.log(secundarios[0])
