const express = require('express');
const {
    createFaction,
    getFactions,
    getFaction,
    updateFaction,
    deleteFaction
} = require('../controllers/factionJoinedController');

const router = express.Router();

router.route('/')
    .post(createFaction)
    .get(getFactions);

router.route('/:id')
    .get(getFaction)
    .put(updateFaction)
    .delete(deleteFaction);

module.exports = router;
