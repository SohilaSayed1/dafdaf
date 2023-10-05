import * as MainController from '../mainController/MainController.js'
import * as UserValidator from './UserValidator.js'
import * as UserController from "./userController.js"
import {Router} from 'express'
import User from "../../../Db/models/User.model.js";

import {sequelize} from "../../../Db/connection.js";

const router = Router();

router.get('/getuser',(req,res)=>{
    MainController.getAllRecordsOf(User,res)})
    
router.post('/getuserById',(req,res)=>{
   MainController.getAllRecordsWithFilter(User, res,req.body)})

router.post('/adduser',(req,res)=>{
    MainController.addRecord(User,req,res,UserValidator.userSchema)})

router.put('/updateuser',(req,res)=>{
    MainController.updateRecord(User,req,res,UserValidator.userSchema)
})

router.post('/login',(req,res)=>{
    UserController.login(req,res)})



router.delete('/deleteuser',(req,res)=>{
    MainController.deleteRecord(User,req,res)})



export default  router;