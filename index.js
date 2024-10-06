
import { printMessage, inchToCm, getBmi, findMax } from './utilities.js';


printWelcome('John', 'Doe'); 

const celsius = 25;
const fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius}°C is ${fahrenheit}°F`); 

const num = 5;
const fact = factorial(num);
console.log(`The factorial of ${num} is ${fact}`); 

const numbers = [1, 5, 3, 9, 2];
const max = sumValues(numbers);
console.log(`The maximum number is ${max}`); 
