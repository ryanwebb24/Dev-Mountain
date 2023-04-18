
let arr1 = [1,4,11,2,37,-4]


function addToZero(arr){
    for(let i = 0; i < arr.length; i++){
        if (arr.includes(-1 * arr[i])){
            return true
        }
    }
    return false
}

console.log(addToZero(arr1))
