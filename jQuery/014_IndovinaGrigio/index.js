'use strict'

$(document).ready(function () {
    let _wrapper = $("#wrapper")
    let _tooltip = $("#tooltip")
    let _txtColore = $("#txtColore")
    let _txtPosizione = $("#txtPosizione")
    let _lblMsg = $("#lblMsg")

    _wrapper.css({"backgroundColor": "#FF9", "float": "left"})

    creaBox();
    $("#btnOk").on("click", verifica)


    function verifica() {
        if (_txtColore.val() != "" && _txtPosizione.val() != "") {
            if (_wrapper.children().eq(parseInt(_txtPosizione.val() - 1)).prop("colore") == parseInt(_txtColore.val())) {
                _wrapper.children().eq(parseInt(_txtPosizione.val() - 1)).css({"backgroundColor": "#FF9"})
                _lblMsg.text("BRAVO")
            } else if (_wrapper.children().eq(parseInt(_txtPosizione.val() - 1)).prop("colore") < parseInt(_txtColore.val())) {
                _txtColore.css({"backgroundColor": "blue"})
                _lblMsg.text("Troppo Grande")
            } else if (_wrapper.children().eq(parseInt(_txtPosizione.val() - 1)).prop("colore") > parseInt(_txtColore.val())) {
                _txtColore.css({"backgroundColor": "red"})
                _lblMsg.text("Troppo Piccolo")
            }
        } else {
            alert("Inserisci dei valori")
        }
    }

    function creaBox() {
        for (let i = 1; i <= 9; i++) {
            let div = $("<div>").appendTo(_wrapper)
            div.addClass("box")
            div.text(i)
            let grigio = generaNumero(0, 255)
            div.prop("colore", grigio)
            div.css({"backgroundColor": `rgb(${grigio},${grigio},${grigio})`})

            div.hover(
                function () {
                    _tooltip.text(`rgb(${grigio},${grigio},${grigio})`).fadeIn(1000)
                },
                function () {
                    _tooltip.text(`rgb(${grigio},${grigio},${grigio})`).fadeOut(1000)
                }
            )

            console.log(div.prop("colore"))
        }
    }
});

function generaNumero(a, b) {
    return Math.floor((b - a + 1) * Math.random()) + a
}