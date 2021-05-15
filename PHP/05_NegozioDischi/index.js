'use strict'

$(document).ready(function () {
    let table = $("#table > div")

    // nell'url la risorsa non deve inizare con '/'
    let request = inviaRichiesta("GET", "servizi/elencoDischi.php")
    request.fail(errore)
    request.done(function (data) {
        console.log(data)
        for (const item of data) {

            let txt = $("<input type='text'>");
            txt.val(item.id);
            txt.appendTo(table);

            txt = $("<input 'type=text'>");
            txt.val(item.autore);
            txt.appendTo(table);

            txt = $("<input 'type=text'>");
            txt.val(item.titolo);
            txt.appendTo(table);

            txt = $("<input 'type=text'>");
            txt.val(item.anno);
            txt.appendTo(table);

            let button = $("<button class='btn btn-outline-dark'>").prop("disabled", true)
            button.appendTo(table);
            button.html("Salva");
            button.prop("id", item.id)
            button.on("click", salva);
            
            button = $("<button class='btn btn-outline-dark'>").prop("disabled", true)
            button.appendTo(table);
            button.html("Anulla");
            button.on("click", annulla)

            button = $("<button class='btn btn-outline-dark'>")
            button.appendTo(table);
            button.html("Elimina");
            button.prop("id", item.id)
            button.on("click", elimina)
        }
        table.on("input", "input", function () {
            let salva = $(this).nextAll("button").eq(0)
            salva.prop("disabled", false)
            let annulla = $(this).nextAll("button").eq(1)
            annulla.prop("disabled", true)
        })
    })

    function salva() {
        let param = {
            "id":$(this).prop("id"),
            "anno":$(this).prevAll().eq(0).val(),
            "titolo":$(this).prevAll().eq(1).val(),
            "autore":$(this).prevAll().eq(2).val()
        }
        let request = inviaRichiesta("post", "servizi/salva.php", param)
        request.fail(errore)
        request.done(function (data) {
            alert("Dati salvati correttamente")
            window.location.reload()
        })
    }

    function annulla() {
        window.location.reload()
    }

    function elimina() {
        let param = {
            "id": parseInt($(this).prop("id"))
        }
        let request = inviaRichiesta("post", "servizi/elimina.php", param)
        request.fail(errore)
        request.done(function (data) {
            console.log("Dati inseriti correttamente")
            console.log(data)
            window.location.reload()
        })

    }
})