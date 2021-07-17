const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

const { ValidateRegisterInput, ValidateLoginInput } = require('../../util/validators')
const { SECRET_KEY } = require('../../config')
const User = require('../../models/User');


function generateToken(user){
    return jwt.sign({  // create TOken for each new user register..
        id: user.id,  // ...what data should contain each token
        email: user.email,
        username: user.username
    }, SECRET_KEY,   // passing secret key for leting only our server to encrypt the token
    { expiresIn: '1h'})  // passing some options ex: when token will expire...

}

module.exports = {
    Mutation: {
        async login(_, { username, password }){
            const { valid, errors } = ValidateLoginInput(username, password);
            if(!valid){
                throw new UserInputError('Errors', { errors })
            }

            const user = await User.findOne({ username });
            if(!user){
                errors.genral = 'User not found!'
                throw new UserInputError('User not found!', { errors })
            }

            const match = await bcrypt.compare(password, user.password);
            if(!match){
                errors.genral = 'Wrong credentals'
                throw new UserInputError('Wrong credentals', { errors }) 
            }

            const token = generateToken(user);

            return {
                ...user._doc,
                id: user._id,
                token
            };
        },
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
            
            
            const token = generateToken(res);

            return {
                ...res._doc,
                id: res._id,
                token
            };
        }
    }
}