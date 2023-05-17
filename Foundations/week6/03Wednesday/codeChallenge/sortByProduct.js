
// function sortProduct(arr){
//     let newArr = []
//     for (let [index, element] of arr.entries()) {
//         newArr.push([index + 1, element])
//     }
//     return newArr.sort((num1, num2) => (num1[0] * num1[1]) - (num2[0] * num2[1])).map(x => x[1])
// }
// console.log(sortProduct([26,2,7,4,5]))

const sortProduct1 = arr => Object.entries({...arr}).sort((num1, num2) => ((+num1[0] + 1) * num1[1]) - ((+num2[0] + 1) * num2[1])).map(x => x[1])


console.log(sortProduct1([26,2,3,4,5]))