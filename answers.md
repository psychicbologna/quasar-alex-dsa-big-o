# Big O DSA

## 1. What is the Big O for this?

    1. O(1), you make one call to find the dog, so it only runs once, making it constant.

    2. O(n), you ask each person in turn, so it runs n times, making it linear.

## 2. Even or Odd

O(1) This is because it only takes one value and performs one instruction for any input it takes. There is no worse case that adds to the complexity of this algorithm.

```javascript
function isEven(value) {
    if (value % 2 == 0) {
        return true;
    }
    else
        return false;
    }
}
```

## 3. Are you Here?

O(n^2), polynomial. because the function is iterating the length of array 2 from array 1, this a quadratic polynomial.

```javascript
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
```

## 4. Doubler

O(n), the operation is running once for each item in array i.

```javascript
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
```

## 5. Naive Search

O(n) there is only one instruction for each item in array i. The worst possible scenario is that it iterates through the entire length of n, but best case it could find the item in the first item of the array.

```javascript
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
```

## 6. Creating Pairs

O(n^2), polynomial. It is looping through the entire length of the array once, and within that loop it is looping through the length of the array again.

```javascript
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
```

## 7. Compute the Sequence

O(n). This computes a fibonacci sequence based off the number. The compute function takes a number and returns an array with each number in a fibonacci sequence leading up to num. It is linear; although there are multiple operations, the most significant one is the loop.

```javascript
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
```

## 8. An efficient search

O(log n) The search criteria in each iteration are being reduced by half, so the output remains small despite the size of the input.

```javascript
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
```

## 9. Random Element

O(1) It only needs to iterate once and returns one item. In the best case, it could return the first item, the worst the total length of arr.

```javascript
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
```

10. What Am I?

O(n) This function determines whether or not the input is a prime number and returns a boolean, true if it is, false if it isn't. The worst case scenario is that it loops through n-2 number of times if the input passes the first condition.

```javascript
function isWhat(n) {
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}
```

## 11. Tower of Hanoi

```javascript
function towerOfHanoi(num, source, destination, temp) {
  if (num === 1) {
    console.log(`${source} -> ${destination}`)
    return;
  }

  towerOfHanoi(num - 1, source, temp, destination);
  console.log(`${source} -> ${destination}`);
  towerOfHanoi(num - 1, temp, destination, source);
}
```

How do the rods look like after 7 recursive calls if given 5 disks?  
There are 2 disks on the src, and 3 on the dest rod.  

How many moves are required to complete the puzzle with 3 disks? 4? 5?  
1: 1  
2: 3  
3: 7  
4: 15  
5: 31  
8: 255  

The runtime algorithm is O(2^n), exponential. 

## 12. See [test.js](./test.js) file.

## 13. Recursive Big O
    a. sheepcounter
```javascript
const sheepCounter = (sheepCount) => {
    if (sheepCount === 0) {
        console.log('All sheep jumped over the fence');
        return;
    }

    console.log(`${sheepCount}: Another sheep jumps over the fence`);
    return sheepCounter(sheepCount - 1);
};
```
O(n), linear. It makes a new recursive call for each number in sheepCount.

    b. powerCalculator
```javascript
const powerCalculator = (i, exponent) => {
  if (exponent === 0) {
    return 1;
  }
  if (exponent < 0) {
    return 'exponent should be >= 0';
  }

  return i * powerCalculator(i, exponent - 1);
};
```
O(n), linear. It iterates through exponent - 1, making a new call with each iteration.

    c. reverseString
```javascript
const reverseString = (string) => {
  if (!string.length) {
    return '';
  }

  return string[string.length - 1] + reverseString(string.slice(0, string.length - 1));
};
```
O(n), linear. It iterates through the string length, making a new call with each iteration.  

    d. triangularNumber
```javascript
function triangularNumber(n) {
  if (n === 1)
    return n;

  return n + triangularNumber(n - 1);
}
```
O(n), linear. It iterates through n, making a new call with each iteration.  

    e.  stringSplitter
```javascript
function stringSplitter(string, separator) {
  let index = string.indexOf(separator);

  if (index === -1)
    return [string];
  
  return [string.slice(0,index)].concat(
    stringSplitter(
      string.slice(index + separator.length), separator));
}
```
O(n), linear. The number of iterations/calls that are made depends on how many times the separator appears inside of the input string.

    f. fibonacci
```javascript
function fibonacci(num) {
  if (num===0)
    return 'pick a number greater than or equal to 1'

  if(num<=2)
    return 1;

  return fibonacci(num - 1) + fibonacci(num-2);
}
```
O(2^n), exponential. For each number, it makes two recursive calls.

    g. factorial
```javascript
function factorial(num) {
  if (num === 0)
    return 1;
  if (num === 1)
    return 1;
  return num * factorial(num - 1);
}
```
O(n), linear. Iterates through num, calling itself once each time.


## 14. Iteracive Big O

    a. countSheep
```javascript
function countSheep(num) {
  for (let i = 1; i <= num; i++) {
    console.log(i + ': Another sheep jumps over the fence')
  }
  return 'All sheep jumped over the fence.';
}
```

O(n), linear. It just iterates num number of times.
    
    b. powerCalc
```javascript
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
```
O(n), linear. It iterates through exp, multiplying base by itself each time.

    
    c.  reverseString
```javascript
function reverseString(string) {
  let newString = '';

  for (let i = string.length - 1; i >= 0; --i) {
    newString += string[i];
  }

  return newString;
}
```
O(n), linear. it iterates through lenght of string, concatenating a string each time.
    
    d. triangularNumber
```javascript
function triangularNumber(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }

  return sum;
}
```
O(n), linear. It iterates numbers through n, summing all numbers.
    
    e. stringSplitter
```javascript
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
```
O(n), linear. It iterates through the length of a string, character by character.

    f. fibonacci
```javascript
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
```
O(n), linear. iterates through num.

    g. factorial
```javascript
function factorial(num) {
  let product = 1;
  for (let i = 1; i <= num; i++) {
    product *= i;
  }

  return product;
}
```
O(n), linear. iterates through num, multiplying product by iterator each time.
