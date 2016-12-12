const Alphabet = "abcdeifghijklmnopqrstuvwxyz"; // a string of all letter; index counts from 0
const findIndex = function(str){
  for(i=0; i<str.length; i++){ // for all letter in our string
  let  letter  =  str.substring(i, i+1);
  let indexOfLetter = Alphabet.indexOf(letter); //finds the number, which indicates the index of the letter in the alphabet.
  console.log(indexOfLetter);
  }
}
findIndex('saten');
