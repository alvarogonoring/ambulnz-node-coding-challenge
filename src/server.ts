import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import './db';
import './shared/container';
import {router} from "@/routes";
import {handleErrors} from "@/middlewares/handleErrors";

const port = 8080;

const app = express();

app.use(express.json());
app.use(router);
app.use(handleErrors);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});
