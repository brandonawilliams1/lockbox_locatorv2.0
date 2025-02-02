const express = require("express");
const router = express.Router();
const Example = require("../models/Example");

router.get('/examples', async (req, res) => {
    try {
        const examples = await Example.find();
        res.json(examples);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
