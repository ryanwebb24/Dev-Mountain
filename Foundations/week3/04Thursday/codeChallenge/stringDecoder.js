
function decoder(code){
    let finalStr = code.split('')
    for (let i in finalStr){
        if (typeof +finalStr[i] === 'number'){
                let num = +finalStr[i]
                while(num >= 0){
                    finalStr.splice(num, 1)
                    num--
                }
    }
    finalStr.join('')
    return(finalStr)
}
}
console.log(decoder('0h2xce5ngbrdy'))

