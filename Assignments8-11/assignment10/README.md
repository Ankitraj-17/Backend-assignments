# Assignment 10: Store Data in Firebase Firestore

## Run

Create a Firebase service account in the Firebase Console, enable Firestore, and put its project ID, client email, and private key in the root `.env` using the names in `.env.example`.

```bash
cd assignments_8_11
npm install
npm run assignment10
```

## Endpoint

`POST /api/users` with:

```json
{ "name": "Rahul", "email": "rahul@gmail.com", "age": 22, "course": "MCA" }
```

Valid data is written to the Firestore `users` collection. Invalid data returns `400` with all validation messages and is never written.

## Input and Output

Valid request:

```bash
curl -X POST http://localhost:3002/api/users \
	-H "Content-Type: application/json" \
	-d '{"name":"Rahul","email":"rahul@gmail.com","age":22,"course":"MCA"}'
```

Output:

```json
{ "message": "User stored successfully", "id": "FIRESTORE_DOCUMENT_ID" }
```

Invalid request:

```bash
curl -X POST http://localhost:3002/api/users \
	-H "Content-Type: application/json" \
	-d '{"name":"R","email":"not-an-email","age":150}'
```

Output:

```json
{
	"message": "Validation failed",
	"errors": [
		"\"name\" length must be at least 2 characters long",
		"\"email\" must be a valid email",
		"\"age\" must be less than or equal to 120",
		"\"course\" is required"
	]
}
```
