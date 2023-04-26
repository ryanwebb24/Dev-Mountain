
function hasMoreVowels(word){
    let vowels = ["a","e","i","o","u"]
    let hasVowels = []
    let hasConsonants = []
    for (let letter of word){
        if(vowels.includes(letter.toLowerCase())){
            hasVowels.push(letter)
        }else{
            hasConsonants.push(letter)
        }
    }
    return [hasVowels.length > hasConsonants.length, hasVowels]
}

console.log(hasMoreVowels("moOse"))

