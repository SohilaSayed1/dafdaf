import {sequelize} from "../connection.js";
import {DataTypes} from "sequelize";
import paymentModel from"./payment.model.js"
const PaymentMethod = sequelize.define('PaymentMethod',{

    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
})
PaymentMethod.hasMany(paymentModel)
export default PaymentMethod;