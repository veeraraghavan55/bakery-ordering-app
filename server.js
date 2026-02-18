'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Sample route for bakery app
app.get('/breads', (req, res) => {
    res.send([{ id: 1, name: 'Sourdough' }, { id: 2, name: 'Baguette' }]);
});

app.get('/cakes', (req, res) => {
    res.send([{ id: 1, name: 'Chocolate Cake' }, { id: 2, name: 'Vanilla Cake' }]);
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
