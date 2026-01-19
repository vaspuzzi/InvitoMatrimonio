# Richiesta di sviluppo – Sito web matrimonio

## Obiettivo

Sviluppare un **mini-sito web one-page** per inviti di matrimonio, **statico**, **mobile-first**, ospitabile gratuitamente (GitHub Pages), senza backend proprietario.

Il sito deve:

* Presentare le informazioni principali dell’evento
* Permettere agli invitati di confermare la presenza (RSVP)
* Essere semplice da aggiornare
* Funzionare bene su smartphone

## Vincoli principali

* **Budget: 0 €**
* **Tecnologie consentite:** HTML, CSS, JavaScript vanilla
* **Niente framework JS** (React, Vue, ecc.)
* **Hosting previsto:** GitHub Pages 
* **RSVP:** Google Forms (link o embed)
* **Lingua del sito:** Italiano
* **Colore predominante:** Verde Oliva Pastello

## Struttura del sito (one-page)

Il sito deve essere composto da sezioni verticali, raggiungibili tramite scroll o anchor link.

### 1. Hero / Invito principale

**Contenuti:**

* Nomi degli sposi
* Data del matrimonio
* Luogo (nome + città)
* Frase breve (placeholder testuale)

**Note:**

* Deve essere la sezione più impattante
* Layout semplice, leggibile, centrato

### 2. Quando e Dove

**Contenuti:**

* Data completa
* Orari principali (cerimonia / ricevimento)
* Nome location chiesa
* Indirizzo testuale chiesa
* Pulsante/link a Google Maps chiesa
* Nome location ristorante
* Indirizzo testuale ristorante
* Pulsante/link a Google Maps ristorante

### 3. Programma della giornata

**Contenuti:**

* Timeline semplice con orari indicativi

**Esempio:**

* Cerimonia
* Aperitivo
* Pranzo
* Festa

### 4. RSVP – Conferma presenza

**Funzione chiave del sito**

**Requisiti:**

* Integrare un Google Form (embed iframe)
* Evidenziare una data di scadenza per la risposta

**Campi previsti nel form (gestiti su Google Forms):**

* Nome e cognome
* Parteciperò / Non parteciperò
* Allergie / intolleranze
* Numero di persone
* Note libere

### 5. Informazioni utili

**Possibili contenuti:**

* Dress code
* Informazioni su parcheggio
* Indicazioni meteo / copertura

**Nota:** testi brevi, stile FAQ

### 6. Sezione facoltativa – Regali / Lista nozze

**Contenuti:**

* Testo discreto (placeholder)
* IBAN (placeholder)

### 7. Footer

**Contenuti:**

* Messaggio di chiusura
* Nomi degli sposi

## Requisiti tecnici

### Frontend

* HTML semantico
* CSS moderno (Flexbox / Grid)
* Nessuna dipendenza esterna obbligatoria
* Eventuale Google Font (facoltativa)

### Responsive

* Mobile-first
* Testo leggibile senza zoom
* Pulsanti facilmente cliccabili

### Performance

* Caricamento rapido
* Nessuna immagine pesante (placeholder ammessi)

## Accessibilità e usabilità

* Contrasto colori adeguato
* Font leggibili
* Linguaggio semplice
* Aiuti per persone poco tecnologiche (es: pulsante copia IBAN, indicazioni chiare per compilazione)

## SEO / Meta

* Title tag
* Meta description
* Favicon (placeholder)

## Struttura del progetto (indicativa)

```
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
|   └──config.js
└── assets/
    └── images/
```

## Contenuti dinamici

* Tutti i testi devono essere facilmente modificabili direttamente in HTML
* Nessun contenuto hardcoded in JS che non sia necessario
* File config per testi e informazioni non confermate\modificabili link 

## Hosting e deploy

* Progetto compatibile con GitHub Pages
* Nessuna variabile d’ambiente richiesta

## Cose da NON fare

* Nessun backend custom
* Nessun database
* Nessun login
* Nessun tracciamento analytics

## Output atteso

* Codice completo funzionante
* File pronti per il deploy
* Commenti minimi nel codice per facilitare modifiche future

## Note finali

Il progetto privilegia:

* Semplicità
* Affidabilità
* Facilità di modifica

L’estetica deve essere elegante ma sobria; evitare effetti vistosi o animazioni invasive.
Progettare a priori sapendo che dovranno essere effettuate modifiche secondo le indicazioni della sposa a livello estetico
