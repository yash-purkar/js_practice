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
  const missingNumbers = [];
  const arr2 = [...new Array(arr[arr.length-1])].map((item,i) => i + 1);
  console.log(arr2)

  for (let i = 0; i < arr[arr.length - 1]; i++) {
    console.log(arr[i])
    if(!arr2?.includes(arr[i])) {
        // console.log(arr[i])
        missingNumbers.push(i + 1)
    }
  }

  return missingNumbers;
};

console.log(findMissingNumbers([1, 3, 5]));