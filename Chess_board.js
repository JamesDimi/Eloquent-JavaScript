// My solution
// chess dimensions are size x size
function printChess(size)
{
    var outputA = "";
    var outputB = "";

    for( var x = 0; x < size; x++) {
         outputA += ( (x) % 2 == 0 ? " " : "#");
         outputB += ( (x) % 2 == 0 ? "#" : " ");
    }

    console.log("Information about the chessboard:");
    console.log("outputA : " + outputA + "\noutputA.length : " + outputA.length);
    console.log("outputB : " + outputB + "\noutputB.length : " + outputB.length);

    console.log("\nThe chessboard:\n");
    for( x = 0; x < (size / 2); x++) {
        console.log(outputA);
        console.log(outputB);
    }
}

printChess(8);

// Book solution
function bookfunction(size) 
{
    var board = "";
    
    for (var y = 0; y < size; y++) {
      for (var x = 0; x < size; x++) {
        if ((x + y) % 2 == 0)
          board += " ";
        else
          board += "#";
      }
      board += "\n";
    }
    
    console.log(board);
}