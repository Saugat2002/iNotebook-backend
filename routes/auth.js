const express = require('express')
const router = express.Router();

router.get('/', (req, res)  => {
    obj = {
        name: "saugat",
        email: "test@gmail.com",
    }
    res.json(obj)
})

module.exports = router