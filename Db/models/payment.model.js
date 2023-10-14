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
        defaultValue:'pending',
    type:DataTypes.ENUM('pending','successful')
    },
      PaymentMethodId:{
       type:DataTypes.INTEGER,
       allowNull:false
      }
     
    
})

export default payment
