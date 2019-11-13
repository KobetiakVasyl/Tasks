const apiRouter = require('express').Router();

const userRouter = require('./userRouter');
const taskRouter = require('./taskRouter');

apiRouter.use('/user', userRouter);
apiRouter.use('/task', taskRouter);

module.exports = apiRouter;