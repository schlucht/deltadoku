import axios from 'axios'

const api = "http://localhost:1234/factory"

async function AllFactories() {
  try {
  const data = await axios.get(api + '/allFactories')
  const result = await data.data
  if (!result.error) {
    console.error("Parse Error ", JSON.parse(result.message))
    return
  }

  const json = JSON.parse(result.message)

  return json
  } catch (error) {
    if (error.code === 'ERR_NETWORK') {
      console.log("DB läuft nicht")
      return {error: true}
    }
    console.error("Allfactories: ", error)
    return {}
  }
}

export { AllFactories }