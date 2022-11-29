export class UPData {

    constructor() {        
        this.upElement = document.getElementById('up')
    }

    render(object) {
        this.upElement.innerHTML = ''
        this._renderUp(object)
    }

    _renderUp(up) {
        let txt = ''
        let param = ''
        let paramPlace = ''
        for (let u of up) {
            txt = `
            <div class="subUp up__Up">
            <h3>${u.unit}</h3>
            </div>
            <div class="up__description">
                ${u.desc}
            </div>
            <div class="up__diagram">
                <img src="assets/images/${u.diagramm}" alt="">
            </div>
            <div  class="up__params">
            <div class="params__table">
                    <div class="table__head">
                        <div class="table__row">
                            <div class="table_col">Name</div>
                            <div class="table_col">Value</div>
                            <div class="table_col">Beschreibung</div>
                        </div>
                    </div>
                    <div class="table__body" id="params_${u.id}">
                    </div>
            </div>
            `
            this.upElement.innerHTML += txt;
            for (let p of u.unit_param) {
                paramPlace = document.getElementById(`params_${u.id}`)
                param += `
                    <div class="table__row">
                    <div class="table__col table-col--txt">${p.name}</div>
                    <div class="table__col table-col--value">${p.value}</div>
                    <div class="table__col table-col--desc">${p.desc}</div>
                </div>`              

                paramPlace.innerHTML = param
            }
        }
        
    }

}