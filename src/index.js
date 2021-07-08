
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import AuthRouter from './routes';
import mongoose from 'mongoose';
mongoose.connect('mongodb://ebdbuser:ebdbuserpassword@ds121336.mlab.com:21336/egitimbudur_db', {useNewUrlParser: true, useUnifiedTopology: true});

const app= express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())

 AuthRouter(app);


app.get('/',(req,res) => {
res.send("egitim budur api");
});

app.listen(3300,() =>
    console.log("calisti")
)
