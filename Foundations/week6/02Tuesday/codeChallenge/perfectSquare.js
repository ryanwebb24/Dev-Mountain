
function perfectSquare(num) {
    let sqrt = Math.sqrt(num)
    if (Number.isInteger(sqrt)){
        return (sqrt + 1) ** 2
    }
    return -1
}

console.log(perfectSquare(16));


const perfectSquare2 = num => Number.isInteger(Math.sqrt(num)) ? (Math.sqrt(num) + 1) ** 2: -1

console.log(perfectSquare2(2));