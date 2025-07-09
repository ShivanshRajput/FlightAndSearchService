const { Airplane } = require('../models/index');

class AirplaneRepositary{
    async getAirplane(id){
        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("something went wrong in the repositary layer");
            throw(error);
        }
    }
}

module.exports = AirplaneRepositary;