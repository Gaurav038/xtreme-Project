const express = require("express");
const router = express.Router()
const {User} = require('../models/user')


// get all users data
router.get('/', async(req, res) => {
    try {
        const data = await User.find()
        res.json(data)
    } catch (error) {
        res.send('Error'+error)
    }
})

// create users data
router.post('/', async(req, res) => {
        const data = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        Cpassword: req.body.Cpassword,
    })
    try {
        const a1 = await data.save()
        res.json(a1)
    } catch (error) {
        res.send('Error'+error)
    }
})


module.exports = router;