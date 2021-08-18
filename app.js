const express = require("express");
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send(`<h1>Hello NodeJS. It is my first App</h1>`);
});

app.get('/about', (req, res) => {
    res.send(`<p>My name is Diyor. My email address is diyorshoumarov@gmail.com</p>`);
});

app.all('*', (req, res) => {
    res.status(404).send('Page not found');
});