import 'reflect-metadata';
import express from 'express';
import './db';

const port = 8080;

const app = express();

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
