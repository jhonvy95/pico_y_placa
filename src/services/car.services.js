const {Car} = require("../models/car.model")

const genericResponse = {
    data:{}
}

exports.findAll = (username) =>{
    if(username){
        genericResponse.data = cars.filter(cars => cars.username === username);
    }
}

exports.createCar = async(carInfo) => {
    const newCar = new Car({
        ...carInfo
    })
    const saveCar = await newCar.save()
    .then(() => {
        genericResponse.data = {
            ...saveCar
        }
    }).catch((err) => console.log(err))
}