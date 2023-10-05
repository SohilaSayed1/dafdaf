import  jwt  from 'jsonwebtoken';


export const generateToken = ({payload={},signature = process.env.SIGNATURE,expiresIn = 60*60})=>{
    const token = jwt.sign(payload,signature,{expiresIn:parseInt(expiresIn)})
    return token
}

export const verifyToken = ({token="",signature = process.env.SIGNATURE}={})=>{
    const decoded = jwt.sign(token,signature)
    return decoded
}