const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const nav = `
        <nav>
            <a href="/">Home</a> | 
            <a href="/about">About Me</a> | 
            <a href="/skills">Skills</a> | 
            <a href="/projects">Projects</a> | 
            <a href="/contact">Contact Details</a>
        </nav>
        <hr>
    `;

    if (req.url === '/' || req.url === '/home') {
        res.end(`
<!DOCTYPE html>
<html>
<head><title>Home</title></head>
<body>
    ${nav}
    <h1>Welcome to My Portfolio</h1>
    <p>Hello! Welcome to my personal portfolio server created using Node.js HTTP module.</p>
</body>
</html>
        `);
    } else if (req.url === '/about') {
        res.end(`
<!DOCTYPE html>
<html>
<head><title>About Me</title></head>
<body>
    ${nav}
    <h1>About Me</h1>
    <p>I am a student learning Full Stack Development with Node.js.</p>
</body>
</html>
        `);
    } else if (req.url === '/skills') {
        res.end(`
<!DOCTYPE html>
<html>
<head><title>Skills</title></head>
<body>
    ${nav}
    <h1>Skills</h1>
    <ul>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>HTML & CSS</li>
        <li>SQL</li>
    </ul>
</body>
</html>
        `);
    } else if (req.url === '/projects') {
        res.end(`
<!DOCTYPE html>
<html>
<head><title>Projects</title></head>
<body>
    ${nav}
    <h1>Projects</h1>
    <ul>
        <li>Student API Server</li>
        <li>Portfolio Website Server</li>
    </ul>
</body>
</html>
        `);
    } else if (req.url === '/contact') {
        res.end(`
<!DOCTYPE html>
<html>
<head><title>Contact Details</title></head>
<body>
    ${nav}
    <h1>Contact Details</h1>
    <p>Name: John Doe</p>
    <p>Email: john@example.com</p>
</body>
</html>
        `);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`
<!DOCTYPE html>
<html>
<head><title>404 Not Found</title></head>
<body>
    ${nav}
    <h1>404 - Page Not Found</h1>
</body>
</html>
        `);
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
