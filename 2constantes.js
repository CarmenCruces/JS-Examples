const MAX_SIZE = 4;
for (let i=0; i < MAX_SIZE; i++){
     const MSG = "La variable es: "
     //const MSG = "esto no es correcto"
     //MSG = "No puedo cambiar su valor"
     console.log(MSG + i);
}
//console.log(MSG); //daría error porque MSG aquí no está definida

const objeto = {uno: 1, dos: 2}
//objeto = {tres: 3, cuatro: 4}
objeto.uno = 11;
objeto.tres = 3;
console.log(objeto)
objeto.uno = 0; // si puedo cambiar el valor de un objeto definido como constante
console.log(objeto)
