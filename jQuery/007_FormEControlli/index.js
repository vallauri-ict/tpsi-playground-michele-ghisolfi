"use strict"

let _form1;

$(document).ready(function () {
    _form1 = $("#form1");
})

function visualizza(codice) {
    let msg = "";
    let _chk;
    let _opts;
    switch (codice) {
        case 1:
            msg = _form1.find("input[type=text]:first-of-type").val();
            break;
        case 2:
            // msg = _form1.children("label:nth-of-type(2)").val();
            // msg = _form1.children("label").eq(1);
            msg = _form1.children("label").filter(":nth-of-type(2)").children("select").val();
            break;

        case 3:
            _chk = _form1.children("fieldset").eq(0).find("input[type=checkbox]");
            for (let i = 0; i < _chk.length; i++) {
                msg += _chk.eq(i).prop("name") + " - " + _chk.eq(i).val() + "\n";
            }
            break;
        case 4:
            _chk = _form1.children("fieldset").eq(0).find("input[type=checkbox]:checked");
            _chk.each(function (i, ref) {
                msg += $(ref).prop("name") + " - " + _chk.eq(i).val() + "\n";
            })
            break;

        case 5:
            _chk = _form1.children("fieldset").eq(0).find("input[type=checkbox]").not(":checked");
            _chk.each(function (i, ref) {
                msg += $(ref).prop("name") + " - " + _chk.eq(i).val() + "\n";
            })
            break;

        case 6:
            _opts = _form1.children("fieldset:nth-of-type(2)").find("input[type=radio]");
            if (_opts.is(":checked")) {
                msg = _opts.filter(":checked").val();
            } else {
                msg = "Nessun radio button selezionato";
            }
            break;

        case 7:
            _opts = _form1.children("fieldset:nth-of-type(2)").find("input[type=radio]").not(":checked");
            _opts.each(function (i, ref) {
                msg += $(ref).val() + "\n";
            })
            break;

        case 8:
            // let _select = _form1.children("select");
            let _select = _form1.find("select").last();
            let _selected = _select.children("option:selected").each(function(i, ref) {
                msg += $(ref).val() + " - ";
            })
            msg += "\n"; // modi differenti per fare stessa cosa
            for (const item of _select.val()) {
                msg += item + " - ";    
            }
            break;

        default:
            break;
    }
    alert(msg);
}

function imposta(codice) {
    switch (codice) {
        case 1:
            _form1.find("input[type=text]").first().val("Nuovo valore");
            break;
        case 2:
            _form1.find("select").first().prop("selectedIndex",1);
            // oppure
            _form1.find("select").first().children("option").eq(2).prop("selected", true);
            break;
        case 3:
            let _chks = _form1.children("fieldset").eq(0).find("input[type=checkbox]");
            _chks.first().prop("checked", true);
            _chks.eq(1).prop("checked", true);
            _chks.val(["opzione 1", "opzione 3"]);
            break;
        case 4:
            _form1.children("fieldset").eq(1).find("input[type=radio]").eq(1).prop("checked", true);
            break;
        case 5:
            let _select = _form1.children("select").last();
            _select.children("option").eq(1).prop("selected", true);
            _select.children("option").eq(2).prop("selected", true);
            _select.val(["2","3"]);
            break;
    
        default:
            break;
    }
}
