# Assignment 7: Route Parameters & Query Parameters in Express.js

**Student Name:** Ankitraj Jha

## Overview
This project implements Express.js routing concepts covering Route Parameters (`req.params`) and Query Parameters (`req.query`).

---

## Assignments Implemented

### Assignment 1: Route Parameters (10 Marks)
- **Objective:** Implement dynamic routing using Route Parameters in Express.js.
- **Route:** `GET /student/:id`
- **Output:** `Student ID: <id>`
- **Test URLs:**
  - `http://localhost:3000/student/101` ➔ `Student ID: 101`
  - `http://localhost:3000/student/205` ➔ `Student ID: 205`

### Assignment 2: Query Parameters (10 Marks)
- **Objective:** Retrieve and display data using Query Parameters.
- **Route:** `GET /search`
- **Output:**
  - When provided:
    ```
    Name: <name>
    Course: <course>
    ```
  - When no query parameters: `No search data provided.`
- **Test URLs:**
  - `http://localhost:3000/search?name=Ankitraj&course=Node.js` ➔
    ```
    Name: Ankitraj
    Course: Node.js
    ```
  - `http://localhost:3000/search` ➔ `No search data provided.`

### Assignment 3: Student Profile using Route Parameters & Query Parameters (10 Marks)
- **Objective:** Build a dynamic route that uses both route parameters and query parameters.
- **Route:** `GET /student/:id`
- **Output:**
  ```
  Student ID: <id>
  Name: <name>
  Course: <course>
  ```
- **Test URL:**
  - `http://localhost:3000/student/101?name=Ankitraj&course=FullStack` ➔
    ```
    Student ID: 101
    Name: Ankitraj
    Course: FullStack
    ```

---

## How to Run

### Run All Assignments Together (Using Nodemon)
```bash
npm start
# or
npx nodemon index.js
```
Visit `http://localhost:3000` in your browser to see clickable test links for all 3 assignments.

### Run Individual Assignment Files
```bash
# Assignment 1 only:
node assignment1.js

# Assignment 2 only:
node assignment2.js

# Assignment 3 only:
node assignment3.js
```
