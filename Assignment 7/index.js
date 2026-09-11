const express = require('express');
const app = express();
const PORT = 3000;

app.get('/student/:id', (req, res) => {
    const { id } = req.params;
    const { name, course } = req.query;

    if (name && course) {
        return res.send(`Student ID: ${id}<br>Name: ${name}<br>Course: ${course}`);
    }

    if (name) {
        return res.send(`Student ID: ${id}<br>Name: ${name}`);
    }

    if (course) {
        return res.send(`Student ID: ${id}<br>Course: ${course}`);
    }

    res.send(`Student ID: ${id}`);
});

app.get('/search', (req, res) => {
    const { name, course } = req.query;

    if (!name && !course) {
        return res.send('No search data provided.');
    }

    if (name && course) {
        return res.send(`Name: ${name}<br>Course: ${course}`);
    }

    if (name) {
        return res.send(`Name: ${name}`);
    }

    if (course) {
        return res.send(`Course: ${course}`);
    }
});

app.get('/', (req, res) => {
    res.send(`
        <h1>Assignment 7: Route & Query Parameters</h1>
        <h3>Test Links:</h3>
        <ul>
            <li><strong>Assignment 1:</strong> <a href="/student/101">/student/101</a></li>
            <li><strong>Assignment 1:</strong> <a href="/student/205">/student/205</a></li>
            <li><strong>Assignment 2:</strong> <a href="/search?name=Ankitraj&course=Node.js">/search?name=Ankitraj&course=Node.js</a></li>
            <li><strong>Assignment 2 (no params):</strong> <a href="/search">/search</a></li>
            <li><strong>Assignment 3:</strong> <a href="/student/101?name=Ankitraj&course=FullStack">/student/101?name=Ankitraj&course=FullStack</a></li>
        </ul>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
