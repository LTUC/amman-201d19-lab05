'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
let re;
function sum(a, b) { //eslint-disable-line
  re = a + b;
  return [re, 'The sum of ' + a + ' and ' + b + ' is ' + re + '.'];
}
// console.log(sum(4,7));
// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
let re1;
function multiply(a, b) { //eslint-disable-line
  re1 = a * b;
  return [re1, 'The product of ' + a + ' and ' + b + ' is ' + re1 + '.'];
}

// console.log(multiply(5,9))
// Here is the test for multiply(); uncomment it to run it
testMultiply(5, 9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
// let re2;
// let re2a;
// function sumAndMultiply(a, b, c) { //eslint-disable-line
//   re2 = a + b + c;
//   re2a = a * b * c;
//   return [re2, re2a, a + ' and ' + b + ' and ' + c + ' sum to ' + re2 + '.', 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + re2a + '.']

// }
// // console.log(sumAndMultiply(4,7,5))
// // Here is the test for sumAndMultiply(); uncomment it to run it
// testSumAndMultiply(4, 7, 5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

function sumAndMultiply(a, b, c) { //eslint-disable-line الله يخلي أسامة شرحلي اياها ولا عزاء للي بده يخلينا نطبل
let arr = [4, 7, 5];
let su = 0;
let mul = 1;
  for (let i = 0; i < arr.length; i++){
    // su = su + arr[i];
    // mul = mul * arr[i];
    su = sum(arr[i],su)[0];
    mul = multiply(arr[i],mul)[0];
  }
  return [su, mul, + a + ' and ' + b + ' and ' + c + ' sum to ' + su + '.', 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + mul + '.'];
}
testSumAndMultiply(4, 7, 5);

/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
let testArray = [2, 3, 4]; //eslint-disable-line
function sumArray(sumArr) { //eslint-disable-line
  let s = 0;
  for (let i = 0; i < testArray.length; i++) {
    s = s + sumArr[i]; // I still need more explain https://www.youtube.com/watch?v=7C98Yt4egoE الله يخلي يوتيوب المعلم الاول
  }

  return [s, testArray[0] + ',' + testArray[1] + ',' + testArray[2] + ' was passed in as an array of numbers, and ' + s + ' is their sum.'];
}
// console.log(sumArray ([2,3,4]));

// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) { //eslint-disable-line
  // let arra = [2, 3, 4];
  let art = 1;
  // array = [2, 3, 4];
  for (let i = 0; multArr.length > i; i++) {
    art = multiply(multArr[i],art)[0];
  }
  // let cr = (array[0])*(array[1])*(array[2])
  return [art, 'The numbers ' + multArr[0] + ',' + multArr[1] + ',' + multArr[2] + ' have a product of ' + art + '.']
}
// console.log(art, ' The numbers ' + arra[0] + ',' + arra[1] + ',' + arra[2] + ' have a product of ' + art + '.')

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
// let testDynamicArray = [1, 2, 3, 4, 5]; //eslint-disable-line

// function multiplyAnyArray(dynamicArray) { //eslint-disable-line
//   let art = 1;
//   let msg ='';
//   for (let i = 0; dynamicArray.length > i; i++) {
//     art = multiply(dynamicArray[i],art)[0];
//     if(i==0){
//       msg = msg + dynamicArray[i];
//     }
//     else{
//       msg = msg +','+ dynamicArray[i]
//     }
//   }
//   return [art, 'The numbers '+ msg + ' have a product of ' + art + '.']
// }

// // Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.

  // let cr = (array[0])*(array[1])*(array[2])
