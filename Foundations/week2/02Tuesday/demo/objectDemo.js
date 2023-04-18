const person = {
    firstName: "Peter",
    lastName: "Parker",
    age: "67",
    homeTown: "Lehi",
    hobbies: ["fishing","running","camping"],
    favMovie: {
        name: "SpiderMan",
        rating: 5,
        year: "2000"
    },
    favFoods: [
        {
            name: "Pizza",
            size: "large",
            toppings: ["pepperoni","sausage","cheese"]
        },
        {
            name: "Noodles",
            size: "large",
            toppings: ["alfredo","sausage"]
        }
    ]
}
//option1 for calling a propety dot notation
let movie = person.favMovie.name
//option2 bracket notation
movie = person["favMovie"]["name"]
console.log(movie);
// destructuring 
let {firstName} = person
console.log(person);
// adding properties
person.favColor = "red"
person["favColor"] = "blue"
//deleting an element 
delete person.favColor

// creating a class (the object factory) use uppercase
class Dog{
    constructor(name, breed, age){
        this.name = name
        this.breed = breed
        this.age = age
    }
    greeting(){
        console.log(`Hello my name is ${this.name}. I am a ${this.breed}. I am ${this.age} years old`);
    }
}
// creating instances of class Dog
let dog1 = new Dog("lassie", "collie", 5)
let dog2 = new Dog("John", "lab", 8) 
dog2.greeting()
// For loops 
for (let key in dog1){
    console.log(dog1[key])
}
// extending classes
class Puppy extends Dog{
    constructor(name, breed, age, trainingLevel){
        super(name, breed, age)
        this.trainingLevel = trainingLevel
    }
    levelUp(num){
        this.trainingLevel += num
    }
}

let puppy1 = new Puppy("jane", "husky", 3, 20)
puppy1.levelUp(5)
console.log(puppy1);