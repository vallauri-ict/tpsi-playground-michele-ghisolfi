"use strict";

$(document).ready(function () {
    let wrapper = $('#elencoArticoli')
    let details = $(".details").hide()
    let btnCarrello = $("#btnCarrello").prop("open", 0)
    let carrello = $("#carrello")

    wrapper.on("click", "div", function () {
        details.empty()
        details.slideDown(1000)
        dettagli($(this))
        console.log($(this))
    })

    details.on("click", "button", function () {
        let tr = $("<tr>").appendTo(carrello.children("table")[0]);
        $("<td>").appendTo(tr).text($(this).prop("nome"))
        $("<td>").appendTo(tr).text($(this).prop("pr"))
        $("<td>").appendTo(tr).text("1")
        let tdCestino = $("<td>").appendTo(tr).on("click", function () {
            tr.remove()
        })
        $("<img>").appendTo(tdCestino).prop("src", "img/_cestino.png")
        carrello.trigger()
    })

    btnCarrello.on("click", function () {
        if (btnCarrello.prop("open")==0) {
            carrello.slideDown(1000)
            btnCarrello.text("CHIUDI CARRELLO")
            btnCarrello.prop("open", 1)
        } else {
            carrello.slideUp(1000)
            btnCarrello.text("APRI CARRELLO")
            btnCarrello.prop("open", 0)
        }
    })

    function dettagli(cam) {
        details.css("display", "block")
        let divClose = $("<div class='detail-close'>").appendTo(details)
        $("<span>").appendTo(divClose).text("X").on("click", function () {
            details.slideUp(1000, )
        })
        let divImg = $("<div class='detail-img'>").appendTo(details)
        let aus = articoli[cam.prop("i")]
        console.log(aus)
        let img = $("<img alt=''>").appendTo(divImg)
        img.prop("src", `img/${aus.src}.jpg`)

        let divInfo = $("<div class='detail-info'>").appendTo(details)
        $("<h4 class='item-title'>").appendTo(divInfo).text(aus.nome)
        $("<p>").appendTo(details).text(aus.descrizione)
        $("<p>").appendTo(details).text(aus.prezzo)

        let btn =$("<button class='item-add'>").appendTo(details).text("Aggiungi al Carrello")
        btn.prop("nome", aus.nome)
        btn.prop("pr", aus.prezzo)
    }

    for (let i = 0; i < articoli.length; i++) {
        let div = $("<div>").appendTo(wrapper)
        div.prop({"id": "nome-" + i, "class": "article", "i":i})
        let img = $("<img src='' alt='' class='image' title='aggiungi al carrello'>").appendTo(div)
        img.prop("src", `img/${articoli[i].src}.jpg`)
        let div2 = $("<div class='name'>").appendTo(div)
        div.hover(function () {
            div2.text(articoli[i].nome)
        }, function () {
            div2.text("")
        })
    }

});
