
function giftGuess(wish, pres) {
    let presentGuess = []
    for (let present of pres) {
        wish.filter(gift => {
            if (gift.size === present.size && gift.clatters === present.clatters && gift.weight === present.weight){
                presentGuess.push(gift.name)
            }
        })
    }
    return presentGuess
}

var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];
var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

console.log(giftGuess(wishlist, presents))