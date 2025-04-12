
class CrudRepo {
    constructor(model){
        this.model = model;
    }
    async create(data){
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async get(id){
        try {
            const result = await this.model.findById(id);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async update(id,data){
        try {
            const result = await this.model.findByIdAndUpdate(id,data,{new:true});
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async delete(id){
        try {
            const result = await this.model.findByIdAndDelete(id);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    async getall(offset,limit){
        try {
            const result = await this.model.find().skip(offset).limit(limit);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async insertmany(data){
        try {
            const result = await await Tweet.insertMany(data);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = CrudRepo;