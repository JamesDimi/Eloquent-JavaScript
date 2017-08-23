// Write two functions, reverseArray and reverseArrayInPlace.
// The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
// The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements.
// Neither may use the standard reverse method.


function reverseArray(array)
{
	var newArray = [];

	for( var x = array.length - 1; x >= 0 ; x--){
		newArray.push(array[x]);
	}

	return newArray;
}

// modified to do only n/2 loops
// so its a faster function than reverseArray
function reverseArrayInPlace(array)
{
	var leftIndex = 0;
	var rightIndex = array.length - 1;

	for(leftIndex = 0; leftIndex < (array.length - 1) / 2; leftIndex++){
		var temp = array[leftIndex];
		array[leftIndex] = array[rightIndex];
		array[rightIndex] = temp;
		--rightIndex;
	}

	return array;
}

var array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
console.log("initial Array : " + array + "\n");

console.log("After calling reverseArray : ");
var newArray = reverseArray(array);
console.log("initial Array : " + array + " / newArray : " + newArray + "\n");

console.log("After calling reverseArrayInPlace : ");
reverseArrayInPlace(array);
console.log("initial Array : " + array);
