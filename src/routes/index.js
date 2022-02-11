const userRouter = require('./user.routes');


module.exports = (app) => {
    app.use(userRouter);
    
}