const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
const cors = require('cors')




app.listen(port, ()=>{
    console.log('Order management running', port);
})