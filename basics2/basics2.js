console.log("Basics 2");

//Ternary Operator
// condition ? expr1 : expr 2

let isUserValid = (Boolean) => {
    return Boolean;
}

let answer = isUserValid(true) ? "You may enter" : "Acces denied";

let automatedAnswer = "Your  account # is " + (isUserValid(false) ? "1234" : "Not available")
console.log(automatedAnswer)

// Switch statement
let moveCommand = (direction) => {
    let whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "You encounter a monster";
            break;
        case "back":
            whatHappens = "You arrived home";
            break;
        case "right":
            whatHappens = "You found a river";
        case "left":
            whatHappens = "You ran into a troll";
            break;
        default:
            whatHappens = "Please enter a valid direction";
    }
    return whatHappens;
}

console.log(moveCommand("forward"));
console.log(moveCommand("back"));
console.log(moveCommand("right"));
console.log(moveCommand("left"));
console.log(moveCommand("up"));

// ECMAScript 6
//let and const (no more var)
// Destructuring
const obj = {
    player: "bobby",
    experience: 100,
    wizardLevel: false
}
const { player, experience } = obj;
let { wizardLevel } = obj;

console.log(player, experience, wizardLevel);

// Object Properties
const name = "John Snow"

const newObj = {
    [name]: "hello",
    ["ray" + "smith"]: "hihi"
}

const a = "Bobby";
const b = "123";
const c = "hello"

const thirdObj = { a, b, c }

console.log(thirdObj);

//Template Strings
const me = "Bro";
const age = 34;
const pet = "dog";

const greetingBest = `Hello ${me} you seem to be ${age - 10}, what a lovely ${pet} you have.`

console.log(greetingBest);

//Default Arguments
const greet = (myName = "Brosquire", age = 30, pet = "Lion") => {
    console.log(`Hello ${myName} you seem to be ${age - 10}, what a lovely ${pet} you have.`)
}
greet();

//Symbol
let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");

console.log(sym1, sym2, sym3);


//Advanced Functions
const first = () => {
    const greet = "Hi";
    const second = () => {
        alert(greet)
    }
    return second
}

const newFunc = first();

newFunc();

// Closures - a function ran, the function executed, 
// its never going to execute again, but its going to
// remember that there are references to those variables. 
// The child scope always has access to the parent scope

//Currying converting a function that takes multiple argumenmtgs one at a time
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
console.log(curriedMultiply(3)(4));

//Compose - put two functions together to form a third function 
//where the output of one function is the input of the second function
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
console.log(compose(sum, sum)(5));

//What are the two elements of a pure function?
//1. Deterministic --> always produces the same results given the same inputs
//2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.

//Advanced Arrays
let array = [1, 2, 3, 4, 5]

//MAP - creates a new array by looping over the values in 
//the original array to RETURN whatever your function declares it to
const mapArray = array.map(num => num * 2)
console.log(mapArray);

//FILTER - RETURNS a new array with a modified version of the original array 
//based on parameters in the function
const filterArray = array.filter(num => num > 3)
console.log(filterArray);

//REDUCE - RETURNS a condensed array depending on arguments for the accumulator
const reducedArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 5) //this value is the default value of the accumulator
console.log(reducedArray)


// EXERCISE 5
// Complete the below questions using this array:
const exerciseArray = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const exclame = exerciseArray.forEach(newName => {
    let newUsers = newName.username + "!";
    console.log(newUsers);
})


//Create an array using map that has all the usernames with a "? to each of the usernames
const mapExercise = exerciseArray.map(newName => newName.username + "?");
console.log(mapExercise);

//Filter the array to only include users who are on team: red
const filterExercise = exerciseArray.filter(color => color.team === "red");
console.log(filterExercise)

//Find out the total score of all users using reduce
const reduceExercise = exerciseArray.reduce((acc, num) => {
    return acc + num.score;
}, 0);
console.log(reduceExercise)

// (1), what is the value of i? = the value of I is the index of the array
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    return num * 2;
})
console.log(newArray)

//ADVANCED OBJECTS

// reference type
const object1 = { value: 10 };
const object2 = object1;
const object3 = { value: 10 };

// context
//"this" refers to where it is called, inside the function or in the global scope

