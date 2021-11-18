// // let js = "Amazing";
// // console.log(40 + 8 + 23 - 10)

// // console.log("Jonas");
// // console.log(23);

// // let firstName = "Matilda";

// // console.log(firstName);
// // console.log(firstName);
// // console.log(firstName);

// // let jonas_matilda = "JM";
// // let $function = 27;

// // let person = "Jonas"
// // let PI = 3.1415;

// // let myfirstJob = "Coder";
// // let myCurrentJob = "Teacher";


// // console.log(myfirstJob);

// // let javascriptIsFun = true;
// // console.log(javascriptIsFun);

// // // console.log(typeof true);
// // console.log(typeof javascriptIsFun);
// // // console.log(typeof 32);
// // // console.log(typeof "Jonas");

// // javascriptIsFun = "YES";
// // console.log(javascriptIsFun)
// // console.log(typeof javascriptIsFun);

// // let year;

// // console.log(year);
// // console.log(typeof year);

// // year = 1991;
// // console.log(typeof year);

// // console.log(typeof null)

// // let age = 30;
// // age = 31;
// // //Mutated the variable, block scope
// // const birthYear = 1991;
// // birthYear = 1990;
// // //in-mutable and cannot set empty variable in const
// // var job = 'programmer';
// // job = 'teacher'
// // //should be avoided for the most part, function scoped
// // lastName = "Ransonette"
// // console.log(lastName);
// // //creates property on "global object", always declare variables

// const now = 2037
// const ageJonas = now - 1991
// const ageSarah = now - 2018
// console.log(ageJonas, ageSarah)

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// // 2 ** 3 means 2 to the power of 3

// const firstName = 'Jonas'
// const lastName = 'Ransonette'
// console.log(firstName + ' ' + lastName)

// let x = 10 + 5;
// console.log(x)

// x += 10; // x = x + 10
// x *= 4;
// x++;
// x--;
// console.log(x)

// //Comparison operators

// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18)

// const isFullAge = ageSarah >= 18;




// const now = 2037
// const ageJonas = now - 1991
// const ageSarah = now - 2018

// console.log(now - 1991 > now - 2018);

// let x, y;

// x = y = 25 - 10 - 5

// console.log(x, y)

// const averageAge = (ageJonas + ageSarah) / 2
// console.log(ageJonas, ageSarah, averageAge)

// const firstName = "Sean"
// const job = "Software Engineer"
// const birthYear = "1990"
// const year = 2037

// const Sean = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

// console.log(Sean)

// const seanNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
// console.log(seanNew)

// console.log(`regular string`)

// console.log('String with \n\
// multiple \n\
// lines')

// console.log(`String
// with
// multiple lines`)

// let age = 15;


// if (age >= 18) {
//     console.log("Sarah can start driving")
// } else {
//     let yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years`)
// }

// let birthYear = 1991;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century)

//type conversion
// let inputYear = "1991";
// console.log(Number(inputYear))
// console.log(Number(inputYear) + 18)
// console.log(Number("Sean"))
// console.log(typeof NaN)
// console.log(String(23), 23)

// //type coercion
// console.log('I am' + 23 + 'years old')
// console.log('23' - '10' - 3)
// console.log('23' / '2')

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Sean'))
console.log(Boolean(''))

let money = 100;

if (money) {
    console.log("Don't spend it all")
} else {
    console.log('You should get a job')
}

let height = 0;
if (height >= 0) {
    console.log('YAY! Height is defined')
} else {
    console.log('Height is UNDEFINED')
}