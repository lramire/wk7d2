//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
}
console.log(person3) //this shows but not exactly like above..probably too easy

//attempt 2

for (const value of Object.values(person3)){
    if (Array.isArray(value)){
        for (const thing of value){
            console.log(thing)
        }
    }
}

function favoriteFood(person3) {
    for (let [key, value] of Object.entries(person3)) {
        if (Array.isArray(value)) {
            console.log(`${key}:`)
            value.forEach(value => console.log(value))
        } else {
            console.log(`${key}: ${value}`)
        }
    }
}




//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age


function Hero(name, age, superpower){
    this.name = name;
    this.age = age;
    this.superpower = superpower;
    this.printInfo = () =>{
        console.log(`This is ${name} who is ${age} years old, and has ${superpower} superpower.`)
        return this.age ++
    }
}

let thisHero = new Hero('Donald Duck', 30, 'quacks a lot')
console.log(thisHero.printInfo())
console.log(thisHero.age)
console.log(thisHero.superpower)
console.log(thisHero)





// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function length(str) {
    return new Promise((resolve, reject) =>{
        if (str.length > 10){
        resolve("Big word")
    } else{
        reject("Small word")
    }
})
}

length(wakawakawaka) //not taking in the word??