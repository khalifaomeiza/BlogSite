const express = require("express");
const app = express();
app.set("view engine", "ejs");
//Middleware
app.use("/assets", express.static("assets"));
app.use(express.urlencoded({extended: true}));
//Home route
app.get("/", (req, res)=>{
    res.render("index");
});
// Add Blogs
app.get('/AddBlogs', (req, res) =>{
    res.render('AddBlogs', {Username: "Khalifa"})
})

// Success 
app.post('/Success', (req, res) =>{
    console.log(req.body)
    res.render("Success")
})

app.get('/Register', (req, res) =>{
    console.log(req.body)
    res.render("Register")
})

app.get('/Login', (req, res) =>{
    console.log(req.body)
    res.render("Login")
})

//Listener
const PORT = 8080;

app.listen(PORT, ()=>{
    console.log(`Server is connected to port ${PORT}`);
})