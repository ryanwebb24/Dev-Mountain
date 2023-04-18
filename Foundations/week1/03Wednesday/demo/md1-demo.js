let jonSAttack = 25;
let jamieLAttack = 35;

if (jonSAttack > jamieLAttack) {
  console.log("Jon has better attack");
} else if (jamieLAttack > jonSAttack) {
  console.log("jamie has better attack");
} else {
  console.log("they have the same attack");
}

let jonSHealth = 100;
let jonSDefense = 0;
let jamieLHealth = 100;
let JameLDefense = 0;

if (jonSHealth <= jamieLAttack) {
  console.log("jon has been slain.");
} else {
  jonSHealth -= jamieLAttack;
  console.log(`jon's health is down to ${jonSHealth}`);
}
let coinLandsHead = Math.random();
if (coinLandsHead < 0.5) {
  coinLandsHead = 0;
} else {
  coinLandsHead = 1;
}

console.log(coinLandsHead);

if (coinLandsHead === 1) {
  console.log("The fight continues");
} else {
  console.log("Jon is allowed to runaway");
}

for (let i = 0; i < 5; i++) {
  if (jonSHealth <= 0) {
    console.log("Jon has been slain");
  } else {
    jonSHealth -= jamieLAttack;
    console.log(`Jon's health is ${jonSHealth}`);
  }
}

while (jonSHealth > 0) {
  jonSHealth -= jamieLAttack;
  console.log(`Jon's health is ${jonSHealth}`);
  if (jonSHealth <= 0) console.log("Jon has been slain");
}
