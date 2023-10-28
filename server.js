const express = require("express");
const app = express();
const nodemailer = require('nodemailer');

app.use(express.static('public'))
app.use(express.json())

app.get("/", (req, res) => {
    res.render("index")
})

app.post("/contact", (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.MAIL,
          pass: process.env.PASS
        }
      });
      
})

console.log(process.env.MAIL)


app.listen(process.env.PORT || 3000, (req, res) => {
    console.log("Server start")
})