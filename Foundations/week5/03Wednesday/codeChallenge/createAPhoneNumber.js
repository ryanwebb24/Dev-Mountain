
function createPNumber(arr){
    return `(${arr.splice(0,3).join('')}) ${arr.splice(0,3).join('')}-${arr.splice(0,4).join('')}`
}

console.log(createPNumber([8,0,1,4,4,4,5,5,5,5]))


function createPNumber1(arr){
    let template = `(xxx) xxx-xxxx`
    for (let i in arr){
        template = template.replace('x', arr[i])
    }
    return template
}

console.log(createPNumber1([8,0,1,4,4,4,5,5,5,5]))