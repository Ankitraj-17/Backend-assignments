# Express Basics Assignment

**Name:** Ankitraj Jha

## Steps to run the server

1. Open the terminal and navigate to the project directory:
   ```bash
   cd express-basics-assignment
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

2. **`GET http://localhost:3000/about`**
   ```
   This is About Page
   ```

3. **`GET http://localhost:3000/contact`**
   ```
   This is Contact Page
   ```

4. **`GET http://localhost:3000/user/john`**
   ```
   Hello john
   ```

5. **`GET http://localhost:3000/product/101/electronics`**
   ```
   Product ID: 101, Category: electronics
   ```

6. **`GET http://localhost:3000/search?name=john&role=developer`**
   ```
   Name: john, Role: developer
   ```
