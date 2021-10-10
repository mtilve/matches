const { response } = require("express");
const express = require("express");
const router = express.Router();
const model = require("./../models/matches");

const all = (req, res) =>
  model
    .all()
    .then((response) => res.json(response))
    .catch((e) => res.status(500).json({ message: "Error", e }));

const last = (req, res) =>
  model
    .last()
    .then((response) => res.json(response))
    .catch((e) => res.status(500).json({ message: "Error", e }));

const filter = async (req, res) => {
  try {
    let { start, end } = req.query;
    if (!end) end = start;
    const matches = await model.findByDate(start, end);
    res.json({ matches });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const create = (req, res) => {
  let resp = model
    .create(req.body)
    .then((response) => res.json(response))
    .catch((e) => res.status(500).json({ message: e.message }));
  return resp;
};

router.get("/filter", filter);
router.get("/last", last);
router.get("/all", all);
router.post("/create", create);

module.exports = router;
