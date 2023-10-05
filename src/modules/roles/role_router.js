import * as MainController from '../mainController/MainController.js'
import * as RoleValidator from "./roleValidator.js"
import {Router} from 'express'
import RolesModel from "../../../Db/models/roles.model.js";


const router = Router();
router.get('/getrole',(req,res)=>{
    MainController.getAllRecordsOf(RolesModel,res)
})

router.post('/addRole',(req,res)=>{
    MainController.addRecord(RolesModel,req,res,RoleValidator.roleSchema)
})
export default  router;