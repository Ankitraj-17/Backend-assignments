const express = require("express");

const app = express();
const router = express.Router();

function routerLogger(req, res, next) {
    const timestamp = new Date().toISOString().replace("T", " ").slice(0, 19);

    console.log(`${req.method} ${req.originalUrl} ${timestamp}`);
    next();
}

router.use(routerLogger);

router.get("/students", (req, res) => {
    res.send("Students List");
});

router.get("/courses", (req, res) => {
    res.send("Courses List");
});

router.get("/faculty", (req, res) => {
    res.send("Faculty List");
});

app.use("/api", router);

if (require.main === module) {
    app.listen(3000, () => {
        console.log("Server is running on http://localhost:3000");
    });
}

module.exports = { app, router, routerLogger };