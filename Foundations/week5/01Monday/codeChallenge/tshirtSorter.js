
function shirtSorter(str){
    let shirtArr = str.split('')
    let filtered = shirtArr.filter(letter => letter === 's')
    .concat(shirtArr.filter(letter => letter === 'm'))
    .concat(shirtArr.filter(letter => letter === 'l')).join('')
    return filtered
}

console.log(shirtSorter('smllmsslmsmslsmslmslmslsmlsmlmslsmslms'))