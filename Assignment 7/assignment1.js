const express = require('express');
const app = express();
const PORT = 3000;

app.get('/student/:id', (req, res) => {
    const studentId = req.params.id;
    res.send(`Student ID: ${studentId}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
