import {sequelize} from "../connection.js";
import {DataTypes} from "sequelize";
import paymentModel from"./payment.model.js"
const PaymentMethod = sequelize.define('PaymentMethod',{

    id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
})
PaymentMethod.hasMany(paymentModel,
  { foreignKey : 'PaymentMethodId',
    targetKey: 'id'});
paymentModel.belongsTo(PaymentMethod,{ 
    foreignKey:'PaymentMethodId',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
    foreignKeyConstraint:'FK-U-P'
})
export default PaymentMethod;
