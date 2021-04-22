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

router.post("/", (req, res) => {
    Fitness.create(req.body)
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});

router.put("/:id", (req, res) => {
    Fitness.updateOne({_id: req.params.id}, 
        {
            $push: {
                exercises: req.body
            }
        })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.get("/range", (req, res) => {
    Fitness.find({}).sort({day: -1}).limit(7).sort({day: 1})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})

module.exports = router;