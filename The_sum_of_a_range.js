
// Write a range function that takes two arguments, start and end,
// and returns an array containing all the numbers from start up to (and including) end.

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
// Run the previous program and see whether it does indeed return 55.

// As a bonus assignment, modify your range function to take an optional third argument
// that indicates the “step” value used to build up the array. If no step is given,
// the array elements go up by increments of one, corresponding to the old behavior.
// The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
// Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

// my solution
function myRange(start, end, step)
{
    var array = [];

    if(step){

        if(step > 0){
            
            for(var x = start; x <= end; x += step){
                array.push(x);
            }
        }
        else{

            for(var x = start; x >= end; x += step){ // not sure
                array.push(x)
            }
        }
    }
    else {

        for(var x = start; x <= end; x++){
            array.push(x);
        }
    }
    return array;
}

function mySum(array)
{
    var sum = 0;
    
    for(var x = 0; x < array.length; x++){
        sum += array[x];
    }
    return sum;
}

console.log(myRange(1, 10) + " sum is: " + mySum(myRange(1, 10)));
console.log(myRange(0, 10, 2) + " sum is: " + mySum(myRange(0, 10, 2)));
console.log(myRange(10, 0, -1) + " sum is: " + mySum(myRange(10, 0, -1)));
console.log(myRange(10, -10, -5) + " sum is: " + mySum(myRange(10, -10, -5)));

// Book solution
function range(start, end, step) {
    if (step == null) step = 1;
    var array = [];
  
    if (step > 0) {
      for (var i = start; i <= end; i += step)
        array.push(i);
    } else {
      for (var i = start; i >= end; i += step)
        array.push(i);
    }
    return array;
}
  
function sum(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++)
      total += array[i];
    return total;
}