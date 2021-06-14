const { Router } = require('express');
const router = Router();

const fetch = require('node-fetch');

router.get('/', async (req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    res.send(users);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const response = await fetch('https://jsonplaceholder.typicode.com/users' + '/' + id);
    const user = await response.json();
    res.send(user);
});

module.exports = router;