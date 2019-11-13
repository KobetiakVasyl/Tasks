let router = require('express').Router();

const loginUser  = require('../controllers/user/loginUser');
const registerUser  = require('../controllers/user/registerUser');
const getAllUsers  = require('../controllers/user/getAllUsers');

router.get('/:id', getAllUsers);
router.post('/login', loginUser);
router.post('/register', registerUser);

module.exports = router;