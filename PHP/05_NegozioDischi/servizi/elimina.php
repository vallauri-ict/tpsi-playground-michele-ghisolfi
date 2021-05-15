<?php   

header('Content-type: application/json; charset=utf-8');
require("php-mySQLi.php");

// step 1: lettura parametri
if (isset($_REQUEST["id"])) {
    $id = $_REQUEST["id"];
} else {
    http_response_code(400); 
    die("parametro mancante: id");
}
// step 2: connessione
$con = _openConnection();
// step 3: esecuzione query
$sql = "DELETE FROM dischi WHERE id=$id";
$rs = _execute($con, $sql);
//step 4: invio dati
if ($rs) {
    echo('{"ris":"ok"}');
}
else {
    $con->close();
    http_response_code(500);
    die("Errore esecuzione query");
}


// step 5. chiusura connessione
$con->close();

?>