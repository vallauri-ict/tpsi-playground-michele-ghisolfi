<!DOCTYPE html>
<html lang="it">

<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title> PHP </title>
	<link rel="stylesheet" href="index.css" />
	<script type="application/javascript" src="index.js"> </script>
</head>

<body>
	<?php
	require("php-mysqli.php");
	// step 1: lettura e controllo parametri
	if (isset($_REQUEST["lstSondaggi"]))
		$id = $_REQUEST["lstSondaggi"];
	else die("Parametro mancante: id");

	// step 2: connessione
	$con = _openConnection("4b_sondaggi");

	// step 3: esecuzione query
	$sql = "SELECT * FROM sondaggi WHERE id=$id";
	/*
				* -> prende tutti i campi
				WHERE seleziona le righe
				SELECT selezione le colonne
			*/
	$rs = _eseguiQuery($con, $sql)[0]; // restituisce un vettore enumerativo

	// step 4: visualizzazione dati
	echo ("<h1> Sondaggio su : $rs[titolo] </h1>");
	echo ("<hr> <img width=200 src=img/$rs[img] style='margin:15px'>");
	echo ("<h3 style='margin:15px'> Rispondi alla seguente domanda: </h3> <hr>");
	echo ("<p style='margin:15px'> $rs[domanda] </p>");
	
	?>
	<form action="risultati.php" method="post">
		<div style="margin:15px;">
			<input type="radio" name="optRisposta" value="nSi"> No <br>
			<input type="radio" name="optRisposta" value="nSi"> Non so <br>
			<input type="radio" name="optRisposta" value="nSi"> Si
		</div>
		<?php
		echo("<input type='hidden' name='id' value='$id'>");
		?>
		<input type="submit" value="invia">
	</form>
	<?php
		// step 5: chiusura connessione
		$con->close();
		?>
</body>

</html>