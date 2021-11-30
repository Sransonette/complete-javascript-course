// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true
// if (hasDriversLicense) console.log("I can drive")

// const interface = 'Audio'
// const private = 534;
// const if = 23

// function logger() {
//     console.log('My name is Sean')
// }

// // calling / running / invoking the function
// logger()
// logger()
// logger()

// function fruitProcessor(apples, oranges) {
//     let juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice
// }

// let appleJuice = fruitProcessor(5, 0)
// console.log(appleJuice)

// let appleOrangeJuice = fruitProcessor(2, 4)
// console.log(appleOrangeJuice)

// function declaration
// function calcAge1(birthYear) {

//     return 2037 - birthYear
// }

// let age1 = calcAge1(1990)

// // function expression
// let calcAge2 = function (birthYear) {
//     return 2037 - birthYear
// }

// let age2 = calcAge2(1990)

// console.log(age1, age2)

// let calcAge2 = function (birthYear) {
//     return 2037 - birthYear
// }

// let calcAge3 = birthYear => 2037 - birthYear

// let age3 = calcAge3(1991)
// console.log(age3)

// let yearsUntilRetirement = (birthYear, firstName) => {
//     let age = 2037 - birthYear;
//     let retirement = 65 - age;
//     // return retirement
//     return `${firstName} retires in ${retirement} years`

// }

// // yearsUntilRetirement(1991)

// // console.log(yearsUntilRetirement(1991))

// console.log(yearsUntilRetirement(1991, "Sean"))
// console.log(yearsUntilRetirement(1990, 'Christy'))

// function cutFruitPieces(fruit) {
//     return fruit * 3
// }

// function fruitProcessor(apples, oranges) {

//     let applePieces = cutFruitPieces(apples)
//     let orangePieces = cutFruitPieces(oranges)
//     let juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice
// }

// console.log(fruitProcessor(2, 3));

// function cutFruitPieces

// function fruitProcessor(apples, oranges) {
//     let juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice
// }

let calcAge = function (birthYear) {
    return 2037 - birthYear;
}

let yearsUntilRetirement = function (birthYear, firstName) {
    let age = calcAge(birthYear)
    let retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement
    } else {
        console.log(`${firstName} has already retired`)
        return -1
    }
}

console.log(yearsUntilRetirement(1990, 'Sean'))
console.log(yearsUntilRetirement(1950, 'Mike'))

