"use strict"

window.onload = function () {
    let json = this.localStorage.getItem("bookstore_json");
    // alert(json);
    let jsonVet = this.JSON.parse(json);
    let _table = this.document.createElement("table");
    let _bodies = document.getElementsByTagName("body");
    let _body = _bodies[0];
    // appendo la table al body
    _body.appendChild(_table);

    // Creazione dell'instestazione
    let _tr = this.document.createElement("tr");
    _table.appendChild(_tr);
    let intestazioni = ["title", "author", "category", "price"];
    for (let i = 0; i < intestazioni.length; i++) {
        const element = intestazioni[i];
        let _th = this.document.createElement("th");
        _th.innerHTML=intestazioni[i];
        _tr.appendChild(_th); 
    }
}