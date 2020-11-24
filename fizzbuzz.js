

function fizzBuzz() {
  let currVal = 1;
  return function getValidValue() {
    let correctVal;
    currVal = currVal + 1;
    if (currVal % 3 === 0 && currVal % 5 === 0) {
      correctVal = 'fizzbuzz'
    } else if (currVal % 5 === 0) {
      correctVal = 'buzz'
    } else if (currVal % 3 === 0) {
      correctVal = 'fizz'
    } else {
      correctVal = currVal;
    }
    return correctVal;
  }
}    

module.exports = {
  fizzBuzz
}

// Alexa starts at 1
// Alexa waits for a response from a user. 
// Alexa should know whether the response is a valid one. 
// - Did the user say the correct number/word?
// - If not, then say they should've said this, not that.

// a function should check if it is valid and it should know the correct word.


