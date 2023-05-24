
function romanNumeral(num){
    let final = ""
    const romanNum = {
        1000: "M",
        500: "D",
        100: "C",
        50: "L",
        10: "X",
        5: "V",
        1: "I"
    }

    for (let key in romanNum){
        console.log(key);
        let remainder = num % key
        if (remainder < num){
            num -= remainder
            for(let i = 0; i < ((num - remainder) / key); i++){
                final += romanNum[key]
            }
        }
    }
    return final
}

romanNumeral(656)

console.log(656 % 1000);
