const express = require('express')
const bodyParser = require('body-parser')

const calculator = require('./calculator.js')

const app = express()
const port = 8000
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');

    next();
});
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/compute', (req, res) => {
    let data = req.body;
    const result = calculator.sum(data.firstNumber*1,data.secondNumber*1);
    const resultObject = { "result": result };
    res.send(resultObject);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
