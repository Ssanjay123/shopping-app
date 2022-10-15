const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const path = require("path")

app.use(bodyParser.urlencoded({extended:false}));
const adminRouter = require("./router/admin");
const shopRouter = require("./router/shop.js");
const contactRouter = require("./router/contact");

// app.use(express.static(path.join(__dirname,'public')));

app.use(adminRouter);
app.use(shopRouter);
app.use(contactRouter);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','error.html'));
})
app.listen(3000);