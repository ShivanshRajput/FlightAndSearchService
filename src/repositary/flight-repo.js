const { Flights } = require('../models/index');
const { Op } = require('sequelize');

class FlightRepositary{
    #createFilter(data){
        let filter = {};
        if(data.srcAirportId){
            filter.srcAirportId = data.srcAirportId;
        }
        if(data.destAirportId){
            filter.destAirportId = data.destAirportId;
        }

        let priceFilter = [];
        if(data.minPrice){
            priceFilter.push({price:{[Op.gte]: data.minPrice}});
        }
        if(data.maxPrice){
            priceFilter.push({price:{[Op.lte]: data.maxPrice}});
        }
        Object.assign(filter , {[Op.and]:priceFilter});


        // tbd more filters... 
        return filter;
    }

    async createFlight(data){
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("something went wrong in the repositary layer");
            throw(error);
        }
    }

    async getFlight(flightId){
        try {
            const flight = await Flights.FindByPk(flightId);
            return flight;
        } catch (error) {
            console.log("something went wrong in the repositary layer");
            throw(error);
        }
    }

    async getFlight(filter){
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flights.findAll({
                where: filterObject
            });
            return flight;
        } catch (error) {
            console.log("something went wrong in the repositary layer");
            throw(error);
        }
    }
}


module.exports = FlightRepositary;