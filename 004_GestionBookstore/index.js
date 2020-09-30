"use strict"

window.onload = function () {
    let json = this.localStorage.getItem("bookstore_json");
    // alert(json);
    let jsonVet = this.JSON.parse(json);
    this.console.log(jsonVet);
    let _table = this.document.createElement("table");
    let _bodies = document.getElementsByTagName("body");
    let _body = _bodies[0];
    // appendo la table al body
    _body.appendChild(_table);

    // Creazione dell'instestazione


    // Cra intestazioni
    creaIntestazioni();
    // Lettura e caricamento dei dati
    caricaDati();


    // Creazione dei dettagli
    let _divDettagli = document.createElement("div");
    _body.appendChild(_divDettagli);
    _divDettagli.setAttribute("class", "dettagli");

    let indiceLibroCorrente = 0;
    visualizzDettagli();

    creaPulsanti();


    /* ||||||||||||||||||||||||| FUNZIONI |||||||||||||||||||||||||||||||| */

    function creaIntestazioni(params) {
        let _tr = document.createElement("tr");
        _table.appendChild(_tr);
        let intestazioni = ["title", "author", "category", "price"];
        for (let i = 0; i < intestazioni.length; i++) {
            const element = intestazioni[i];
            let _th = document.createElement("th");
            _th.innerHTML = intestazioni[i];
            _tr.appendChild(_th);
        }
    }

    function caricaDati(params) {
        for (const item of jsonVet) {
            let _tr = document.createElement("tr");
            _table.appendChild(_tr);
            let _td;

            _td = document.createElement("td");
            _td.innerHTML = item.title;
            _tr.appendChild(_td);

            _td = document.createElement("td");
            /* authors è un vet. enumerativo il metodo join() restituisce una stringa 
                contenente tutte le voci del vettore separate dal parametro */
            // _td.innerHTML = item.authors.join(";"); // fatto automaticamente dai nuovi browser 
            _td.innerHTML = item.authors;
            _tr.appendChild(_td);

            _td = document.createElement("td");
            _td.innerHTML = item.category;
            _tr.appendChild(_td);

            _td = document.createElement("td");
            _td.innerHTML = item.price;
            _tr.appendChild(_td);
        }
    }

    function visualizzDettagli(params) {
        _divDettagli.innerHTML = "";
        let libroCorrente = jsonVet[indiceLibroCorrente];
        for (const key in libroCorrente) {
            // Creo l'intestazione 
            let _p1 = document.createElement("p");
            _p1.innerHTML = key + ": ";
            _p1.style.textAlign = "right";
            _p1.style.fontWeight = "bold";
            _divDettagli.appendChild(_p1);

            // Creao contenuto
            let _p2 = document.createElement("p");
            _p2.innerHTML = libroCorrente[key];
            _divDettagli.appendChild(_p2);
        }
    }

    function creaPulsanti(params) {
        let _divPulsantiNavigazione = document.createElement("div");
        _divPulsantiNavigazione.setAttribute("class", "pulsantiNavigazione");
        _body.appendChild(_divPulsantiNavigazione);

        let nomiPulsanti = ["primo", "indietro", "avanti", "ultimo"];
        for (const item of nomiPulsanti) {
            let _button = document.createElement("button");
            _button.innerHTML = item;
            _button.id = item; /* Assegno come id il nome stesso del pulsante */
            _button.style.padding = "5px 10px";
            // _button.style.marginRight = "5px";
            _button.addEventListener("click", navigazione); // funzione senza tonde
            _divPulsantiNavigazione.appendChild(_button);
        }
        document.getElementById("indietro").disabled = true;
    }

    function navigazione(params) {
        let _btnIndietro = document.getElementById("indietro");
        let _btnAvanti = document.getElementById("avanti");
        switch (this.innerHTML) {
            case "primo":
                indiceLibroCorrente = 0;
                _btnIndietro.disabled = true;
                _btnAvanti.disabled = false;
                break;
            case "indietro":
                indiceLibroCorrente--;
                if (indiceLibroCorrente == 0) {
                    _btnIndietro.disabled = true;
                }
                _btnAvanti.disabled = false;
                break;
            case "avanti":
                indiceLibroCorrente++;
                if (indiceLibroCorrente == jsonVet.length - 1) {
                    _btnAvanti.disabled = true;
                }
                _btnIndietro.disabled = false;
                break;
            case "ultimo":
                indiceLibroCorrente = jsonVet.length - 1;
                _btnAvanti.disabled = true;
                _btnIndietro.disabled = false;
                break;

            default:
                break;
        }
        visualizzDettagli();
    }
}