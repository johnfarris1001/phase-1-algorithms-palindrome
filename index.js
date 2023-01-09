function isPalindrome(word) {
  // Write your algorithm here
  let reversed = '';
  for (let i = 0; i < word.length; i++) {
    reversed = word[i] + reversed;
  }
  return word === reversed;
}

/* 
  Add your pseudocode here
  declare an empty string
  iterate through the word and add each letter to the beginning of the empty string
  check to see if the string matches the word
*/

/*
  Add written explanation of your solution here
  Use concatenation to rebuild the word backwards, check to see if it matches
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
