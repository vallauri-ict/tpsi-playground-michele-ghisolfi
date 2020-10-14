"use strict"

window.onload = function () {
    var studente = {
        "nome": "mario",
        "cognome": "rossi",
        "eta": 16,
        "studente": true,
        "images": ["smile.gif", "grim.gif", "frown.gif", "bomb.gif"], "hobbies": [], // vettore al momento vuoto
        "pos": { "x": 40, "y": 300 },// oggetto annidato
        "stampa": function () { alert("Hello " + this.nome); },
        "fullName": function () { return this.nome + " " + this.cognome; }
    };

    this.console.log(studente["eta"]);
    studente.eta++;
    console.log(studente.eta);
    console.log(studente.fullName());
    console.log(studente["fullName"]());

    // Aggiunta di una nuova chiave
    studente["residenza"] = "fossano";
    studente.classe = "4B info";
    console.log(studente.residenza);
    if ("classe" in studente) { 
        console.log(studente["classe"]);
    } else {
        console.log("Chiave inesistente");
    }

    // Dichiarazione di un nuovo object
    let studente2={};
    studente2.nome="Pluto";
    studente2.residenza="Alba";
    
    // Scansione delle proprietà di un oggetto
    console.log("STUDENTE2");
    for (const key in studente2) {
        if (studente2.hasOwnProperty(key)) {
            console.log([key] + " : " + studente2[key]);
        }
    }
    console.log("STUDNETE");
    for (const key in studente) {
        // if (!studente[key].toString().includes("function")) {
        if (typeof(studente[key])!="function") {
            const element = studente[key];
            console.log([key] + " : " + element);
        }
    }
    
    // Serializzazione di un oggetto
    console.log(studente); // serializza in automatico
    this.alert(studente); // NON serializza in automatico
    alert(this.JSON.stringify(studente)); // JSON.stringify serializza

    // Vettore enumerativo delle chiavi
    let keys = Object.keys(studente);
    for (const iterator of keys) { // Consente di scorrere i valori di un vettore enumerativo
        console.log(iterator);
    }
}