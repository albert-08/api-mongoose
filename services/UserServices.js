const Users = require('../models/Users')
//en service van a estar todo lo que tenga que ver con la BD

const createUser = async(user) => {
    if(!user) throw new Error("No hay un usuario")
    const dbUser = await Users.create(user)
    return dbUser
}

const findUsers = async() => {
    return await Users.find({})
}

const findUserbyId = async(id) => {
    const user = await Users.findById(id)
    if(!user) throw new Error("Usuario no encontrado")
    return user
}

const updateUser = async(id,user) => {
    if(!user) throw new Error('Se necesita un objeto usuario')
    const userDB = Users.updateOne({_id:id},{$set:{...user}},{new:true})
    if(!userDB) throw new Error("Usuario no encontrado")
    return userDB
}

const deleteUser = async(id) => {
    return await Users.deleteOne({_id:id})
}

module.exports = {
    createUser,
    findUsers,
    findUserbyId,
    updateUser,
    deleteUser
}