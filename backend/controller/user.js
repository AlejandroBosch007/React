const userModel = require("../model/user");
const jwt = require("jsonwebtoken");

module.exports.loginUser = async (userData) => {
  let response = await userModel.login(userData);
  if (response.login) {
    return { token: await jwt.sign(response.data, "Alojomora") };
  }
  return { error: "Usuaria(o) o contraseña incorrectos" };
};

module.exports.whoiam = async (userData) => {
  try {
      let result = await userModel.whoiam(userData);
      if (result.success) {
        return result;
      }
      return { error: "usuario no encotrado" };
    } catch (error) {
    return { error: error };
  }
};
