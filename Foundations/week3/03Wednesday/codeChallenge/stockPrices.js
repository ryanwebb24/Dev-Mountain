
function best(stockArr){
    const sorted = stockArr.slice().sort((a,b) => a - b)
    if (stockArr.indexOf(sorted[0]) < stockArr.indexOf(sorted[sorted.length - 1])){
        return `${sorted[sorted.length - 1] - sorted[0]} - buy at $${sorted[0]}, sell at $${sorted[sorted.length - 1]}`
    } else if (stockArr.indexOf(sorted[sorted.length - 1]) === 0){
        return "0"
    } else {
         const newSorted = stockArr.slice(0,stockArr.indexOf(sorted[sorted.length - 1]) + 1).sort((a,b) => a - b)
         console.log(newSorted);
           return `${newSorted[newSorted.length - 1] - newSorted[0]} - buy at $${newSorted[0]}, sell at $${newSorted[newSorted.length - 1]}`
    }
}
//console.log(best([5,9,8,10,3,1,]))

function best2(stockArr){
    const sorted = stockArr.slice(0, stockArr.indexOf(Math.max(...stockArr)) + 1).sort((a,b) => a - b)
    if (sorted.length === 1){
        return "0"
    }else {
        return `${sorted[sorted.length - 1] - sorted[0]} - buy at $${sorted[0]}, sell at $${sorted[sorted.length - 1]}`
    }
}

console.log(best2([7,4,8,3,1,10]))