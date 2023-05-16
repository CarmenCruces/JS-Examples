let perrarr = ["Scott", "Negro", true, 5];
let perrobj = {nombre: "Scott", color: "Negro", macho: true, edad: 5};

perrarr.map(data => {
  console.log(data);
})
perrobj.map(data => {
  console.log(data);
})
console.log('--------------------------------')

let perro = {nombre: "Scott", color: "Negro", macho: true, edad: 5};

let claves = Object.keys(perro); // claves = ["nombre", "color", "macho", "edad"]
console.log(claves);
for(let i=0; i< claves.length; i++){
  let clave = claves[i];
  console.log(perro[clave]);
}

let otroperro = {nombre: "San Bernardo", color: "Blanco y Canela", macho: false, edad: 1};

let valores = Object.values(otroperro); // valores = ["Scott", "Negro", true, 5];
console.log(valores);
for(let i=0; i< valores.length; i++){
  console.log(valores[i]);
}

// otro modo de acceder a las key y los value
console.log('--------------------------------')
Object.entries(perro).forEach(([key, value]) => {
  console.log(key, value)
});

for(const [key, value] of Object.entries(perro)){
  console.log(key, value)
}
