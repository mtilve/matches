const sha1 = require("sha1");
const User = require("../schemas/user");

const login = async (usuario, password) => {
  const user = await User.findOne({ usuario });
  if (!user) {
    throw new Error("User does not exists.");
  }

  if (user.password != password) {
    throw new Error("Password is not valid.");
  }

  return user;

  //return (await pool()).collection("usuarios").findOne({ usuario, password });
};

const register = async (user) => {
  const { usuario, password } = user;

  const exist = await User.findOne({ usuario });
  if (exist) {
    throw new Error("User already exists.");
  }

  user.password = sha1(user.password);
  const newUser = new User(user);
  newUser.save();
  return newUser;

  //return (await pool()).collection("usuarios").insertOne({'usuario': usuario, 'password': sha1(password)});
};

module.exports = { login, register };
