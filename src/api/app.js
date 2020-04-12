const express = require('express');
const app = express();

const customers = [
    { id: 1, firstName: "Supun", lastName: "Kandambige" },
    { id: 2, firstName: "Ojithma", lastName: "Gamage" }
];

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    return next();
});

app.get('/', (req, res) => {
    res.send("Home");
});

app.get('/api/customers', (req, res) => {
    res.json(customers);
});

app.listen(3000, () => console.log('Back end app started at 3000!'));
