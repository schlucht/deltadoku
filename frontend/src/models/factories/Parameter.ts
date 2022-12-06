
type ParameterType = string | number | boolean | undefined

interface IParameter {
  name: string
  description: string
  value: ParameterType
}

class Parameter implements IParameter {
  name: string =""
  description: string = ""
  value: ParameterType = undefined

  constructor(parameterName: string) {
    this.name = parameterName
  }

}

export { ParameterType, Parameter, IParameter }