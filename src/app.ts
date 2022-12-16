import express from 'express';
import Practice from './practice';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {

    Practice.run();

    console.log(`Express is listening at http://localhost:${port}`);
});