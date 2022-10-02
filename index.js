

function isPalindrome(word) {
  const len= word.length
  for (let i=0; i < len/2; i++)
  if (word[i] !== word[len - 1 - i]) {
    return false
  }
  return true
  }
/*
Write a function isPalindrome that will receive one argument, a string. 
Should return true if the string is a palindrome.
Should return false if it is not a palindrome.
*/
/* 
  find length of string
    declare const = string length
  loop through half of the string
    for loop, starting at 0, with i les than length/2, i incremented by 1
      if string(i) is strictly equal to string(length - 1 - i)
        return true
  return false
    
  

*/

/*
  Explenation, the function isPalindrome takes in a string as an argument. It 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("rotator"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("moron"));
  
  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
