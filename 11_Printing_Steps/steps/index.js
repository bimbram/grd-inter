// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// My solution
function steps(n) {
  //var chars = ''
  for(var i = 0; i < n; i ++) {
    //chars += '#';
    //console.log(chars + spaces(n - i - 1));
    console.log('#'.repeat(i+1) + " ".repeat(n-i-1));
  }
}

function spaces(n) {
  var stringSpaces = ''
  for(var i = 0; i < n; i++) {
    stringSpaces += ' ';
  }
  return stringSpaces;
}

// My recursive solution
function steps(n) {
  var i = arguments[1] || 1;
  if(n === 0) {
    return;
  }
  console.log('#'.repeat(i) + ' '.repeat(n-1));
  return steps(n-1, i+1);
}

// First solution (iterative solution)
function steps(n) {
  for(let row = 0; row < n; row ++) {
    let stair = '';

    for(let column = 0; column < n; column++) {
      if(column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}

// Second solution (recursive solution)
function steps(n, row = 0, stair = '') {
  if(n === row) {
    return;
  }

  if(n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }
  
  if(stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
}



module.exports = steps;
