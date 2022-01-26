const express = require("express"); 
const path = require('path'); 
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



const publicDirectory = path.join(__dirname, './public'); //Gives access to Css page
app.use(express.static(publicDirectory)); //Grabs static files like 

app.set('view engine','hbs' ); // View engine to show your html 

// Connects to server 
db.connect((err) => {      
    if(err){
        console.log(err)
    }else{
        console.log("MYSQL Connected...")
    }


})


app.get("/", (req, res) => {
   // res.send("<h1>Home Page</h1>"); 
   res.render("index");
}); 

app.listen(3503, () => {
    console.log("sever started on port 3503..."); 
});

