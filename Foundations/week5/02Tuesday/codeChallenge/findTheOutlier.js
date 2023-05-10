const outlier = (arr) =>
  arr.filter((num) => num % 2 === 0) > arr.filter((num) => num % 2 === 1)
    ? arr.filter((num) => num % 2 === 0)
    : arr.filter((num) => num % 2 === 1);

function outlier1(arr) {
  let odd = arr.filter((num) => num % 2 === 0);
  let even = arr.filter((num) => num % 2 === 1);
  if (even.length > odd.length) {
    return odd[0];
  } else {
    return even[0];
  }
}

// function outlier2 (arr){
//     let outlier = {"odd": "", "even": ""}
//     for (let i in arr){
//         if
//     }
// }
