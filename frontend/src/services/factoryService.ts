import { Factory } from '@/models/factories/Factory';
import http from './http-commons'
class FactoryService {
  Factories: Factory[] = [];
     async getFactories(): Promise<Factory[]> {
        try {
            const response =  await http.get('/factory')
            const factories = await response.data.factories as Factory[]
            return factories

        } catch( error ) {
            const err = new Error("http axio Error (getFactories): " + error)
            throw(err)
        }

    }
}

export default new FactoryService()