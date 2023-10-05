
import userModel from '../../../../Db/models/User.model.js'
import { generateToken } from '../../../utils/GenerateToken.js';
import { compare, hash } from '../../../utils/HashAndCompare.js';
import generator from 'generate-password';
import nodemailer from"nodemailer";
  
export const signUp =async(req,res)=>{
    try {
        const {name,email,password,roleId,level,status}=req.body
        const checkUser =  await userModel.findOne({where: {email:email}})
        if(checkUser){
            return res.json({message : "Catch Error",error,stack:error.stack})
        }
        const hashPassword = hash({
            plainText :password
        })
        const user =  await userModel.create({name,email,password:hashPassword,status,roleId,level})
        return res.json({message : "User is added"})
    } catch (error) {
        return res.json({message : "Catch Error",error,stack:error.stack})
    }
}

export const login =async(req,res)=>{
    try {
        const {email,password}=req.body
        const checkUser =  await userModel.findOne({ where: {email:email}})
        if(!checkUser){
            return res.json({message : "Email not Exist"})
        }
        const matchPassword = compare({  plainText :password, hashValue : checkUser.password})
    
        if(!matchPassword){
            return res.json({message : "In-valid Password"})
        }
        return res.json({checkUser})
    } catch (error) {
        return res.json({message : "Catch Error",error,stack:error.stack})
    }
}

export const forgetPass = async(req,res)=>{

    const randomPassword = generator.generate({
        length: 8,
        numbers: true});

    try {
        if(!req.body.email)
        {
            return  res.send('Email is Required')
        }
        const {email}= req.body;
        const checkUser =  await userModel.findOne({ where: {email:email}})
        if(!checkUser){
            return res.json({message : "Email not Exist"})
        }


        checkUser.update({ password: randomPassword });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: "smtp.gmail.com",
            port: 465,

            secure: true,
            auth: {
              user: "adhammaged47@gmail.com",
              pass: "ormrcmmtdirxgncj",
            },
          });
          async function sendmail(randomPassword) {
            const info = await transporter.sendMail({
              from: {address: "adhammaged47@gmail.com"}, // sender address
              to: email, // list of receivers
              subject: "Reset password ✔", // Subject line
              text: `Password is Sent`, // plain text body
              html: `<b>Your new password is: ${randomPassword}</b>`,
            //   context: {${randomPassword}} // html body
            });
          }
          sendmail(randomPassword);
        return res.send('Password is sent ')
        }
    catch (error) {
        console.log(error)
        }
}
