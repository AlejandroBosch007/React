const userModel = require("../model/user")
const jwt = require('jsonwebtoken')

module.exports.loginUser = async (userData) =>{
    let response = await userModel.login(userData)
    if (response.login) {
      return {token: await jwt.sign(response.data,"Alojomora")}
    }
    return {error:"Usuario no encontrado"}
}

