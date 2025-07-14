const { FlightService } = require('../services/index');
const { ServerErrorCodes , SuccessCodes } = require('../utils/error-codes');

const flightService = new FlightService;

const create = async (req,res) => {
    try {
        const flightRequestData = {
            flightNumber:req.body.flightNumber,
            airplaneId : req.body.airplaneId,
            srcAirportId : req.body.srcAirportId,
            destAirportId : req.body.destAirportId,
            arrivalTime : req.body.arrivalTime,
            departureTime : req.body.departureTime,
            price : req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data:flight,
            success:true,
            message:'Flight Created Successfully',
            err:{}
        })
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
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
        return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            message:'Flight Fetched Successfully',
            err:{}
        })
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
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