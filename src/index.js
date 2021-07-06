//var express = require('express');

import bodyParser from 'body-parser';
import express from 'express';


//var app =express();

const app= express();

app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())

app.get('/',(req,res) => {
    const sonuc = {
        durum : true,
        mesaj : 'tammanlandi'
    };


res.send('rest');
});

app.post('/',(req,res)=>{

  

     res.send({req,body});
});

//app.get('/', function(req,res)

//});

app.listen(3300,() =>
    console.log("calisti")
)
