'use strict'

const DIM = 4

$(document).ready(function () {

    let wrapper = $("#wrapper")

    creaElementi()
    assegnaValori()

    // funziona solo se gli elementi sono già stati creati e solo su quelli
    // wrapper.children("div").on("click", move)

    // SOLUZIONE MIGLIORE:
    wrapper.on("click", "div", move)

    function creaElementi() {
        let first = true
        let larghezza

        // creazione matrice di elementi
        for (let i = 0; i < DIM; i++) {
            for (let j = 0; j < DIM; j++) {
                let div = $("<div>").appendTo(wrapper)
                div.addClass("pedina")
                if (first) {
                    larghezza =
                        parseInt(div.css("width")) +
                        parseInt(div.css("margin-left")) * 2 +
                        parseInt(div.css("border-left-width")) * 2 +
                        parseInt(div.css("padding-left")) * 2
                    first = false
                }
                // console.log(larghezza)
                div.css({"top": larghezza * i, "left": larghezza * j})
                div.prop("id", "btn-" + i + "-" + j);
                // console.log(div)
            }
        }
    }

    function assegnaValori() {
        let numeri = new Array(16) // oppure //let numeri = new array(16)

        for (let i = 0; i < 15; i++) {
            numeri[i] = (i + 1)
        }
        numeri[15] = ""
        let divs = wrapper.children("div")
        divs.each(function (i, ref) {
            let pos = generaNumero(0, numeri.length - 1)
            $(ref).text(numeri[pos])
            if (numeri[pos] != "") {
                $(ref).addClass("grigio")
            }
            numeri.splice(pos, 1)
        })
    }

    function move() {
        let id = $(this).prop("id"); //jq
        let aus = id.split('-');
        let i = parseInt(aus[1]);
        let j = parseInt(aus[2]);

        if (j > 0 && $(`#btn-${i}-${j - 1}`).text() == "")
            scambio($(this), $(`#btn-${i}-${j - 1}`))
        else if (i > 0 && $(`#btn-${i - 1}-${j}`).text() == "")
            scambio($(this), $(`#btn-${i - 1}-${j}`))
        else if (i < 3 && $(`#btn-${i + 1}-${j}`).text() == "")
            scambio($(this), $(`#btn-${i + 1}-${j}`))
        else if (j < 3 && $(`#btn-${i}-${j + 1}`).text() == "")
            scambio($(this), $(`#btn-${i}-${j + 1}`))
    }

    function scambio(cella1, cella2) {
        wrapper.off("click", "div");

        cella1.animate({
            "top": cella2.css("top"),
            "left": cella2.css("left")
        }, 500);

        cella2.animate({
            "top": cella1.css("top"),
            "left": cella1.css("left")
        }, 500, function () {
            let aus = cella1.prop("id");
            cella1.prop("id", cella2.prop("id"));
            cella2.prop("id", aus);
            if (controllaVincita())
                alert("bravo hai vinto");
            else
                wrapper.on("click", "div", move);
        });
    }

    function controllaVincita() {
        let cnt = 0;

        for (let i = 0; i < DIM; i++) {
            for (let j = 0; j < DIM; j++) {
                let n = parseInt($(`#btn-${i}-${j}`).text());
                cnt++;
                if (n != cnt && cnt != 16)
                    return false;
            }
        }
        return true;
    }
})

function generaNumero(a, b) {
    return Math.floor((b - a + 1) * Math.random()) + a
}