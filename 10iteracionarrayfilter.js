const alumnos = [
      {nombre: 'Raul', edad: 25, curso: 'Diseño Web'},
      {nombre: 'Marta', edad: 20, curso: 'Java EE'},
      {nombre: 'Pablo', edad: 29, curso: 'Programación Orientada Objetos'},
      {nombre: 'Sandra', edad: 21, curso: 'Diseño Web'},
      {nombre: 'Marcos', edad: 25, curso: 'Java EE'}
  ]
  
  const mayor22 = alumnos.filter(alumno => {
      return alumno.edad > 22;
  })
  console.log(mayor22);
  console.log(mayor22[0].nombre);
  