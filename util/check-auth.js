const { AuthenticationError } = require('apollo-server')

const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');


module.exports = (context) => {
    const authHeader = context.req.headers.authorization;
    // console.log(authHeader);
    if(authHeader){
        // token be like: Bearer ....
        const token = authHeader.split('Bearer ')[1];
        // console.log(token);
        if(token){
            try{
                // console.log(jwt.verify(token, 'ourLittleSecretKey'));
                const user = jwt.verify(token, SECRET_KEY);
                return user;
            }catch(err){
                throw new AuthenticationError('Invalid/Expired token')
            }
        }
        throw new AuthenticationError("Authentication token should be 'Bearer [token]' ")
    }
    throw new AuthenticationError("Authorization header must be provided!")

}