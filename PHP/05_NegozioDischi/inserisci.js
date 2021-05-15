$(document).ready(function () {
    $("#btnInvia").on("click", function () {
        let titolo  = $("#txtTitolo")
        let autore  = $("#txtAutore")
        let anno  = $("#txtAnno")
        if(titolo.val() != '' && autore.val() != '') {
            let param = {
                "anno": anno.val(),
                "titolo": titolo.val(),
                "autore": autore.val()
            }
            let request = inviaRichiesta("post", "servizi/inserisci.php", param)
            request.error(errore)
            request.done(function (data) {
                alert("record inserito correttamente")
                window.location.href = "index.html"
            })
        }
    })
})