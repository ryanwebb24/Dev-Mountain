
function luckyNumbers(num){
    let arr = [1,2,3,4,5,6,7,8,9,10]
    let newArr = []
    while (newArr.length < num){
        let randNum = Math.floor(Math.random() * 10)
        if (!(newArr.includes(arr[randNum]))){
            newArr.push(arr[randNum])
        }
    }
    return newArr
}

console.log(luckyNumbers(5));    