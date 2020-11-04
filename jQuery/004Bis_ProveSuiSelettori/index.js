"use strict"

$(document).ready(function () {

	// _p è una collezione jQuery (vettore enumerativo di puntatori)
	let _p = $("p")

	console.log(_p.length)
	_p.css("backgroundColor", "#ff0")

	$(".primo").css("backgroundColor", "#F00")
	console.log(_p.css("backgroundColor"))

	// _p.hide(800)

	_p[2].innerHTML = "nuovo valore"

	for (const obj of _p) {
		obj.style.backgroundColor = "lightgreen"
	}

	let p1 = document.getElementsByClassName("primo")[0]; //js
	p1.innerHTML = "Sono il primo elemento"
	
	let _p1 = $(p1)  // jQ
	_p1.css("backgroundColor", "brown")

	let aus = _p1[0] //js
	aus.style.color = "white"

});
