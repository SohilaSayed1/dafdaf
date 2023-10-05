
import initApp from './src/router.js'
import express from 'express'


export const app = express();
const port = 5000

initApp(app,express);


app.listen(process.env.PORT || port, '0.0.0.0',()=>{
 console.log(`running on port....... ${port} `)
})
