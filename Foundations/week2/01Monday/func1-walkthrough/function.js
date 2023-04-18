let pikachuHp = 100;
let pikachuAttack = 30;

let ridonHP = 120;
let ridonAttack = 26;

function isAlive(defenderHp) {
  if (defenderHp > 0) {
    return true;
  }
  return false;
}
const attack = (defenderHp, attackerAttack) => defenderHp - attackerAttack;
const DiceRollMaker = () => Math.floor(Math.random() * 6 + 1);
const diceRoll = DiceRollMaker();

for (let i = 0; i <= diceRoll; i++) {
  console.log("Ridon Attacks Pikachu");
  if (isAlive(pikachuHp)) {
    pikachuHp = attack(pikachuHp, ridonAttack);
    console.log(`Pikachu hp is at: ${pikachuHp}`);
  } else {
    console.log(`After ${i + 1} attack(s), Pikachu has lost`);
    break;
  }
}

if (isAlive(pikachuHp)) {
  console.log("Pikachu Lives!");
} else {
  console.log("Pikachu is no more.");
}
