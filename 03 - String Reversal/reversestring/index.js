// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/*
// My solution (first try)
function reverse(str) {
  return str.split("").reverse().join("");
}

// First solution
function reverse(str) {
  return str.split("").reverse().join("");
}

*/
// My solution using a loop
function reverse(str) {
  var newStr = ""
  var counter = 1
  while(newStr.length < str.length) {
    newStr += str[str.length-counter]
	counter++
  }
  return newStr;
}

module.exports = reverse;
