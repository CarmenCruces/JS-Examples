new Promise( (resolve, reject) => {
  console.log("Promesa pendiente");
  resolve();
}).then(() => {
  console.log("Promesa resuelta");
});
console.log("Hola mundo!");
