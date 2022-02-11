const mongose = require('mongoose');
const {Schema} = mongose;

const userSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    nombre:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

exports.User = mongose.model('user',userSchema)
