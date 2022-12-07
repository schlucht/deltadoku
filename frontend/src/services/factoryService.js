import { Factory } from '@/models/factories/Factory';
import http from './http-commons'


class FactoryService {

     async getFactories() {
        try {
            const response =  await http.get('/factory')
            const factories = await response.data
            return factories

        } catch( error ) {
            const err = new Error("http axio Error (getFactories): " + error)
            throw(err)
        }

    }
}

export default new FactoryService()