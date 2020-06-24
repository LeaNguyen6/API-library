var express = require('express')
var router = express.Router()
const usersController = require('../controllers/api.usersController')

router.get('/user',usersController.index)
router.post('/login', usersController.postLogin)
router.post('/register', usersController.register)
module.exports = router