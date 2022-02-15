// DO YOUR MAGIC
const express = require('express');
const Cars = require('./cars-model');

const router = express.Router();
const {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique
} = require('./cars-middleware');

router.get('/', async (req, res, next) => {
    try {
        const carsArray = await Cars.getAll();
        res.json(carsArray);
    } catch (err) {
        next(err);
    }
});

router.get('/:id', checkCarId, async (req, res, next) => {
    try {
        res.json(req.car);
    } catch (err) {
        next(err);
    }
});

router.post('/',
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique,
    async (req, res, next) => {
        try {
            const addCar = await Cars.create(req.body);
            res.status(201).json(addCar);
        } catch (err) {
            next(err);
        }
    });

module.exports = router;