// 1. Write an ES6 function that takes an array of numbers and returns an array with each number incremented by 3 using the map method.

const incrementNumbers = (numbers) => numbers?.map(num => num + 3)

const numbers = [1, 2, 3, 4, 5];
console.log(incrementNumbers(numbers));
// Output: [4, 5, 6, 7, 8]

// 2. Write an ES6 function that takes an array of strings and returns an array with all the strings capitalised using the map method.

const capitalizeArray = arr => arr?.map(str => str?.slice(0,1).toUpperCase() + str.slice(1))

const myArray = ['apple', 'banana', 'cherry'];
console.log(capitalizeArray(myArray));

// 3. Write an ES6 function that takes an array of objects representing people and returns an array of their ages using the map method.

const getAges = (arr) => arr.map(people => people?.age)

const people = [
  { name: 'Ankit', age: 25 },
  { name: 'Vinit', age: 24 },
  { name: 'Shashi', age: 29 }
];
const ages = getAges(people);
console.log(ages); // Output: [25, 24, 29]

// 4. Write an ES6 function that takes an array of objects representing products and returns an array with the product names in all lower case letters using the map method.

const getProductNamesInLowerCase = (products) => products?.map(({name}) => name.toLowerCase())

const products = [
  { name: 'Lip Balm', stock: 100 },
  { name: 'PERFUME', stock: 400 },
  { name: 'Socks', stock: 200 }
];
console.log(getProductNamesInLowerCase(products));
// Output: ["lip balm", "perfume", "socks"]

// 5. Write an ES6 function that takes an array of numbers and returns an array with only the numbers that are divisible by 3 and also by 5.

const isDivisibleBy3and5 = (numbers) => numbers?.filter(num => num % 3 === 0 && num % 5 === 0);

const numbers2 = [1, 2, 30, 4, 15];
console.log(isDivisibleBy3and5(numbers2));
// Output: [30, 15]

// 6. Write an ES6 function that takes an array of objects with the properties name and age, and returns an array with only the objects that have an age greater than 30.


const filterByAge = (people) => people?.filter(people => people?.age > 30)

const people2 = [
  { name: 'Rahul', age: 25 },
  { name: 'Raj', age: 35 },
  { name: 'Vijay', age: 45 }
];

console.log(filterByAge(people2)); 
// Output: [{ name: 'Raj', age: 35 }, { name: 'Vijay', age: 45 }]

// 7. Write an ES6 function that takes an array of objects with the properties name and score, and returns an array with only the objects that have a score greater than 80.

const filterByScore = students => students?.filter(std => std?.score > 80)

const students = [
  { name: 'Aditya', score: 85 },
  { name: 'Bob', score: 75 },
  { name: 'Charlie', score: 90 }
];

console.log(filterByScore(students)); 
// Output: [{ name: 'Aditya', score: 85 }, { name: 'Charlie', score: 90 }]

// 8. Write an ES6 function that takes an array of objects with the properties name, age and city, and returns an array with only the objects that have a city property of "Indore" and age greater than 70.

const filterByCityAndAge = (people) => people?.filter(p => p?.city === "Indore" && p?.age > 70)

const people3 = [
  { name: 'Ridhima', age: 75, city: 'Indore' },
  { name: 'Akshay', age: 60, city: 'Delhi' },
  { name: 'Udit', age: 80, city: 'Indore' },
	{ name: 'Venki', age: 80, city: 'Bangalore' }
];
const filteredPeople = filterByCityAndAge(people3);
console.log(filteredPeople); 
// Output: [{ name: 'Ridhima', age: 75, city: 'Indore' }, { name: 'Udit', age: 80, city: 'Indore' }]

// 9. Write an ES6 function that takes an array of objects containing book information (title, author, genre) and returns an array with only the books of "Science Fiction".

const books = [
  {title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction"},
  {title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction"},
  {title: "1984", author: "George Orwell", genre: "Science Fiction"},
  {title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance"}
];
const filterByGenre = (books, fiction) => books?.filter(book => book?.genre === fiction)
const filteredBooks = filterByGenre(books, "Science Fiction");
console.log(filteredBooks);
// Output: [{title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction"}, {title: "1984", author: "George Orwell", genre: "Science Fiction"}]

// 10. Write an ES6 function that takes an array of objects containing employee information (name, age, salary) and returns an array with only the employees who earn a salary above 22000 and age is above 25.

const employees = [
  {name: "Abhay", age: 25, salary: 20000},
  {name: "Joice", age: 30, salary: 35000},
  {name: "Reena", age: 35, salary: 15000},
  {name: "Jeena", age: 40, salary: 50000}
];
const filterBySalary = (employees, salary, age) => employees?.filter(emp => emp?.salary > 22000 && emp?.age > 25)
const filteredEmployees = filterBySalary(employees, 22000, 25);
console.log(filteredEmployees);
// Output: [{name: "Joice", age: 30, salary: 35000}, {name: "Jeena", age: 40, salary: 50000}]