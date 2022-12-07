
import http from "./http-commons";

export default  async (fhxText) => {
        try {
            const response =  await (await http.get(`/fhx/fhxText= ${fhxText}`)).headers({
              header: {"Access-Control-Allow-Origin": '*', "Content-Type": "text/plain"}
        })
            const fhx = await response.data
            return fhx

        } catch( error ) {
            const err = new Error("http axio Error (getFactories): " + error)
            throw(err)
        }

    }