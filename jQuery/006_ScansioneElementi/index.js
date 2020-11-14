"use strict"

let _wrapper;

$(document).ready(function () {
    _wrapper = $("#wrapper");

    $("#btn1").on("click", function () {
        alert($("#wrapper li").length);
        alert($("#wrapper").children().length);
    });

    $("#btn2").on("click", function () {
        let list = $("#wrapper").children();
        let msg = "";

        // soluzione 1
        for (let i = 0; i < list.length; i++) {
            // msg += list[i].innerHTML;
            // msg += $(list[i]).html();
            // msg += list.eq(i).html();
        }

        for (const item of list) {
            // msg += $(item).html();
        }

        list.each(function (i, ref) {
            // msg += $(ref).html();
            // msg += list.eq(i).html();
            msg += $(this).html();
        });

        alert(msg);
    });

    $("#btn3").on("click", function () {
        // $("wrapper li:nth-of-type(even)").css({"backgroundColor":"#FF0"});

        let aus = $("#wrapper").children(":nth-of-type(even)");
        // aus = aus.filter(":first");
        aus.css({ "backgroundColor": "#FF0" });

        aus.each(function (i, ref) {
            $(ref).css({ "backgroundColor": "#FF0" });
        })
    })

    $("#btn4").on("click", function () {
        let _dispari = _wrapper.children(":nth-of-type(odd)");
        _dispari.each(function (i, ref) {
            // let colore = 50 * i+1;  
            colore += 50;
            $(ref).css({"backgroundColor":`rgb(0, ${colore}, 0`});
        })
    })
})

function evidenzia(selector) {
    _wrapper.children().css("backgroundColor", "");
    // _wrapper.children(selector).css("backgroundColor","yellow");
    _wrapper.children(selector).css({ "backgroundColor": "#FF0" });
}