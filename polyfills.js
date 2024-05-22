// Map

// [1,2,3].map((item) => {
// return item * 10
// })

const customMap = (arr, callback) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const resultToPush = callback(arr[i], i, arr);
    newArr.push(resultToPush);
  }

  return newArr;
};

const result = customMap([1, 2, 3, 4, 5], (item) => {
  return item * 10;
});
console.log(result);

// Filter

const customFilter = (arr, callback) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

const filterRes = customFilter([1, 2, 44, 3, 20, 19], (item, i) => item > 15);
console.log(filterRes);

// Find
Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
};

// const c = a.myFilter((item) => item > 2);
// console.log(c);

// Reduce

const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((acc, curr) => {
  return acc + curr;
});

const arr2 = [{ price: 10 }, { price: 20 }, { price: 30 }];

Array.prototype.myreduce = function (callback, initial) {
  //   const intialValue = initial ?? this[0];
  let acc = initial ?? this[0];
  //   console.log("ACC", acc);
  for (let i = typeof initial === "undefined" ? 1 : 0; i < this.length; i++) {
    acc = callback(acc, this[i], i);
  }

  return acc;
};

const sum2 = arr2.myreduce((acc, curr) => {
  return acc + curr?.price;
}, 0);

console.log(sum2);
