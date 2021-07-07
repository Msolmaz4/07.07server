

import bodyParser from 'body-parser';
import express from 'express';



const app= express();

app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())

app.get('/',(req,res) => {
res.send("egitim budur api");
});

app.post('/',(req,res)=>{

  

     res.send({req,body});
});




app.listen(3300,() =>
    console.log("calisti")
)
