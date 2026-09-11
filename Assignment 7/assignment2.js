const express = require('express');
const app = express();
const PORT = 3000;

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

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
