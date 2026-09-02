const http = require('http');

const PORT = 3000;

// Create HTTP Server handling multiple routes
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    switch (req.url) {
        case '/':
            res.writeHead(200);
            res.end('Welcome to Home Page');
            break;
        case '/about':
            res.writeHead(200);
            res.end('About Us');
            break;
        case '/contact':
            res.writeHead(200);
            res.end('Contact Information');
            break;
        case '/services':
            res.writeHead(200);
            res.end('Our Services');
            break;
        default:
            res.writeHead(404);
            res.end('404 - Page Not Found');
            break;
    }
});

// Start Server on Port 3000
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
