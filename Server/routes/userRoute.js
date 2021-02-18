const express = require('express');


const UserAddCtrl = require('../controllers/userControllers')


const router = express.Router()



router.post('/addUser', UserAddCtrl.createUser)

router.get('/getUsers', UserAddCtrl.getUsers)

router.get('/getUserById/:id', UserAddCtrl.getUserById)

router.put('/updateUserById/:id', UserAddCtrl.updateUserById)

router.delete('/removeUserById/:id', UserAddCtrl.removeUserById)



module.exports = router


