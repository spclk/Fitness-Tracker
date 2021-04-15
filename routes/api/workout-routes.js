const router = require("express").Router();
const Fitness = require("../../models/Fitness.js");

// Get all workouts
// Route located at /api/workouts
router.get("/", (req, res) => {
    Fitness.find({}).sort({day: 1})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})

// router.put("/api/workouts", (req, res) => {
//     Fitness.create(body)
//       .then(dbTransaction => {
//         res.json(dbTransaction);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });

// router.post("/api/workouts", (req, res) => {
//     Fitness.create(body)
//       .then(dbTransaction => {
//         res.json(dbTransaction);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });

module.exports = router;