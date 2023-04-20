

let testStr = "Bob"
function hasUniqueChars(str){
    for (let i in str){
        for (let j in str){
            if (str[i] === str[j] && !(i === j)){
                return false
            }
        }
    }
    return true
}


console.log(hasUniqueChars(testStr));