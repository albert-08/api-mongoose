// vamos a jugar con la conexión de mongo aca 
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')

const mongod = new MongoMemoryServer()

const connect = async () => {
    const uri = await mongod.getUri()
    const mongooseOptions = {
        useNewUrlParser: true,
        autoReconnect: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000
    }

    await mongoose.connect(uri,mongooseOptions)
}

const closeDatabase = async() => {
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
    await mongod.stop()
}

const clearDatabase = async() => {
    const collections = mongoose.connection.collection

    for(const key in collections) {
        const collection = collections[key]
        await collection.deleteMany()
    }
}//esto se va a ejecutar cada vez que se ejecuta un test

module.exports = {
    connect,
    closeDatabase,
    clearDatabase
}