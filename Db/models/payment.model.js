import {sequelize} from '../connection.js'
import { DataTypes } from 'sequelize';

 const payment = sequelize.define('payment',{
    id:{
        type:DataTypes.INTEGER,
        unique:true,
        primaryKey:true,
        autoIncrement:true,
        allowNull:true
    }
     ,date:{
        type:DataTypes.DATE,
         default: DataTypes.NOW,
    },
     state:{
        default:'pending',
    type:DataTypes.ENUM('pending','successful')
    }
    
})

export default payment