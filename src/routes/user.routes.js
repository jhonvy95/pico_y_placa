const express = require('express');

const router = express.Router();
const {findAll,findById,createUser} = require('../controllers/user.controller')

//get all user
router.get('/user',findAll);
router.get('/user/:username',findById);
router.post('/user',createUser);



module.exports = router;