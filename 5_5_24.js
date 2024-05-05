// 1. Create a function that takes an array of strings as an argument and returns a string that includes the number of items in the array and the first and last items.

const strArr = ["Yash", "Arjun", "John", "Doe"];

const fn = (arr) =>
  `${arr.length} items are in the array. First Elem is ${
    arr[0]
  } and last item is ${arr[arr.length - 1]}`;

console.log(fn(strArr));

// 2. Create a function that takes a product object as an argument and returns a string that includes the product name, price, and a message based on whether it is in stock or not.

const product = {
  name: "Cycle",
  price: 6000,
  inStock: true,
};

const getProductDetails = (product) =>
  `Name: ${product?.name} | Price: ${product?.price} | ${
    !product?.inStock ? "Not In Stock" : "In Stock"
  }`;

console.log(getProductDetails(product));

// 3. Write a function findPerson that takes an array of person objects and a name as parameters and returns the object with the matching name, or null if not found.

const personArr = [
  { name: "Amay", age: 25 },
  { name: "Akhil", age: 25 },
];

const findPerson = (arrOfPerson, name) =>
  arrOfPerson?.find((person) => person?.name === name) ?? null;

console.log(findPerson(personArr, "Akhil"));

// 4. Write a function that uses destructuring to extract the first two elements from an array, and returns them in an object with keys 'first' and 'second'.

const getFirstTwoElements = ([first, second]) => ({ first, second });

console.log(getFirstTwoElements([10, 20, 30, 40, 50]));

// 5. Convert the following code to ES6+ syntax with minimum number of characters.
/* function startsWithA(str) {
  if(str.charAt(0) === 'A') {
		return true;
	} else {
		return false
	}
}
*/

const startsWithA = (str) => str.charAt(0) === "A";
console.log(startsWithA("Adesh"));

// 6. Write a function to return the last 5 characters as an array from the given array.
const arr = [0, 1, 1, 2, 3, 5, 8];

/*const getLastFiveElements = arr => {
    const arr2 = [];
    for(let i=arr.length-1;i>=0;i--) {
        if(arr2.length !== 5){
            arr2.push(arr[i]);
        } else {
            return arr2;
        }
    }
}*/

/*const getLastFiveElements = arr => {
    const newArr = [];
    for(let i = 1;i <= 5 ;i++) {
        newArr.push(arr[arr.length-i]);
    }
    return newArr;
}*/

// const func=(array)=>array.filter((_,i)=>i>array.length-6)

const getLastFiveElements = (arr) => arr.reverse().filter((item, i) => i < 5);

console.log(getLastFiveElements(arr));

//  7. Write an ES6 function to return the second element of the given array by multiplying 20 to it.

const printSecondCharacter = (arr) => arr[1] * 20;

console.log(printSecondCharacter([1, 2, 3, 5, 8]));

// 8. Write an ES6 function to return the second element of the given array by adding “Hello” before it.

const sayHello = (arr) => `Hello ${arr[1]}`;

sayHello(["Kanika", "Rakesh", "Prerana", "Puja"]);

// 9. Write an ES6 function to return sum of all numbers at even indices of the given array.

const sumOfEvenIndices = (arr) =>
  arr.reduce((acc, curr, i) => (i % 2 === 0 ? acc + curr : acc), 0);

console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25])); // 30

// 10. Write an ES6 function to return the first element which is a multiple of 5 in the given array.

const printMultipleOfFive = (arr) => arr.find((num) => num % 5 === 0);

console.log(printMultipleOfFive([7, 4, 10, 7, 5, 3])); // 10
console.log(printMultipleOfFive([7, 5, 10, 7, 15, 3])); // 5

// 11. Create a function which takes in the given object and returns another object only with the properties postalCode and city in it.

const userData = {
  name: "Jane Doy",
  postalCode: "12134",
  city: "Germany",
};

const getAddress = ({ postalCode, city }) => ({ postalCode, city });

console.log(getAddress(userData));
// {postalCode: '12134', city: 'Germany'}

// 12. Create a function which takes a product object and returns a sentence about the product using ES6 features.

const productObj = {
  name: "Apple MacBook Air 2020",
  specification: {
    capacity: "256GB",
    size: "13.3 Inch",
  },
  price: 82900,
};

const printProductDetails = ({ name, specification: { capacity, size } }) =>
  `${name} which is of ${size}, has a capicity of ${capacity}`;

console.log(printProductDetails(productObj)); // Apple MacBook Air 2020 which is of 13.3 Inch, has a capacity of 256GB.
