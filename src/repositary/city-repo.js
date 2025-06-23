const { where } = require('sequelize');
const { City } = require('../models/index')

class CityRepositary{
    async createCity({ name }){
        try {
            const city = City.create({ name })
        } catch (error) {
            throw(error);
        }
    }

    async deleteCity({ cityId }){
        try {
            City.destroy({
                where: {
                    id : cityId
                }
            });
        } catch (error) {
            throw(error);
        }
    }
}


module.exports = CityRepositary;