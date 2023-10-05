// Implements All CRUD Operations

import {userSchema} from "../user/UserValidator.js";
import stripePackage from 'stripe';

const stripe = stripePackage('sk_test_51NuvEcLZEHZNifXOC9yg36W1d9PpOlpFBBBalqdQfK5F4Nb5csLtzsP4zwWTJbEot4zdqe9eejPuahzXre27UCop00S4CJliQe');

const createCustomer = async (email) => {
    try {
        const customer = await stripe.customers.create({
            email: email,
        });
        console.log('Created customer:', customer.id);
        return customer;
    } catch (error) {
        console.error('Error creating customer:', error);
    }
};



const validateEmptyAndSend = (records, res)=>{
    if(records.length==0){
        res.send('Empty Database/Record list')
    }else{
        res.json(records)
    }
}

export const getAllRecordsOf= async (model,res)=>{
    const records =await  model.findAll()
    validateEmptyAndSend(records,res)
}
export const getAllRecordsWithFilter = async (model ,res,options )=>{
    const where ={
        where: options
    }
    const records = await model.findAll(where)

    validateEmptyAndSend(records,res)
}


function trimWhitespace(body) {
    for (const key in body) {
        if (typeof body[key] === 'string') {
            body[key] = body[key].trim();
        }
    }
    return body}
export const addRecord= async (model,req,res,schema)=>{
    req.body = trimWhitespace(req.body)
    const error = await schema.validate(req.body).error;
    if(error){
        return res.json(error);
    }else{
        try {
            // if(req.body.roleId==2){
            //     await createCustomer(req.body.email);
                await model.create(req.body);
            // }
            return  res.send('Record Created Successfully')
        } catch (error) {
            return  res.send( error) ;
        }
    }

}
export const updateRecord= async(model,req,res,schema)=>{
    const where ={
        where: {
            id:req.body.id
        }
    }
    const validation = schema.validate(req.body).error;
    if(!validation){
        try{
            const rowsUpdate = await model.update(req.body,where)
           if(rowsUpdate!=0){
               return res.send(`Updated Succesfully : ${rowsUpdate}`)}else{
               return  res.send('no rows Found ')
           }
        }
        catch (error){
            throw error;
        }
    }else{
        return res.send(validation)
    }
}
export const deleteRecord= async(model,req,res)=>{


    if(req.body.id==null){
        return res.send('no Id sent')
    }else{
        const where ={
            where: {
                id:req.body.id
            }
        }
       const deletedRows=  await model.destroy(where)
        if(deletedRows!=0){
           return  res.send('deleted Succesfully')
        }else{
            return  res.send('No Rows Found with that id ')

        }

    }
}



