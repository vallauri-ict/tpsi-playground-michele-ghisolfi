
# Gestione Bookstore
Realizzare una applicazione web che, partendo dal file bookstore_json memorizzato all’interno della localStorage, fornisca le seguenti funzionalità : 

 1.  All’avvio visualizzi in una tabella tutti i libri memorizzati. La tabella deve essere costruita dinamicamente e deve contenere le seguenti 4 colonne : Titolo, Categoria, Prezzo, Autori (con tutti i coautori in un unico campo) 
 2. **Tutti i dati** relativi al primo libro vengono caricati anche all’interno di un tag DIV avente dimensione 300 x 120 e bordo nero con spessore un pixel. Al di sotto del tag DIV sono posizionati i quattro tipici pulsanti di navigazione: Primo, Indietro, Avanti, Ultimo (come da immagine a pagina successiva) 
 3.  Un pulsante **Aggiungi** apre una nuova pagina [**`window.location.href="pagina2.html";`**] in cui l’utente potrà inserire, tramite appositi TextBox, tutte le informazioni relative ad un nuovo libro (compresi gli autori multipli separati dalla sequenza SPAZIO TRATTINO SPAZIO). La pagina presenta due pulsanti SALVA (che provvede a serializzare l’albero JSON e a salvarlo all’interno del localStorage) ed ANNULLA: In entrambi i casi, viene ricaricata la pagina iniziale 
 4.  Aggiungere in coda ad ogni riga della tabella una nuova cella con un pulsante **Elimina** che consenta di eliminare il record visualizzato in quella riga. Al termine la procedura salva i dati in localStorage e richiama una procedura di aggiornamento della grafica. 
 5.  Un pulsante **Elimina x Categoria** richiede all’utente di inserire tramite ***prompt*** il nome di una categoria. In corrispondenza dell’OK vengono rimossi tutti i libri appartenenti alla categoria indicata, segnalando all’utente il numero di record rimossi. Al termine la procedura salva i dati in localStorage e richiama una procedura di aggiornamento della grafica


![enter image description here](https://i.ibb.co/nQ3kqZk/Capture.png)
