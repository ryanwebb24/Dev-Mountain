//this is a outer function or higher order function
function outer(cbf) {
  cbf();
}

//this is the inner function or callback function
function inner() {
  console.log("This is the callback(inner) function");
}

outer(inner);

let nums = [1, 2, 3, 4, 5];
//regular for loop
console.log("---------\nFOR LOOP\n---------");
for (let i in nums) {
  console.log(nums[i], `is at index: ${i}`);
}
console.log("---------\nFOR EACH\n---------");
// .forEach()
let sum = 0;
nums.forEach((num, index) => console.log(`${num} is at index: ${index}`));
nums.forEach((num) => (sum += num));
console.log(sum);
// .map()
let nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// prints a new array with the array multiplied by 2
console.log(nums2.map((num, index) => [num, index]));

// .filter()
let numsArr = [2, 45, 3, 123, 56, 8, 9, 33];
// filet the numsArr to get odd numbers
let numsOdd = numsArr.filter((num) => num % 2 === 1);
console.log(numsOdd);
const cars = [
  { name: "honda civic", price: 30000 },
  { name: "toyota corolla", price: 35000 },
  { name: "kia rio", price: 25000 },
  { name: "tesla x", price: 60000 },
  { name: "honda pilot", price: 45000 },
  { name: "chevy bolt", price: 40000 },
  { name: "ford focus", price: 20000 },
];

let expensiveCars = cars.filter((car) => car.price >= 30000);
let hondaCars = cars.filter((car) => car.name.includes("honda"));
console.log(expensiveCars);
console.log(hondaCars);

// .reduce()
let numArray = [3, 1, 2, 5];

let reduced = numArray.reduce(
  (accumulator, curentValue) => accumulator + curentValue
);

console.log(reduced);
