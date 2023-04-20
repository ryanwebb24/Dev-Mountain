////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
const add = (num1, num2) => num1 + num2
const subtract = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => num1 / num2

const calculator = (callBack, num1, num2) => {
  if (!isNaN(+num1) && !isNaN(+num2)) {
    num1 = +num1
    num2 = +num2
    let callbackResult = callBack(num1, num2)
    return callbackResult
  } else{
    return "Give me two valid numbers"
  }
}

console.log(calculator(add, 1, 5))
console.log(calculator(subtract, 2, 6))
console.log(calculator(multiply, 5, 2))
console.log(calculator(divide, 4, 2))
///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE
const applyPercentDiscount = (product, discount) => {
  product.displayPrice = Math.round((product.basePrice * (1 - discount)) * 100) / 100
}

const applyFlatDiscount = (product, discount) => {
  product.displayPrice = Math.round((product.basePrice - discount) * 100) / 100
}

// this function takes a list of products and a discount function and the discount 
function applyDiscounts(products, discountType,discountAmount, catergory) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].catergory === catergory) {
      discountType(products[i], discountAmount)
    }
  }
}

applyDiscounts(dogProducts, applyPercentDiscount, 0.25, 1)
applyDiscounts(catProducts, applyFlatDiscount, 1.1, 2)

console.log(dogProducts)
console.log(catProducts)
////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE
