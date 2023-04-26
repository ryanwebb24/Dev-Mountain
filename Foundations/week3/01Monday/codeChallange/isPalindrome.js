// Write your code below
const isPalindrom = word => word.toLowerCase() === word.split('').reverse().join('').toLowerCase()
 
console.log(isPalindrom("tacocat"))