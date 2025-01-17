'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word) => {

  const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
  const trimmedWord = word.trim().toLowerCase()
  let wordArr = Array.from(trimmedWord)
  
  if (vowels.includes(wordArr[0])) {
    wordArr.push('y', 'a', 'y')
    return wordArr.join('')
  } else {
    for (let i=0; i < wordArr.length; i++) {
      if (vowels.indexOf(wordArr[i]) > -1) {
        wordArr = wordArr.concat(wordArr.splice(0, i))
        wordArr.push('a', 'y')
        return wordArr.join('')
      }
    }
  }

  // return `${wordArr.join('')}yay`

// ***what i had before

  // for (let i=0; i <= wordArr.length; i++) {
  //   if (wordArr[0].includes(vowels[i])) {
  //     wordArr.push('y', 'a', 'y')
  //     const backToString = wordArr.join('')
  //     return backToString
  //   } else if (wordArr.at(1) === vowels[i]) {
  //     wordArr = wordArr.concat(wordArr.splice(0, 1))
  //     wordArr.push('a', 'y')
  //     const backToString = wordArr.join('')
  //     return backToString
  //   } else {
  //     wordArr = wordArr.concat(wordArr.splice(0, 2))
  //     wordArr.push('a', 'y')
  //     const backToString = wordArr.join('')
  //     return backToString
  //   }
  // }
}

// ***original method
// else if (trimmedWord.charAt(1) === vowels[i]) {
//   const wordArr = Array.from(trimmedWord)
//   const firstLetter = wordArr.shift()
//   const firstLetterArr = Array.from(firstLetter)
//   const newArr = wordArr.concat(firstLetterArr)
//   newArr.push('a', 'y')
//   const backToString = newArr.join('')
//   return backToString
// }


// the first function called in the program to get an input from the user
// to run the function use the command: node main.js 
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
