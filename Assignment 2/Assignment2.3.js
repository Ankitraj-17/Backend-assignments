const http = require('http');

const PORT = 3000;

// Create HTTP Server returning JSON API response
const server = http.createServer((req, res) => {
    if (req.url === '/student') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const studentData = {
            id: 101,
            name: "Ankitraj jha",
            course: "Btech",
            semester: 3,
            city: "Mumbai"
        };
        res.end(JSON.stringify(studentData, null, 2));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Page Not Found');
    }
});

// Start Server on Port 3000
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
