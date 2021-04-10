<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="index.css" />
	<script src="index.js"></script>
	<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
	<title>Document</title>
</head>

<body>
	<h1> PHP - 1</h1>
	<?php
	$nome = "pippo";
	echo ("Il mio nome è $nome <br>");
	visualizza($nome);
	function visualizza($nome)
	{
		echo ("<p style='font-weight:bold''>Il mio nome è $nome </p>");
	}
	?>

	<h1>Contenuto della variabile globale $_SERVER</h1>
	<?php
	foreach ($_SERVER as $key => $value) {
		echo ("$key : $value <br>");
	}
	?>

	<h1>Informazioni sulla configurazione di XAMPP </h1>
	<?php
	echo (phpinfo());
	?>
</body>

</html>