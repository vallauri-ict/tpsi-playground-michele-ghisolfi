
# Indovina Grigio

Data la pagina HTML allegata, costituita da un wrapper, due text box e un button,

Scrivere le procedure jQuery necessarie per eseguire le seguenti operazioni :  
**All’avvio:**
- Applichi al wrapper uno sfondo giallo chiaro #FF9 e lo renda fluttuante a sinistra (fatto con jQuery)
- Generi dinamicamente **9** quadratini di tipo div assegnando a ciascuno una classe **box** caratterizzata dalle  
  seguenti proprietà (da definire tramite foglio CSS): altezza e larghezza 50px, bordo 1 px nero, margine  
  7px, colore del testo rosso, contenuto uguale all’indice (a partire da 1), fluttuante a sinistra.
- Per ogni **box** generi un colore di sfondo grigio con valore di intensità generato casualmente fra 0 e 255.
-
**In corrispondenza del mouseover su uno qualsiasi dei box:**

- Mostri all’interno del tool tip finale il valore del colore di sfondo del relativo box (mostri cioè il  
  contenuto della funzione rgb). Il testo deve comparire con una dissolvenza in entrata di **1 sec.**
- In corrispondenza del mouseout il testo deve scomparire con una dissolvenza in uscita di **1 sec**


**In corrispondenza del click sul button:**
- L’utente deve aver impostato nei relativi text box il numero d’ordine del Box del quale intende indovinare  
  e il valore della tonalità di grigio (es 150).
- In corrispondenza del click l’applicazione deve confrontare il valore inserito dall’utente con il tono di  
  grigio del corrispondenza box. NOTE:  
  a) per estrarre caratteri da una stringa si può usare il metodo .**substr(iniPos, qta).**  
  b) la funzione **parseInt** funziona anche quando la stringa da convertire contiene non solo caratteri  
  numerici. In tal caso si ferma al primo carattere non numerico che incontra).
-  Se il numero inserito dall’utente è più piccolo rispetto al tono di grigio applicare al text box sfondo rosso  
   e testo bianco e visualizzare a fianco il messaggio “Troppo Piccolo”
- Se il numero inserito dall’utente è più grande rispetto al tono di grigio applicare al text box sfondo blu e  
  testo bianco e visualizzare a fianco il messaggio “Troppo Grande”
- Se il risultato è corretto applicare sfondo bianco e testo nero, visualizzare “BRAVO” ed applicare al box  
  uno sfondo giallo chiaro (lo stesso del wrapper) ed elimini i bordi.

Per generare un numero tra A e B : **Math.floor((B-A+1)*Mah.random())+A;**