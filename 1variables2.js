var global = "I'm global created";
let local = "I'm only local crated";
function a() {
  if (true) {
    var global = "I'm global";
    console.log('l-1 >',local); // local se muestra ya que el entorno es /
  }
  console.log('g-1 >',global); // I'm global 
}
function b() {
  if (true) {
    let local = "I`m local new created"
    console.log('l-2 >',local); // La variable esta asociada a la nueva, prevalece el entorno.
  }
}
a();
b();
console.log('l-3 >',local); // I'm only local 3
