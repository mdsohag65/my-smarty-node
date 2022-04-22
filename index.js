const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hellow Mamu! Ami to Node Sikhtesi.Khub Vejailla! But moja ache.Kaj kore na kn.Dhur sala. Eibar line a asche. Thanks nodemon')
});

const users = [
    { id: 1, name: 'Sabnur', email: 'Sabnur@nayika.com', phone: '01613997065' },
    { id: 2, name: 'Sabana', email: 'Sabana@nayika.com', phone: '01613997065' },
    { id: 3, name: 'Apu', email: 'Apu@nayika.com', phone: '01613997065' },
    { id: 4, name: 'Chokina', email: 'Chokina@nayika.com', phone: '01613997065' },
    { id: 5, name: 'Mimi', email: 'Mimi@nayika.com', phone: '01613997065' },
    { id: 6, name: 'Josna', email: 'Josna@nayika.com', phone: '01613997065' },
    { id: 7, name: 'Sakila', email: 'Sakila@nayika.com', phone: '01613997065' },
]

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else {
        res.send(users);
    }

});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges'])
});

app.get('/fruits/mango/fazlee', (req, res) => {
    res.send('sour sour fazlee flavour');
})

app.listen(port, () => {
    console.log('Listening to port', port);
})