const mongoose = require('mongoose');

const MatchSchema = mongoose.Schema({
	_id: { 
		type: mongoose.Schema.ObjectId, 
		auto: true
	},
    equipo1: {		
		type: String,
		required: true,
		trim: false,
		unique: false
	},
    equipo2: {
		type: String,
		required: true,
		trim: false,
        unique: false
	},
    golesEquipo1: {
        type: Number,
        required: true,
        unique: false
    },
    golesEquipo2: {
        type: Number,
        required: true,
        unique: false
    },
    fecha: {
        type: Date,
		default: Date.now()
    },
    players : [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Player' 
        }
    ]
});

module.exports = mongoose.model('Match', MatchSchema);