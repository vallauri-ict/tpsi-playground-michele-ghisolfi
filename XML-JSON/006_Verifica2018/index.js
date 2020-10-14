"use strict"

window.onload = function () {
    let vetIntestazione = ["name", "username", "state", "nat", "img"]
    let _thead = document.getElementById("thead");
    let _tbody = document.getElementById("tbody");
    let _lstNazioni = document.getElementById("lstNazioni");
    let _div = document.getElementById("dettagli")

    caricaListBox();
    caricaIntestazione();
    caricaTabella();

    _lstNazioni.addEventListener("change", caricaTabella);

    /********************** FUNCTION **********************/
    function visualizzaDettagli(item) {
        _div.innerHTML = "";
        //  un pulsante ELIMINA che consente la cancellazione del record corrente con relativo refresh
        // della tabella e visualizzazione dei record appartenenti alla nazionalità attualmente
        // selezionata. Viene ripulito anche il box inferiore relativo ai dettagli    
        let _img = document.createElement("img");
        _div.appendChild(_img);
        _img.src = item.picture.large;

        let _divNome = document.createElement("div");
        _div.appendChild(_divNome)
        _divNome.innerHTML = item.name.first + " " + item.name.last;

        let _divMail = document.createElement("div");
        _div.appendChild(_divMail)
        _divMail.innerHTML = item.email;


        let _divCell = document.createElement("div");
        _div.appendChild(_divCell)
        _divCell.innerHTML = item.cell;


        let _btnElimina = document.createElement("button");
        _div.appendChild(_btnElimina);
        _btnElimina.addEventListener("click", function name(params) {
            eliminaUtente(item.login.uuid, item.nat);
        });
        _btnElimina.innerHTML = "Elimina";
    }

    function eliminaUtente(uuid, nat) {
        console.log(uuid);
        for (let i = 0; i < json.results.length; i++) {
            const element = json.results[i];
            if (uuid == element.login.uuid) {
                json.results.splice(i, 1);
                break;
            }
        }
        _div.innerHTML = "";
        caricaTabella();
        caricaListBox();
    }

    function caricaTabella(params) {
        _tbody.innerHTML = "";
        for (const item of json.results) {
            if (_lstNazioni.value == "tutti" || _lstNazioni.value == item.nat) {

                let _tr = document.createElement("tr");
                _tbody.appendChild(_tr);

                let _td = document.createElement("td");
                _tr.appendChild(_td);
                _td.innerHTML = item.name.first + " " + item.name.last;

                _td = document.createElement("td");
                _tr.appendChild(_td);
                _td.innerHTML = item.login.username;

                _td = document.createElement("td");
                _tr.appendChild(_td);
                _td.innerHTML = item.location.state;

                _td = document.createElement("td");
                _tr.appendChild(_td);
                _td.innerHTML = item.nat;

                let _img = document.createElement("img");
                _tr.appendChild(_img);
                _img.src = item.picture.thumbnail;
                _img.addEventListener("click", function (params) {
                    visualizzaDettagli(item);
                });
            }
        }
    }

    function caricaIntestazione(params) {
        let _tr = document.createElement("tr");
        _thead.appendChild(_tr);
        for (let i = 0; i < vetIntestazione.length; i++) {
            const element = vetIntestazione[i];
            let _th = document.createElement("th");
            _tr.appendChild(_th);
            _th.innerHTML = element;
        }
    }

    /* function caricaListBox() {
        let vetNat = json.results;

        vetNat.sort(function (record1, record2) {
            let str1 = record1.nat.toUpperCase();
            let str2 = record2.nat.toUpperCase();
            if (str1 < str2) return -1;
            else if (str1 > str2) return 1;
            else return 0;
        });
        console.log(vetNat);

        let oldNat = "";
        for (const item of vetNat) {
            if (item.nat != oldNat) {
                let _opt = document.createElement("option");
                _opt.innerHTML = item.nat;
                _lstNazioni.appendChild(_opt);
            }
            oldNat = item.nat;
        }
    } */

    function caricaListBox() {
        _lstNazioni.innerHTML = "";
        let vetNat = json.results;
        let nazioni = [];
        console.log(nazioni);

        for (let i = 0; i < vetNat.length; i++) {
            if (!nazioni.includes(vetNat[i].nat)) {
                nazioni[i] = vetNat[i].nat;
                let _opt = document.createElement("option");
                _opt.innerHTML = vetNat[i].nat;
                _lstNazioni.appendChild(_opt);
            }
        }
    }
}