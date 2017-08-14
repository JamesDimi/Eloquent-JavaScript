// My solution
var numOfLoops = 0;
var outputString;

for(numOfLoops = 0; numOfLoops < 7; numOfLoops++) {
    outputString = "";

    for(var x = 0; x < numOfLoops + 1; x++) {
        outputString += "#"
    }
    console.log(outputString);
}

// Book solution
for(var line = "#"; line.length < 8; line += "#") {
    console.log(line);
}