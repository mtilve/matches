const express = require("express");
const router = express.Router();
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");
const model = require("./../models/auth");
const signOptions = { expiresIn: "6h" };
const createToken = (payload) => jwt.sign(payload, 'secret', signOptions);

const auth = async (req, res) => {
  try {
    const { usuario, password } = req.body;
    const user = await model.login(usuario, sha1(password));
    if (!user) res.status(401).json({ message: "No authorization" });
    const { _id } = user;

    const token = createToken({ _id, usuario });
    res.json({ JWT: token });
  } catch (e) {
    console.log(e);
    res.status(500).json( {"code:": 500, "message": e.message });
  }
};


const register = (req, res) =>
  model
    .register(req.body)
    .then((response) => res.json(response))
    .catch((e) => res.status(500).json( {"code:": 500, "message": e.message } ));


router.post("/", auth);
router.post("/register", register);

module.exports = router;
