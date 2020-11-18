const express = require ('express');
const Stockfinder = require('stockfinder')

const PORT = 1337;
const APIKEY = 'pk_16a849fd637243a79fff90fa4d42bc5d';

const server = express();

server.get('/', (req, res)=> {
    res.render('home.ejs');
})

server.get('/info',(req, res) => {
    const sf = new Stockfinder('stable',req.query.symbol,APIKEY,false)
    sf.getStock().then((result) =>{
        const { lastSalePrice, symbol } = result[0];
        res.render('info.ejs',{lastSalePrice: lastSalePrice, symbol: symbol})
    })
})

server.listen(PORT, ()=>{
    console.log(`server is listening on http://localhost:${ PORT } `);
});
