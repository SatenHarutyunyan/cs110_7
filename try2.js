const Alphabet = "abcdeifghijklmnopqrstuvwxyz"; // a string of all letter; index counts from 0
const try2 = function(str, amount){

  let arrayCipher = [];
  for(let i=0; i<str.length; i++){ // for all letter in our string
  let  letter  =  str.substring(i, i+1); // find the letter from string
  let indexOfLetter = Alphabet.indexOf(letter); //finds the number, which indicates the index of the letter in the alphabet.
  //console.log(indexOfLetter);
  //now we now the index of the number, and we want another string, that contains the letters with amount + index.
  // For example, if amount is 5, for leter d(index 4) we want to see the letter h(index 9) instead
 // store this new collection of letter in the array, them we will transform it to a string
  let newIndex = indexOfLetter + amount
  arrayCipher[i] = Alphabet.charAt(newIndex); //push to array the new letters;
  console.log(arrayCipher[i]);
  }

  return arrayCipher;

}
 try2('saten', 5);
 //we go do simpler task first. then we will figure out what to do with space and with capital letters.
