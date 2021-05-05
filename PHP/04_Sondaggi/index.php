<!DOCTYPE html>
<html lang="it">

<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title> PHP 4 </title>
	<!-- <script src="https://code.jqeury.com/jquery-3.6.0.js"></script> -->
	<link rel="stylesheet" href="index.css" />
	<script type="application/javascript" src="index.js"> </script>
</head>

<body style="text-align: center;">
	<?php
	require("php-mySQLi.php");
	?>

	<h1>Seleziona il sondaggio a cui desiderare partecipare</h1>
	<hr>
	<h3> Sondaggi disponibili </h3>

	<form id="form1" action="pagina2.php" method="get">
		<select name="lstSondaggi">
			<?php
			// step 1: no perchè non passiamo parametri
			// step 2: connessione
			$con = _openConnection("4b_sondaggi");
			// step 3: esecuzione query
			$sql = "SELECT id,titolo FROM sondaggi";
			$rs = _eseguiQuery($con, $sql);
			// step 4: visualizzazione dati
			foreach ($rs as $item) {
				$titolo = $item["titolo"];
				echo ("<option value=$item[id]>$titolo</option>");
				/*
						se voglio usare una variabile composta all'interno di una echo
                        è possibile ma occorre omettere gli apici attorno al nome del campo
						*/
			}

			//step 5
			?>
		</select>
		<input type="submit" value="invia">
	</form>

	<?php
	// step 5: chiusura connessione
	$con->close();
	?>

</body>

</html>