//  Завдання 4: Відбір парних чисел
//  Вам потрібно створити програму, яка відфільтровує парні числа з масиву.
//  Ось кроки, які вам потрібно виконати:
//  1. Створіть масив чисел, наприклад, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
//  2. Cтворіть новий масив, який міститиме лише парні числа.
//  3. Виведіть отриманий масив парних чисел на консоль.

//  Create function to filter even numbers into new array.
const filterEvenNumbers = (numbers) => {
	return numbers.filter((number) => number % 2 === 0);
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterEvenNumbers(numbers)); //  [ 2, 4, 6, 8, 10 ]
