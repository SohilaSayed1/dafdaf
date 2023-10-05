import {sequelize} from "../connection.js";
import {DataTypes} from "sequelize";
import Joi from "joi";


const Service = sequelize.define('Service',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    fees: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    validUntilDate:{
      type:DataTypes.DATE,
      allowNull:true
    },
    state:{
        type:DataTypes.ENUM('active','locked'),
        allowNull:false
    }
})

export default Service;