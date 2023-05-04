
const makeUniq = str => str.split('').reduce((acc, curr) => acc.includes(curr) ? acc: curr === ' ' ? acc: acc + curr)



console.log(makeUniq('hello world'))