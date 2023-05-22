
function timeWords(str) {
    let final = ""
    let [hour, minute] = str.split(":")
    hour = +hour
    minute = +minute
    let period = ""
    let numWord = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety"
    }
    // checks if its am or pm
    if (hour > 11){
        if (hour !== 12){
            hour -= 12
        }
        period = "pm"
    } else{
        period = "am"
    }
    // sets the hour of the final str
    final += numWord[hour]
    // checks if the minute is 0 and if the hour is 12 or 0 then it will return its time else it will add o'clock to the end of the final
    if (minute === 0){
        if (hour === 12) {
            return "noon"
        } else if(hour === 0){
            return "midnight"
        } else {
            final += " o'clock"
        }
    // if the minute is in less then 10 it will add the oh 
    }else if (minute < 10){
        final += ` oh ${numWord[minute]}`
    // if the minute is in the teens it will just add it to the final
    }else if (minute < 20){
        final += numWord[minute]
    //
    } else {
        let [tens, ones] = String(minute).split("")
        final += ` ${numWord[+tens * 10]} ${numWord[+ones]}`
    }
        
        return `${final} ${period}`
}


console.log(timeWords("12:00"))