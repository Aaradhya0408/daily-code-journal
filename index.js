const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {   id: uuidv4(),
        username: "God's Child",
        content: "I Love Coding",
    },
    {   id: uuidv4(),
        username: "Aaradhya Garg",
        content: "Blessed",
    },
    {   id:uuidv4(),
        username: "Krishna Bhakt",
        content: "Krishna Loves Me!!!",
    }

];

// Routes
app.get("/posts", (req, res) => {
  res.render("index.ejs",{ posts });
});
app.get("/posts/new",(req,res) =>{
  res.render("new.ejs");
});
app.post("/posts",(req,res)=>{
 let {username,content} = req.body;
 let id = uuidv4();
 posts.push({id,username, content});
  res.redirect("/posts");
});


app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p)=> p.id === id);
 res.render("show.ejs",{post});
});
app.get("/posts/:id/edit", (req,res) => {
    let { id } = req.params;
    let post = posts.find((p)=> p.id === id);
    res.render("edit.ejs",{post});
  });



// Start server
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
