// Name: Ankitraj Jha
// Assignment 5 - Express Basics

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Task 5: Middleware to log request method and URL
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Task 1: Basic Routes
app.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});

app.get('/home', (req, res) => {
    res.send('Welcome to Home Page');
});

app.get('/about', (req, res) => {
    res.send('This is About Page');
});

app.get('/contact', (req, res) => {
    res.send('This is Contact Page');
});

// Task 2: Route Parameter (Dynamic Route)
app.get('/user/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`);
});

// Fallback user route
app.get('/user', (req, res) => {
    res.send('Hello Ankitraj');
});

// Task 3: Multiple Route Parameters
app.get('/product/:id/:category', (req, res) => {
    const { id, category } = req.params;
    res.send(`Product ID: ${id}, Category: ${category}`);
});

// Task 4: Query Parameters
app.get('/search', (req, res) => {
    const name = req.query.name || 'Ankitraj';
    const role = req.query.role || 'developer';
    res.send(`Name: ${name}, Role: ${role}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
