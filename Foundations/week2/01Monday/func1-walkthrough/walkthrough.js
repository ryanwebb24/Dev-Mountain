let pikachuHp = 100
let ridonHp = 120

let theWinnerIs = `The winner is: Pikachu!`

theWinnerIs = theWinnerIs.replace("Pikachu", "Ridon")

if(theWinnerIs.includes("Pikachu")){
    console.log("Pikachu is swag");
} else {
    console.log("Pikachu, you let me down...");
}

// option 1
let kebabCase = theWinnerIs.replace(":","").replace("!","").split(" ").join("-").toLowerCase()
// option 2 
// kebabCase = kebabCase.replaceAll(" ", "-")
console.log(kebabCase);

