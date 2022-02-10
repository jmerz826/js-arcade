const router = require('express').Router();
const Reaction = require('./reaction-speed-model');
const {restricted} = require('../auth/restricted')

router.get('/', restricted, (req, res, next) => {
    Reaction.getAll()
        .then(scores => {
            res.status(200).json(scores);
        })
        .catch(err => next(err));
});

router.post('/', restricted, (req, res, next) => {
    Reaction.add(req.body)
        .then(newScore => {
            res.status(201).json(newScore)
        })
        .catch(err => next(err))
})

router.delete('/:id', restricted, (req, res, next) => {
    Reaction.remove(req.params.id)
        .then(() => {
            res.status(200).json({message:'user deleted'})
        })
        .catch(err => next(err))
})


module.exports = router;