// Write a function countBs that takes a text as its only argument
// and returns a number that indicates how many uppercase “B” characters are in the text.

// Next, write a function called countChar that behaves like countBs,
// except it takes a second argument that indicates the character that is to be counted
// (rather than counting only uppercase “B” characters).
// Rewrite countBs to make use of this new function.

// My solution
function countBs(text)
{
	if(typeof(text) != "string"){
		console.log("Noob that's not a string!");
		return;
	}

	var letterCounter = 0;

	for (var x = 0; x < text.length; x++){

		if(text.charAt(x) === "B"){
			letterCounter += 1;
		}
	}
	return letterCounter;
}

function countChar(text, character)
{
	if(typeof(text) != "string"){
		console.log("Noob that's not a string!");
		return;
	}

	var letterCounter = 0;

	for (var x = 0; x < text.length; x++){

		if(text.charAt(x) === character){
			letterCounter += 1;
		}
	}
	return letterCounter;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
