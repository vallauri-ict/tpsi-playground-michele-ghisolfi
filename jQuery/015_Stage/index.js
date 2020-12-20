"use strict"

$(document).ready(function () {
    let _header = $("#header")
    let _timer = $("#timer")
    let _mainSection = $("#mainSection")

    _header.animate({
        "width": "900",
        "height": "90",
        "fontSize": "30",
        "lineHeight": "90"
    }, 1500, "linear", function () {
        // Creazione fieldset
        for (let i = 0; i < 3; i++) {
            let fl = $("<fieldset>").appendTo(_mainSection)
            let legend = $("<legend>").appendTo(fl).text(elencoDomande[i].argomento)
            legend.css({"color": "blue", "fontSize": "12pt"})
            for (let j = 0; j < 10; j++) {
                let div = $("<div>").appendTo(fl)
                div.text(elencoDomande[i].domande[j].domanda)
                div.prop("risp", elencoDomande[i].domande[j].risposta)
                console.log(div.prop("risp"))

                let rbT = $('<input type="radio" value="T" />').appendTo(div)
                $("<span>").appendTo(div).text("T")
                rbT.prop("name", `rb${i}${j}`)

                let rbF = $('<input type="radio" value="F" />').appendTo(div)
                $("<span>").appendTo(div).text("F")
                rbF.prop("name", `rb${i}${j}`)
            }
        }
        // Creazione bottone
        let btnInvia = $("<button id='invia'>").appendTo(_mainSection).addClass("invia").on("click", check).text("INVIA")

        // Creazione Timer
        let spanMin = $("<span>").appendTo(_timer).text(pad(0))
        $("<span>").appendTo(_timer).text(":")
        let spanSec = $("<span>").appendTo(_timer).text(pad(0))

        let intTimer = setInterval(function () {
            if (spanSec.text() == "60") {
                spanSec.text("-1")
                spanMin.text(pad(parseInt(spanMin.text()) + 1))
            }
            spanSec.text(pad(parseInt(spanSec.text()) + 1))
            if(spanMin.text() == "02") {
                check()
            }
        }, 100)

        function check() {
            $("#invia").prop("disabled", true)
            $("#invia").css({"backgroundColor": "#ccc", "color": "#999"})
            clearInterval(intTimer)

            // Calcolo voto
            let cont = 0
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 10; j++) {
                    let currentDiv = _mainSection.children("fieldset").eq(i).children("div").eq(j)
                    let currentChkT = _mainSection.children("fieldset").eq(i).children("div").eq(j).children("input").eq(0)
                    let currentChkF = _mainSection.children("fieldset").eq(i).children("div").eq(j).children("input").eq(1)
                    if (currentDiv.prop("risp") == "T" && currentChkT.prop("checked")) {
                        cont++
                    } else if (currentDiv.prop("risp") == "F" && currentChkF.prop("checked")) {
                        cont++
                    } else if (currentChkF.prop("checked") || currentChkT.prop("checked")) {
                        cont -= 0.25
                    }
                }
            }

            alert(cont)
        }
    })
});


// Una semplice funzione per aggiungere uno 0 davanti ad un numero < 10
function pad(number) {
    return (number < 10 ? '0' : '') + number;
}
