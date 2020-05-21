const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const mongoose=require('mongoose');
const dbConfig=require('./database.configure');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.Promise=global.Promise;
mongoose.connect(dbConfig.url, { useNewUrlParser:true , useUnifiedTopology:true})
.then(()=>{
    console.log("Successfully Connected to database");
}).catch(err=>{
    console.log("Failed Connecting to Database");
    process.exit();
})

require('../fundoo_backend/main/route/route');

app.listen(3000, ()=>{
    console.log("Server listening on port 3000");
});