const mongoose = require('mongoose');

const PlayerSchema = mongoose.Schema({
	_id: { 
		type: mongoose.Schema.ObjectId, 
		auto: true
	},
    name: {		
		type: String,
		required: true,
		trim: false,
		unique: false
	},
    age: {
		type: Number,
		required: true,
		trim: false,
        unique: false
	}
});

module.exports = mongoose.model('Player', PlayerSchema);