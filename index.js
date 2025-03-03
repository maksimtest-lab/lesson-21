// let count = 1;

// console.log(count);

// {
//     let count = 2;
//     console.log(count);

//     {
//         let count = 3;
//         console.log(count);
//     }

//     console.log(count);
// }

// console.log(count);

// function makeCounter() {
//     let count = 0;

//     return function () {
//         count++;
//         console.log(count);
//     }
// }

// const counter = makeCounter();
// const counter2 = makeCounter();

// counter();
// counter();
// counter();
// counter2();
// counter2();
// counter2();

// function hello(whom) {
//     console.log(`Hello`, whom);
// }

// console.log(hello('I i`m'));
// const user = {
//     name: 'Igor',
//     age: 25,
//     greet() {
//         console.log(`Hello ${this.name}`);
//     },
//     whatIsThis() {
//         console.log(this === window);
//     }
// }

// // whatIsThis();

// user.greet();
// user.whatIsThis();
// -------------------------
// function User(name, age, city) {
//     this.name = name,
//     this.age = age,
//     this.city = city;
//     this.testFunction = function () {
//         console.log(this.name);
//     }
//     // return this;
// }

// const fistUser = new User('Igor', 25, 'Minsk');
// const secondUser = new User('Dima', 32, 'Brest');

// console.log(fistUser);
// console.log(secondUser);
// console.log(fistUser.testFunction());
// console.log(secondUser.testFunction());
// -------------------------
// const fistUser = {
//     name: 'Igor',
//     age: 25,
//     city: 'Minsk',
//     displayInfo: function () {
//         console.log(this.name, this.age, this.city);
//     }
// }

// const secondUser = {
//     name: 'Dima',
//     age: 32,
//     city: 'Brest'
// }

// fistUser.displayInfo();
// fistUser.displayInfo.bind(secondUser)();
// fistUser.displayInfo.call(secondUser);
// fistUser.displayInfo.apply(secondUser);
// -------------------------

// function sayHello() {
//     console.log('Hello');
// }

// setTimeout(sayHello, 5000);
// -------------------------

// const user = {
//     firstName: 'Igor',
//     age: 25,
//     city: 'Minsk',
//     sayHello() {
//         console.log(`Hello ${this.firstName}`);
//     }
// }

// // setTimeout(user.sayHello, 1000);
// // setTimeout(function() { user.sayHello(); }, 1000);
// // setTimeout(() => user.sayHello(), 1000);

// const sayHi = user.sayHello.bind(user);

// setTimeout(sayHi, 1000);
// -------------------------

// function cacheFunction(callback) {
//     const cache = {};

//     return function (arg) {
//         if (arg in cache) {
//             console.log('Из кеша');

//             return cache[arg];
//         } else {
//             console.log('Вычисляем...');
//             const result = callback(arg);
//             cache[arg] = result;

//             return result;
//         }
//     }
// }

// const slowFunction = (a) => a ** 10;

// const cachedFunction = cacheFunction(slowFunction);

// console.log(cachedFunction(5));
// console.log(cachedFunction(5));
// console.log(cachedFunction(3));
// console.log(cachedFunction(3));
// console.log(cachedFunction(2));
// console.log(cachedFunction);

// -------------------------

function myBind(callback, context, ...args) {
    return function (...newArgs) {
        return callback.apply(context, [...args, ...newArgs]);
    }
}

function greet(greeting, punctuation) {
    console.log(`${greeting} ${this.name}${punctuation}`);
}   

const user = {
    name: 'Igor'
}

const boundGreet = myBind(greet, user, 'Hello');

boundGreet('!!!');