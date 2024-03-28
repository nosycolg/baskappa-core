import express from 'express';
import courtsController from '../controllers/courtsController';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));


app.get('/get/courts', courtsController.getCourts);
app.post('/create/court', courtsController.createCourt);

export default app