import express from 'express';
import Connection from './database/db.js';
import Routes from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app=express();
Connection();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());
app.use('/',Routes);

app.listen(8000,()=>console.log('Server running at port 8000'))