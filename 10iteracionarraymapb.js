const carrito2 = ['producto1', 'producto2','producto3'];
const precio = ['124.45', '23.00', '256.50'];

carrito2.forEach((producto,indice) => {
   return ( producto + ' - ' + precio[indice]);
});


console.log('')

const resultado2 = carrito2.map((producto,indice) => {
  return ( producto + ' - ' + precio[indice]);
});

console.log(resultado2);
