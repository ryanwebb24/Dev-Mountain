function towerBuilder (num) {
    let tower = []
    for (let i = 1; i <= num; i++){
        let stars = "*".repeat(2 * i - 1)
        let spaces = " ".repeat(num - i)
        let floor = spaces + stars + spaces
        tower.push(floor)
    }
    return tower
}
// console.log(towerBuilder(3));

let newTower = towerBuilder(3)
console.log('[');
for (let i of newTower){
    console.log(`'${i}',`)
}
console.log(']');