// Створити тестовий сценарій за допомогою пекеджу axios.
// Використати безкоштовне і відкрите АПІ - JSONPlaceholder.

// Задача:
// створити 5 запитів за допомогою методів GET, POST
// обов'язково має бути перевірка респонсу - response status, data на коректність згідно з документацією по АПІ

import axios from 'axios';

describe(`JSONPlaceholder API`, () => {
	describe(`Users requests`, () => {
		test('Get all users', async () => {
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/users', // calling the get API
				{
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);
			console.log(response.data[0]);
			expect(response.status).toEqual(200); // asserting if the response code is 200
			expect(response.data).toHaveLength(10); // asserting if the response data length to be 10
			expect(response.data[0].id).toBe(1); // asserting if the response data id to be 1
			expect(response.data[0].name).toBe('Leanne Graham'); // asserting if the response data name to be '<expected text>.'
		});

		test('Get user info', async () => {
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/users/2', // calling the get API
				{
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);
			console.log(response.data);
			expect(response.status).toEqual(200); // asserting if the response code is 200
			expect(response.data.id).toBe(2); // asserting if the response data id to be 1
			expect(response.data.name).toBe('Ervin Howell'); // asserting if the response data name to be '<expected text>.'
			expect(response.data.username).toBe('Antonette'); // asserting if the response data username to be '<expected text>.'
			expect(response.data.email).toBe('Shanna@melissa.tv'); // asserting if the response data email to be '<expected text>.'
		});
	});

	describe(`Posts requests`, () => {
		test('Get all posts', async () => {
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/posts', // calling the get API
				{
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);
			console.log(response.data[0]);
			expect(response.status).toEqual(200); // asserting if the response code is 200
			expect(response.data).toHaveLength(100); // asserting if the response data length to be 100
			expect(response.data[0].userId).toBe(1); // asserting if the response data userId to be 1
			expect(response.data[0].id).toBe(1); // asserting if the response data id to be 1
			expect(response.data[0].title).toBe(
				'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
			); // asserting if the response data title to be '<expected text>.'
		});

		test('Get post info', async () => {
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/posts/2', // calling the get API
				{
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);
			console.log(response.data);
			expect(response.status).toEqual(200); // asserting if the response code is 200
			expect(response.data.id).toBe(2); // asserting if the response data id to be 2
			expect(response.data.userId).toBe(1); // asserting if the response data userId to be 1
			expect(response.data.title).toBe('qui est esse'); // asserting if the response data title to be '<expected text>.'
			expect(response.data.body).toBe(
				'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
			); // asserting if the response data body to be '<expected text>.'
		});

		test('Create specific post', async () => {
			const response = await axios.post(
				'https://jsonplaceholder.typicode.com/posts', // calling the get API
				{
					title: 'foo',
					body: 'bar',
					userId: 1,
				},
				{
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);
			console.log(response.data);
			expect(response.status).toEqual(201); // asserting if the response code is 200
			expect(response.data.id).toBe(101); // asserting if the response data id to be 101
			expect(response.data.userId).toBe(1); // asserting if the response data userId to be 1
			expect(response.data.title).toBe('foo'); // asserting if the response data title to be '<expected text>.'
			expect(response.data.body).toBe('bar'); // asserting if the response data body to be '<expected text>.'
		});

		test('Update specific post', async () => {
			const response = await axios.put(
				'https://jsonplaceholder.typicode.com/posts/1', // calling the get API
				{
					title: 'foo',
					body: 'bar',
					userId: 1,
					id: 1,
				},
				{
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);
			console.log(response.data);
			expect(response.status).toEqual(200); // asserting if the response code is 200
			expect(response.data.id).toBe(1); // asserting if the response data id to be 101
			expect(response.data.userId).toBe(1); // asserting if the response data userId to be 1
			expect(response.data.title).toBe('foo'); // asserting if the response data title to be '<expected text>.'
			expect(response.data.body).toBe('bar'); // asserting if the response data body to be '<expected text>.'
		});
	});

	describe(`Todos requests`, () => {
		test('Get all todos', async () => {
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/users/1/todos', // calling the get API
				{
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);
			console.log(response.data[0]);
			expect(response.status).toEqual(200); // asserting if the response code is 200
			expect(response.data).toHaveLength(20); // asserting if the response data length to be 200
			expect(response.data[0].userId).toBe(1); // asserting if the response data userId to be 1
			expect(response.data[0].id).toBe(1); // asserting if the response data id to be 1
			expect(response.data[0].title).toBe('delectus aut autem'); // asserting if the response data title to be '<expected text>.'
			expect(response.data[0].completed).toEqual(false); // asserting if the response todo status to be 'true/false'
		});

		test('Create specific todo task', async () => {
			const response = await axios.post(
				'https://jsonplaceholder.typicode.com/users/1/todos', // calling the get API
				{
					title: 'foo',
					userId: 1,
					completed: false,
				},
				{
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);
			console.log(response.data);
			expect(response.status).toEqual(201); // asserting if the response code is 200
			expect(response.data.id).toBe(201); // asserting if the response data id to be 101
			expect(response.data.userId).toBe('1'); // asserting if the response data userId to be 1
			expect(response.data.title).toBe('foo'); // asserting if the response data title to be '<expected text>.'
			expect(response.data.completed).toEqual(false); // asserting if the response todo status to be 'true/false'
		});
	});
});
