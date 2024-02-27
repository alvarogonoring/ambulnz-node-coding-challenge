import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import '../typeorm';
import '../../container';
import {router} from "shared/infra/http/routes";
import {handleErrors} from "@/shared/infra/http/middlewares/handleErrors";

const port = 8080;

const app = express();

app.use(express.json());
app.use(router);
app.use(handleErrors);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});
