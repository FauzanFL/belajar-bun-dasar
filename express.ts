import express from 'express';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
    const name = req.query['name'] || 'World';
    res.send(`Hello ${name}!`);
});

app.listen(port, () => {
    console.info(`Server is running on port ${port}`);
});