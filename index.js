import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => { /*Deals with the home page*/
  res.send("<h1>Home Page</h1><p>Hello World</p>");
});

app.get("/contact", (req, res) => { /* Deals with the contact me page */
  res.send("<h1>Contact Me</h1><p>I can be reached at: 123-456-7890</p>");
});

app.get("/about", (req, res) => { /* Deals with the about page */
  res.send("<h1>About Me</h1><p>I am a developer!</p>");
});


app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
