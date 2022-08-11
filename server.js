require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.get('/', (req, res) => {
    res.render('./index');
  })
  let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, () =>{
    console.log("server is running on 3000")
})