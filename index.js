// imports
const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const PORT = 5000;
let flag = "";

//middleware
app.use(bodyParser.text());

//creating route
app.get('/', (req, res) => {
    res.status(200).send('i am GET!')
})

app.post('/', (req, res) => {
    flag+= req.body;
    res.status(200).send(flag);
    flag = "";
})

//lsitening to server at port
app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));