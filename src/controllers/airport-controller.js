const { AirportService } = require('../services/index');

const airportService = new AirportService;

const create = async (req,res) => {
    try {
        const airport = await airportService.create(req.body);
        return res.status(201).json({
            data:airport,
            success:true,
            message:'Airport Created Successfully',
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Cannot create a new Airport',
            err : error
        })
    }
}


module.exports = {
    create,

}