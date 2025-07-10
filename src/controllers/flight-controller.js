const { FlightService } = require('../services/index');

const flightService = new FlightService;

const create = async (req,res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data:flight,
            success:true,
            message:'Flight Created Successfully',
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:'Flight Creation Failed',
            err : error
        })
    }
}

const getAll = async (req,res)=>{
    try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(201).json({
            data:response,
            success:true,
            message:'Flight Fetched Successfully',
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:'Flight Fetching Failed',
            err : error
        })
    }
}

module.exports = {
    create,
    getAll
}