"use strict";

let elencoArticoli

$(document).ready(function () {
    let wrapper = $('#elencoArticoli')
    let details = $(".details")

    $.ajax({
        "url": "http://localhost:3000/fotocamere",
        "timeout": 5000,
        "success": visualizza,
        "error": errore
    })

    details.hide()
    wrapper.on("mouseenter", "img", function () {
        $(this).next().html($(this).prop("name"))
    })
    wrapper.on("mouseout", "img", function () {
        $(this).next().html("")
    })
    
    wrapper.on("click", ".article", function () {
        details.html("")
        details.slideDown(1000)
        let id = $(this).prop("id").split("-")[1]
        let div = $("<div class='detail-close'>").appendTo(details)
        let span = $("<span>x").appendTo(div)
        span.html("x")
        span.on("click", function () {
            details.slideUp(1000)
        })

        let divImg = $("<div class='detail-img'>").appendTo(details)
        let img = $(`<img alt='' src="img/${elencoArticoli[id]["src"]}.jpg">`).appendTo(divImg)

        let divInfo = $("<div class='detail-info'>").appendTo(details)
        $("<h4 class='item-title'>").appendTo(divInfo).text(elencoArticoli[id]["nome"])
        $("<p>").appendTo(divInfo).text(elencoArticoli[id]["descrizione"])
        $("<p>").appendTo(divInfo).text(elencoArticoli[id]["prezzo"])

        let btn =$("<button class='item-add'>").appendTo(details).text("Aggiungi al Carrello")
        btn.prop("nome", elencoArticoli[id]["nome"])
        btn.prop("prezzo", elencoArticoli[id]["prezzo"])
        btn.on("click", aggiungi)
    })

    let aperto = false
    $("#btnCarrello").on("click", function () {
        if(aperto == false) {
            $("#carrello").slideDown(1000)
            $(this).html("&#708 Chiudi carrello")
        }
        else {
            $("#carrello").slideUp(1000)
            $(this).html("&#709 Apri carrello")
        }
        aperto = !aperto
    })
    
    function aggiungi() {
        let table = $("#carrello table")
        let nome = $(this).prop("nome")
        let prezzo = $(this).prop("prezo")
        let trovato = false

        table.find("tr").each(function (i, ref) {
            if($(ref).children("td").eq(0).html() == nome) {
                $(ref).children("td").eq(2).text(parseInt($(ref).children("td").eq(2).text()) + 1)
                trovato = true
                return false
            }
        })

        if(!trovato) {

            let tr = $("<tr>").appendTo(table)

            let tdNome = $("<td>").appendTo(tr).text($(this).prop("nome"))
            let tdPrezzo = $("<td>").appendTo(tr).text($(this).prop("prezzo"))
            let tdQta = $("<td>").appendTo(tr).text("1")
            let td = $("<td>").appendTo(tr)
            let img = $("<img>").appendTo(td).prop("src", "img/_cestino.png")
            img.on("click", function () {
                $(this).parent().parent().remove()
            })
        }

    }

    function visualizza(data) {
        console.log(data)
        elencoArticoli = data
        let i = 0
        for (const item of data) {
            let article = $(`<div id="article-${i}" class="article">`)
            article.appendTo(wrapper)

            let img = $(`<img class="image" src="img/${item["src"]}.jpg" title="aggiungi al carrello">`)
            img.prop("name", item.nome)
            img.appendTo(article)

            let name = $("<div class='name'>")
            name.appendTo(article)

            i++
        }
    }
});





/* **************************************************** */

function errore(jqXHR, textStatus, str_error) {
    if (jqXHR.status == 0)
        alert("connection refused or server timeout");
    else if (jqXHR.status == 200)
        alert("Errore Formattazione dati\n" + jqXHR.responseText);
    else
        alert("Server Error: " + jqXHR.status + " - " + jqXHR.responseText);
}

