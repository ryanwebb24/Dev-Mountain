
function decodeString(str){
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let shift = +str[0]
    let strArray = str.split('').splice(1)
    return strArray.map(letter => alphabet[(alphabet.indexOf(letter) + shift) % 26]).join('')
}

console.log(decodeString('2fcjjm'))

