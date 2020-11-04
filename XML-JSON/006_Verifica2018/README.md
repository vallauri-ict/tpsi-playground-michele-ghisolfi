# Verifica 2018
Dato il file json.js allegato, contenente 40 record generati casualmente dal sito randomuser.me, **senza modificare il file html** scrivere una applicazione HTML / JAVA SCRIPT che: 

 - All’avvio carichi all’interno di un ListBox l’elenco completo delle nazionalità (campo NAT) contenute nel file json, **ognuna ripetuta una sola volta**. La prima voce contenuta nel ListBox è la voce TUTTI. 
 - Sempre all’avvio carichi dinamicamente all’interno di un apposita tabella con scroll verticale tutti i record contenuti all’interno dell’anagrafica. Per ogni record occorre visualizzare le seguenti informazioni: 
	 -  name (first name, spazio, second name) 
	 -  username
	 -  state 
	 -  nat (nazionalità) 
	 -  L’immagine **thumbnail** della persona con dimensione 50x50 che, quando cliccata, provveda a visualizzare i dettagli nella parte inferiore

![enter image description here](https://i.ibb.co/p0fFV1j/Capture.png)

 -  In corrispondenza del **click su una delle voci del ListBox** sulla base di **_lstNazioni.value** vengono visualizzate soltanto le persone appartenenti alla nazionalità selezionata. Cliccando sulla voce TUTTI viene di nuovo visualizzato l’elenco completo. In ogni caso ripulire il box inferiore relativo ai dettagli. 
 -  I dettagli da visualizzare sono: 
	 - immagine **large**,
	 - name (first name, spazio, second name)
	 - mail
	 - phone 
	 - cell 
	 - un pulsante **ELIMINA** che consente la cancellazione del record corrente con relativo refresh della tabella e visualizzazione dei record appartenenti alla nazionalità attualmente selezionata. Viene ripulito anche il box inferiore relativo ai dettagli 


### Facoltativo (1 punto)
Se la nazione corrente contiene un solo record (ad esempio US), quando si cancella il record rimuovere anche la voce della nazionalità dal ListBox superiore.
