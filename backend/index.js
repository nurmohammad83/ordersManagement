const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
const cors = require('cors')
const orders = require('./data/orders.json')

app.use(cors())
app.get('/orders' , (req, res)=>{
    res.send(orders)
})




app.listen(port, ()=>{
    console.log('Order management running', port);
})