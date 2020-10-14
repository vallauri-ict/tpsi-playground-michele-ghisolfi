"use strict"

window.onload = function () {
    let _buttonm = this.document.getElementById("btnConverti");
    _buttonm.addEventListener("click", converti); // Senza tonde puntatore a 
    function converti() {
        let xml = localStorage.getItem("bookstore_xml");
        let parser = new DOMParser;
        let xmlDoc = parser.parseFromString(xml, "text/xml");
        let root = xmlDoc.documentElement;

        // dichiarazione di un vettore enumerativo in cui salveremo i vari libri in formato JSON
        let jsonVet = [];

        // Scansione albero XML
        // root.children è un vettore enumeratico che contiene tutti book figli di root
        for (let i = 0; i < root.children.length; i++) {
            let book = root.children[i];
            let category = "";
            let title = "";
            let authors = [];
            let lang = "";
            let year = "";
            let price = "";
            if (book.hasAttribute("category")) {
                category=book.getAttribute("category")
            }
            for (let j = 0; j < book.children.length; j++) {
                let campo = book.children[j];
                switch (campo.nodeName) {
                    case "title":
                        title = campo.textContent;
                        if (campo.hasAttribute("lang")) {
                            lang=campo.getAttribute("lang");
                        }
                        break;
                    case "author":
                        // .push aggiunga l'elemento in coda al vettore
                        authors.push(campo.textContent);
                        break;
                    case "year":
                        year = campo.textContent;
                        break;
                    case "price":
                        price = campo.textContent;
                    default:
                        break;
                }

            }

            console.log("BOOK");
            console.log(title);
            console.log(authors);
            console.log(lang);
            console.log(year);
            console.log(price);
            console.log(category);

            let jsonBook = {}; // vettore asscoiativo o Json (stessa cosa)
            jsonBook.category = category;
            jsonBook.title = title;
            jsonBook.authors = authors;
            jsonBook.lang = lang;
            jsonBook["year"] = year;
            jsonBook["price"] = price;

            jsonVet.push(jsonBook);
        }

        //alert(JSON.stringify(jsonVet)); // restituisce jsonVet serializzato (da object --> string)
        alert("Dati convertiti salvati correttamenre");
        localStorage.setItem("bookstore_json",JSON.stringify(jsonVet));
    }
}