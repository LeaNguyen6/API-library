var express=require('express')
var router=express.Router()
const bookController=require('../controllers/api.bookController')
const usersController=require('../controllers/api.usersController')
const transactionController=require('../controllers/api.transactionsController')
const sessionController=require('../controllers/api.sessionController')

//========Users==========
router.get('/user',usersController.index)
router.post('/login', usersController.postLogin)
router.post('/register', usersController.register)
router.get('/user/:id',usersController.viewUser)
router.put('/user/:id',usersController.updateUser)
router.delete('/user/:id',usersController.deleteUser)

//========Books==========
router.get('/book/:id',bookController.viewBook)
router.post('/book',bookController.addBook)
router.put('/book/:id',bookController.updateBook)
router.delete('/book/:id',bookController.deleteBook)

//=======Transaction=========
router.get('/transaction/:id',transactionController.viewTransaction)
router.post('/transaction',transactionController.addTransaction)
router.put('/transaction/:id',transactionController.updateTransaction)
router.delete('/transaction/:id',transactionController.deleteTransaction)

//========Sessions==========
router.get('/session/:id',sessionController.viewSession)
router.post('/session',sessionController.addSession)
router.put('/session/:id',sessionController.updateSession)
router.delete('/session/:id',sessionController.deleteSession)

module.exports=router