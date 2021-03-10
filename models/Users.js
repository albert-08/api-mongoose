const mongoose = require('mongoose')
const {Schema} = mongoose

const UserSchema = new Schema({
    name: String,
    email:{
        type: String,
        unique: true,
        required: true
    },
    password: String,
    age: {
        type: Number,
        default: 0
    },
    gender: {
        type: String,
        enum: ['M','F']
    },
    birth_date: Date,
    photo:{
        type: String,
        //match:// regex,
    }
},{timestamps:true})//automaticamente agrega created_at y update_at

const users = mongoose.model('users',UserSchema)// vincular la colección de mongo con el esquema  de arriba

module.exports = users