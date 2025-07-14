const CrudRepository = require('./crud-repo');
const { Airport } = require('../models/index');

class AirportRepositary extends CrudRepository {
    constructor(){
        super(Airport);
    }
}

module.exports = AirportRepositary;