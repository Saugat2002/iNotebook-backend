const express = require('express'); // Importing Express
const User = require('../models/User') // Importing User Schema
const { body, validationResult } = require('express-validator'); // Importing express validator

const router = express.Router(); // Creating a router object

// Create a user using: POST "/api/auth/createuser" , Login not required
router.post('/createuser', [
    // Validations for name, email and password
    body('name', 'Please enter a valid name').isLength({ min: 3 }),
    body('email', 'Please enter a valid Email Address').isEmail().custom(async (value) => {
        let user = await User.findOne({ email: value });
        if (user) {
            throw new Error('User with this email already exists');
        }
    }),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
], async (req, res) => {

    // If there are errors in validation, return Bad request (400) and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    // Create a user using try and catch
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json({ "message": "User created successfully" })
        res.json(user);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Some Error Occured"});
    }
})

module.exports = router