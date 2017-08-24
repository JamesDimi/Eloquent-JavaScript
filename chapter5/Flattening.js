// Use the reduce method in combination with the concat method to “flatten” an array
// of arrays into a single array that has all the elements of the input arrays.

var arrays = [[1, 2, 3], [4, 5], [6]];
var flatted = arrays.reduce(function(current, next){
  console.log("current: " + current);
  console.log("next : " + next);
  return current.concat(next);
}, []);

console.log(flatted);
// → [1, 2, 3, 4, 5, 6]
