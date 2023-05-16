const data = [
  { id: 1, title: 'Terminator', year: 2004 },
  { id: 2, title: 'Iron Man', year: 2008 },
  { id: 3, title: 'Spiderman: Homecoming', year: 2017 },
  { id: 4, title: 'Avengers: Endgame', year: 2019 },
]

const getData = () => {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               resolve(data);
          }, 1500);
   })
   }

async function fetchingDatos () {
     const result = await getData();
     console.log(result);
}

fetchingDatos();

// para controlar un posible error
async function fetchingDatos () {
     try {
          const result = await getData();
          console.log(result);
     } catch (err) {
          console.log(err);
     }
}

fetchingDatos();
