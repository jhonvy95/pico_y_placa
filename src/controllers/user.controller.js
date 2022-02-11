const { response } = require('express')
const res = require('express/lib/response')
const {findAll,findById,createUser} = require('../services/user.services')



exports.findAll = (req,res) =>{
    const{username} = req.params
    const response = findAll(username)
    res.status(200).json(response)
}

exports.findById = (req,res) =>{
    const{username} = req.params
    const response =  findById(username)
    res.status(200).json(response)
}

exports.createUser = (req,res) =>{
    const {body} = req
    createUser(body).then((response) => {
         res.status(201).json(response)
    }) 
}