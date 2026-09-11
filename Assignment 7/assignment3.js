const express = require('express');
const app = express();
const PORT = 3000;

app.get('/student/:id', (req, res) => {
    const { id } = req.params;
    const { name, course } = req.query;

    res.send(`Student ID: ${id}<br>Name: ${name}<br>Course: ${course}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
