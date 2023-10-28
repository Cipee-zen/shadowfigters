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
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.mail,
          pass: process.env.pass
        }
    });

    const mailOptions = {
        from: process.env.mail,
        to: req.body.email,
        subject: 'Messaggio da '+ req.body.name,
        text: req.body.description
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
            res.send("error")
        }else {
            res.send("succces")
        }
    })
})

console.log(process.env.pass)


app.listen(process.env.PORT || 3000, (req, res) => {
    console.log("Server start")
})