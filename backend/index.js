import express from 'express';
import bodyParser from 'body-parser';

//importaciones de los controller

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))



app.listen(3000, ()=> {
    console.log('listening on port 3000')
    })
