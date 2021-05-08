<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>
    <script type="application/javascript" src="risultati.js"> </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.2.0/chart.min.js" integrity="sha512-VMsZqo0ar06BMtg0tPsdgRADvl0kDHpTbugCBBrL55KmucH6hP9zWdLIWY//OTfMnzz6xWQRxQqsUFefwHuHyg==" crossorigin="anonymous"></script>
    <title>Risultati</title>
</head>

<body style="text-align: center;">
    <?php
    require("php-mySQLi.php");
    // step 1: nlettura e controllo param
    if (isset($_REQUEST["optRisposta"]))
        $ris = $_REQUEST["optRisposta"];
    else die("Parametro mancante: optRisposta");

    if (isset($_REQUEST["id"]))
        $id = $_REQUEST["id"];
    else die("Parametro mancante: id");
    
    // step 2: connessione
    $con = _openConnection("4b_sondaggi");
    
    // step 3: esecuzione query
    $sql = "UPDATE sondaggi SET $ris = $ris + 1 WHERE id=$id";
    $rs = _eseguiQuery($con, $sql);

    // step 4: costruzione pagina
    if ($rs) echo("<h2 style='margin:15px'> Grazie per aver votato </h2>");
    else die ("Errore nell'esecuzione della query");
    
    // Seconda query
    $sql2 = "SELECT * FROM sondaggi WHERE id=$id";
    $rs = _eseguiQuery($con, $sql2)[0];
    $nSi = $rs["nSi"];
    $nNo = $rs["nNo"];
    $nNs = $rs["nNs"];
    $totale = $nSi + $nNo + $nNs;
    echo("<h3> Risposte </h3>");
    echo("<p>SI: $nSi </br> NO: $nNo </br> Non so: $nNs </br></p>");
    echo("<div style='margin: 0 auto; width: 400px'>");
    echo("<canvas id='myChart'></canvas></div>");

    echo("<script> creaDiagramma($nSi, $nNo, $nNs); </script>");
   
    // salvataggio cookie sul client
    setcookie("sondaggio-$id", "true", time()+60, "/");

    // step 5
    $con->close();
    ?>
</body>

</html>