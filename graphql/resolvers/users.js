const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

const { ValidateRegisterInput } = require('../../util/validators')
const { SECRET_KEY } = require('../../config')
const User = require('../../models/User');

module.exports = {
    Mutation: {
        async register(_, { registerInput: { username, email, password, confirmPassword }}){
            // TODO: Validate user data
            const { valid, errors } = ValidateRegisterInput(username, email, password, confirmPassword);
            if(!valid){
                throw new UserInputError('Errors', { errors })
            }
            // TODO: Make sure user dosent already exist!
            const user = await User.findOne({ username });
            if(user){
                throw new UserInputError('UserName is already taken!', {
                    errors: {
                        username: 'This UserName is taken'
                    }
                })
            }

            // TODO: hash password and create an auth token
            password = await bcrypt.hash(password, 12); // hashing inputed user password / with 12 round (for more safty!)

            const created = new Date().toISOString();

            const newUser = new User({
                email,
                username,
                password,
                created,
            });
            
            const res = await newUser.save();
            
            
            const token = jwt.sign({  // create TOken for each new user register..
                id: res.id,  // ...what data should contain each token
                email: res.email,
                username: res.username
            }, SECRET_KEY,   // passing secret key for leting only our server to encrypt the token
            { expiresIn: '1h'})  // passing some options ex: when token will expire...

            return {
                ...res._doc,
                id: res._id,
                token
            };
        }
    }
}