const mongoose = require('mongoose')
const schema = mongoose.Schema
const contactschema = new schema({
    name:String,
    email:String,
    number:String,
    subject:String,
    msg:String
})

const contactmodel = mongoose.model("contact", contactschema)
module.exports = {contactmodel}