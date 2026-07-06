# ARIA — Guida rapida al sito

Sito realizzato con **Astro**. È un sito statico: veloce, sicuro e **hostabile gratis**.

---

## 🚀 Comandi principali

Apri un terminale nella cartella del progetto e usa:

```bash
npm install      # solo la prima volta: installa il necessario
npm run dev      # avvia l'anteprima locale su http://localhost:4321
npm run build    # crea la versione finale nella cartella "dist/"
npm run preview  # controlla la versione finale prima di pubblicarla
```

---

## ✏️ Cosa personalizzare (facile, senza toccare il codice)

Quasi tutti i testi e i dati sono in **un solo file**:

### `src/data/site.js`
Qui trovi e puoi modificare:
- **Contatti**: numero WhatsApp, email, link social
- **Link del calendario di prenotazione** (vedi sotto)
- **I tre consulti** (nomi e descrizioni)
- **Le tariffe** e le offerte
- **Le recensioni** (iniziali + testo)
- **Le FAQ**
- I testi dei **video del giorno**

> 💡 Il numero WhatsApp va scritto in formato internazionale senza `+` e senza spazi.
> Esempio: per `+39 333 1234567` scrivi `393331234567`.

---

## 📅 Attivare le prenotazioni (calendario gratuito)

Il sito usa **Cal.com** (gratuito) per le prenotazioni online.

1. Crea un account gratuito su **https://cal.com**
2. Crea un tipo di evento (es. "Consulto 30 minuti")
3. Copia il tuo link, es. `nometuo/consulto`
4. Aprilo in `src/data/site.js` e incollalo qui:
   ```js
   export const prenotazione = {
     calcomLink: "nometuo/consulto",   // <-- il tuo link Cal.com
     calendlyUrl: "",
   };
   ```

**Preferisci Calendly?** Lascia vuoto `calcomLink` e metti l'URL completo in `calendlyUrl`.

---

## 🖼️ Inserire la foto dell'avatar (immagine di Aria)

Nella home c'è un elegante segnaposto al posto della foto. Per inserire la tua immagine:

1. Metti il file immagine nella cartella `public/`, ad esempio `public/aria.jpg`
2. Apri `src/pages/index.astro`, cerca `data-avatar` e aggiungi lo stile:
   ```html
   <div class="cornice-avatar__interno" data-avatar
        style="--avatar: url('/aria.jpg'); background-image: var(--avatar);">
   ```
   Il segnaposto sparirà automaticamente e comparirà la foto.

> L'immagine ideale è verticale (verticale 4:5), con la luce calda descritta nel progetto.

---

## 📝 Aggiungere un articolo al blog

1. Crea un nuovo file nella cartella `src/content/blog/`, es. `mio-articolo.md`
2. Copia l'intestazione da un articolo esistente e modifica titolo, descrizione e data:
   ```markdown
   ---
   titolo: "Il titolo del mio articolo"
   descrizione: "Una frase che riassume l'articolo (importante per Google)."
   data: 2026-07-06
   categoria: "Ascolto"
   ---

   Qui scrivi il testo dell'articolo...
   ```
3. Salva: comparirà automaticamente nella pagina Blog.

---

## 🌐 Pubblicare il sito GRATIS

Consigliato: **Netlify** o **Cloudflare Pages** (entrambi gratuiti).

### Opzione semplice (trascina e rilascia)
1. Esegui `npm run build` — viene creata la cartella `dist/`
2. Vai su https://app.netlify.com/drop
3. Trascina la cartella `dist/` nella pagina → il sito è online in pochi secondi

### Opzione consigliata (aggiornamenti automatici)
1. Carica il progetto su **GitHub**
2. Su Netlify/Cloudflare Pages collega il repository
3. Imposta:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Da quel momento ogni modifica caricata su GitHub aggiorna il sito da solo.

> Dopo aver scelto il dominio, aggiorna il campo `site:` in `astro.config.mjs`
> con l'indirizzo definitivo (serve per la SEO).

---

## 🔮 Fase 2 (funzionalità premium, quando vorrai)

Queste richiedono un backend e si aggiungono in un secondo momento:
- Pagamento immediato online (Stripe / PayPal)
- Area personale con login e storico consulti
- Codici sconto e gift card gestiti dal sito
- Programma fedeltà automatico
- Newsletter collegata (Brevo / Mailchimp)

Il sito attuale è già predisposto per crescere in questa direzione.
