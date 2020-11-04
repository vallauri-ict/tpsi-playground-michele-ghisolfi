# Verifica 2019
Si vuole gestire una anagrafica dei cocktails di tutto il mondo basata sui seguenti files JSON : 

<ins>**cocktails.js**</ins> contenente un elenco completo di cocktails caratterizzati dai seguenti campi principali:
 - **idDrink** = codice identificativo 
 - **strDrink** = nome del drink 
 - **strAlcoholic** = alcolico / non alcolico 
 - **strIngredient1** = ingrediente principale 
 - **strDrinkThumb** = immagine del cocktail 
 
 **ingredients.js** contenente un elenco degli ingredienti utilizzati come ingrediente principale nei cocktail

<ins>All’avvio</ins> l’applicazione deve eseguire le seguenti operazioni:  

 - Aggiungere alla tabella centrale le relative intestazioni. Le sei colonne hanno rispettivamente una larghezza di 40, 40, 60, 70, 70, 40 pixel. 
 - Caricare la lista degli ingredienti inserendo all’inizio una riga vuota che assume il significato di “Tutti i cocktail”. Gli ingredienti devono essere inseriti nel listbox in ordine alfabetico 
 - Caricare nella tabella centrale l’elenco completo dei cocktails, visualizzando i campi indicati. L’immagine viene riscalata su una larghezza di 40px. “Dettagli” è un collegamento ipertestuale fittizio che, in corrispondenza del click, visualizza nella finestra di destra i dettagli del cocktail.  
 - La finestra dei dettagli è inizialmente vuota
 
 
![](https://i.ibb.co/7GpGLkz/Capture.png)

In corrispondenza del **click su un radio button** la tabella centrale viene aggiornata visualizzando soltanto i record selezionati 

In corrispondenza della **scelta di un ingrediente dalla lista**, la tabella centrale viene aggiornata visualizzando soltanto i record che hanno **come ingradiente1** quello selezionato (mantenendo le impostazioni dei radio button: cioè se ho selezionato **“Non Alcolici”** e come ingrediente seleziono **“Grenadine”** verranno visualizzati i cocktail non alcolici che utilizzano come ingrediente1 la Grenadine. 

In corrispondenza del **click sul pulsante Dettagli** vengono visualizzati nel contenitore di destra i dettagli del cocktail selezionato, cioè il nome (mediante un tag h3), l’elenco dei primi 5 ingredienti (se non sono null) separati da un trattino, l’immagine riscalata su una larghezza di 140 px.
