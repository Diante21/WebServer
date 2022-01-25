const express = require("express"); 
const mysql = require("mysql"); 
const dotenv = require('dotenv'); 

dotenv.config({path: './.env'})

const app = express(); 

const db = mysql.createConnection({            
    host: process.env.DATABASE_HOST, 
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD, 
    database: process.env.DATABASE
});

app.set('View engine','hbs' ); // View engine to show your html 

db.connect((err) => {
    if(err){
        console.log(err)
    }else{
        console.log("MYSQL Connected...")
    }


})

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>"); 
}); 

app.listen(3503, () => {
    console.log("sever started on port 3503..."); 
});

