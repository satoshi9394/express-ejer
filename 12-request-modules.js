import http from 'http';
import express from 'express';
import dotenv from 'dotenv';
import routes from './routes'

dotenv.config()

const APP = express();


const SERVER = http.createServer(APP);

const users= []

routes(APP, users)

SERVER.listen(process.env.PORT);