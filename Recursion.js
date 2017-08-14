// Define whether a positive whole number is even or odd:

//     Zero is even.
//     One is odd.
//     For any other number N, its evenness is the same as N - 2.

// Define a recursive function isEven corresponding to this description.
// The function should accept a number parameter and return a Boolean.

// My solution
function isEven(number)
{
    if(number == 0){
        return true;
    }
    else if(number == 1 || number == -1){
        return false;
    }

    if(number > 0){
        return (isEven(number - 2));
    }
    else{
        return (isEven(number + 2));
    }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

// Book solution
function isEven(number)
{
    if (n == 0)
        return true;
      else if (n == 1)
        return false;
      else if (n < 0)
        return isEven(-n);
      else
        return isEven(n - 2);
}