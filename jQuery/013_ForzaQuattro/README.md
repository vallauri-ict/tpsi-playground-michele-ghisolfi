# Forza 4 

Realizzare il gioco del Forza 4 in cui :
- all’avvio l’applicazione crea 7 x 6 = 42 pedine grigie di larghezza 60px ciascuno e li appende al
wrapper. Crea inoltre altre 7 pedine inserendole nella parte di intestazione
- gestisce una unica variabile globale denominata turno che può assumere i valori “giallo” oppure
“rosso”.
- In corrispondenza del mouseOver sulle pedine di intestazione le ricolora del colore del prossimo
turno. In corrispondenza del mouseOut le pedine riassumono il colore grigio
- In corrispondenza del click su una pedina di intestazione viene aggiunta una nuova pedina al
wrapper e avviata una animazione che, **con un tempo costante di 200ms per ogni riga**, fa scendere
la pedina nella prima cella libera della colonna selezionata
- Durante la discesa della pedina disabilitare **TUTTI GLI EVENTI** su tutte le pedine
dell’intestazione
- Al termine della discesa occorre controllare la vincita ed eventualmente riabilitare gli eventi
precedenti