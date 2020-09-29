'use strict'

function crea(params) {
    localStorage.setItem("bookstore_xml", bookstore);
    alert("Dati salvati correttamente all'interno del lacalStorage");
}

function visualizza(params) {
    // Lettura stringa dal localStorage
    let xml = localStorage.getItem("bookstore_xml");

    /* *********************** INIZIO ELABORAZIONE *********************** */
    // Istazio un DOM parser
    let parser = new DOMParser();
    // Tramite il DOM parser, parsifico la stringa xml
    let xmlDoc = parser.parseFromString(xml, "text/xml");

    /*  // righe ausiliarie x vedere se tutto ok
    let serializer = new XMLSerializer();
    let aus = serializer.serializeToString(xmlDoc);
    console.log(aus); 
    */

    // accedo alla radice dell'albero
    let root = xmlDoc.documentElement;
    let nLibri = root.children.length;
    // alert("Dati letti correttamente dal localStorage. N. di record letti = " + nLibri);

    // accedo a _tbody e lo ripulisco
    let _tbody = document.getElementById("tabLibri");
    _tbody.innerHTML = "";
    for (let i = 0; i < nLibri; i++) {
        let titolo="", categoria="", lingua="", 
            autori="", anno="", prezzo=""; 
        let libro = root.children[i];
        
        if (libro.hasAttribute("category")) {
            categoria = libro.getAttribute("category");
        }
        
        for (let j = 0; j < libro.children.length; j++) {
            let campo = libro.children[j];
            switch (campo.nodeName) {
                case 'title':        
                    titolo = campo.textContent;
                    if (campo.hasAttribute("lang")) {
                        lingua = campo.getAttribute("lang");
                    }
                    break;
                case 'author':
                    if (autori=="") {
                        autori += campo.textContent;
                    } else {
                        autori += " - " + campo.textContent;
                    }       
                    break;
                case 'year':        
                    anno = campo.textContent;
                    break;
                case 'price':
                    prezzo = campo.textContent;
                    break;
                default:
                    break;
            }
        }

        // Creo la riga e la appendo al DOM
        let tr = document.createElement("tr");
        _tbody.appendChild(tr);
        // Creo le celle e le appendo al DOM
        let td = document.createElement("td");
        td.innerHTML = titolo;
        // td.style.border = 0;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = categoria;
        // td.style.border = 0;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = lingua;
        // td.style.border = 0;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = autori;
        // td.style.border = 0;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = anno;
        // td.style.border = 0;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = prezzo;
        // td.style.border = 0;
        tr.appendChild(td);       
    }
}