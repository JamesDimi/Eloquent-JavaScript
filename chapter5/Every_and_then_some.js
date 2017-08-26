// Write two functions, every and some, that behave like these methods, except that they take the array as their first argument rather than being a method.

function every(array, action)
{
  var decision = true;
  array.forEach(function(item){
    if( !(action(item)) ){
      decision = false;
    }
  });
  
  return decision;
}

function some(array, action)
{
  var decision = false;
  array.forEach(function(item){
    if(action(item)){
      decision = true;
    }
  });

  return decision;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
