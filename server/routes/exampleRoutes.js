const express = require("express");
const router = express.Router();
const Example = require("../models/Example");

// GET all examples
router.get('/examples', async (req, res) => {
    try {
        const examples = await Example.find();
        res.json(examples);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//POST ROUTE
router.post('/examples', async (req, res) => {
    try {
        const newExample = new Example({
            address: req.body.address,
            isHomerun: req.body.isHomerun

        });

        const savedExample = await newExample.save();
        res.status(201).json(savedExample);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
