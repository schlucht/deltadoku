
import http from './http-common'

class FactoryService {

    getAll() {
        return http.get('/factory')
    }

}


export default new FactoryService