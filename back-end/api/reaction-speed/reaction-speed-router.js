const router = require('express').Router();
const Reaction = require('./reaction-speed-model');

router.get('/', (req, res, next) => {
    Reaction.getAll()
        .then(scores => {
            res.status(200).json(scores);
        })
        .catch(err => next(err));
});


module.exports = router;