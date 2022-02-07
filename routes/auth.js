const router = require("express").Router();
const {User} = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");

router.post("/", async (req, res) => {
	console.log(req.body)
	try {
		const user = await User.findOne({ name: req.body.name });
		if (!user)
			return res.status(401).send({ message: "Invalid name or Password" });

		if (user.password!=req.body.password)
			return res.status(401).send({ message: "Invalid name or Password" });

		const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "logged in successfully" });	} catch (error) {
		res.status(500).send({ message: "this Internal Server Error" });
	}
});


module.exports = router;
