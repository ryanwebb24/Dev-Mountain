function quadratic(a,b,c) {
   return [((-1*b) + Math.sqrt((b * b)-(4*a*c)))/(2*a) , ((-1*b) - Math.sqrt((b * b)-(4*a*c)))/(2*a)]
}


console.log(quadratic(5,6,1))

function hello(a,b){
    return [a, b]
}
console.log(hello("hello","World"))

// example of an object
const dog = {
    name: "joe",
    color: "brown",
    hunger: 40,
    mood: "happy",
    age: 12,
    bark: function(){
        console.log("woof");
    }
}
// calling a objects method
dog.bark()
// assigning a varibale to a objects property
let dogAge = dog.age
console.log(dogAge);
// object destucturing
let {color: joeColor} = dog
console.log(joeColor);

// creating classes
class Dog{
    constructor(name, color){
        this.name = name
        this.color = color
    }
}
// Creating an extended class from the existing class
class Puppy extends Dog{
    constructor(name){
        super(name,color)
    }
}
let dog1 = new Dog("joe","brown")
let puppy1 = new Puppy("frank")

