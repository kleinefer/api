const express = require('express');
const app = express();
import pj from "../package.json"
import routes from './routers/routes';
import cors from 'cors'


const morgan = require('morgan')
app.use(morgan('tiny'))
app.use(cors())

app.set("pj",pj)

app.use(express.json())

app.get('/', (req, res) => { 
    res.json({
        name: app.get("pj").name,
        descriptcion: app.get("pj").descriptcion,
        version: app.get("pj").version,
        autor: app.get("pj").author,
    });
});

routes(app);

export default app;