// instantiation
class Player {
    constructor(title, type) {
        this.title = title;
        this.type = type;
    }
    introduce() {
        console.log(`Hi i am ${this.title}. I am a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(title, type) {
        super(title, type)
    }
    play() {
        console.log(`Weee I am a ${this.type}!`)
    }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Sean", "Dark magic")

console.log(`Wizard 1`, wizard1);
wizard1.introduce();
wizard1.play();
console.log(`Wizard 2`, wizard2);
wizard2.introduce();
wizard2.play();

//.includes and exponential function is two *
const hello = "hello";
console.log(hello.includes("o"));

console.log(5 ** 3);

//ES8 2017
//.padstart() .padend()
//adds whitespaces before or after the string

//trailing commas in parameters list
const fun = (a, b, c, d,) => {
    console.log(a)
};

fun(1, 2, 3, 4,);

//OBJECTS lvl3
let obje = {
    username: "Santa",
    username1: "Rudolph",
    username2: "Mr. Grinch"
};

//Object.keys returns keys and values  of  objects
const newist = Object.keys(obje).forEach((key, index) => {
    console.log(key, obje[key])
});

//Object.values returns values of object
const better = Object.values(obje).forEach(value => {
    console.log(value)
})

//Object.entries returns an array of keys and values
const evenBetter = Object.entries(obje).forEach(value => {
    console.log(value)
})

//ES10 2019
//flat() a method used on arrays to combine nested arrays / parametr can depict level of arrays to flatten
const myArray = [1, 2, 3, 4, 5, [6, 7, 8, 9], [10]];
console.log(myArray.flat())

//.flatMap()
//  combines arrays and creates a new array 
//  - basically combines arrays and creates a new one

//.trimStart() OR .trimEnd() 
//  trims all whitespace at the beginning or end of a String

//fromEntries - flattens arrays and combines arrays into an Object - Use Syntax below
const userProfiles = [["commander tom", 23], ["derrick zlander", 40], ["hansel", 16]]
const newObjectUsers = Object.fromEntries(userProfiles);
console.log(newObjectUsers);


//Try Catch Block
try {
    //this
} catch (error) {
    //if error occurs throw this message
}

//EXERCISE 10
// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array1 = [[1], [2], [3], [[[4]]], [[[5]]]]
const newFlattenArray = array1.flat(3)
console.log(newFlattenArray)


// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const newGreeting = greeting.flatMap(value => value.join(" "))
console.log(newGreeting)


//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
const newString = greeting.toString()


//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const unTrapped = trapped.flat(Infinity)
console.log(unTrapped)


//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
const cleanedEmail = userEmail3.trimStart()
console.log(cleanedEmail);


//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users1 = { user1: 18273, user2: 92833, user3: 90315 }
const newUsers1 = Object.entries(users1);
console.log(newUsers1)

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
const updatedUsers1 = newUsers1.map((user) => [user[0], user[1] * 2]);
console.log(updatedUsers1)

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
const finalUsers = Object.fromEntries(updatedUsers1);
console.log(finalUsers);

//Advanced Loops
const basket = ["milk", "cereal", "cheese", "berries"]
// for of
//works with Iterable Data (Arrays, Strings)
for (item of basket) {
    console.log(item)
}

// for in
// works with Objects and returns object properties (enumerating)
const detailedBasket = {
    milk: 3,
    cereal: 2,
    cheese: 4,
    berries: 1000
}

for (item in detailedBasket) {
    console.log(item)
}

//ADVANCED ARRAY EXERCISE
// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array6 = [-1, 0, 3, 100, 99, 2, 99] // should return 100
const array7 = ['a', 3, 4, 2] // should return 4
const array8 = [] // should return 0

function biggestNumberInArray(arr) {
    let highest = 0;
    for (i = 0; i < arr.length; i++) {
        if (highest < arr[i]) {
            highest = arr[i]
        }
    }
    console.log(highest)
}
biggestNumberInArray(array6)

function biggestNumberInArray2(arr) {
    let highest = 0;
    arr.forEach((item) => {
        if (highest < item) {
            highest = item
        }
    })
    console.log(highest)
}
biggestNumberInArray2(array7)

function biggestNumberInArray3(arr) {
    let highest = 0;
    for (item of arr) {
        if (highest < item) {
            highest = item
        }
    }
    console.log(highest)
}
biggestNumberInArray3(array8)


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}

function checkBasket(basket, lookingFor) {
    for (item in basket) {
        lookingFor === item ? console.log(item + " is in the basket!")
            :
            console.log("Sorry the item is not in the basket.")
    }
}

checkBasket(amazonBasket, "glasses")

// ES2020
//BigInt - used for data over 9 quadrallion (1n) -- need to add n at the end of number

//optional chaining - look at syntax it minimizes && in the if statement - works on properties for Objects
//checks properties efficiently

let will_pokemon = {
    pikachu: {
        species: "Mouse",
        height: 0.4,
        weight: 6,
    }
}

let weight = will_pokemon.pikachu.weight;
console.log(weight);

//Nullish Coalescing Operator ??
//   it can be used in place of || to check if its null or undefined and returns 0 or undefined instead of else statement value
let power = will_pokemon?.pikachu?.power ?? "no power"
console.log(power)

//ES 2021
//.replaceAll() - a method for strings to replace all parameters given in the string
const str = "ztm is the best of the best";
console.log(str)
console.log(str.replaceAll("best", "worst"))
