// Завдання 2: Конкатенація радків та шаблонний рядок

// Створіть дві змінні, які містять імена двох осіб. 
// Використовуючи конкатенацію рядків, створіть новий рядок, який містить вітання для обох осіб. 
// Виведіть результат в консоль. Потім використайте шаблонний рядок для створення того ж вітання. 
// Виведіть результат в консоль.

const firstName = 'John';
const secondName = 'Ashley';

const firstGreeting = 'Hello, ' + firstName + ' and ' + secondName + '!!!';
console.log(firstGreeting);

const secondGreeting = `Hello, ${firstName} and ${secondName}!!!`;  // Press Fn+Esc on keyboard to enter ` symbol.
console.log(secondGreeting);
