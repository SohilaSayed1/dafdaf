import userModel from "../../../Db/models/User.model.js";

export const login= async (req,res)=>{
    const checkUser =  await userModel.findOne({ where: {email:req.body.email}})
    if(!checkUser){
        return res.json({message : "Email not Exist"})
    }else {
        if(checkUser.state=='archived'){
            return res.json('Archived Email , cannot log in ')
        }else if(req.body.password!==checkUser.password){
            return  res.send('Wrong Password ! ')
        }else{
            return  res.json(checkUser)
        }
    }

}