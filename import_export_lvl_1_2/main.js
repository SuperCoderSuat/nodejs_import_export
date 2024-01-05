import * as functions from './functions.js';
import { names, numbers } from './data.js';

console.log(functions.getFirstElement(names));
console.log(functions.getAllButLastElement(names));
console.log(functions.getLastElement(names));
console.log(functions.getAllButFirstElement(names));
console.log(functions.removeElement(names, "Eric"));
console.log(functions.getUniqueValues(names));

console.log(functions.getArraySum(numbers));

const randomNum = functions.getRandomNumberInRange(1, 100);
console.log(`Random Number: ${randomNum}`);

console.log(functions.capitalizeFirstLetter("test"));
console.log(functions.capitalizeWholeString("test"));
console.log(functions.checkLastLetterMatch("Test", "t"));
console.log(functions.checkLastLetterMatch("Test", "q"));
