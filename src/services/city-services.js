const {CityRepositary} = require('../repositary/index');

class CityServices {
    constructor() {
        this.cityRepositary = new CityRepositary;
    }

    async createCity(data){
        try {
            const city = await this.cityRepositary.createCity(data);
            return city;
        } catch (error) {
            console.log("something went wrong at service layer");
            return error;
        }
    }

    async deleteCity(cityId) {
        try {
            const response = await this.cityRepositary.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("something went wrong at service layer");
            return error;
        }
    }

    async updateCity(cityId , data) {
        try {
            const city = await this.cityRepositary.updateCity(cityId , data);
            return city; 
        } catch (error) {
            console.log("something went wrong at service layer");
            return error;
        }
    }

    async getCity(cityId){
        try {
            const city = await this.cityRepositary.getCity(cityId);
            return city; 
        } catch (error) {
            console.log("something went wrong at service layer");
            return error;
        }
    }
}

module.exports = CityServices;