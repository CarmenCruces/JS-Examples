const data = [];

const getData = () => {
     return new Promise((resolve, reject) => {
         if(data.length === 0) {
               reject(new Error('No hay datos para mostrar'));
          }
          setTimeout(() => {
               resolve(data);
          }, 1500);
})
}

async function fetchingDatos () {
     try {
          const result = await getData();
          console.log(result);
     } catch (err) {
          console.log(err.message);
     }
}

fetchingDatos();

