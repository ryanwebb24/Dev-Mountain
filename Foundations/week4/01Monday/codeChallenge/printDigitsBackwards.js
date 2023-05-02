
// start by checking num % 10 and then divide that number by the number(10) minus a 0(1)(which is basicallly dividing it by 10).
// then do num % 100 and then divide that by the number by the number(100) minus a 0(10)
function printDigits(num) {
    let num2 = 10
    while (num !== 0) {
        console.log(num % num2 / (num2 / 10))
        num -= (num % num2)
        num2 *= 10
    }
}
printDigits(23457658)
