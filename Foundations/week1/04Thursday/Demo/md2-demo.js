let backPack = [];
let saddleBag = [];
let belt = [];
let furCoat = "Fur Coat";
let equippedItems = [];

backPack.push("Sword", "Shield", "Food");

let firstItem = backPack.shift();

belt.push(firstItem);
backPack.unshift(furCoat);
equippedItems.push(...backPack.splice(0, 1));
backPack.push("Flint", "Blanket", "Knife", "Toothbrush");
saddleBag.push(...backPack.splice(2, 3));

let backPackCount = backPack.length;

backPack.push("Nintendo Switch", "Torch");

//console.log(` Backpack items(${backPackCount}): ${backPack}\n`, `Belt: ${belt}\n`,`Equipped: ${equippedItems}`,`Saddle Bag: ${saddleBag}`)
for (let item of backPack) {
  if (backPack.indexOf(item) >= 2) {
    let overflow = backPack.splice(backPack.indexOf(item));
    saddleBag.push(...overflow);
  }
  console.log(item);
}

let firstThree = saddleBag.slice(0, 3);
let lastThree = saddleBag.slice(saddleBag.length - 3);
console.log(firstThree, lastThree);

console.log("------");
for (let item of saddleBag) {
  console.log(item);
}

let guessMe = 54;
let count = 0;
console.log("-----");

while (guessMe < 150) {
  if (guessMe % 4 === 0 || guessMe === 0) {
    guessMe += 25;
  } else if (guessMe % 3 === 0) {
    guessMe -= 27;
  } else {
    guessMe += 3;
  }
  guessMe += 22;
  count++;
}
console.log(`Final number is: ${guessMe}`, `The loop ran ${count} times`);
