// EXAMPLE 1 - Check if Multiple Values exist in an Array in JavaScript

const arr = ['one', 'two', 'three', 'four'];
const values = ['one', 'two'];

const multipleExist = values.every(value => {
  return arr.includes(value);
});

console.log(multipleExist); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 2 - Defining a reusable function

// function multipleInArray(arr, values) {
//   return values.every(value => {
//     return arr.includes(value);
//   });
// }

// console.log(multipleInArray([1, 2, 3], [1, 3])); // 👉️ true

// console.log(multipleInArray([1, 2, 3], [1, 10])); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if multiple values exist in an array using a `Set` object

// function multipleInArray(arr, values) {
//   const set = new Set(arr);

//   return values.every(value => {
//     return set.has(value);
//   });
// }

// // 👇️ true
// console.log(
//   multipleInArray(['bobby', 'hadz', 'com'], ['bobby', 'hadz']),
// );

// // 👇️ false
// console.log(multipleInArray([1, 2, 3], [1, 10]));

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if Multiple Values exist in an Array using `indexOf()`

// const arr = ['one', 'two', 'three', 'four'];
// const values = ['one', 'two'];

// const multipleInArray = values.every(value => {
//   return arr.indexOf(value) !== -1;
// });

// console.log(multipleInArray); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 5 - Defining a reusable function

// function multipleInArray(arr, values) {
//   return values.every(value => {
//     return arr.indexOf(value) !== -1;
//   });
// }

// // 👇️ true
// console.log(multipleInArray([1, 2, 3], [1, 2]));

// // 👇️ false
// console.log(multipleInArray([1, 2, 3], [4, 2]));
