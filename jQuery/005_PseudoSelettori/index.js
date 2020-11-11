$(document).ready( function(){

	let _ris = $("#txtRis");
		
	$("#wrapper div, #wrapper p").click( function () {	
		_ris.empty();		
		// Per ogni click richiamo 7 volte elabara() 
		for(let i=1; i<=7; i++) 	
		   elabara($(this), i);			
		visualizza("-----------------------")	

		// verifico se l'elemento corrente è di tipo package
		if ($(this).is("p")) {
			visualizza("Sono un tag p");
		}
		if ($(this).is("#blu, #rosso")) {
			visualizza(`Sono l'elemento ${$(this).html()}`);
		}

		// if ($(this).html().includes("my Div")) {
		if ($(this).is(":contains('my Div')")) {
			visualizza("Il mio testo è my Div");
		}

		// if ($(this).is(":has('span')")) {
		if ($(this).html().includes("<span")) {
			visualizza("al mio interno c'è un tag span");
		}

		if ($(this).is(":last-child()")) {
			visualizza("Sono l'ultimo filgio di wrapper");
		}

		if ($(this).is(":last-of-type()")) {
			visualizza("Sono l'ultimo elemento del mio tipo all'interno di wrapper");
		}

	});

	function elabara(box, i){
		// 1 - i-esimo elemento generico 	
		if(box.is(`:nth-child(${i})`))
			visualizza(`nth-child(${i})`);
		// 2 - i-esimo elemento generico, ma solo se di tipo DIV		
		if(box.is(`div:nth-child(${i})`))
			visualizza(`div:nth-child(${i})`);  
		// 3 - i-esimo elemento generico, ma solo se di tipo P			
		if(box.is(`p:nth-child(${i})`))
			visualizza(`p:nth-child(${i})`);
			
		// 4 - i-esimo elemento del suo tipo			
		if(box.is(`:nth-of-type(${i})`))
			visualizza(`nth-of-type(${i})`);	
		// 5 - i-esimo elemento del suo tipo, ma solo se di tipo DIV
		if(box.is(`div:nth-of-type(${i})`))
			visualizza(`div:nth-of-type(${i})`);
		// 6 - i-esimo elemento del suo tipo, ma solo se di tipo P 
		if(box.is(`p:nth-of-type(${i})`))
			visualizza(`p:nth-of-type(${i})"`);
	}	

	function visualizza(msg){
		_ris.html(_ris.html() + msg + "<br>");
	}

});


