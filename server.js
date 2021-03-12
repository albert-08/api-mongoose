const express = require('express')
const mongoose = require('mongoose')
const Users = require('./models/Users')
const app = express()
//const MONGO_URI = "mongodb+srv://alberto:Prueba@cluster0.mgsau.mongodb.net/apimongo?retryWrites=true&w=majority"
const MONGO_URI = `mongodb://db:27017/${process.env.MONGO_NAME}` // aquí me estoy conectando desde el contenedor de mongo

app.use(express.urlencoded({extended: true}))
app.use(express.json())

//esta es la conexión a mongo
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})//inicia la conexión
const db = mongoose.connection//aqué está guardada el status de la conexión

db.on('error',function(err) {//se va a ejecutar varias veces si encuentra un error en la conexión
    console.log('Connection error', err)
}) 

db.once('open', function() {//esto se va a ejecutar una vez 
    console.log('Connected to database! mongoose')
})

app.get('/users', (req,res) => {
    Users.find({}).then((result) => {
        res.status(200).send(result)
    })
})

app.post('/users', (req,res) => {
    Users.create(req.body).then((user) => {
        res.status(201).send(user)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.listen(3000,()=>{
    console.log('Server ready!')
})