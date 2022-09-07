const express = require('express');
const userRouter = express.Router();
const UserContoller = require('../Controller/UserController');

userRouter.get("/", UserContoller.getAllusers);
userRouter.post("/", UserContoller.addUser);
userRouter.get("/:id", UserContoller.getUserById);
userRouter.put("/:id",UserContoller.updateUser);
userRouter.delete("/:id", UserContoller.deleteUserById);

module.exports=userRouter;