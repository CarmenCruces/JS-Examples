let iterable = [3, 5, 7];
iterable.foo = "hello";
console.log(iterable)

for (let i in iterable) {
     console.log(i); // logs 0, 1, 2, "foo"
}
console.log(' ')
for (let i of iterable) {
     console.log(i); // logs 3, 5, 7
}
