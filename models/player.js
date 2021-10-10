const Matches = require("../schemas/player");

const create = async ({ name, age }) =>
    await Matches.create({
        name,
        age
  });

  module.exports = { create };