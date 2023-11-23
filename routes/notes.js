const express = require('express')
const router = express.Router();

router.get('/', (req, res)  => {
    obj = {
        title: "myNote",
        description: "this is my note",
    }
    res.json(obj)
})

module.exports = router