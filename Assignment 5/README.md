<img width="954" height="804" alt="Screenshot 2026-09-04 at 8 59 31 PM" src="https://github.com/user-attachments/assets/f9276f38-2db4-4bc5-b083-bdbe57cfaf9f" /># Express Basics Assignment

**Name:** Ankitraj Jha

## Steps to run the server

1. Open the terminal and navigate to the project directory:
   ```bash
   cd "Assignment 5"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the server:
   ```bash
   npm start
   ```
   Or run using nodemon:
   ```bash
   npm run dev
   ```

The server will start on `http://localhost:3000`.

---

## Explanation of routes

- **`GET /`**
  - Home route. Returns `Welcome to Home Page`.

- **`GET /about`**
  - About route. Returns `This is About Page`.

- **`GET /contact`**
  - Contact route. Returns `This is Contact Page`.

- **`GET /user/:name`**
  - Dynamic route with route parameter `:name`.
  - Reads `req.params.name` and responds with `Hello <name>`.
  - Example: `GET /user/john` returns `Hello john`.

- **`GET /product/:id/:category`**
  - Route with multiple parameters `:id` and `:category`.
  - Reads `req.params.id` and `req.params.category`.
  - Example: `GET /product/101/electronics` returns `Product ID: 101, Category: electronics`.

- **`GET /search`**
  - Reads query parameters using `req.query.name` and `req.query.role`.
  - Example: `GET /search?name=john&role=developer` returns `Name: john, Role: developer`.

- **Middleware (Request Logging)**
  - Intercepts all requests using `app.use()`.
  - Prints the HTTP request method and URL in the console (e.g. `GET /about`).

---

## Sample outputs

### Console Output
When requests are made to the server, the terminal logs the method and URL:
```
Server is running on http://localhost:3000
GET /about
GET /user/john
GET /search?name=john
```

### Route Responses

1. **`GET http://localhost:3000/`**
   ```
   Welcome to Home Page

   ```
   <img width="925" height="811" alt="Screenshot 2026-09-04 at 8 56 28 PM" src="https://github.com/user-attachments/assets/8e9847e1-779f-410d-aa61-27cff775e658" />


2. **`GET http://localhost:3000/about`**
   ```
   This is About Page
   ```
   <img width="974" height="744" alt="Screenshot 2026-09-04 at 8 58 45 PM" src="https://github.com/user-attachments/assets/d657f6b8-d87f-4677-b5f5-33d3580f5db1" />


3. **`GET http://localhost:3000/contact`**
   ```
   This is Contact Page
   ```
   <img width="974" height="822" alt="Screenshot 2026-09-04 at 8 59 08 PM" src="https://github.com/user-attachments/assets/496ff03e-6a68-449f-8f82-2bebdf100c8c" />


4. **`GET http://localhost:3000/user/Ankitraj`**
   ```
   Hello Ankitraj
   ```
   <img width="937" height="786" alt="Screenshot 2026-09-04 at 8 59 50 PM" src="https://github.com/user-attachments/assets/33f67274-87a4-4067-a978-d72eea924b35" />


5. **`GET http://localhost:3000/product/101/electronics`**
   ```
   Product ID: 101, Category: electronics
   ```
<img width="1033" height="799" alt="Screenshot 2026-09-04 at 9 00 16 PM" src="https://github.com/user-attachments/assets/98710f48-60d4-4d59-8977-f83b2aa230f2" />

6. **`GET http://localhost:3000/search?name=Ankitraj&role=developer`**
   ```
   Name: Ankitraj, Role: developer
   ```
   <img width="941" height="802" alt="Screenshot 2026-09-04 at 9 01 16 PM" src="https://github.com/user-attachments/assets/988a61fa-bf5e-43bf-b083-28ef9329344a" />

