
// sigleton

// // object literals
// Object.create
const mySym =  Symbol("key1")

const Jsuser = {
    name: "Hitesh", 
    "full name": " Hitesh choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "jaipur",
    email: "xyz@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]


}

console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]);


Jsuser.email = "jpyadav@gmail.com"