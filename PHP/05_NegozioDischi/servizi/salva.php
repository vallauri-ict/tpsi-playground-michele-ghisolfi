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
if (isset($_REQUEST["titolo"])) {
    $titolo = $_REQUEST["titolo"];
} else {
    http_response_code(400); 
    die("parametro mancante: titolo");
}
if (isset($_REQUEST["autore"])) {
    $autore = $_REQUEST["autore"];
} else {
    http_response_code(400); 
    die("parametro mancante: autore");
}
if (isset($_REQUEST["anno"])) {
    $anno = $_REQUEST["anno"];
} else {
    http_response_code(400); 
    die("parametro mancante: anno");
}
// step 2: connessione
$con = _openConnection();
// step 3: esecuzione query
$sql = "UPDATE dischi SET titolo = '$titolo', anno = $anno, autore = '$autore' WHERE id = $id";
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