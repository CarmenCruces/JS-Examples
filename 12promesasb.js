let promesa = new Promise((resolve, reject) => {
  console.log('Promesa pendiente');
   setTimeout(() => {
         resolve('Promesa resulta');
   }, 2000);
   setTimeout(() => {
          reject('Promesa rechazada');
   }, 3000);
});
console.log('codigo siguiente')
promesa
   .then((respuesta) => {
         console.log('Response', respuesta);
   })
   .catch((error) => {
          console.log('Error'. Error);
   })
