const express = require("express");
const axios = require('axios');

const app = express();

app.get("/rest/apple", async (req,res)=>{
    axios
        .get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&outputsize=full&apikey=1OC8C66OUCVW5ZQ1')
        .then(i => {
            const data = i?.data;
            res.set('Access-Control-Allow-Origin', '*')
            res.json(data);
        }).catch(error => {
            console.error(error);
            res.status(502).send("502 - data could not be retreived")
        });
});

app.listen(4200, ()=>{
    console.log("Listening to 4200")
})