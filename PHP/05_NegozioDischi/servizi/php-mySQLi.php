<?php 
define('DBNAME', '4b_dischi');
function _openConnection()
{
    define('DBHOST', 'localhost'); // dominio del server
    define('DBUSER', 'root');      // utente
    define('DBPASS', '');          // password

    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT); // in caso di errore genera un'eccezione
    try
    {
        $con = new mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
        return $con;
    }
    catch (mysqli_sql_exception $ex)
    {
        http_response_code(503);
        die ("Errore connessione db: <br>" . $ex->getMessage()); 
    }
}

function _execute($con, $sql)
{
    try
    {
        $rs = $con->query($sql);
    }
    catch (mysqli_sql_exception $ex)
    {
        $con->close();
        http_response_code(500);
        die("Errore nella query sql: <br>". $ex->getMessage());
    }

    // se il comando è una query di tipo SELECT convertiamo il record set in un vettore json.
    // I comandi NON di tipo SELECT restituiscono semplicemente un booleano che lasciamo così com'è
    if(!is_bool($rs))
    {
        $data = $rs->fetch_all(MYSQLI_ASSOC);
    }
    else
    {
        $data = $rs;
    }
    return $data;
}

?>