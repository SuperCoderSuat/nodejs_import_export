const getFirstElement = (arr) => arr[0];
const getAllButLastElement = (arr) => arr.slice(0, -1);
const getLastElement = (arr) => arr[arr.length - 1];
const getAllButFirstElement = (arr) => arr.slice(1);
const removeElement = (arr, elementToRemove) => arr.filter(item => item !== elementToRemove);
const getUniqueValues = (arr) => [...new Set(arr)];
const getArraySum = (numbers) => numbers.reduce((sum, num) => sum + num, 0);
const getRandomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const capitalizeWholeString = (str) => str.toUpperCase();
const checkLastLetterMatch = (str1, str2) => str1.charAt(str1.length - 1).toLowerCase() === str2.toLowerCase();

export {
    getFirstElement,
    getAllButLastElement,
    getLastElement,
    getAllButFirstElement,
    removeElement,
    getUniqueValues,
    getArraySum,
    getRandomNumberInRange,
    capitalizeFirstLetter,
    capitalizeWholeString,
    checkLastLetterMatch
};
