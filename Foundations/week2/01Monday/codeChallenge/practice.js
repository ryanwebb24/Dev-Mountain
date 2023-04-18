//easy way
let newArray = [1, 4, 11, 2, 37, -4]
let sortedArray = newArray.sort((a,b) => a - b) // this sorts in terms of the function which compares a to b
let rangeArray = [sortedArray[0], sortedArray[sortedArray.length -1]]
console.log(rangeArray)

//looping way
let smallest = newArray[0]
let largest = newArray[0]

for (let i of newArray){
    if (i < smallest){
        smallest = i
    } else if (i > largest){
        largest = i
    }
}
console.log(smallest, largest)