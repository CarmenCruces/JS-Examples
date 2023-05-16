const carrito = ['producto1', 'producto2','producto3'];

carrito.forEach(producto => {
  console.log(`Producto: ${producto}`);
});

console.log('')

carrito.map(producto => {
  console.log(`Producto: ${producto}`);
});
