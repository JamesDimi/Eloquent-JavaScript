// A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.
//
// Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument,
// and write a listToArray function that produces an array from a list. Also write the helper functions prepend,
// which takes an element and a list and creates a new list that adds the element to the front of the input list,
// and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.
//
// If you haven’t already, also write a recursive version of nth.

function arrayToList(array)
{
  var list = {};
  var node = array.shift();

  list["value"] = node;

  if(array != ""){
    list["next"] = arrayToList(array);
  }
  else {
    list["next"] = null;
  }

  return list;
}

function listToArray(list)
{
  var array = [];

  do{
    array.push(list["value"]);
    list = list["next"];
  }
  while(list != null);

  return array;
}

function prepend(node, list)
{
  var newList = {
    "value" : node,
    "next"  : list
  };

  return newList;
}

function nth(list, index)
{
  if(index == 0){
    return list["value"];
  }
  else{
    if(list["next"] != null){
        --index;
        return nth(list["next"], index);
    }
  }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
