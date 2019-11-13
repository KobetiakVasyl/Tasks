const router = require('express').Router();

const addTask = require('../controllers/task/addTask');
const updateTask = require('../controllers/task/updateTask');
const deleteTask = require('../controllers/task/deleteTask');
const getTasks = require('../controllers/task/getTasksByUserId');
const shareTask = require('../controllers/task/shareTask');
const removeSharedLink = require('../controllers/task/removeSharedLink');

const verifyTokenMiddleWare = require('../middlewares/verifyToken');

router.post('/', verifyTokenMiddleWare, addTask);
router.get('/', verifyTokenMiddleWare, getTasks);
router.put('/:id', verifyTokenMiddleWare, updateTask);
router.patch('/:id/share', verifyTokenMiddleWare, shareTask);
router.patch('/:id/remove', verifyTokenMiddleWare, removeSharedLink);
router.delete('/:id', verifyTokenMiddleWare, deleteTask);

module.exports = router;