"use strict";
// types in typescript : string, number, bigInt, boolean, undefined, null, symbol
let no = 7;
let myName = "sumanth";
let hasMarried = false;
console.log(`number : ${no}, myName: ${myName} , hasMarried: ${hasMarried}`);
// union type : variable that can be assigned with more than one type
let age;
age = 22;
age = "22";
console.log(`age : ${age}`);
// arrays
let numbers = [10, 20, 30, 40, 50];
let names = ["raju", "raamu", "radha", "krishna"];
let option = [true, false];
let films = [
    { name: "KGF", hero: "yash" },
    { name: "Paramatma", hero: "Puneeth Rajkumar" },
];
let firstObject = films[0].name;
console.log(firstObject);
let any = ["name", 10, true];
any.push("any");
console.log(`${numbers}, ${names}, ${option}, ${firstObject}, ${any}`);
// objects in typescript :
let person;
person = {
    name: "Sumanth",
    age: 22,
    place: "shivamogga",
};
console.log(`person age: ${person.age}`);
// person.isProgrammer = true; Error
person.name = "Paramatma";
console.log("updated person name ", person.name.toUpperCase());
let Person1 = {
    name: "sumanth",
    gender: "Male",
    frontendDev: true,
    backendDev: true,
};
let Person2 = {
    name: "Sanika",
    gender: "female",
    frontendDev: true,
    backendDev: false,
};
console.log(`person 1: ${Person1.name}, person 2: ${Person2.gender}`);
function sayName(param) {
    console.log("Your name is ", param);
}
console.log(sayName("sumanth"));
// classes
class Learn {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHellow() {
        return `Hellow ${this.name}, you age is ${this.age}`;
    }
}
const person22 = new Learn("sumanth", 22);
console.log(person22.sayHellow());
const person23 = new Learn("person2", 3);
console.log(person23.sayHellow());
