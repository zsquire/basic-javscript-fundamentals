let me = "Zachary";
console.log("My name is " + me);

let prompt = (e) => {
    return e;
}
let firstNumber = prompt(5);
console.log(firstNumber);

let checkAge = (age) => {
    if (Number(age) >= 18) {
        console.log("Congratulations, enjoy your ride!");
    } else if (Number(age) < 18) {
        console.log("Sorry maybe next time little pal");
    } else {
        console.log("Try again");
    }
};
checkAge(18);

let alphabet = ["a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z"];

for (let i = 0; i < 26; i++) {
    console.log(alphabet[i]);
};

//Arrays

let fridge = ["bananas", "kiwis", "apples", "strawberries"]

let newFridge = fridge.concat("milk");

console.log(fridge);

console.log(fridge.shift());

console.log(newFridge);

console.log(newFridge.pop());

console.log(newFridge);

console.log(newFridge.sort());

console.log(newFridge.reverse());

//Objects

let person = {
    name: "Zachary",
    age: 29,
    isMarried: true,
    talents: ["cooking", "fatherhood", "coding"],
    shout: () => {
        console.log("AHHHHHHH!")
    }
}

person.favoriteFood = "Hamburger";

console.log(person);
person.shout();

let userList = [
    {
        username: "me",
        password: "123"
    },
    {
        username: "you",
        password: "456"
    }
];

console.log(userList);

console.log(userList[0].username);
console.log(userList[1].username);

let todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study"
];

// for (let i = 0; i < todos.length; i++) {
//     todos[i] = todos[i] + "!";

//     console.log(todos[i])
// };

// forEach() Loop Method
todos.forEach((i, ind) => {
    console.log(i + "!")
})

//Mini Facebook

let database = [
    {
        username: "charlie",
        password: "123"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "cliff",
        password: "123"
    }
];

let newsfeed = [
    {
        user: "charlie",
        newsfeed: "First Time"
    },
    {
        user: "sally",
        newsfeed: "Second Time"
    },
    {
        user: "cliff",
        newsfeed: "Third Time"
    }
];

let isUserValid = (username, password) => {
    // database.forEach((i) => {
    //     console.log(i.username)
    //     if (i.username === username &&
    //         i.password === password) {
    //         return true;
    //     }
    // })

    for (let i = 0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
            return true;
        }
    }
}

let signIn = (username, password) => {
    if (isUserValid(username, password)) {
        console.log(newsfeed);
    } else
        alert("Sorry Wrong information")

}

let userNamePrompt = window.prompt("What is your username?");
let passwordPrompt = window.prompt("What is your password?");

signIn(userNamePrompt, passwordPrompt);