import {sequelize} from '../connection.js'
import {DataTypes } from 'sequelize';
import Service from './Services.model.js'
import Payment from './payment.model.js'

//import payments from './payments.model.js'

 const User= sequelize.define('User',{
    name : {
        type :DataTypes.STRING,
        allowNull:false
    },
    email :  {
        type: DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    password : {
        type:DataTypes.STRING,
        allowNull:false
    },
    status: {
        type: DataTypes.STRING,
        validate: {
          isIn: [['archived', 'active']],
        },
      },
    level : {
        type:DataTypes.INTEGER,
        allowNull:true
    }

})
User.belongsToMany(Service,{through:Payment,constraints:false})
Service.belongsToMany(User,{through:Payment,constraints:false})

export default User
