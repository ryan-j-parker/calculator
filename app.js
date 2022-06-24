// import needed modules

import { add } from '../utils.js';

// define and grab DOM elements

const addInput1 = document.getElementById('addInput1');
const addInput2 = document.getElementById('addInput2');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('add-result');

addButton.addEventListener('click', () => {
    const num1 = Number(addInput1.value);
    const num2 = Number(addInput2.value);
    addResult.textContent = add(num1, num2);
});


console.log(addInput1, addInput2, addButton, addResult);

// event handlers - what needs to happen?
    // logic and calculations
    // update UI

import { subtract } from '../utils.js';

const subtractInput1 = document.getElementById('subtractInput1');
const subtractInput2 = document.getElementById('subtractInput2');
const subtractButton = document.getElementById('subtract-button');
const subtractResult = document.getElementById('subtract-result');

subtractButton.addEventListener('click', () => {
    const num1 = Number(subtractInput1.value);
    const num2 = Number(subtractInput2.value);
    subtractResult.textContent = subtract(num1, num2);
});

import { multiply } from '../utils.js';

const multiplyInput1 = document.getElementById('multiplyInput1');
const multiplyInput2 = document.getElementById('multiplyInput2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyResult = document.getElementById('multiply-result');

multiplyButton.addEventListener('click', () => {
    const num1 = Number(multiplyInput1.value);
    const num2 = Number(multiplyInput2.value);
    multiplyResult.textContent = multiply(num1, num2);
});

import { divide } from '../utils.js';

const divideInput1 = document.getElementById('divideInput1');
const divideInput2 = document.getElementById('divideInput2');
const divideButton = document.getElementById('divide-button');
const divideResult = document.getElementById('divide-result');

divideButton.addEventListener('click', () => {
    const num1 = Number(divideInput1.value);
    const num2 = Number(divideInput2.value);
    divideResult.textContent = divide(num1, num2);
});


makeCalculator('addInput1', 'addInput2', 'add-button', 'add-result', add);
makeCalculator('subtractInput1', 'subtractInput2', 'subtract-button', 'subtract-result', subtract);
makeCalculator('multiplyInput1', 'multiplyInput2', 'multiply-button', 'multiply-result', multiply);
makeCalculator('divideInput1', 'divideInput2', 'divide-button', 'divide-result', divide);

function makeCalculator(input1Id, input2Id, buttonId, resultId, calcFn) {
    const input1 = document.getElementById(input1Id);
    const input2 = document.getElementById(input2Id);
    const button = document.getElementById(buttonId);
    const result = document.getElementById(resultId);
}

import { area } from '../utils.js';

const areaInput1 = document.getElementById('areaInput1');
const areaInput2 = document.getElementById('areaInput2');
const areaButton = document.getElementById('area-button');
const areaResult = document.getElementById('area-result');

areaButton.addEventListener('click', () => {
    const base = Number(areaInput1.value);
    const height = Number(areaInput2.value);
    areaResult.textContent = area(base, height);
});

import { hypotenuse } from '../utils.js';

const hypotenuseInput1 = document.getElementById('hypotenuseInput1');
const hypotenuseInput2 = document.getElementById('hypotenuseInput2');
const hypotenuseButton = document.getElementById('hypotenuse-button');
const hypotenuseResult = document.getElementById('hypotenuse-result');

hypotenuseButton.addEventListener('click', () => {
    const base = Number(hypotenuseInput1.value);
    const height = Number(hypotenuseInput2.value);
    hypotenuseResult.textContent = hypotenuse(base, height);
});