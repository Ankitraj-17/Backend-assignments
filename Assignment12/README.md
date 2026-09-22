# Assignment 12: User Registration, Login & JWT Authentication Using Express.js

A secure authentication system built with **Node.js**, **Express.js**, **MongoDB Atlas**, **Mongoose**, **bcrypt**, and **JSON Web Tokens (JWT)**.

---

## 📋 Features

- **User Registration (`POST /register`)**: Validates user inputs, verifies unique email, hashes password with `bcrypt` (salt rounds: 10), and stores user in MongoDB Atlas. Plain-text passwords are never stored.
- **User Login (`POST /login`)**: Finds user by email, verifies password using `bcrypt.compare()`, and returns a signed JWT token upon successful authentication.
- **Authentication Middleware (`middleware/auth.js`)**: Inspects `Authorization: Bearer <token>` header, verifies token validity and signature with `jwt.verify()`, and denies access with `401 Unauthorized` for missing or invalid tokens.
- **Protected Profile Endpoint (`GET /profile`)**: Only accessible with a valid Bearer JWT token. Returns user profile details.
- **MongoDB Atlas Database**: Secure cloud database integration with connection URI and secrets configured via `.env`.

---

## 🗂️ Project Structure

```
Assignment12/
├── config/
│   └── db.js            # MongoDB Atlas Mongoose connection setup
├── models/
│   └── User.js          # Mongoose User Schema & Model
├── middleware/
│   └── auth.js          # JWT Bearer authentication middleware
├── routes/
│   └── authRoutes.js    # /register, /login, and /profile route handlers
├── .env                 # Local secrets & connection strings (ignored by git)
├── .env.example         # Example environment template
├── .gitignore           # Git ignore file (node_modules, .env)
├── package.json         # Project metadata & dependencies
├── server.js            # Main Express server entry point
├── test.js              # Automated test script covering all 5 test scenarios
└── README.md            # Comprehensive documentation & Postman guide
```

---

## ⚙️ Installation & Setup

### 1. Install Dependencies
```bash
cd Assignment12
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory (you can copy `.env.example`):
```bash
cp .env.example .env
```
Ensure your `.env` contains:
```env
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mah4d25.mongodb.net/assignment12?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=your_super_secret_jwt_key
```

### 3. Run the Server
```bash
# Production start
npm start

# Development mode (with nodemon auto-restart)
npm run dev
```
The server will start on `http://localhost:3000`.

---

## 🧪 Automated Testing

To automatically run and verify all 5 test requirements:
```bash
npm test
```

---

## 📡 API Endpoints Documentation

### 1. User Registration
- **URL**: `/register`
- **Method**: `POST`
- **Headers**: `Content-Type: application/json`
- **Body**:
  ```json
  {
    "name": "Ankit",
    "email": "Ankit@gmail.com",
    "password": "Ankit@123"
  }
  ```
- **Success Response (201 Created)**:
  ```json
  {
    "message": "User registered successfully"
  }
  ```
- **Error Responses**:
  - `400 Bad Request`: Missing fields or Email already exists
  - `500 Internal Server Error`: Server/Database error

---

### 2. User Login
- **URL**: `/login`
- **Method**: `POST`
- **Headers**: `Content-Type: application/json`
- **Body**:
  ```json
  {
    "email": "ankit@gmail.com",
    "password": "Rahul@123"
  }
  ```
- **Success Response (200 OK)**:
  ```json
  {
    "message": "Login successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```
- **Error Responses**:
  - `401 Unauthorized`: Invalid email or password
  - `400 Bad Request`: Missing email or password

---

### 3. Protected Profile
- **URL**: `/profile`
- **Method**: `GET`
- **Headers**: `Authorization: Bearer <YOUR_JWT_TOKEN>`
- **Success Response (200 OK)**:
  ```json
  {
    "message": "Welcome to your private profile",
    "user": {
      "id": "65fc1234567890abcdef1234",
      "email": "Ankit@gmail.com"
    }
  }
  ```
- **Error Responses**:
  - `401 Unauthorized`: No token provided or Invalid/expired token

---

## 📸 Required Screenshots Guide (Postman & Atlas)

The assignment requires 8 specific screenshots for submission:

| # | Screenshot Item | How to Capture in Postman / Atlas |
|---|---|---|
| **1** | **Successful registration in Postman** | Send `POST http://localhost:3000/register` with JSON body `{ "name": "Rahul", "email": "rahul@example.com", "password": "Rahul@123" }`. Capture the `201 Created` status and `{ "message": "User registered successfully" }`. |
| **2** | **User stored in MongoDB Atlas** | In MongoDB Atlas Web UI, navigate to **Database Deployments > Browse Collections > `assignment12.users`**. Capture the document listing showing the new user. |
| **3** | **Hashed password visible in MongoDB Atlas** | Zoom in or expand the document in MongoDB Atlas to show the `password` field starting with `$2b$10$...` (verifying bcrypt hashing, not plain-text). |
| **4** | **Successful login** | Send `POST http://localhost:3000/login` with `{ "email": "rahul@example.com", "password": "Rahul@123" }`. Capture the `200 OK` status and the response. |
| **5** | **JWT token received** | Ensure the response body of `POST /login` clearly displays `"token": "eyJhbGciOi..."`. Copy this token for the next tests. |
| **6** | **/profile without token → 401 Unauthorized** | Send `GET http://localhost:3000/profile` with **no** `Authorization` header. Capture the `401 Unauthorized` status and `{ "message": "Access denied. No token provided or invalid format." }`. |
| **7** | **/profile with invalid token → 401 Unauthorized** | Send `GET http://localhost:3000/profile` with Header `Authorization: Bearer invalid_token_123`. Capture `401 Unauthorized` status and `{ "message": "Invalid or expired token." }`. |
| **8** | **/profile with valid token → 200 OK** | Send `GET http://localhost:3000/profile` with Header `Authorization: Bearer <YOUR_COPIED_TOKEN>`. Capture `200 OK` and `{ "message": "Welcome to your private profile", "user": { ... } }`. |

---

## 📦 Deliverables Checklist

- [x] **Express server, project setup & User Schema (1 Mark)**: `server.js`, `package.json`, `models/User.js`
- [x] **MongoDB Atlas integration (1 Mark)**: `config/db.js` with Mongoose connecting to Atlas via `.env`
- [x] **Register endpoint + bcrypt hashing (2 Marks)**: `POST /register` with 10 salt rounds
- [x] **Login endpoint + password verification (2 Marks)**: `POST /login` with `bcrypt.compare()`
- [x] **JWT token generation (1 Mark)**: `jwt.sign()` with `JWT_SECRET`
- [x] **Authentication middleware (2 Marks)**: `middleware/auth.js` with Bearer token parsing and validation
- [x] **Private endpoint + Postman testing (1 Mark)**: `GET /profile` protected route + complete test suite & guide
- [x] **Environment & Security**: `.env` added to `.gitignore`, `.env.example` provided, credentials never hardcoded
