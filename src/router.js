import {connectDB, sequelize} from '../Db/connection.js'
import userrouter from './modules/user/user_router.js'
import auth from './modules/auth/auth.router.js'
import role from './modules/roles/role_router.js'
import payment from './modules/payments/payment_router.js'
import paymentMethod from './modules/PaymentMethod/paymentMethodRouter.js'
import service from './modules/services/ServiceRouter.js'
import morgan from 'morgan'
import cors from 'cors'

export const morganDev = morgan('combined')

const initApp = (app, express)=>{
    app.use(cors())
    connectDB();
    app.use(morganDev)
    app.use(express.json({}))
    app.use(userrouter)
    app.use(auth)
    app.use(role)
    app.use(paymentMethod)
    app.use(service)
    app.use(payment)
}

export default initApp
