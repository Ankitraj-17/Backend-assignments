# Assignment 11: Teacher and Student Registration

## Run

```bash
cd assignments_8_11
npm install
npm run assignment11
```

The app uses MongoDB database `assignment11` by default and listens on port `3003`.

## Endpoints

- `POST /teacher/register` with `{ "name": "Asha", "email": "asha@example.com", "password": "secret123", "subject": "Node.js" }`
- `POST /student/register` with `{ "name": "Rahul", "email": "rahul@example.com", "password": "secret123", "course": "MCA", "age": 22 }`

Both schemas validate the request through Mongoose. Passwords are hashed with bcryptjs before they are written to their separate collections and are never returned in the API response.

## Input and Output

Teacher registration input:

```bash
curl -X POST http://localhost:3003/teacher/register \
	-H "Content-Type: application/json" \
	-d '{"name":"Asha","email":"asha@example.com","password":"secret123","subject":"Node.js"}'
```

Teacher output:

```json
{
	"message": "Teacher registered successfully",
	"teacher": {
		"id": "TEACHER_ID",
		"name": "Asha",
		"email": "asha@example.com",
		"subject": "Node.js"
	}
}
```

Student registration input:

```bash
curl -X POST http://localhost:3003/student/register \
	-H "Content-Type: application/json" \
	-d '{"name":"Rahul","email":"rahul@example.com","password":"secret123","course":"MCA","age":22}'
```

Student output:

```json
{
	"message": "Student registered successfully",
	"student": {
		"id": "STUDENT_ID",
		"name": "Rahul",
		"email": "rahul@example.com",
		"course": "MCA",
		"age": 22
	}
}
```

Passwords are intentionally absent from both responses. In MongoDB, the stored `password` field contains a bcrypt hash rather than the original input.
