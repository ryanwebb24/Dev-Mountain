
function populationGrowth(pStart, percent, aug, p){
    let count = 0
    percent = percent / 100
    while(pStart < p){
        pStart += (pStart * percent) + aug
        count ++
    }
    return count
}

console.log(populationGrowth(1500, 5, 100, 5000))

function populationGrowth2(pStart, percent, aug, p){
    let count = 0
    for (let i = pStart; i < p; pStart += (pStart * (percent/100)) + aug){
        count = i
    }
    return count 
}
console.log(populationGrowth2(1500, 5, 100, 5000))

