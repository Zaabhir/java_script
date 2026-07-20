// primitive

// 7 types: String,Number, boolean, null,undefined,symbol,bigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

 // symbol
// const bignumber = 3456543576654356754n




// Rference (Non primitive)
//  array,objects,functions

const heros = ["shaktiman", "naaraj", "doga"];

let myobj = {
    name: "Hitesh",
    age: 22,
}

const myfunction = function () {
    console.log("Hello World");
}

console.log(typeof anotherId);