<?php   
// Prima e dopo tag php non ci deve essere nulla, nenche uno sapzio
/* Tutto quello che metto al di fuori dello script verrebbero inviati al client 
 * e potrebbero causare errori
*/

header('Content-type: application/json; charset=utf-8');
require("php-mySQLi.php");

// il json deve essere serializzaato (passato come stringa)
// ex. --> echo('{"ris":"ok"}');

// step 1: lettura parametri
// step 2: connessione
$con = _openConnection('4b_dischi');
// step 3: esecuzione query
$sql = "SELECT * FROM `dischi`";// prendere tutti i record devo omettere WHERE
$rs = _execute($con, $sql);
//step 4: invio dati
if ($rs) {
    echo(json_encode($rs));
}  else {
    // step 5. chiusura connessione
    $con->close();
    http_response_code(500);
    die("Errore esecuzione query");
}

// step 5. chiusura connessione
$con->close();

?>