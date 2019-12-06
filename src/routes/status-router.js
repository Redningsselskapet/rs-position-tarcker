const express = require('express')
const status = express.Router()
const statusController = require('../controllers/statusController')

/**
 * @swagger
 *
 * /status:
 *   get:
 *     description: Get status
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Application status
 */
status.get('', statusController)

module.exports = status
