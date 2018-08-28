// Javascript Homework
// Due Monday COB
// Put all homework in:
// github classroom created for you
// -----------------------------------------------------------------------------------
// PART I

// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------

// 1. Fibonacci
// Define function: fib(n) 
// Return the nth number in the fibonacci sequence.

console.log("Question 1 ");

function fib(n) {//returns nth number of fibonacci sequence

  let result = (Math.pow(1.618, n) + Math.pow(0.618, n)) / 2.236;
  console.log(Math.round(result));

}

fib(12);
console.log("\n");


// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.
console.log("Question 2 ");

function bubbleSort(numArray) {

  let array = numArray;

  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;

      }
    }
  }
  console.log(array);

}

bubbleSort([5, 2, 1, 3, 4]);

console.log("\n");

// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.
console.log("Question 3 ");

function ReverseStr(someStr) {

  let reverse = [];
  reverse = someStr.split('').reverse().join();

  console.log(reverse);

}

ReverseStr("Hello");
console.log("\n");
// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.
console.log("Question 4");

function factorial(someNum) {

  let result = 1;

  if (someNum === 1) {
    return console.log(1);
  }

  for (let i = 0; i < someNum; i++) {

    result = result * (someNum - i);

  }

  return console.log(result);
}

factorial(8);
console.log("\n");

// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.

// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.
console.log("Question 6")
function isEven(someNum) {
  let x = someNum;

  while (x > 1) {

    x = x / 2;

    if (x === 1) {

      console.log("The Number " + someNum + " is Even!")
    }

    if (x < 1) {
      console.log("The Number " + someNum + " is Odd!")
    }

  }
}

isEven(5);
isEven(8);
console.log("\n");
// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
console.log("Question 7")

function isPalindrome(someStr) {


  let reverse;
  let testcase;
  reverse = someStr.split('').reverse();
  testcase = someStr.split('');

  if (testcase = reverse) {
    console.log("The phrase is a Palindrome!");
  }

}

isPalindrome("racecar");
console.log('\n');


// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
console.log("Question 8");

function printShape(shape, height, character) {
  console.log("Here is Your Shape : ")


  switch (shape) {

    case "square":

      let shapematrix = [];
      for (let i = 0; i < height; i++) {
        shapematrix[i] = [];

        for (let j = 0; j < height; j++) {
          shapematrix[i][j] = character;
        }


      }

      let shapestring = shapematrix.toString();
      //console.log(shapestring);

      if (height % 2 === 0) {

        for (let k = 0; k < (height * height); k = k + height) {

          console.log(shapestring.substring(k, (height * 2) + k).replace(/[ ]*,[ ]*|[ ]+/g, ''));
        }
      }

      if (height % 2 != 0) {

        for (let k = 0; k < (height * height); k = k + height) {

          console.log(shapestring.substring(k, (height + k)).replace(/[ ]*,[ ]*|[ ]+/g, character));
        }

      }


      break;
    case "triangle":
      for (let i = 1; i <= height; i++) {
        let row = '';

        for (let j = 1; j <= i; j++) {
          row += character;
        }

        console.log(row);
      }


      break;
    case "diamond":
      console.log("This is a diamond")
      break;
  }

}
printShape("square", 4, '*')
console.log('\n');
printShape("triangle", 5, '%')
console.log('\n');

// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *

// 9. Object literal
console.log('Question 9')

let Vegeta = {

  first : 'Vegeta',
  Sayain : "Yes",

}

function transverseObject(someObj) {

  Object.keys(someObj).forEach(function (key) {

    console.log(key, someObj[key]);

  })

}

transverseObject(Vegeta);
console.log('\n');

// Define function traverseObject(someObj)
// Print every property and it's value.

// 10. Delete Element
console.log("Question 10");

function deleteElement(someArr,n) {//n which element you want to delete
  console.log('Length of Array Before : ' + someArr.length)

  someArr[n-1] = '';

  console.log('Length Array After : ' + someArr.length);

}
deleteElement([0, 1, 2, 3, 4],3)
console.log('\n');
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.

// 11. Splice Element
console.log("Question 11")

function spliceElement(someArr,n) {//n is the placement of the element in which you want to splice
  console.log('The Length Before the Splice : ' + someArr.length)
  someArr1 = someArr.splice(n-1, 1);//n - 1 is the index you want to delete
  console.log('The Length After the Splice : ' + someArr.length)

}
spliceElement([1, 2, 3, 4, 5],3);
console.log('\n')
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.

// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	var john = new Person("John", 30);
console.log("Question 12");
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let Bob = new Person('Bob', '66');
console.log("Name is : " + Bob.name + ' , ' + "Age : " + Bob.age)
console.log('\n');
// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	var john = getPerson("John", 30);
console.log("Question 13");
function getPerson(n, a) {
  return {

    name: n,
    age: a
  };

}
let Goku = getPerson('Goku', '30')
console.log(Goku)
console.log('\n');


// -----------------------------------------------------------------------------------
