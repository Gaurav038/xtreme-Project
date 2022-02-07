const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	phone: { type: String, required: true },
	password: { type: String, required: true },
	Cpassword: { type: String, required: true }
	
});

userSchema.methods.generateAuthToken = () => {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: 300000,
	});
	return token;
};
const User = mongoose.model("user", userSchema);

module.exports = {User};


