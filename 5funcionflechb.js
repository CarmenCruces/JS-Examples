const hello = function(a) {
  console.log('hola '+a+' mundo');
}

hello('nuevo');

const hellof = a => console.log('hola '+a+' mundo');

hellof('viejo');

//
const lista2 = [1,2,3];
const lista = lista2.map((numero)=>numero + 2);
console.log(lista);
