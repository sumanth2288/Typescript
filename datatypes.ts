// types in typescript : string, number, bigInt, boolean, undefined, null, symbol
let no: number = 7;
let myName: string = "sumanth";
let hasMarried: boolean = false;

console.log(`number : ${no}, myName: ${myName} , hasMarried: ${hasMarried}`);

// union type : variable that can be assigned with more than one type
let age: number | string;
age = 22;
age = "22";
console.log(`age : ${age}`);

// arrays
let numbers: number[] = [10, 20, 30, 40, 50];
let names: string[] = ["raju", "raamu", "radha", "krishna"];
let option: boolean[] = [true, false];
type films = {
  name: string;
  hero: string;
};
let films: films[] = [
  { name: "KGF", hero: "yash" },
  { name: "Paramatma", hero: "Puneeth Rajkumar" },
];

let firstObject = films[0].name;

console.log(firstObject);
let any: any[] = ["name", 10, true];

any.push("any");

console.log(`${numbers}, ${names}, ${option}, ${firstObject}, ${any}`);

// objects in typescript :
let person: {
  name: string;
  age: number;
  place: string;
};

person = {
  name: "Sumanth",
  age: 22,
  place: "shivamogga",
};

console.log(`person age: ${person.age}`);

// person.isProgrammer = true; Error
person.name = "Paramatma";
console.log("updated person name ", person.name.toUpperCase());

// interface : this is useful when we check that multiple objects have the same specific properties and value types .

interface Coders {
  name: string;
  gender: string;
  frontendDev: boolean;
  backendDev: boolean;
}

let Person1: Coders = {
  name: "sumanth",
  gender: "Male",
  frontendDev: true,
  backendDev: true,
};

let Person2: Coders = {
  name: "Sanika",
  gender: "female",
  frontendDev: true,
  backendDev: false,
};

console.log(`person 1: ${Person1.name}, person 2: ${Person2.gender}`);

function sayName(param: string): any {
  console.log("Your name is ", param);
}

console.log(sayName("sumanth"));

// classes
class Learn {
  name: string;
  age: number;

  constructor(name: string, age: number) {
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

// generics: its like assigning variable with a dynamic datatype

const score: Array<number> = [];
const naam: Array<string> = [];

// we can define the function that will return whether string or boolean like below
function identicalOne(val: boolean | string): boolean | string {
  return val;
}

function identity(arg: any): any {
  return arg;
}

// While using any is certainly generic in that it will cause the function to accept any and all types for the type of arg, we actually are losing the information about what that type was when the function returns. If we passed in a number, the only information we have is that any type could be returned.

// Instead, we need a way of capturing the type of the argument in such a way that we can also use it to denote what is being returned. Here, we will use a type variable, a special kind of variable that works on types rather than values.
function identity4<Type>(arg: Type): Type {
  return arg;
}
