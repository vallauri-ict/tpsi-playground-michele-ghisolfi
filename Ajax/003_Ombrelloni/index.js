"use strict";
const X_OFFSET = 180
const Y_OFFSET = 210;
const MMG = 24 * 3600 * 1000 // msec in un giorno

const RIGHE = 18
const COLONNE = 37

$(document).ready(function () {

	let _wrapper = $("#wrapper")
	let _mappa = $("#wrapper").children("div")
	let _btnVisualizzaMappa = $("#wrapper").children("button").eq(0)
	//  tag input sono NIPOTI d wrapper
	let _dataInizio = $("#wrapper").find("input").eq(0)
	let _dataFine = $("#wrapper").find("input").eq(1)
	let _msg = $("#wrapper").children("label").eq(2)

	_mappa.hide()
	_btnVisualizzaMappa.prop("disabled", true)
	_dataFine.prop("disabled", true)

	let dataStart
	let dataEnd

	_dataInizio.on("change", function () {
		_dataFine.prop("disabled", false)
		_dataFine.prop("min", _dataInizio.val())
		dataStart = new Date(_dataInizio.val())
	})

	_dataFine.on("change", function () {
		_btnVisualizzaMappa.prop("disabled", false)
		_btnVisualizzaMappa.addClass("buttonEnabled")
		dataEnd = new Date(_dataFine.val())
		_msg.text('Giorni scelti' + (dataEnd-dataStart)/MMG)
	})

	_btnVisualizzaMappa.on("click", function () {
		_mappa.show()
		$.ajax({
			"URL": "http://localhost:3000/ombrelloni",

			"success": function (data) {
				console.log(data)
				let id = 0
				for (let i = 0; i < RIGHE; i++) {
					if (i != 9) {
						for (let j = 0; j <= COLONNE; j++) {
							if (i != 22) {
								let div = $("<div>")
								div.appendTo(_mappa)
								div.addClass("ombrellone")
								div.css({
									"top": X_OFFSET + (16 * i),
									"left": Y_OFFSET + (16 * j) - (i * -2)
								})
								if(isDisponibile(id))
								{
									div.addClass("red")
								}
								else {
									div.on("click", ombrelloneClick)
								}
								id++
							}
						}
					}

				}

			},
			"error": errore,

		})
	})
})

function isDisponibile(pos) {
	pos--
	return true
}

function ombrelloneClick() {
	$(this).addClass("blue")
}

function errore(jqXHR, textStatus, str_error) {
	if (jqXHR.status == 0)
		alert("connection refused or server timeout");
	else if (jqXHR.status == 200)
		alert("Errore Formattazione dati\n" + jqXHR.responseText);
	else
		alert("Server Error: " + jqXHR.status + " - " + jqXHR.responseText);
}

