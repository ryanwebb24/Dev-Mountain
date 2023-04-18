
let nums = [2,3,4,7,9,0]
let target = 9
let numbers = []

for (let i in nums){
    for (let j in nums){
        if (nums[i] + nums[j] === target){
            if (!(numbers.includes(j))){
                numbers.push(i, j)
            }
        }
    }
}
numbers = numbers.map(function(str){
    return parseInt(str)
})
console.log(numbers)