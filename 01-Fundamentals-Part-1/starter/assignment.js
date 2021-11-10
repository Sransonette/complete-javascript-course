// let country = "USA";
// let continent = "North America";
// let population = "Lots";

// // console.log(country, continent, population)

// let isIsland = false
// let language

// console.log(typeof isIsland)
// console.log(typeof population)
// console.log(typeof country)
// console.log(typeof language)

// let markWeight = 78
// let markHeight = 1.69
// let johnWeight = 92
// let johnHeight = 1.95

// let markWeight = 95
// let markHeight = 1.88
// let johnWeight = 85
// let johnHeight = 1.76


// let markHIgherBMI = markBMI > johnBMI

// console.log(markBMI, johnBMI, markHIgherBMI);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
let markBMI = massMark / heightMark ** 2;
let johnBMI = massJohn / heightJohn ** 2;

if (markBMI > johnBMI) {
    let markBmiDiff = markBMI - johnBMI
    console.log(`Mark BMI is ${markBmiDiff} higher than John`)
} else {
    let johnBmiDiff = johnBMI - markBMI
    console.log(`John BMI is ${johnBmiDiff} higher than Mark`)
}
