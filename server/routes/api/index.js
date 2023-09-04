const router = require('express').Router();
const questsRouter = require('./quests');
const shipsRouter = require('./ships');
const visitedPlanetsRouter = require('./visitedplanets');
const factionsJoined = require('./facionsjoined');

router.use("quests", questsRouter)
router.use("ships", shipsRouter)
router.use("vistedplanets", visitedPlanetsRouter)
router.use("factionsjoined", factionsJoined)

module.exports = router;