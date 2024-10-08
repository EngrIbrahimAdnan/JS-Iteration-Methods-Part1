const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
1) Create a new array containing numbers that are greater than or equal to 25.
2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
function filtering(numbers){
    return numbers.filter(function function_name(num){return num>=25});
}

const filteredArr = filtering(numbers)
//console.log(filteredArr);

function divisibileByFive(numbers){
    return numbers.filter(function divide(num){return num%5===0});
}

const var2 = divisibileByFive(numbers)
//console.log(var2);

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

3) Create a new array that contains each number squared.
4) Create a new array that contains each number multiplied by 2.
******************************************************************/
function numSquared(numbers){
    return numbers.map(function randomfunction(num){return num*num});
}

const numSquaredVar = numSquared(numbers);
//console.log(numSquaredVar);

function numDoubled(numbers){
    return numbers.map(function randomfunction(num){return num*2});
}

const numDoubledVar = numDoubled(numbers);
//console.log(numDoubledVar);

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

5) Filter the numbers that are greater than or equal to 20 and then square each of them.
6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
function greaterThan20Squared(numbers){
    return numbers.filter(function (num){return num>=20}).map(function (num){return num*num});
}

const greaterThan20SquaredVar = greaterThan20Squared(numbers);
//console.log(greaterThan20SquaredVar);

function divsibleBy5thrice(numbers){
    return numbers.filter(function (num){return num%5===0}).map(function (num){return num*3});
}

const divsibleBy5thriceVar = divsibleBy5thrice(numbers);
//console.log(divsibleBy5thriceVar);

/*****************************************************************
Part 4: Extra not required 🌶️🌶️🌶️
******************************************************************/
/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/

function Logger(arr){
    arr.forEach(element=>{console.log(element)});
}
const arr=[1, 2, "element3", "element4"];
//Logger(arr);

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
FahrenArray=[32,24,96,136, 38, 100, 180, 212];
function toCelsius(FahrenArray){
    return FahrenArray.map(element=>{return (element-32)*(5/9)})
}
const toCelsiusVar = toCelsius(FahrenArray);
//console.log(toCelsiusVar);

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
threshold=70;
temps=[20,63,1390,192,59,20,480,96,83,58];

function hottestDays(temperatures, threshold){
    return temperatures.filter(temp=>{return temp>=threshold});
}

const tempExceeded = hottestDays(temps, threshold)
//console.log(tempExceeded);

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/

function logHottestDays(temperatures, threshold){
    const Filtered = hottestDays(temperatures,threshold);//filters CELSIUS degrees accor. to threshold
    const toCelsiusVar = toCelsius(Filtered);//convert to celsius
    return Logger(toCelsiusVar);//log everything
}
logHottestDays(temps, threshold);