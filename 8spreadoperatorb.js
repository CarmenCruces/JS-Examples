const obj1 = {
  parte1: 'hola',
  parte2: 'hola1',
  parte3: 'hola2'
}; 
const obj2 = {
  ...obj1
};
const obj3 = {
  ...obj1,
  parte3: 'adiós'
};

console.log(obj1);
console.log('');
console.log(obj2);
console.log('');
console.log(obj3);

