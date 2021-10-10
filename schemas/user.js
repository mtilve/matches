const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	_id: { 
		type: mongoose.Schema.ObjectId, 
		auto: true
	},
    usuario: {		
		type: String,
		required: true,
		trim: true,
		unique: true
	},
    password: {
		type: String,
		required: true,
		trim: false
	}
});

module.exports = mongoose.model('User', UserSchema);