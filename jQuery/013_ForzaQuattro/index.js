'use strict'

const RIGHE = 6
const COLONNE = 7
const GIALLO = "rgb(255, 255, 0)"
const ROSSO = "rgb(255, 0, 0)"
const GRIGIO = "rgb(187, 187, 187)"

let turno = GIALLO

$(document).ready(function () {
    let wr = $("#wrapper")
    let hd = $("#header")

    // Creazione pedine intestazione
    for (let i = 0; i < COLONNE; i++) {
        let pedina = $("<div>")
        pedina.addClass("pedina")
        pedina.appendTo(hd)
        // pedina.hover(
        //     function () {
        //         // $(this).css("backgroundColor", turno)
        //         $(this).css({"backgroundColor": turno})
        //     },
        //     function () {
        //         $(this).css("backgroundColor", GRIGIO)
        //     }
        // )
    }

    // Creazione pedine wrapper
    for (let i = 0; i < RIGHE; i++) {
        for (let j = 0; j < COLONNE; j++) {
            let pedina = $("<div>")
            pedina.addClass("pedina")
            pedina.appendTo(wr)
            pedina.prop("id", `btn-${i}-${j}`)
        }
    }

    hd.on("mouseenter", "div", function () {
        $(this).css("backgroundColor", turno)
    })
    hd.on("mouseleave", "div", function () {
        $(this).css("backgroundColor", GRIGIO)
    })

    /*hd.on({
        mouseenter: function () {
            $(this).css("backgroundColor", turno)
        },
        mouseleave: function () {
            $(this).css("backgroundColor", GRIGIO)
        }
    }, "div");*/

    hd.on("click", "div", down)


    function down() {
        // ↓ restituisce l'indice di $(this) all'interno del contenitore
        let colonna = hd.children("div").index($(this))
        console.log(colonna)
        let riga = RIGHE - 1 // posizione della prima cella libera
        for (let i = 0; i < RIGHE; i++) {
            let p = $(`#btn-${i}-${colonna}`)
            console.log(p.css("backgroundColor"))
            if (p.css("backgroundColor") != GRIGIO) {
                console.log(p)
                riga = i - 1;
                break;
            }
        }
        // ↓ se c'è una cella libera entra nella if
        if (riga != -1) {
            let pedina = $("<div>")
            pedina.appendTo(wr)
            pedina.addClass("pedina")
            pedina.css({
                "backgroundColor": turno,
                "position": "absolute",
                "top": -60, // "-60px"
                "left": colonna * 60 + 5// 60 = dimensione pedina
            })
            // ↓ disabilito evento sul click
            hd.off("click")

            let _turno = turno
            if (turno == GIALLO) {
                turno = ROSSO
            } else {
                turno = GIALLO
            }
            $(this).trigger("mouseenter")
            pedina.animate({"top": riga * 60 + 5}, 200 * (riga + 1), function () {
                $(`#btn-${riga}-${colonna}`).css("backgroundColor", _turno)

                hd.on("click","div", down)
            })


        } else {
            alert("Mossa non valida")
        }
    }

})