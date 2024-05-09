// 1. Write an ES6 function which takes out the names of the students whose first letter starts with ‘A’.

const studentName = ["Ram", "Anjali", "Arpit", "Bhanu Kumar", "Jaya", "Ankit", "shayam"]

const filteredStudentsNames = (names) => names?.filter(name => name?.startsWith("A"));

console.log(filteredStudentsNames(studentName));
// [ 'Anjali', 'Arpit', 'Ankit' ]

// 2. Write an ES6 function which filters out the products which have a price greater than 40.

const productData = [
		{prodName: "Dairy Milk", price: 10},
		{prodName: "Dairy Milk Silk", price: 70},
		{prodName: "Five Star", price: 20},
		{prodName: "Mars", price: 50}
];

const getProducts = data => data?.filter((prod) => prod?.price > 40)

console.log(getProducts(productData, 40));
// [{prodName: 'Dairy Milk Silk', price: 70}, {prodName: 'Mars', price: 50}]

// 3. Write an ES6 function that takes an array of numbers and returns the first number that is divisible by 7.

const numbers = [1, 2, 3, 21, 14, 7];

const getFirstNumDivisibleBy7 = (numbers) => numbers?.find(num => num % 7 === 0)

console.log(getFirstNumDivisibleBy7(numbers));
// 21


// 4. Write an ES6 function that takes an array of strings and returns the first string that is longer than 8 characters.

const names = ["Mohan", "Anjali", "Geetanjali", "Ankit", "Bhanu Kumar", "Ramakrishnan",  "shayam"];
const getNameLongerThan8Chars = (names) => names.find(name => name?.length > 8);
console.log(getNameLongerThan8Chars(names));
// Geetanjali

// 5. Write an ES6 function that takes an array of objects representing students with properties name and grade. Return the first student object that has a grade of "A".

const students = [
  { name: "John", grade: "B" },
  { name: "Mary", grade: "A" },
  { name: "Sam", grade: "C" },
  { name: "Sarah", grade: "A" },
];

const findStudentWithGradeA = students => students?.find(std => std?.grade === "A")
const studentWithGradeA = findStudentWithGradeA(students);
console.log(studentWithGradeA); 
// Output: { name: "Mary", grade: "A" }

// 6. Write an ES6 function that takes an array of objects representing students with properties name, grade and scholarship. Return the first student object that has a grade of "A" or they are a scholarship student.

const students2 = [
  { name: "John", grade: "B", scholarship: false },
  { name: "Mary", grade: "B", scholarship: true },
  { name: "Sam", grade: "A", scholarship: false },
  { name: "Sarah", grade: "A", scholarship: true },
];

const findStudent = (students) => students?.find(std => std?.grade === "A" || std?.scholarship)

const student = findStudent(students2);
console.log(student); 
// Output: { name: "Mary", grade: "B", scholarship: true }


// 7. Write an ES6 function that takes an array of objects containing Bollywood movie information (title, director, year, rating) and returns an array with only the movie titles that were made before 1990 and has a rating above 8.0. (Question Level: tough)

const bollywoodMovies = [
  { title: 'Sholay', director: 'Ramesh Sippy', year: 1975, rating: 8.2 },
  { title: 'Amar Akbar Anthony', director: 'Manmohan Desai', year: 1977, rating: 7.6 },
  { title: 'Namak Halaal', director: 'Prakash Mehra', year: 1982, rating: 7.4 },
  { title: 'Mr. India', director: 'Shekhar Kapur', year: 1987, rating: 7.8 },
  { title: 'Qayamat Se Qayamat Tak', director: 'Mansoor Khan', year: 1988, rating: 7.6 },
  { title: 'Parinda', director: 'Vidhu Vinod Chopra', year: 1989, rating: 8.1 },
  { title: 'Dil', director: 'Indra Kumar', year: 1990, rating: 7.8 }
];

const getBestOldBollywoodMovies = movies => movies?.filter(movie => movie?.year < 1990 && movie?.rating > 8.0)?.map(movie => movie?.title);

const bestOldMovies = getBestOldBollywoodMovies(bollywoodMovies);
console.log(bestOldMovies); // Output: ['Sholay', 'Parinda']

// 8 Write an ES6 function that takes an array of objects representing cars with properties make, model, and year. Return the first car object that is a Toyota and the year is after 2010.

const cars = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];

const findToyotaCar = cars => cars?.find(car => car?.make === "Toyota" && car?.year > 2010)
const toyotaCar = findToyotaCar(cars);
console.log(toyotaCar); 
// Output: { make: "Toyota", model: "Camry", year: 2015 }


// 9. Write an ES6 function that takes an array of numbers and returns the sum of all the even numbers in the array using the reduce function.

const numbers2 = [12, 23, 4, 2, 11, 21] 
// Your code here

const sumOfEvenNumbers = numbers => numbers?.reduce((acc,curr) => curr % 2 === 0 ? acc + curr : acc ,0)

console.log(sumOfEvenNumbers(numbers2))
// Output: 18

// 10. Write an ES6 function that takes an array of objects representing students with properties name and score, and returns the average score of all the students using the reduce function.

const students3 = [
  { name: 'John', score: 80 },
  { name: 'Jane', score: 90 },
  { name: 'Bob', score: 75 },
  { name: 'Alice', score: 85 },
];

// Your code here
const getAverageScore = students => students?.reduce((acc,curr) => acc + curr.score ,0)/students?.length
console.log(getAverageScore(students3)); 
// Output: 82.5

// 11. Write an ES6 function that takes an array of strings and returns a single string that is the concatenation of all the strings using the reduce function.

const strings = ['Hello', ' ', 'world', '!'];
// Your code here

const concatenateStrings = strings => strings?.reduce((acc,curr) => acc + curr)

console.log(concatenateStrings(strings)); 
// Output: "Hello world!"


// 12. Write an ES6 function that takes an array of numbers and returns the minimum number using the reduce function.

const numbers4 = [10, 5, 8, 3, 6];

// Your code here
const getMinimumNumber = (numbers) => numbers?.reduce((acc,curr) => acc > curr ? curr : acc);
console.log(getMinimumNumber(numbers4)); 
// Output: 3

