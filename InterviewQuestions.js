// 1. Question: Write a function that reverses a given string.

const reverseStr = (str) => {
  let reverseStr = "";
  for (let i = str?.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
};

const reverseStr2 = (str) => str.split("").reverse().join("");

console.log(reverseStr2("Heyy, I'm working at flipkart"));
// trakpilf ta gnikrow m'I ,yyeH

// 2. Write a function that finds the first longest word in a sentence.

const findLongestWord = (sentence) => {
  const splitStrWords = sentence.split(" ");
  let longestWord = "";
  for (let i = 0; i < splitStrWords.length; i++) {
    if (splitStrWords[i].length > longestWord.length)
      longestWord = splitStrWords[i];
  }

  return longestWord;
};
console.log(findLongestWord("The quick brown fox jumps over the lazy dog"));
// quick

// 3. Question: Write a function that removes duplicates from an array.
const removeDuplicates = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr?.includes(arr[i])) newArr.push(arr[i]);
  }

  return newArr;

  //   return [...new Set(arr)];
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// [ 1, 2, 3, 4, 5 ]

// 4. Question: Given an array containing numbers from 1 to N, with one number missing, find the missing number.

const findMissingNumber = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(i + 1, arr[i]);
    if (i + 1 !== arr[i]) return i + 1;
  }
};

const findMissingNumbers = (arr) => {
  // Creating array of all numbers upto n;
  const arr2 = [...new Array(arr[arr.length - 1])].map((_, i) => i + 1);

  // If the number from arr2 not in provided arr means it is missing number in an array;
  return arr2?.filter((item) => !arr?.includes(item));
};

// provided arr [1, 3, 5]
// arr2 [1, 2, 3,4, 5]

// Filter
// 1 in provided arr ? true but ! will make it false so filter won't return 1
// 2 in provided arr ? false but ! will make it true so filter will return 2
// 3 in provided arr ? true but ! will make it false so filter won't return 3
// 4 in provided arr ? false but ! will make it true so filter will return 4
// 5 in provided arr ? true but ! will make it false so filter won't return 5
console.log("OUTPUT", findMissingNumbers([1, 3, 5]));
// OUTPUT -> [2, 4]

// Solution 2
/*
const missinngNumberFunc=(arr)=>{
    let missingNumber=[]
    for(i=0;i<arr[arr.length-1];i++){
    if(!arr.includes(i+1) && i+1!==arr[i]) {
        missingNumber.push(i+1)
    }
    }
    return missingNumber
}
console.log(missinngNumberFunc([1,5]))
*/

// 5. Question: Write a function that checks if a given string is a palindrome.

const checkPalindrome = (str) => {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  return str === reverseStr;
};

const checkPalindrome1 = (str) => str?.split("")?.reverse()?.join("") === str;

const isPalindrome1 = (str) => {
  for (i = 0; i < Math.floor(str.length / 2); i++) {
    console.log("_num_", str[i], str[str.length - 1 - i]);
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
console.log(isPalindrome1("level"));
console.log(checkPalindrome1("yash")); // false
console.log(checkPalindrome1("level")); //true

// 6. Question: What will be the output of the following code?
for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// Answer - 5 time 6 After 1 second

// 7.Question: What will be the output of the following code?
for (var i = 1; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// 4 times 5

//  8. How to empty an array in javascript?

/*1. array=[]
2. array.length=0
3. array.splice(0, arr.length)
4. while(array.length){
  array.pop()
  }*/

// 9.  How would you check if a number is a integer or decimal?
// number % 1 === 0; //true

// Bcz, if number is divided by zero it is an integer.

// 10. Write a "mul"function which will properly when invoked as below syntax.
const mul = (num1) => (num2) => (num3) => num1 * num2 * num3;

console.log(mul(2)(3)(4)); // output :: 24
console.log(mul(4)(3)(4)); /// output :: 48
