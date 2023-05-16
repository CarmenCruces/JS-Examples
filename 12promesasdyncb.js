const data = [
  { id: 1, title: 'Terminator', year: 2004 },
  { id: 2, title: 'Iron Man', year: 2008 },
  { id: 3, title: 'Spiderman: Homecoming', year: 2017 },
  { id: 4, title: 'Avengers: Endgame', year: 2019 },
]

const getData = () => {
  setTimeout(() => {
       return data;
  }, 1500);
}


console.log(getData()); // nos mostrara un undefined
