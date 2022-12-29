
import http from "./http-commons";

const getUpData = async (fhxText) => {
        try {
            const response =  await http.post('/fhx/fhxText=' + fhxText)
            const fhx = await response.data
            return fhx

        } catch( error ) {
            const err = new Error("http axio Error (getUpData): " + error)
            throw(err)
        }

    }

export { getUpData }