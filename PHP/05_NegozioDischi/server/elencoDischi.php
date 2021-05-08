<?php   
// Prima e dopo tag php non ci deve essere nulla, nenche uno sapzio
/* Tutto quello che metto al di fuori dello script verrebbero inviati al client 
 * e potrebbero causare errori
*/

header('Content-type: text/html; charset=utf-8');
require("php-mySQLi.php");

// il json deve essere serializzaato (passato come stringa)
// ex. --> echo('{"ris":"ok"}');

// step 1: lettura parametri
// step 2: connessione
$con = _openConnection('4b_dischi');
// step 3: esecuzione query
$sql = "SELECT * FROM `dischi`";// prendere tutti i record devo omettere WHERE
$rs = _eseguiQuery($con, $sql);
//step 4: invio dati
echo(json_encode($rs));

// step 5. chiusura connessione
$con->close();

?>