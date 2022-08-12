require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
const {contactmodel} = require("./models/contact")

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.get('/', (req, res) => {
    res.render('./index');
  })
  app.post("/", (req, res) => {
    contactmodel.create({
    name:req.body.name,
    email:req.body.email,
    number:req.body.number,
    subject:req.body.subject,
    msg:req.body.msg
    })
})

  let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, () =>{
    console.log("server is running on 3000")
})

mongoose.connect(process.env.MONGO)