
function smallestDifference1(arr1, arr2) {
    let smallest = Math.abs(arr1[0] - arr2[0])
    for(let i in arr1) {
        for (let j in arr2){
            if (Math.abs(arr1[i] - arr2[j]) < smallest){
                smallest = Math.abs(arr1[i] - arr2[j])
            }        
        }
    }
    return smallest
}

console.log(smallestDifference1([32, 20, 14, 16, 18],[30, 23, 54, 33, 96]))











function smallestDifference2(arr1, arr2){
    arr1.sort();
    arr2.sort();
    let a = 0;
    let b = 0;
    let result = Number.MAX_SAFE_INTEGER; // (2^53) - 1
    while(a < arr1.length && b < arr2.length){
      if(Math.abs(arr1[a] - arr2[b]) < result){
      
        result = Math.abs(arr1[a] - arr2[b]);
      }
      if (arr1[a] < arr2[b]) {
        a++;
      } else{
        b++;
      }
    } return result;
}

console.log(smallestDifference2([10, 20, 14, 16, 18],[30, 23, 54, 33, 96]))