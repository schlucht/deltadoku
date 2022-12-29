import { Factory } from '@/models/factories/Factory';
import http from './http-commons'


class FactoryService {

     async getFactories() {
        try {
            const factoriesArr = []
            const response =  await http.get('/factory')
            const factories = await response.data
            for( let f in factories.factories) {
              factoriesArr.push(factories.factories[f].name)
            }
            return factoriesArr

        } catch( error ) {
            const err = new Error("http axio Error (getFactories): " + error)
            throw(err)
        }

    }
}

export default new FactoryService()