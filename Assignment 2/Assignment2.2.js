const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
<!DOCTYPE html>
<html>
<head>
    <title>Student Portal</title>
</head>
<body>
    <h1>Student Portal</h1>
    <hr>
    <p><strong>Name:</strong> John Doe</p>
    <p><strong>Course:</strong> Full Stack Development</p>
    <p><strong>College:</strong> XYZ College</p>
    <br>
    <p>Welcome to our Node.js application.</p>
</body>
</html>
    `);
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
