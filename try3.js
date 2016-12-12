//now we trnsform the array to a string
const arrayToString = function(arr){
  string = ""; //make an empty string
  for(i=0;i<arr.length; i++){ // for loop, does the same thing for all elements in array
    string += arr[i]; // push the element with i index to the string
  }
  return string;
}
const jigyar = ['a', 5, 'k'];
 console.log(arrayToString(jigyar));
