import 'reflect-metadata';
import express from 'express';
import './db';
import './shared/container';
import {router} from "@/routes";

const port = 8080;

const app = express();

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});
