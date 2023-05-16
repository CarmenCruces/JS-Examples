const f = (x, y, z) => {
  console.log(x,y,z);
} 
let args = [0, 1, 2]; 
f(...args);

let parts1 = ['shoulder', 'knees', 'tercero']; 
let parts2 = ['chest', 'waist']; 
let lyrics = ['head', ...parts1, ...parts2, 'and', 'toes'];

console.log (lyrics);

