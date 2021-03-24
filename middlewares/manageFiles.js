const uploadImage = require('../utils/storage')
module.exports = (req,res,next) => {
    if(process.env.NODE_ENV === "production"){
        if(!req.file) return next()//res.status(400).send({message:"no se envió ninguna imagen"})
        const url = uploadImage(req.file)
        req.body.photo = url 
    }else{
        if(!req.file) return next()
        req.body.photo = `${req.protocol}://${req.host}/${req.file.path}` //en path viene la ubicación de mi archivo dentro de mi servidor
    }
    next()
}