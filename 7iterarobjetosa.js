let perrarr = ["Scott", "Negro", true, 5];
let perrobj = {nombre: "Scott", color: "Negro", macho: true, edad: 5};

const keysname = Object.values(perrobj);
console.log(keysname[2]);
if (Object.keys(perrobj).length > 0) {
  console.log('lleno');
}