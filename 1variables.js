var global = "I'm global Created";
let local = "I'm only local Created";
function a() {
  if (true) {
    var global = "I'm global 2";
    let local = "I'm only local 2";
    console.log('l-1 >',local); 
  }
  console.log('g-1 >',global);
}
console.log('l0 >',local);
function b() {
  if (true) {
    var global = "I'm global 3";
    var global = "I'm global 4";
    let local = "I'm only local 3";
    console.log('l-2 >',local);
  }
  console.log('g-2 >',global);
}
a();
b();
console.log('l-3 >',local);
