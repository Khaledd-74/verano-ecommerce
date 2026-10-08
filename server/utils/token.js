import jwt from 'jsonwebtoken';export const tokenFor=u=>jwt.sign({id:u._id},process.env.JWT_SECRET,{expiresIn:'7d'});
