'use strict'

$(document).ready(function () {
    let wrapper = $("#wrapper");

    for (let i = 0; i < 36; i++) {
        /*let box = $("<div>");
        box.addClass("box");
        $("#wrapper").append(box);*/
        // oppure
        $("<div>").addClass("box").appendTo(wrapper);
    }

    setInterval(aggiorna, 32)

    function aggiorna() {
        let n = generaNumero(0, 36);
        // let box = wrapper.children().eq(n);
        let box = wrapper.children(".box").eq(n);
        box.animate({"opacity": 0.3}, 400);
        box.animate({"opacity": 0.6}, 400);
        box.animate({"opacity": 0.1}, 400);

    }

    function generaNumero(a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a;
    }
})