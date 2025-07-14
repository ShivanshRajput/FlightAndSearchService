const CrudService = require('./crud-service');
const { AirportRepositary } = require('../repositary/index');

class AirportService extends CrudService {
    constructor(){
        const airportRepositary = new AirportRepositary();
        super(airportRepositary);
    }
}

module.exports = AirportService;