// IMPORT code to test here

import { add } from '../utils.js';

const test = QUnit.test;

test('adds two number', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const num1 = addInput1.value;
    const num2 = addInput2.value;
    addResult.textContent = add(num1, num2);

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(num1, num2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('subtracts two numbers', (expect) => {
    const num1 = subtractInput1.value;
    const num2 = subtractInput2.value;
    subtractResult.textContent = subtract(num1, num2);
    const actual = subtract(num1, num2);
    expect.equal(actual, expected);

});

import { multiply } from '../utils.js';

test('multiplies two numbers', (expect) => {
    const num1 = multiplyInput1.value;
    const num2 = multiplyInput2.value;
    multiplyResult.textContent = multiply(num1, num2);
    const actual = multiply(num1, num2);
    expect.equal(actual, expected);
});

import { divide } from '../utils.js';

test('divides two numbers', (expect) => {
    const num1 = divideInput1.value;
    const num2 = divideInput2.value;
    divideResult.textContent = divide(num1, num2);
    const actual = divide(num1, num2);
    expect.equal(actual, expected);
});

import { area } from '../utils.js';

test('calculates area of triangle', (expect) => {
    const num1 = areaInput1.value;
    const num2 = areaInput2.value;
    areaResult.textContent = area(num1, num2);
    const actual = area(base, height);
    expect.equal(actual, expected);
});

import { hypotenuse } from '../utils.js';

test('calculates hypotenuse of triangle', (expect) => {
    const num1 = hypotenuseInput1.value;
    const num2 = hypotenuseInput2.value;
    hypotenuseResult.textContent = hypotenuse(num1, num2);
    const actual = hypotenuse(num1, num2);
    expect.equal(actual, expected);
});