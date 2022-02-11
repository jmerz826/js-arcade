const router = require('express').Router()
const PrimeNumbers = require('./prime-numbers-model')
const {restricted} = require('../auth/restricted')

router.get('/', (req, res, next) => {
    PrimeNumbers.getAll()
        .then(scores => {
            res.status(200).json(scores)
        })
        .catch(err => next(err))
})

router.post('/', restricted, (req, res, next) => {
    PrimeNumbers.add(req.body)
        .then(newEntry => {
            res.status(201).json(newEntry)
        })
        .catch(err => next(err))
})

router.delete('/:id', restricted, (req, res, next) => {
    PrimeNumbers.remove(req.params.id)
        .then(() => {
            res.status(200).json({message: 'user deleted'})
        })
        .catch(err => next(err))
})

module.exports = router