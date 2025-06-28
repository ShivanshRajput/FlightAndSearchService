const { City } = require('../models/index')

class CityRepositary{
    async createCity({ name }){
        try {
            const city = City.create({ name })
            return city;
        } catch (error) {
            console.log("something went wrong in the repositary layer");
            throw(error);
        }
    }

    async deleteCity( cityId ){
        try {
            City.destroy({
                where: {
                    id : cityId
                }
            });
            return true;
        } catch (error) {
            console.log("something went wrong in the repositary layer");
            throw(error);
        }
    }

    async updateCity(cityId , data ) {
        try {
            // The below commented part also works but will not return updated object,
            // however in PGsql then 'returning:true' parameter can be used 
            // const city = await City.update(data , {
            //     where: {
            //         id : cityId
            //     }
            // })
            // return city;

            // for getting updated data returned in mysql we use the below approach
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("something went wrong in the repositary layer");
            throw(error);
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("something went wrong in the repositary layer");
            throw(error);
        }
    }
}


module.exports = CityRepositary;