let perro = {nombre: "Scott", color: "Negro", macho: true, edad: 5};

let valores = Object.values(perro); // valores = ["Scott", "Negro", true, 5];
for(let i=0; i< valores.length; i++){
  console.log(valores[i]);
}
console.log('--------------------------------')
for (property in perro) {
  console.log(perro[property]);
}
console.log('--------------------------------')
Object.entries(perro).forEach(([key, value]) => {
  console.log(key, value)
});
console.log('--------------------------------')
for(const [key, value] of Object.entries(perro)){
  console.log(key, value)
}
