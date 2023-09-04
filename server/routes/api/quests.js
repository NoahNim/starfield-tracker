const express = require('express');
const {
    createQuest,
    getQuests,
    getQuest,
    updateQuest,
    deleteQuest
} = require('../controllers/questController');

const router = express.Router();

router.route('/')
    .post(createQuest)
    .get(getQuests);

router.route('/:id')
    .get(getQuest)
    .put(updateQuest)
    .delete(deleteQuest);

module.exports = router;