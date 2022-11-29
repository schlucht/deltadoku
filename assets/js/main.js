import { UPData } from "./UPData.js";

const app = document.getElementById('app')
const searchBtn = document.getElementById('search')

let updata
fetch("assets/data/data.json")
    .then((response) => response.json())
    .then((data) => {
        if (!data) {
            app.innerHTML="<h1>Keine Daten vorhanden</h1>"
        }
        const obj = JSON.parse(JSON.stringify(data))
        updata = new UPData()        
        updata.render(obj)
        
        searchBtn.addEventListener('click', function() {
            const input = document.getElementById('serchInput')
            const val = input.value
            const res = searchUnit(obj, val)
            updata.render(res)
            input.value = ''
        })
    })
    .catch((err) => {
        app.innerHTML=`<h1>Fehler beim einlesen: ${err}</h1>`
    });

function searchUnit(data, filter) {
    const res = data.filter(val => val.unit === filter)
    return res
}



