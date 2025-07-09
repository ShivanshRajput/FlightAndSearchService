const { Flights } = require('../models/index');

class FlightRepositary{
    async createFlight(data){
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("something went wrong in the repositary layer");
            throw(error);
        }
    }
}


module.exports = FlightRepositary;