// //Objects

// const welcome = 'Hello there';
// console.log(welcome);

// let user = new Object(); // "object constructor" syntax
// let user1 = {};  // "object literal" syntax

// let user2 = { //An object
//     name: "John", // first ket "name" with value John 
//     age: 30 //by key "age" store value 30
// }

// console.log(user2.name);
// console.log(user2.age);

// user2.isAdmin = true;
// delete user2.age;

// console.log(user2);

//Excercise
let user = {
    name: "John",
    surname: "Smith"
}
user.name = "Pete";
console.log(user);
delete user.name;