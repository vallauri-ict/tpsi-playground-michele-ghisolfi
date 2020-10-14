"use strict"

$(document).ready(function () {
    // Alle collezione jQuery si possono solo applicare solo metodi jQuery
    let _lampadina = $(".lampadina"); // collezione jQuery (Sempre vettori)
    let _btnSpegni = $("#btnSpegni");
    let _btnAccendi = $("#btnAccendi");
    let _descrizione = $("#descrizione");
    let _contenuto = $("#contenuto");

    _btnSpegni.hide();
    _lampadina.hide();

    _btnAccendi.on("click", function () {
        // Nel metre passano i 2 sec un il browser continua a eseguire le istruzioni dopo
        _lampadina.addClass("accesa");
        _lampadina.fadeIn(2000, function () { // (tempo,funzione callBack), funcione callBack viene eseguita fine tempo 
            _btnSpegni.show();
            _btnAccendi.hide();
        });
    });

    _btnSpegni.on("click", function name(params) {
        _lampadina.fadeOut(2000, function name(params) {
            _btnSpegni.hide();
            _btnAccendi.show();
        });
        _lampadina.removeClass("accesa");
    });

    let descrizione = {
        "width": "160px",
        "height":"40px",
        "text-align":"center",
        "line-height":"40px",
        "backgroundColor":"#aaa", // è indifferente scrivere in camelCase o con il trattino
        "textDecoration":"underline",
        "fontSize":"14pt",
        "cursor":"pointer",
        "borderRadius":"10px",
        "marginLeft":"10px"
    }

    _descrizione.css(descrizione);
    _contenuto.hide();

    _descrizione.on("mouseover", function () {
        _contenuto.slideDown(1000);
    });

    _descrizione.on("mouseout", function () {
        _contenuto.slideUp(1000);
    });
});