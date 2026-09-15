# Assignment 8: Create and Retrieve Users

## Run

From `assignments_8_11`, install dependencies and copy `.env.example` to `.env`:

```bash
npm install
npm run assignment8
```

The API uses MongoDB database `assignment8` by default. Set `MONGO_URI` to use another database.

## Endpoints

- `POST /api/users` with `{ "name": "Rahul", "email": "rahul@gmail.com", "age": 22, "course": "MCA" }`
- `GET /api/users`

## Input and Output

Create a user:

```bash
curl -X POST http://localhost:3000/api/users \
	-H "Content-Type: application/json" \
	-d '{"name":"Rahul","email":"rahul@gmail.com","age":22,"course":"MCA"}'
```

Output:

```json
{
	"message": "User created successfully",
	"user": {
		"name": "Rahul",
		"email": "rahul@gmail.com",
		"age": 22,
		"course": "MCA"
	}
}
```

Retrieve users:

```bash
curl http://localhost:3000/api/users
```

Output:

```json
[
	{
		"name": "Rahul",
		"email": "rahul@gmail.com",
		"age": 22,
		"course": "MCA"
	}
]
```
