
import http from './http-common'
import { Factory } from '../models/factory'

class FactoryService {

    Factories: Factory[] = [];
     async getAll(): Promise<Factory[]> {
        try {  
            const response =  await http.get('/factory')
            const factories = await response.data.factories as Factory[]                 
            return factories
            
        } catch( error ) {
            const err = new Error("http axio Error (getAll): " + error)
            throw(err)         
        }

    }

}


export default new FactoryService