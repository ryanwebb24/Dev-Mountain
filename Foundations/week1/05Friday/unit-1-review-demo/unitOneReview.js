// ***** Variable ***** //
/* 
    Create a few variables that store a value of string, number, and boolean. Choose your own topic.
*/

//CODE HERE
const cool = "cool"
let num1 = 12
let bool = true


// ***** Array ***** //
/*
    Create an array of strings called 'codingLanguage' that include 4 coding language of your choice. 
*/

//CODE HERE
let codingLanguage = ["python","JavaScript","PHP","Ruby"]


/* 
    Access the 3rd element of the 'codingLanguage' array.
*/

//CODE HERE
let element3 = codingLanguage[2]

/*
    Copy the array using one of the array methods, and call it 'codingLanguage2.'
*/

//CODE HERE
// all 3 options work for copying an array 
let codingLanguage2 = [...codingLanguage]
codingLanguage2 = codingLanguage.slice() //you can add a total of 2 arguments the starting point and the amount you want to slice 
codingLanguage2 = codingLanguage.splice(0, codingLanguage.length) // 3 total arguments the starting postion, amount you want to remove and what you want to add in its place


/* 
    Add another coding language to the codingLanguage2 array.
*/

//CODE HERE
codingLanguage2.push("CSS")

// !!! Don't edit the code below !!! //
let instruments = ['piano', 'trumpet', 'xylophone', 'flute', 'cello']
// !!! Don't edit the code above !!! //

/* 
    Use a built-in array function to remove 'cello' from the instruments array.
*/

//CODE HERE
instruments.pop()


/* 
    Use a built-in array function to remove 'piano' from the instruments array
*/

//CODE HERE
instruments.shift()

/* 
    Use a built-in array function to add 'guitar' to the front of the instruments array
*/

//CODE HERE
instruments.unshift("guitar")


/* 
    Use a built-in array function to replace 'xylophone' in the instruments array to 'glockenspiel.'
*/

//CODE HERE
instruments.splice(2,1,"glockenspiel")
instruments[2] = "glockenspiel" // another great way but not what it asks when wanting you to use a array function
instruments[for(let i )]
console.log(instruments);



// ***** if-else ***** //
/* 
    Discuss the if-else statement syntax.
*/

// !!! Don't edit the code below !!! //
let num = 11;
// !!! Don't edit the code above !!! //

/* 
    Refer to the num variable above.
    If num is an even number, print num. Otherwise, print 'num is not an even number.'
*/

//CODE HERE
if (num % 2 === 0){
    console.log(num)
} else {
    console.log("num is not an even number");
}


// !!! Don't edit the code below !!! //
let score = 70;
// !!! Don't edit the code above !!! //
/* 
    Refer to the score variable above.
    Using if-else statement, determine the grade of the above score.
    If the score is less than and equal to 10, print 'Failed.'
    If the the score is between 10 and 41, print 'The grade is C.'
    If the the score is between 40 and 71, print 'The grade is B.'
    If the the score is above 70, print 'The grade is A.'
*/

//CODE HERE
if (score > 70){
    console.log("The grade is A")
} else if (score > 40){
    console.log("The grade is B")
}else if (score > 10){
    console.log("The grade is c")
}else{
    console.log("Failed")
}


// ***** For Loop ***** //
/* 
    Discuss the for loop syntax.
*/

// !!! Don't edit the code below !!! //
let price = [10, 5, 6];
// !!! Don't edit the code above !!! //

/* 
    Using for loop, calculate the total price from the 'price' array above.
*/

//CODE HERE
let totalPrice = 0
for (let i of price){
    totalPrice += i
}
console.log(totalPrice);

/* 
    Using the 'totalPrice,' find the average of 'price.'
*/
let averagePrice = totalPrice / price.length                 
console.log(averagePrice);

// !!! Don't edit the code below !!! //
let colors = ['red', 'green', 'yellow', 'red', 'green']
// !!! Don't edit the code above !!! //

/* 
    Loop through the colors array above. Then, print 'apple' if the color is red, print 'melon' if the color is green, and print 'banana' when the color is yellow.
*/

// CODE HERE
for (let i of colors){
    switch(i){
        case "red":
            console.log("apple")
            break
        case "green":
            console.log("mellon")
            break
        case "yellow":
            console.log("Banana")
            break
        default:
            break
    }
}


// ***** Software Development Life Cycle (SDLC) ***** //
/* 
    Discuss SDLC:
    -- planning
        decide what you want in the product and how it will be
    -- Analysis of Requirements
        find out what is needed and neccessary for the project and find problems 
    -- Design
        design the layout of the code working it out psuedocode and what you want it to look like drawing it out.
        color schemes fonts and other style guides 
    -- Implementation
        Begin coding and implementing the designs. logic and other important designs 
    -- Testing & Integration
        Test your application run a test server to make sure the core features work and testing the not as important features 
    -- Maintain
        maintainence is continually going on forever making sure the code is up to date and adding new features if there are bugs making sure to fix them                   
*/

// ***** Git ***** //
/* 
    Discuss:
    - Definition of:
        -- git
        -- github
        -- git init
        -- git clone
        -- git status
        -- git add
        -- git commit
        -- git push
    - How to push git to github
*/

