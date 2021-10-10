const express = require("express");
const router = express.Router();
const model = require("./../models/player");

const create = (req, res) =>
  model
    .create(req.body)
    .then((response) => res.json(response))
    .catch((e) => res.status(500).json( {"message": e.message}));

router.post("/create", create);

module.exports = router;