const Matches = require("../schemas/matches");

const create = async ({ equipo1, equipo2, golesEquipo1, golesEquipo2, fecha, players = [] }) =>
    await Matches.create({
        equipo1,
        equipo2,
        golesEquipo1,
        golesEquipo2,
        fecha,
        players
  });

// localhsot:3000/matches/filter?start=2020-11-23
const findByDate = (start, end) =>
    Matches.find({
      fecha: {
        $gte: new Date(start), // ISOString
        $lte: new Date(end),
      },
  });

const all = () => Matches.find({}).populate('players');

const last = () => Matches.find({}).sort({'_id': -1}).limit(1).populate('players');

module.exports = { findByDate, all, last, create };