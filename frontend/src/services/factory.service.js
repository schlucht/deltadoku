import axios from 'axios'

const api = "http://localhost:1234/factory"

async function AllFactories() {
  try {
  const data = await axios.get(api + '/allFactories')
  const result = await data.data
  if (!result.error) {
    console.error(JSON.parse(result.message))
    return
  }
  const json = JSON.parse(result.message)
  return json
  } catch (error) {
    console.error("Allfactories ", error)
  }
}

export { AllFactories }