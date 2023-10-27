const express = require("express");
const app = express();

app.get("/", (req, res) => {

})


app.listen(process.env.PORT || 3000, (req, res) => {
    console.log("Server start")
})