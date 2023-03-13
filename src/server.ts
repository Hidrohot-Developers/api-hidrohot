import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors';
import cors from 'cors';
import * as dotenv from 'dotenv'
import axios from 'axios';

dotenv.config()

const app = express();
app.use(express.json());
app.use(cors());

app.listen(8080, () => console.log('Server Runner!'))