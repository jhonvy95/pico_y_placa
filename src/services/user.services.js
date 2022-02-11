const {User} =  require('../models/user.model')

const genericResponse = {
    data : {}
}

exports.findAll = (username) =>{
    genericResponse.data = users
    if(username){
        genericResponse.data = users.filter(users => users.username === username);
    }

    return genericResponse
    
}

exports.findById = (id) =>{
    const user = users.find(user => user.username === username);
    genericResponse.data = user;
    return genericResponse;
}

exports.createUser = async(userInfo) => {
    const newUser = new User({
        ...userInfo
    })
    const saveUser = await newUser.save()
    .then(() => {
        genericResponse.data = {
            ...saveUser
        }
    }).catch((error) => console.log(error))
    
    return genericResponse
}