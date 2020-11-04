# Verifica Swatch
Si vuole creare una applicazione web per la vendita on line di orologi basata sul file **orologi.js** allegato. 

### Esercizio 1 
In corrispondenza del click sul pulsante “SALVA” l’applicazione provvede a salvare in local storage il contenuto della variabile **swatches** in modo da renderla fruibile dall’esercizio successivo 

### Esercizio 2 
La pagina principale, all’avvio, legge l’elenco degli orologi dal local storage e li visualizza all’interno di una **Tabella HTML** avente larghezza 1020 pixel, bordo 2px e centrata orizzontalmente nella pagina (tutto da impostare mediante java script). 

La tabella deve contenere le seguenti 5 colonne : Gender, Code, Price, Color, Image.

![enter image description here](https://i.ibb.co/sqWScdW/Capture.png)


A fondo pagina è presente un pulsante **INSERISCI** che apre una seconda pagina HTML per l’inserimento di un nuovo orologio. **Questa pagina è da completare soprattutto per quanto concerne i radio buttons** La pagina all’avvio legge i dati da local storage. 
Il campo **color** viene inserito mediante una ListBox precaricata contenente i seguenti valori: 		    Red, Blue, Black, Burgundy (inseribili come valori statici direttamente nell’HTML oppure   (facoltativo) andando a leggerli nel file orologi.js) 
Il campo **image** viene costruito automaticamente sulla base del campo color, come per gli orologi già esistenti.

Il pulsante **SALVA** provvede a: 
 - aggiungere nella tabella **swatches** il nuovo orologio appena inserito (aggiungendolo all’interno del relativo genere), senza controllare se il codice sia già esistente o meno 
 - salvare la tabella **swatches** all’interno del local storage 
 - ritornare alla pagina principale che provvederà a visualizzare l’elenco aggiornato Il pulsante **ANNULLA** ricarica semplicemente la pagina iniziale.


### Facoltativo (1,5 punti) 
In fase di inserimento controllare se il codice è già esistente, nel qual caso non viene creato un nuovo record con quel codice, ma l’orologio viene inserito nel vettore già esistente degli **swatches** relativi al codice inserito (senza aggiornare il campo prezzo che mantiene il valore memorizzato su file). 
Si suppone che l’orologio inserito abbia un colore non ancora presente nel database per quel tipo di orologio
