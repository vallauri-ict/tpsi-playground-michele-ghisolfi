"use strict"

window.onload = function () {
    let _wrapper = $("#wrapper");
    let chart;
    let _btnInvia = $("#btnInvia");
    let _tbody = $("tbody");
    let canvas = $("canvas")[0];
    let nations = {};

    _btnInvia.on("click", function () {
        let request = inviaRichiesta("get", "/", {
            "results": "100"
        });
        request.fail(errore);
        request.done(function (persone) {
            _tbody.empty();
            nations = {};
            console.log(persone)
            for (const persona of persone.results) {
                if (persona.location.country in nations) {
                    nations[persona.location.country]++;
                } else {
                    nations[persona.location.country] = 1;
                }
            }
            console.log(nations);
            for (const key in nations) {
                let tr = $("<tr>");
                tr.appendTo(_tbody);

                let td = $("<td>");
                td.appendTo(tr);
                td.text(key);

                td = $("<td>");
                td.appendTo(tr);
                td.text(nations[key]);
            }

            let values = [];
            let colors = [];

            for (const key in nations) {
                values.push(nations[key]);
                let r = generaNumero(0, 255);
                let g = generaNumero(0, 255);
                let b = generaNumero(0, 255);
                colors.push(`rgb(${r},${g},${b})`)
            }

            if (chart != undefined)
                chart.destroy();

            chart = new Chart(canvas, {
                type: 'bar',
                data: {
                    "labels": Object.keys(nations), 
                    "datasets": [{
                        "label": 'Grafico delle nazioni',
                        "data": values,
                        "backgroundColor": colors,
                        "borderColor": "#000",
                        "borderWidth": 1 // default=2  
                    }]
                }
            });
        })
    })
    let a = $("<a>");
    a.appendTo(_wrapper);
    a.prop("href", "#");
    a.css({
        "float": "right"
    });
    a.text("salva immagine");
    a.prop("download", "New file.jpg");
    
    a.on("click", function () {
        a.prop("href", canvas.toDataURL("image/jpg"));
    })
}