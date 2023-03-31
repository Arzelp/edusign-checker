import express from 'express';
import * as dotenv from 'dotenv';
import http from 'http';
import { router } from './src/routes/router';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
dotenv.config({path: './.env'});

const server = http.createServer();

app.listen(process.env.port);
console.log('Listening port ' + process.env.port);

app.use('/v1', router);

// app.use(cors());
// app.use(bodyParser.json());

// app.listen(process.env.port);