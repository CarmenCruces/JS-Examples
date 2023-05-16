const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

console.log(person.printIntroduction());

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

console.log(me);
me.printIntroduction();


// agregar elementos a un objeto

const nevOjeto = {}
console.log(nevOjeto);

nevOjeto.elemento1 = 'este es el primer elemento';
nevOjeto["elemento2"] = 'este es el segundo elemento';

nevOjeto.elemento1 = 'valor nuevo';


console.log(nevOjeto);
