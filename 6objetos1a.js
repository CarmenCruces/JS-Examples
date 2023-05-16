let nombre = 'Tomas Garcia';
let profesion = 'Metre de sala';
let edad = 25;
console.log( nombre );
console.log( profesion );
console.log( edad );

const otro = {
  uno: 1,
  dos: 2,
  tres: {
    a: 'a',
    b: 'b'
  }
}

const empleado = {
   nombre: 'Ricardo Rigodon',
   profesion: {
        inicial: 'fontanero',
        formacion: 'bonmbero',
        empleo: [{uno: 'ada', dos:'adsad'}, 'nuveo', 'actual'],
        otro: otro,
      },
   edad: 34,
  nomina: (pvd,dias,horas) => {
    return pvd*dias*horas;
  }
}
const newOtro = empleado.profesion.otro;
console.log(empleado.profesion.empleo[0].dos)
console.log(newOtro.tres.a);
console.log(`al empleado ${empleado.nombre} le corresponden ${empleado.nomina(22,17,8)} euros.`)
console.log(empleado.profesion.empleo[0].uno)
  