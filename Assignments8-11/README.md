# Node Assignments 8-11

Each assignment is a self-contained Express application under its own folder. The source keeps schema, model, router, configuration, and server responsibilities separated as required.

## Setup

```bash
cd assignments_8_11
cp .env.example .env
npm install
```

Use a running local MongoDB instance for assignments 8, 9, and 11. Assignment 10 needs a Firebase service account with Firestore enabled; set its values in `.env`.

## Applications

- `npm run assignment8`: create and retrieve users, port 3000
- `npm run assignment9`: create, retrieve, update, and delete users, port 3001
- `npm run assignment10`: validate and store users in Firestore, port 3002
- `npm run assignment11`: teacher and student registration with bcrypt, port 3003

## Input and Output Examples

Each assignment README contains copy-paste request inputs and representative JSON outputs:

- [Assignment 8 examples](assignment8/README.md)
- [Assignment 9 examples](assignment9/README.md)
- [Assignment 10 examples](assignment10/README.md)
- [Assignment 11 examples](assignment11/README.md)

Never commit `.env` or a Firebase service-account JSON file. The required screenshots can be captured from the terminal, Postman/curl responses, MongoDB Compass, and Firebase Console after running the relevant app.
