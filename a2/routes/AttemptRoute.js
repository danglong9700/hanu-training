const express = require('express')
const router = express.Router()
const Attempt = require('../models/Attempt')
const { createAttempt, submitAttempt } = require('../controllers/AttemptController')

router.post('/', createAttempt)

router.post("/:id/submit", submitAttempt)

module.exports = router