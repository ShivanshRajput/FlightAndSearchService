class CrudService {
    constructor(repository){
        this.repository = repository;
    }

    async create(data){
        try {
            const response = await this.repository.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in CRUD service layer");
            throw error;
        }
    }

    async destroy(id){
        try {
            const response = await this.repository.destroy(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in CRUD service layer");
            throw error;
        }
    }

    async get(id){
        try {
            const response = await this.repository.get(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in CRUD service layer");
            throw error;
        }
    }

    async getAll(){
        try {
            const response = await this.repository.getAll();
            return response;
        } catch (error) {
            console.log("Something went wrong in CRUD service layer");
            throw error;
        }
    }

    async update(id,data){
        try {
            const response = await this.repository.update(id,data);
            return response;
        } catch (error) {
            console.log("Something went wrong in CRUD service layer");
            throw error;
        }
    }

}

module.exports = CrudService