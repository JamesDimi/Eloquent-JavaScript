// My solution
function fizzBuzzPartA()
{
	for(var x = 1; x <= 100; x++ ) {

		if( x % 3 == 0) {
			console.log("Fizz");
		}
		else if( x % 5 == 0) {
			console.log("Buzz");
		}
		else {
			console.log(x);
		}
	}
}

function fizzBuzzPartB()
{
	for(var x = 1; x <= 100; x++ ) {

		if( (x % 3 == 0) && (x % 5 == 0) ) {
			console.log("FizzBuzz");
		}
		else if( x % 3 == 0) {
			console.log("Fizz");
		}
		else if( x % 5 == 0) {
			console.log("Buzz");
		}
		else {
			console.log(x);
		}
	}
}

console.log("FizzBuzzPartA");
fizzBuzzPartA();
console.log("\nFizzBuzzPartPartB");
fizzBuzzPartB();
