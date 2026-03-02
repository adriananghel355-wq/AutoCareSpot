# AutoCareSpot

Piattaforma di prenotazione online per i servizi di pulizia auto a domicilio.

## 🚗 Descrizione

AutoCareSpot è un sito web moderno dove i clienti possono facilmente prenotare servizi di pulizia auto professionale a domicilio. Il sito offre un'interfaccia intuitiva e responsiva con:

- ✨ **Design Professionale**: Logo elegante in stile corporate con font Montserrat
- 🅿️ **Sfondo Tematico**: Parcheggio reale come sfondo per creare atmosfera appropriata
- 📱 **Responsive Design**: Funziona perfettamente su desktop, tablet e smartphone
- 🎯 **Sezioni Principali**:
  - **Home**: Hero section accattivante
  - **Servizi**: Catalogo con prezzi dei servizi disponibili
  - **Prenotazione**: Form completo per prenotare il servizio
  - **Contatti**: Informazioni di contatto

## 📋 Servizi Disponibili

1. **Lavaggio Esterno** - €25
   - Pulizia completa dell'esterno con prodotti professionali

2. **Pulizia Interni** - €35
   - Aspirazione e igienizzazione completa degli interni

3. **Pacchetto Completo** - €55
   - Esterno + Interno + Trattamento protettivo

4. **Lucidatura** - €45
   - Lucidatura professionale e protezione della vernice

## 🛠️ File del Progetto

- `index.html` - Pagina principale con struttura HTML
- `styles.css` - Stili CSS con design responsive e animazioni
- `script.js` - Logica JavaScript per navigazione e prenotazioni
- `.github/workflows/pages.yml` - Workflow GitHub Actions per il deploy

## 🚀 Deploy Online

Il progetto è configurato per essere pubblicato automaticamente su GitHub Pages ogni volta che viene effettuato un *push* sul branch `main`. Il workflow `pages.yml` nella cartella `.github/workflows` gestisce la pubblicazione utilizzando le Actions ufficiali di GitHub.

Per pubblicare manualmente:

1. Assicurati di aver committato tutte le modifiche.
2. ```bash
git add .
git commit -m "Aggiorna sito"
git push origin main
```
3. Dopo qualche istante, la pagina sarà disponibile al seguente URL:
   `https://adriananghel355-wq.github.io/AutoCareSpot`

Oppure puoi usare il comando `gh`:

```bash
gh repo clone adriananghel355-wq/AutoCareSpot
cd AutoCareSpot
gh pages view --web
```

Questa configurazione pubblica direttamente il contenuto della root del repository. Puoi personalizzare il percorso e includere build statiche se necessario.

## 🎨 Caratteristiche di Design

- **Colori**: Blu scuro (#1e3a8a) per header, giallo oro (#f59e0b) per accenti
- **Font**: Montserrat per il logo (elegante e corporate), Poppins per il testo
- **Sfondo**: Immagine reale di parcheggio con overlay scuro per miglior leggibilità
- **Animazioni**: Hover effects, transizioni smooth, effetto parallasse
- **Layout**: Grid responsive per adattarsi a tutti gli schermi

## 📦 Dipendenze

Il progetto utilizza solo HTML5, CSS3 e JavaScript vanilla, con font da Google Fonts:
- Google Fonts: Poppins, Montserrat

## 💡 Note Aggiuntive

- Per un'implementazione completa con backend, aggiungere Node.js/Express
- Per salvare persistentemente i dati, implementare un database (MongoDB, SQLite, ecc.)
- Per notifiche email, integrare un servizio come Nodemailer
- Considerare l'aggiunta di Google Maps per la localizzazione

## 📄 Licenza

Progetto AutoCareSpot © 2025