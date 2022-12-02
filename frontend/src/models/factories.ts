import { Factory } from "./factory";
import  FactoryService  from "../services/factoryService"


class Factories {

    async getFactories(): Promise<Factory[]> {
        const data = await FactoryService.getAll() 
        console.log( "CLASS", data)
        return data
    }
}

export default new Factories()