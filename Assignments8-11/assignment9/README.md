# Assignment 9: Update and Delete Users

## Run

```bash
cd assignments_8_11
npm install
npm run assignment9
```

The API uses MongoDB database `assignment9` by default and listens on port `3001`.

## Endpoints

- `POST /api/users`
- `GET /api/users`
- `PATCH /api/users/:id`
- `DELETE /api/users/:id`

Example PATCH body: `{ "age": 23, "course": "MCA" }`. Invalid IDs return `400`; missing users return `404`; validation and database failures return meaningful error responses.

## Input and Output

Create a user and copy the returned `_id`:

```bash
curl -X POST http://localhost:3001/api/users \
	-H "Content-Type: application/json" \
	-d '{"name":"Rahul","email":"rahul@gmail.com","age":22,"course":"MCA"}'
```

Output:

```json
{
	"message": "User created successfully",
	"user": { "_id": "USER_ID", "name": "Rahul", "age": 22, "course": "MCA" }
}
```

Update the user:

```bash
curl -X PATCH http://localhost:3001/api/users/USER_ID \
	-H "Content-Type: application/json" \
	-d '{"age":23,"course":"MCA"}'
```

Output:

```json
{ "message": "User updated successfully", "user": { "_id": "USER_ID", "age": 23, "course": "MCA" } }
```

Delete the user:

```bash
curl -X DELETE http://localhost:3001/api/users/USER_ID
```

Output:

```json
{ "message": "User deleted successfully" }
```
