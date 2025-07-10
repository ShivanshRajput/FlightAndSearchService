const {FlightRepositary , AirplaneRepositary} = require('../repositary/index');
const { compareTime } = require('../utils/helper');

class FlightServices{
    constructor() {
        this.airplaneRepositary = new AirplaneRepositary;
        this.flightRepositary = new FlightRepositary;
    }

    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime,data.departureTime )){
                throw {error:'Arrival Time cannot be less than Departure time'};
            }
            const airplane = await this.airplaneRepositary.getAirplane(data.airplaneId);
            const flight = await this.flightRepositary.createFlight({
                ...data , totalSeats:airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw{error};
        }
    }

    async getAllFlightData(data){
        try {
            const flights = await this.flightRepositary.getFlight(data);
            return flights;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw{error};
        }
    }
}

module.exports = FlightServices;


