import { slotFlagsText } from '@vue/shared'
import { IUp, Up } from './ups'

interface IApparat {
    name: string
    desc: string
    ups: IUp[]
}

class Apparat implements IApparat {

    name: string
    desc: string
    ups: Up[] = []
    upSecialCount = 0
    upStandardCount = 0
    upsSpecial: Up[] = []
    upsStandard: Up[] = []

    constructor(apparateName: string) {
        this.name = apparateName;
        this.desc = ""
        this.upSpecial()
       this.upStandard()
    }
    upSpecial() {
        if (this.ups.length <= 0) {
            this.upSecialCount = this.upStandardCount = 0;
            return []
        }
        const special = this.ups.filter((up: Up) => up.special)
        this.upSecialCount = special.length
        this.upsSpecial = special
    }
    upStandard() {
        if (this.ups.length <= 0) {
            this.upSecialCount = this.upStandardCount = 0;
            return []
        }
        const standard = this.ups.filter((up: Up) => !up.special)
        console.log(standard)
        this.upStandardCount = standard.length
        this.upsStandard = standard
    }
}

export  { 
    IApparat, Apparat
};