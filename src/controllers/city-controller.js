const { CityService } = require('../services/index');

const cityService = new CityService;

const create = async (req,res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:'City Created Successfully',
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'City Creation Failed',
            err : error
        })
    }
}

const update = async (req,res) => {
    try {
        const city = await cityService.updateCity(req.params.id , req.body);
        return res.status(200).json({
            data:city,
            success:true,
            message:'City Updated Successfully',
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'City Updation Failed',
            err : error
        })
    }
}

const destroy = async (req,res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:'City Deleted Successfully',
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'City Deletion Failed',
            err : error
        })
    }    
}

const get = async (req,res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data:city,
            success:true,
            message:'City Fetched Successfully',
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'City Fetching Failed',
            err : error
        })
    }
}

const getAll = async (req , res) => {
    try {
        const cities = await cityService.getAllCities();
        return res.status(200).json({
            data:cities,
            success:true,
            message:'All Cities Fetched Successfully',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'All Cities Fetching Failed',
            err : error
        })
    }
}

module.exports = {
    create,
    update,
    destroy,
    get,
    getAll
}