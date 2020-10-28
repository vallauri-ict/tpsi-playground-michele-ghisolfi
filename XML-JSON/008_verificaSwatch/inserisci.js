"use strict";

window.onload = function () {
    let list = JSON.parse(localStorage.getItem("orologi.json"));
    let _btnSalva = document.getElementById("btnSalva");
    let _btnAnnulla = document.getElementById("btnAnnulla");

    let _txtCode = document.getElementById("txtCode");
    let _txtPrice = document.getElementById("txtPrice");
    let _lstColor = document.getElementById("lstColor");
    let _optsGender = document.getElementsByName("optGender");

    _btnAnnulla.addEventListener("click", function name(params) {
        window.location.href = "index.html";
    })

    _btnSalva.addEventListener("click", function name(params) {
        let code = _txtCode.value;
        let price = _txtPrice.value;
        let color = _lstColor.value.toLowerCase();
        let gender;
        for (const _item of _optsGender) {
            if (_item.checked) {
                gender = _item.value;
                break;
            }
        }

        // Salvo i valori nella struttura dati

        // leggo il gender
        let models;
        if (gender == "male") { models = list[0].models; }
        else { models = list[1].models; }

        // creo nuovo swatch
        let newSwatch = {
            "code": code,
        } /* oppure */
        newSwatch.price = price;

        newSwatch.swatches = [{ "color": color, "image": color + "_cardigan.jpg"}];

        // aggiungo lo swatch dentro list nel gender selezionato
        models.push(newSwatch);


        localStorage.setItem("orologi.json", JSON.stringify(list));
        window.location.href = "index.html";
    })
}
