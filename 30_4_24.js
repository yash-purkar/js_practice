// 1. Write a function that takes a user's age and determines if they are old enough to vote (age 18 or older).

const isEligibleForVote = (age) => age > 18;

const userAge = 20;

if (isEligibleForVote(userAge)) console.log("Eligible For vote");
else console.log("Not eligible for vote");

// 2. Write a function that takes two numbers as input and determines which one is greater.

const findGreaterNumber = (num1, num2) =>
  num1 > num2 ? `${num1} is greater` : `${num2} is greater`;

console.log(findGreaterNumber(204, 25));

// 3. Write a function that takes a number as input and determines if it is positive or negative.

const checkPositiveOrNegative = (num) =>
  num >= 1
    ? `${num} is positive`
    : num === 0
    ? `${num} is neither positive nor negative`
    : `${num} is negative`;

console.log(checkPositiveOrNegative(2));
console.log(checkPositiveOrNegative(0));
console.log(checkPositiveOrNegative(-10));

// 4. Write a function that takes a number as input and determines if it is even or odd.

const checkEvenOrOdd = (num) =>
  num % 2 === 0 ? `${num} is Even` : `${num} is Odd`;

console.log(checkEvenOrOdd(25));
console.log(checkEvenOrOdd(28));

// 5. Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.

const checkContainsAora = (str) =>
  str.toLowerCase().includes("a")
    ? `${str} contains a`
    : `${str} does not contain a`;

console.log(checkContainsAora("Yash"));
console.log(checkContainsAora("xyz"));

// 6. Write a function that takes a string as input and determines if it is longer than 5 characters.

const checkIsLongerThan5Characters = (str) =>
  str?.length > 5
    ? `${str} is longer than 5 characters`
    : `${str} is not longer than 5 characters`;

console.log(checkIsLongerThan5Characters("hii"));
console.log(checkIsLongerThan5Characters("hiiHello"));

// 7. Write a function that takes a number as input and determines if it is between 1 and 10.

const checkIsBetween1And10 = (num) =>
  num > 1 && num < 10
    ? `${num} is between 1 and 10`
    : `${num} is not between 1 and 10`;

console.log(checkIsBetween1And10(5));
console.log(checkIsBetween1And10(15));

// 8. Write a function that takes a string as input and determines if it contains the word "hello".

const isContainsWordhello = (string) => {
  const strArr = string.split(" ");
  for (let i = 0; i < string.length; i++) {
    if (strArr[i] === "hello") return `${string} contains hello`;
  }
  return `${string} does not contain hello`;
};

console.log(isContainsWordhello("hii"));
console.log(isContainsWordhello("hii hello how are you?"));

// 2nd way
const isContainsWordhello2 = (string) =>
  string.toLowerCase().includes("hello")
    ? `${string} contains hello`
    : `${string} does not contain hello`;
console.log(isContainsWordhello2("hii"));
console.log(isContainsWordhello2("hii hello how are you?"));

// 9. Write a function that takes a number as input and determines if it is a multiple of 3.
const checkIsNumMultipleOfThree = (num) =>
  num % 3 === 0
    ? `${num} is multiple of three`
    : `${num} is not multiple of three`;

console.log(checkIsNumMultipleOfThree(6));
console.log(checkIsNumMultipleOfThree(15));
console.log(checkIsNumMultipleOfThree(20));

// 10. Write a function which takes in a number as input and returns it after multiplying by 10.

const multiplyNumBy10 = (num) => num * 10;
console.log(multiplyNumBy10(4));

// 11. Console individual values of the product object using object destructuring.
const product = {
  title: "iPhone",
  price: 5999,
  description: "The iPhone is a smartphone developed by Apple",
};

const { title, price, description } = product;
console.log(`${title} | ${price} | ${description}`);

// 12. Create an object book with properties title, author, and pages. Create a function getBookDetails that takes a book object as a parameter and returns if the book has more than 100 pages.

const book = {
  title: "Wise and other wise",
  author: "Sudha Murthy",
  pages: 134,
};

const checkBookHasMoreThan100Pages = (book) => book.pages > 100;

console.log(checkBookHasMoreThan100Pages(book));

// 13. Create a function changeOccupation that takes an object person and a string newOccupation as parameters, and changes the occupation property of the person object to the newOccupation. Log the person object to the console before and after calling the function.

const person = {
  name: "John",
  occupation: "XYZ",
};

console.log(person);

const changeOccupation = (person, newOccuputaion) => {
  person.occupation = newOccuputaion;
};

changeOccupation(person, "ABC");

console.log(person);

//   14. Given an array numbers containing the numbers 1, 2, and 3. Use array destructuring to log each number to the console.

const numbers = [1, 2, 3];
const [a, b, c] = numbers;

console.log(a, b, c);

// 15. Convert the given function into ES6 with least amount of characters.

/*
    function defaultParamsFunc(a, b, c) {
    if (c === undefined) {
        c = 4;
    }
    return a * b * c;
	};
	*/

const defaultParamsFunc = (a, b, c = 4, d) => a * b * c * d;

console.log(defaultParamsFunc(2, 3, undefined, 5));
