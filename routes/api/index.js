const router = require("express").Router();
const workoutRoute = require('./workout-routes');

// this route begins at /api/workouts
router.use('/workouts', workoutRoute);

module.exports = router;