import express from 'express';

const app = express()
const port = 4000;

app.use(express, (req, res) => {
    res.send('It works');
});


app.listen(port, () => console.log('Server is listening on http://localhost:4000'));