const { response } = require("express");
const res = require("express/lib/response");
const {findAll,createCar} = require("../services/car.services")

exports.createCar = (req,res) =>{
    const {body} = req
    createCar(body).then((response) => {
        res.status(201).json(response)
    }) 
}


exports.findAll = (req,res)=>{
    const {username} = req.params
    const response = findAll(username)
    res.status(200).json(response)
}