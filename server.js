const express = require("express");
const path = require("path");

const app = express();

app.get("/index.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
})
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
})
app.get("/contact.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/contact.html"));
})
app.get("/about.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/about.html"));
})
app.get("/admin.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/admin.html"));
})
app.get("/product-single.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/product-single.html"));
})

// serving the index.html file 
app.use(express.static(path.join(__dirname, 'public')));

const server = app.listen(3000);
const portNumber = server.address().port;
console.log(`port: ${portNumber}`);
// can see the port number in terminal - you can dictate the port number