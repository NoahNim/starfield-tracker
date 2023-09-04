const express = require('express');
const {
    createShip,
    getShips,
    getShip,
    updateShip,
    deleteShip
} = require('../controllers/shipController');

const router = express.Router();

router.route('/')
    .post(createShip)
    .get(getShips);

router.route('/:id')
    .get(getShip)
    .put(updateShip)
    .delete(deleteShip);

module.exports = router;