import {DataTypes} from "sequelize";
import {sequelize} from "../connection.js";

export const BankCard= sequelize.define('BankCard',{
    holderName:{
        type:DataTypes.STRING,
        required:true
    },
    expirationDate :{
        type:DataTypes.DATE,
        required: true
    },
    cardNumber:{
        type:DataTypes.STRING,
        required:true
    }
})