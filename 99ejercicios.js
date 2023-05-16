// 1.- convierte estos condicionales if then encondicionales ternarios

// const control = (nombre, apellido) => {
//   if (nombre === 'Anton') {
//     if (apellido === 'Garcia') {
//       console.log('Sí te conozco');
//     } else {
//       console.log('No te conozco');
//     }
//   }
// }

// control('Anton', 'Garcia')

const control = (nombre, apellido) => {
  nombre === 'Anton' ? apellido === 'Garcia' ? console.log('Sí te conozco') : console.log('No te conozco') : undefined;
}

control('Anton', 'Garcia');


// 2.- convierte esta funcion en tipo expresion

function saludar(quien) {
    console.log( `bienvenido ${quien}`);
  }
saludar('Miguel');

// 3.- crea la funcion extraer que muestre los 9 ultimos valores segun:

//extraer(1,4,3,7,3,1,6,3,1,7,8,4,2,1)

// 4.- segun el array a1  de n elementos inferior a 6crea un nuevo array con los numeros del 1 al 9 usando el spreat opertor

//const a1=[n1,......,n]

// 5.- Dado las siguientes variables, crea un objeto que las englobe a todas y muestralo en pantalla.

let artista = 'queen';
let lp = 'inuendo';
let ventas = '35.000';
let precio = "17.30";

// 6.- Dado las siguientes variables, crea un el objeto que las englobe a todas y muestral un lp, un total de ventas de un lp, y los componentes del grupo.

let grupo = 'queen';
let componentes = ['Freddie Mercury', 'Brian May', 'Jhon Deacon', 'Roger Taylor']
let discografia = ['Queen I', 'Queen II', 'A nigth at the opera', 'Jazz', 'Sheer Heart Attack', 'A king of magic'];
let totalventas = ['Queen I - 5.343.000', 'Queen II - 5.510.00', 'A nigth at the opera - 15.705.00', 'Jazz - 4.230.00', 'Sheer Heart Attack - 9.050.00', 'A king of magic - 12.510.00'];

// 7.- Crea un objeto tipo y con el tipo crea varios objetos nuevos.

// 8.- crea un objeto vacio y crea una funcion de flecha que lo rellene 

// 9.- segun el objeto filtrar los que su valor sea superior a 240, filtrar los que tienen stock 9, buscar un modelo por precio y nombre.

const moviles = [
  { modelo: 'sanio', stock: 15, pvp: 125, ventas: 15},
  { modelo: 'nokia-23', stock: 25, pvp: 259, ventas: 45},
  { modelo: 'nokia-30', stock: 0, pvp: 100, ventas: 30},
  { modelo: 'xaomi-1030', stock: 10, pvp: 205, ventas: 30},
  { modelo: 'xaomi-0020', stock: 0, pvp: 300, ventas: 40},
  { modelo: 'xaomi-830', stock: 32, pvp: 175, ventas: 36},
]

// 10.- Haz destructurin de objeto y muestra los mantenimientos del monumento.
//      muestralos con template string "mantenimiento el x del monumento x por x"

const objetox = {
  ciudad: 'Madrid', 
  monumento: 'Cibeles', 
  añocontruccion: '1875', 
  mantenimiento: [
    {fecha: '06/01/2020', responsable: 'carmelo coton'},
    {fecha: '15/03/2020', responsable: 'pancho colate'},
    {fecha: '10/05/2020', responsable: 'angus tiado'},
  ],
}

// 11.- has un mapeo sobre el array y muestra los valores sumandole el valor 2
const valores = [1,2,3,4,5,6]
