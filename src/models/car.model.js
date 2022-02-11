const mongose = require('mongoose');
const {Schema} = mongose;

const carSchema = new Schema({
    marca:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    matricula:{
        type:String,
        required:true
    },
})

exports.Car = mongose.model('car',carSchema)
