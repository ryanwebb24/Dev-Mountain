let arr = [3,2,4]
let num = 6

var twoSum = function(nums, target) {
    let obj = {...nums}
    let answer = []
        for (let i in obj){
            if (Object.values(obj).includes(target - obj[i])){
                answer.push(+i)
            }
        }
    return answer
};


console.log(twoSum(arr, num));