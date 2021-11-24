// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true
// if (hasDriversLicense) console.log("I can drive")

// const interface = 'Audio'
// const private = 534;
// const if = 23

function logger() {
    console.log('My name is Sean')
}

// calling / running / invoking the function
logger()
logger()
logger()

function fruitProcessor(apples, oranges) {
    let juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice
}

let appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)

let appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)