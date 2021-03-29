"option strict"

const URL = "http://localhost:3000"

$(function () {
    let _head = $('.head');
    let _info = $('.info');
    let _img = $('.img');
    let _btnPrev = $('button').eq(0);
    let _btnNext = $('button').eq(1);
    _btnPrev.prop("disabled", true);
    let posizioneQuadro = 0;
    let elencoQuadri;
    let genereQuadri;

    let _wrapperAdd = $('.wrapper').eq(1);

    let request = inviaRichiesta("GET", URL + "/artisti");
    request.fail(errore);
    request.done(function (artisti) {
        for (const artista of artisti) {
            let lbl = $("<label>");
            lbl.appendTo(_head);
            let rdb = $("<input type='radio'>");
            rdb.prop("type", "radio");
            rdb.prop("artista", artista);
            rdb.prop("name", "artisti");
            rdb.appendTo(lbl);
            lbl.append(artista.name);
        }
        let pos = generaNumero(0, artisti.length - 1);
        let chk = $("input[type=radio]").eq(pos).prop("checked", true);
        _wrapperAdd.children("h1").text("Inserisci un nuovo quadro di " + chk.prop("artista").name);
        let idArtista = chk.prop("artista").id;
        genereQuadri = chk.prop("artista").gender;
        inviaRichiestaQuadri(idArtista);
    })

    function inviaRichiestaQuadri(idArtista) {
        let request = inviaRichiesta("GET", URL + "/quadri?artist=" + idArtista);
        request.fail(errore);
        request.done(function (quadri) {
            elencoQuadri = quadri;
            visualizzaQuadro(elencoQuadri[0]);
        })
    }

    _head.on("click", "input", function () {
        posizioneQuadro = 0;
        _btnNext.prop("disabled", false);
        _btnPrev.prop("disabled", true);
        let idArtista = $(this).prop("artista").id;
        genereQuadri = $(this).prop("artista").gender;
        _wrapperAdd.children("h1").text("Inserisci un nuovo quadro di " + $(this).prop("artista").name);
        inviaRichiestaQuadri(idArtista);
    })

    _btnPrev.on("click", function () {
        if (posizioneQuadro == 0) {
            $(this).prop("disabled", true);
        } else {
            posizioneQuadro--;
            _btnNext.prop("disabled", false);
        }
        visualizzaQuadro(elencoQuadri[posizioneQuadro]);
    })

    _btnNext.on("click", function () {
        _btnPrev.prop("disabled", false);
        posizioneQuadro++;
        if (posizioneQuadro == elencoQuadri.length - 1) {
            $(this).prop("disabled", true);
        }
        visualizzaQuadro(elencoQuadri[posizioneQuadro]);
    })

    function visualizzaQuadro(quadro) {
        _info.empty();
        _img.empty();
        $("<p>").text("ID = " + quadro.id).appendTo(_info);
        $("<p>").text("Titolo = " + quadro.title).appendTo(_info);
        $("<p>").text("Genere = " + genereQuadri).appendTo(_info);
        let p = $("<p>").text("Like = " + quadro.nLike).appendTo(_info);
        let img = $("<img>").prop("src", "like.jpg").addClass("like").appendTo(p);
        img.on("click", function () {
            let request = inviaRichiesta("PATCH", URL + "/quadri/" + quadro.id, {
                "nLike": quadro.nLike + 1,
            });
            request.fail(errore);
            request.done(function (data) {
                visualizzaQuadro(data[0]);
                elencoQuadri = data;
            })
        })
        if (!quadro.img.includes("base64")) {
            $("<img>").prop("src", "img/" + quadro.img).appendTo(_img);
        } else
            $("<img>").prop("src", quadro.img).appendTo(_img);

    }

    /* *********************************** */
    let _txtImg = $("#immagine");
    let _txtTitle = $("#titolo");

    $("#btnSalva").on("click", function () {
        if (_txtTitle.val() == "" || _txtImg.prop("files") == "") {
            alert("Inserire titolo e immagine");
        } else {
            let fileName = _txtImg.prop("files")[0];
            let reader = new FileReader();
            reader.readAsDataURL(fileName);
            reader.onloadend = function () {
                console.log('RESULT', reader.result);
                let idArtista = $("input[type='radio']:checked").prop("artista").id;
                let json = {
                    "artist": idArtista,
                    "title": _txtTitle.val(),
                    "img": reader.result,
                    "nLike": 0
                }
                let request = inviaRichiesta("POST", URL + "/quadri", json);
                request.fail(errore);
                request.done(function (data) {
                    console.log(data);
                    alert("Quadro inserito correttamente");
                    inviaRichiestaQuadri(idArtista);
                })
            }
        }
    })
})