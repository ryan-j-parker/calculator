export function add(num1, num2) {
    console.log(num1, num2);
    return (num1 + num2);
}

export function subtract(num1, num2) {
    console.log(num1, num2);
    return (num1 - num2);
}

export function multiply(num1, num2) {
    console.log(num1, num2);
    return (num1 * num2);
}

export function divide(num1, num2) {
    console.log(num1, num2);
    return (num1 / num2);
}

export function area(base, height) {
    console.log(base, height);
    return (base * height / 2);
}

export function hypotenuse(base, height) {
    console.log(base, height);
    return (Math.sqrt(base * base + height * height));
}