// Завдання 4: Обчислення площі та об'єму

// Завдання 4.1 Circle Square.
// π - число “пі”. Ви можете використати Math.PI у вашому дз для вираження цього числа.
// Створіть змінну radius і присвойте їй числове значення радіуса кола.
// Обчисліть площу кола за формулою π * radius^2 і виведіть результат.

const piNumber = Math.PI;
let circleRadius = 5;
let circleSquare = (piNumber * (circleRadius ** 2)).toFixed(2);

console.log(`Circle square equals: ${circleSquare}`);   // Press Fn+Esc on keyboard to enter ` symbol.

// Завдання 4.2 Rectangle Square.
// Створіть змінну length і присвойте їй числове значення довжини прямокутника.
// Створіть змінну width і присвойте їй числове значення ширини прямокутника.
// Обчисліть площу прямокутника за формулою length * width і виведіть результат.

let rectangleLength = 3;
let rectangleWidth = 9;
let rectangleSquare = (rectangleLength * rectangleWidth).toFixed(2);

console.log(`Rectangle square equals: ${rectangleSquare}`);  // Press Fn+Esc on keyboard to enter ` symbol.

// Завдання 4.3 Cylinder Volume.
// Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
// Створіть змінну height і присвойте їй числове значення висоти циліндра.
// Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.
// Округліть кожне отримане значення до 2 значень після крапки.

let cylinderRadius = 5;
let cylinderHeight = 4;
let cylinderVolume = (piNumber * (cylinderRadius ** 2) * cylinderHeight).toFixed(2);

console.log(`Cylinder volume equals: ${cylinderVolume}`);   // Press Fn+Esc on keyboard to enter ` symbol.
