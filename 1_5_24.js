// 1. Create an object person with two properties, "name" and "age" and then updates the "age" property to a new value. Initial age should be 30.

const person = {
    name: "XYZ",
    age: 30
}

person.age = 31;
console.log(person);

// 2. Write a function that takes an object car and returns true if the car is a sports car (i.e. has a horsepower property greater than or equal to 300)

const isSportCar = (car) => car.horsePower >= 300;

const car1 = {
    name: "Fortuner",
    horsePower: 204
}
const car2 = {
    name: "Mustang GT",
    horsePower: 660
}

console.log(isSportCar(car1))
console.log(isSportCar(car2))

// 3. Write a function that takes an object person and a number num as arguments and returns true if the person's age plus num is greater than or equal to 21. Otherwise, it should return false.


const person1 = {
    name: "Jack",
    age: 15
}

const fn = (person,num) => person.age + num >= 21;
console.log(fn(person1,5));


// 4. Write a function that takes an object blog and returns true if the blog has more than 1000 views (i.e. has a views property greater than 1000)

const blog1 = { title: `How to learn JavaScript`, author: `John Doe`, views: 1430 };

const blog2 = { title: `Why should write a blog`, author: `Jane Smith`, views: 500 };

const doesBlogHaveMoreThan1000Pages = (blog) => blog?.views >= 1000;

console.log(doesBlogHaveMoreThan1000Pages(blog1));
console.log(doesBlogHaveMoreThan1000Pages(blog2));


// 5. Swap the values of two variables using array destructuring.
let a = 1;
let b = 2;

[a , b] = [b , a];
console.log(a, b);

// 6. Convert this function into ES6 with least amount of characters.

/* function add(a = 30, b = 0) {
  return a + b;
}*/

const add = (a=30,b=0) => a + b;

// 	7. Write an ES6 function combineObjects with least amount of characters which merges two objects into one.

const combineObjects = (obj1, obj2) => ({...obj1, ...obj2});

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

console.log(combineObjects(obj1,obj2));

// 8. Convert the function getData, into an ES6 function with least amount of characters. 

// Hint: Destructuring

/* getData(person) {
const name = person.name;
const address = person.address.city
console.log(name); // John Doe
console.log(address); // New York
}*/

const getData = ({name, address: {city:address}}) => {
    console.log(name);
    console.log(address);
}

const person2 = {
    name: "Tom",
    address: {
        city: "New York"
    }
}

getData(person2);

// 9. Write a function that takes a string as input and returns the string in all uppercase letters.

const getUpperCase = (str) => str.toUpperCase();
console.log(getUpperCase("yash"));

// 10. Write a function that takes two strings as input and concatenates them together.

const addStrings = (str1, str2) => str1 + str2;
console.log(addStrings("Mr ", "Bean"));

// 11. Write a function that takes an array and returns the last element in the array.
const getLastElemOfAnArray = (arr) => arr[arr.length - 1]; 

console.log(getLastElemOfAnArray([1,2,3,6,8]));

// 12. Write a function that takes an array and returns the first element of the array.

const getFirstElemOfAnArray = (arr) => arr[0];
console.log(getFirstElemOfAnArray([8,6,3,2,1]));

// 13. Write a function that takes an array and a number and returns the sum of first element and the number.

const getSumOfFirstAndLastElem = (arr) => arr[0] + arr[arr.length-1];
console.log(getSumOfFirstAndLastElem([8,6,3,2,1]));

// 14. Write a function that takes an object representing a person's information (name, age, occupation) and returns a template literal that includes the person's name and age in a sentence.

const person3 = { name: `John`, age: 25, occupation: `Software Developer` };
const person4 = { name: `Jane`, age: 45, occupation: `Data Analyst` };

const getDetails = ({name,age,occupation}) => `Name: ${name} | Age: ${age} | Occupation: ${occupation}`;
console.log(getDetails(person3));
console.log(getDetails(person4));