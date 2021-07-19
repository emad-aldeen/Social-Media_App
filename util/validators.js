module.exports.ValidateRegisterInput = (
    username,
    email,
    password,
    confirmPassword
) => {
    const errors = {};
    if(username.trim() === ''){
        errors.username = "UserName must not be empty!"
    }
    if(email.trim() === ''){
        errors.email = "Email must not be empty!"
    }else{
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if(!email.match(regEx)){
            errors.email = "Email must be valid Email addres"
        }
    }
    if(password === ''){
        errors.password = "Password must not be empty!"
    }else if(password !== confirmPassword){
        errors.confirmPassword = "Password must match!"
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}

module.exports.ValidateLoginInput = (username, password) => {
    const errors = {};
    if(username.trim() === ''){
        errors.username = "UserName must not be empty!"
    }
    if(password.trim() === ''){
        errors.password = "Password must not be empty!"
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}

module.exports.ValidatePostInput = (body) => {
    const errors = {};
    if(body.trim() === ''){
        errors.body = "Post body must not be empty!"
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}

module.exports.ValidateCommentInput = (body) => {
    const errors = {};
    if(body.trim() === ''){
        errors.body = "Comment body must not be empty!"
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}