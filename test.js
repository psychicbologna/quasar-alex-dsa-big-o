/* eslint-disable strict */
// 1. COUNTING SHEEP

function countSheep(num) {
  for (let i = 1; i <= num; i++) {
    console.log(i + ': Another sheep jumps over the fence')
  }
  return 'All sheep jumped over the fence.';
}

// console.log(countSheep(6))

// 2. POWER CALCULATOR

function powerCalc(base, exp) {
  let total = base;
  if (exp === 0) {
    return 1;
  }

  for (let i = 1; i < exp; i++) {
    total *= base;
  }

  return total;
}

// console.log(powerCalc(2,3));

// 3. Reverse String
function reverseString(string) {
  let newString = '';

  for (let i = string.length - 1; i >= 0; --i) {
    newString += string[i];
  }

  return newString;
}

// 4. nth triangular number

function triangularNumber(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }

  return sum;
}

// 5.
function stringSplitter(string, separator) {
  let newStrings = ['',];
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] != separator) {
      newStrings[count] += string[i];
    } else {
      ++count;
      newStrings[count] = '';
    }
  }
  return newStrings;
}
// console.log(stringSplitter('02/20/2020', '/'));

// 6.
function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    if (i === 1) {
      result.push(0);
    }
    else if (i == 2) {
      result.push(1);
    }
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}

// console.log(compute(13));

// 7.

function factorial(num) {
  let product = 1;
  for (let i = 1; i <= num; i++) {
    product *= i;
  }

  return product;
}

/* console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5)); */


// Tower of Hanoi

function towerOfHanoi(num, source, destination, temp) {
  if (num === 1) {
    console.log(`${source} -> ${destination}`)
    return;
  }

  towerOfHanoi(num - 1, source, temp, destination);
  console.log(`${source} -> ${destination}`);
  towerOfHanoi(num - 1, temp, destination, source);

}

// towerOfHanoi(1, 'A', 'C', 'B')
//  towerOfHanoi(2, 'A', 'C', 'B')    // source is A
// destination is C
// temp is B

// towerOfHanoi(3, 'A', 'C', 'B');
// every temp becomes a source
// every temp needs to make a recursive call                 
/*
 A -> B       destination is temp
 A -> C       destination is destination
 B -> C       destination is destination, source is temp
  */

  // towerOfHanoi(5, 'A', 'C', 'B');