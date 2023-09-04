const express = require('express');
const {
    createPlanet,
    getPlanets,
    getPlanet,
    updatePlanet,
    deletePlanet
} = require('../controllers/visitedPlanetController');

const router = express.Router();

router.route('/')
    .post(createPlanet)
    .get(getPlanets);

router.route('/:id')
    .get(getPlanet)
    .put(updatePlanet)
    .delete(deletePlanet);

module.exports = router;