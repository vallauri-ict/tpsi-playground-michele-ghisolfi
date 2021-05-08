'use strict'

$(document).ready(function () {
    let table = $("#table > div")

    // nell'url la risorsa non deve inizare con '/'
    let request = inviaRichiesta("GET", "server/elencoDischi.php")
    request.fail(errore)
    request.done(function (data) {
        console.log(data)
        for (const item of data) {

            let p = $("<div>").appendTo(table).css("width", "100px")
            let c = $("<b>").text(item.id).appendTo(p)

            p = $("<div>").appendTo(table).css("width", "200px")
            c = $("<b>").text(item.autore).appendTo(p)

            p = $("<div>").appendTo(table).css("width", "200px")
            c = $("<b>").text(item.titolo).appendTo(p)

            p = $("<div>").appendTo(table).css("width", "200px")
            c = $("<b>").text(item.anno).appendTo(p)

            p = $("<div>").appendTo(table).css("width", "120px")
            c = $("<button>").text("Salva").appendTo(p)

            p = $("<div>").appendTo(table).css("width", "120px")
            c = $("<button>").text("Cancella").appendTo(p)

        }
    })
})